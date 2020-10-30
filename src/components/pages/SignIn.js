import React from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="login-box">
      <h1>Sign in</h1>
      <div className="textbox">
        <i className="fas fa-user" />
        <input type="email" placeholder="Email" />
      </div>

      <div class="textbox">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>

      <input type="button" class="btn" value="Sign in" />
      <div>
      <input type="button" class="btn" value="Forget Password?" />
      </div>
    </div>
  );
}

export default SignIn;
