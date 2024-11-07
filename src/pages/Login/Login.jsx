import React from "react";
import "./Login.scss";

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-wrap">
                <div className="login-logo">
                    <img src="/images/distribution.png" alt="" />
                </div>
                <div className="login-box">
                    <div>
                        <img className="login-icon" src="/images/user.png"></img>
                        <input type="email" placeholder="Username" />
                    </div>
                    <div>
                        <img className="login-icon" src="/images/password.png"></img>
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
                <button className="login-btn">Login</button>
                <p>Forgot your password?</p>
                <button className="login-sign-up">SIGN UP</button>
            </div>
        </div>
    );
};

export default Login;
