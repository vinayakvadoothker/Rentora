import React from 'react';
import { SignIn } from "@clerk/clerk-react";

const SignInForm = () => {
  return (
    <div>
      <SignIn>
        <div>
          <h2>Sign In</h2>
          <p>Enter your credentials to sign in.</p>
        </div>
      </SignIn>
    </div>
  );
};

export default SignInForm;
