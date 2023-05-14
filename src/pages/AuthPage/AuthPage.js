import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";

import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [userStatus, setUserStatus] = useState(true);
  return (
    <main>
      <div className="auth-page">
        {userStatus ? (
          <>
            <div className="left">
              <div className="logo">
                <button onClick={() => setUserStatus(!userStatus)}>
                  SEI Cafe
                </button>
              </div>
              <h3>Sign Up</h3>
            </div>
            <LoginForm setUser={setUser} />
          </>
        ) : (
          <>
            <div className="left">
              <div className="logo">
                <button onClick={() => setUserStatus(!userStatus)}>
                  SEI Cafe
                </button>
              </div>
              <h3>Already a User?</h3>
            </div>
            <SignUpForm setUser={setUser} />
          </>
        )}
      </div>
    </main>
  );
}
