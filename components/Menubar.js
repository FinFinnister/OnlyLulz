import React from "react";

const Menubar = () => (
  <div className="Menubar">
    <div className="login-register">
      <div className="Live">Live!</div>
      <div>
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
    <div className="divider"></div> {/* Orange divider between login/register and the buttons */}
    
    {/* This is the section that should only appear just below the login/register bar */}
    <div className="top-buttons">
      <button>Hot</button>
      <button>New</button>
      <button>Top</button>
    </div>
  </div>
);

export default Menubar;
