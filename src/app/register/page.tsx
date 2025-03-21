"use client";

import React from "react"; 

// We only do Google sign-up here. The user will be redirected to Google OAuth.
export default function RegisterPage() {
  const handleGoogleSignup = () => {
    // We build the Google OAuth URL manually:
    const googleUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile&access_type=offline&prompt=consent`;
    window.location.href = googleUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Register with Google</h1>
      <button
        onClick={handleGoogleSignup}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        Sign Up with Google
      </button>
    </div>
  );
}
