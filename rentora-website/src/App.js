import React from 'react';
import { ClerkProvider, SignedIn, SignedOut, useClerk } from '@clerk/clerk-react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard'; // Import Dashboard component
import OnboardingPage from './components/OnboardingPage'; // Import OnboardingPage component
import BuyPage from './components/BuyPage'; // Import BuyPage component
import RentPage from './components/RentPage'; // Import RentPage component
import VenturePage from './components/VenturePage'; // Import VenturePage component
import './App.css';

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const Header = () => {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/buy">Buy</Link>
        </li>
        <li>
          <Link to="/rent">Rent</Link>
        </li>
        <li>
          <Link to="/venture">Venture</Link>
        </li>
        <li>
        <button className='sign-out-button' onClick={handleSignOut}>
          <Link to="/onboarding">Sign Out</Link>
        </button>
        </li>
      </ul>
    </nav>
  );
};

const Home = () => {
  const { session } = useClerk();

  // Redirect to the dashboard if the user is signed in
  if (session && session.user) {
    return <Navigate to="/dashboard" />;
  }

  return <OnboardingPage />;
};

const App = () => {
  return (
    <div className="app-container">
      <ClerkProvider publishableKey={clerkPubKey}>
          <SignedIn>
            <Header />
          </SignedIn>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/rent" element={<RentPage />} />
            <Route path="/venture" element={<VenturePage />} />
            <Route
              path="*"
              element={<SignedOut><Navigate to="/onboarding" replace /></SignedOut>}
            />
            {/* The catch-all route for signed-in users */}
            <Route
              path="*"
              element={<SignedIn><Navigate to="/dashboard" replace /></SignedIn>}
            />
          </Routes>
      </ClerkProvider>
    </div>
  );
};

export default App;
