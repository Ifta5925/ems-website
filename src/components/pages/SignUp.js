import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signup-box">
      <h1>Sign Up</h1>
      <form>
        <div className="textbox">
          <i className="fas fa-user" />
          <input type="text" placeholder="First name" />
        </div>
        <div className="textbox">
          <i className="fas fa-user" />
          <input type="email" placeholder="Email" />
        </div>

        <div class="textbox">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <div class="textbox">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Confirm Password" />
        </div>

        <input type="button" class="btn" value="Sign Up" />
      </form>
    </div>
  );
}

export default SignUp;
