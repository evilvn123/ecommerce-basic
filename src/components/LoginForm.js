import React from "react";
import "../styles/LoginForm.css"

const LoginForm = () => {

  //Tạo 2 state về username và password
  // 2 hàm onChangeUserName và onChangePassword 
  // (dùng setState của 2 state trên với giá trị là event.target.value)
  // dùng onClick tại 2 ô input

  return (
    <div className="formContainer">
      <h2 className="title">Login to page</h2>
      <form className="form">
        <input name="username" type={"text"} placeholder="Email or Username" />
        <input name="password" type={"password"} placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
