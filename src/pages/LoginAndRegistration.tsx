import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { loginUser, signupUser } from "../controller/user.controller";
import "../styles/loginPage.css"
export default function LoginAndRegistration() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState<boolean>(true);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const username = usernameRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const email = emailRef.current?.value || "";

    try {
      const result = isLogin
        ? await loginUser(username, password)
        : await signupUser(username, password, email);
      if (result.role === "user" ) {
 
        navigate("/home");
      } else {
        alert("Registration successful! Please login.");
        setIsLogin(true);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="login-Registration-page">
        <div>
        <button type="button" onClick={() => setIsLogin(true)}>Sign in</button>
        <button type="button" onClick={() => setIsLogin(false)}>Sign up</button>
      
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {!isLogin && (
            <input
              ref={emailRef}
              className="login-signup-input"
              type="email"
              placeholder="please  Enter your email"
              required
            />
          )}
          <input
            ref={usernameRef}
            className="login-signup-input"
            type="text"
            placeholder="please Enter your name"
            required
          />
          <input
            ref={passwordRef}
            className="login-signup-input"
            type="password"
            placeholder="please enter your password"
            required
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}
