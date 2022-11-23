import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/baloshop-w.png";
import { AuthService } from "../../services/auth.service";
import "../Login/Login.scss";
import swal from "sweetalert";

const Login = () => {
  const loginRef = useRef(null);
  const registerRef = useRef(null);
  const btnRef = useRef(null);

  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const loginOnclick = async () => {
    await AuthService.login(usernameLogin, passwordLogin).then((response) => {
      if (localStorage.getItem("accessToken")) {
        navigate("/");
      }
    });
  };
  const registerOnClick = () => {
    AuthService.register(phone, passwordRegister, confirmPassword, email).then(
      (res) => {
        if (res.status === "OK") {
          swal("Thông báo", res.message, "suceess");
          navigate("/login");
        } else {
          swal("Thông báo", res.message, "error");
        }
      }
    );
  };

  const register = () => {
    loginRef.current.style.left = "-400px";
    registerRef.current.style.left = "50px";
    btnRef.current.style.left = "110px";
  };
  const login = () => {
    loginRef.current.style.left = "50px";
    registerRef.current.style.left = "450px";
    btnRef.current.style.left = "0";
  };
  return (
    <div>
      <div className="hero">
        <div className="form-box">
          <div className="social-icons">
            <img src={logo} alt="" />
          </div>
          <div className="button-box">
            <div id="btn" ref={btnRef}></div>
            <button type="button" className="toogle-btn" onClick={login}>
              Đăng Nhập
            </button>
            <button type="button" className="toogle-btn" onClick={register}>
              Đăng Ký
            </button>
          </div>
          <div id="login" ref={loginRef} className="input-group-login">
            <input
              type="text"
              className="input-field"
              placeholder="Nhập số điện thoại "
              required
              onChange={(event) => {
                setUsernameLogin(event.target.value);
              }}
            />
            <input
              type="password"
              className="input-field"
              placeholder="Nhập mật khẩu"
              required
              onChange={(event) => {
                setPasswordLogin(event.target.value);
              }}
            />
            <div className="d-flex align-items-center">
              <input id="remember" type="checkbox" className="check-box" />
              <label style={{ marginBottom: 0 }} htmlFor="remember">
                Ghi nhớ mật khẩu
              </label>
            </div>
            <div className="submit-btn" onClick={loginOnclick}>
              Đăng nhập
            </div>
          </div>
          <form id="register" ref={registerRef} className="input-group-login">
            <input
              type="text"
              className="input-field"
              placeholder="Nhập số điện thoại"
              required
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
            <input
              type="email"
              className="input-field"
              placeholder="Email"
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              type="password"
              className="input-field"
              placeholder="Nhập mật khẩu"
              required
              onChange={(event) => {
                setPasswordRegister(event.target.value);
              }}
            />
            <input
              type="password"
              className="input-field"
              placeholder="Nhập lại mật khẩu"
              required
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />

            <div className="d-flex align-items-center">
              <input
                id="remember"
                type="checkbox"
                className="check-box"
                required
              />
              <label style={{ marginBottom: 0 }} htmlFor="remember">
                Tôi đồng ý với các chính sách và điều khoản
              </label>
            </div>
            <div className="submit-btn" onClick={registerOnClick}>
              Đăng ký
            </div>
          </form>
        </div>
      </div>
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Login;
