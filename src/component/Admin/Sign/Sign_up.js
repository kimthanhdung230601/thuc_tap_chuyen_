import { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import Captcha from "../captcha/Captcha";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../Button/btn";

import classNames from "classnames/bind";
import styles from "./Sign_up.module.scss";
import { type } from "@testing-library/user-event/dist/type";
const cx = classNames.bind(styles);

function Sign_up() {
  //tạo captcha
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  let captcha;
  const [currentCaptcha, setCurrentCaptcha] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");

  function generateCaptcha() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 5; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }
  useEffect(() => {
    drawCaptcha();
  }, []);
  const drawCaptcha = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const captcha = generateCaptcha();

    // Draw background
    ctx.fillStyle = "#f2f2f2";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw characters
    ctx.font = "bold 24px sans-serif";
    ctx.fillStyle = "#333";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    let x = canvas.width / 15;
    let y = canvas.height / 2;
    for (let i = 0; i < captcha.length; i++) {
      x += canvas.width / 8;
      ctx.fillText(captcha.charAt(i), x, y);
    }

    // Draw noise
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 2;
      ctx.fillRect(x, y, size, size);
    }

    setCurrentCaptcha(captcha);
  };
  const [user, setUser] = useState({});
  const [checkPass, setCheckPass] = useState({});
  let stringAdd = "http://localhost:8080/user/addUser/" + user.email;
  //validate
  const [error, setError] = useState(null); //validate for password
  const [errorCaptcha, setErrorCaptcha] = useState(null);
  const [errorCheckPass, setErrorCheckPass] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);

  let check = 1;

  // console.log(formData);
  const handleSubmit = (e) => {
    //kiểm tra captcha
    // console.log(user.email);
    // console.log(checkPass.password);
    e.preventDefault();
    if (captchaValue === currentCaptcha) {
      captcha = true;
    } else {
      captcha = false;
    }
    //validate email, username
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkEmail = emailRegex.test(user.email);

    if (!checkEmail) {
      setErrorEmail("bạn đã nhập sai định dạng email");
      check = 0;
    } else {
      setErrorEmail(null);
    }

    //check pass
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    const isValid = regex.test(user.password);
    if (!isValid) {
      setError(
        "Mật khẩu phải có độ dài 8 ký tự trở lên, ít nhất một ký tự hoa, ký tự thường, số và ký tự đặc biệt"
      );
      check = 0;
      drawCaptcha();
    } else {
      // setError(null);
    }
    if (user.password !== checkPass.password) {
      setErrorCheckPass("mật khẩu nhập lại không trùng khớp");
      check = 0;
      drawCaptcha();
    } else {
      setErrorCheckPass(null);
    }
    //validate captcha
    if (captcha == false) {
      setErrorCaptcha("nhập sai captcha");
      drawCaptcha();
    } else {
      setErrorCaptcha(null);
    }
    //-------------------fetch API----------------

    if (check == 1 && captcha == true) {
      var formData = new FormData();
      formData.append("username", JSON.stringify(user.username));
      formData.append("password", JSON.stringify(user.password));
      formData.append("fullname", JSON.stringify(user.fullname));
      formData.append("email", JSON.stringify(user.password));
      var myHeaders = new Headers();
      myHeaders.append("Host", "chippisoft.com");
      myHeaders.append("Content-Length", formData.values.length);
      myHeaders.append("Accept", "*/*");
      myHeaders.append("Connection", "keep-alive");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow",
      };

      fetch("https://chippisoft.com/API/API.php", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  };
  return (
    <div className={cx("sign-in-block")}>
      <div className={cx("input-block")}>
        <div className={cx("user-name")}>
          <p className={cx("label-user")}>Full name</p> <br />
          <input
            className={cx("input")}
            id="fullname"
            name="fullname"
            onChange={(e) => setUser({ ...user, fullname: e.target.value })}
            placeholder="Full name"
          />
        </div>
        <div className={cx("user-name")}>
          <p className={cx("label-user")}>Email</p> <br />{" "}
          <input
            className={cx("input")}
            id="email"
            name="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Gmail"
          />
          {errorEmail && <p style={{ color: "red" }}>{errorEmail}</p>}
        </div>
        <div className={cx("user-name")}>
          <p className={cx("label-user")}>User name</p> <br />
          <input
            className={cx("input")}
            id="username"
            name="username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="User name"
          />
          {/* {validate[1] && <p style={{color:"red"}} >{validate[0]}</p>} */}
        </div>
        <div className={cx("user-password")}>
          <p className={cx("label-user")}>Mật khẩu</p> <br />
          <input
            className={cx("input")}
            type="password"
            placeholder="mật khẩu"
            id="password"
            name="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div className={cx("user-password")}>
          <p className={cx("label-user")}>Nhập lại mật khẩu</p> <br />
          <input
            className={cx("input")}
            type="password"
            placeholder="mật khẩu"
            id="check_password"
            name="check_password"
            onChange={(e) =>
              setCheckPass({ ...checkPass, password: e.target.value })
            }
          />
          {errorCheckPass && <p style={{ color: "red" }}>{errorCheckPass}</p>}
        </div>
        <div className={cx("check-box ")}>
          <input className={cx("input-check-box")} type="checkbox" />
          <label className={cx("label-check-book")}>Ghi nhớ mật khẩu</label>
        </div>
      </div>

      <div className={cx("btn")}>
        {/* <Captcha /> */}
        {/* capcha */}
        <div>
          <canvas ref={canvasRef} id="captcha" width={200} height={50} />
          {errorCaptcha && <p style={{ color: "red" }}>{errorCaptcha}</p>}
          <div className={cx("captcha-input")}>
            <input
              className={cx("input")}
              type="text"
              id="captcha-input"
              value={captchaValue}
              onChange={(e) => setCaptchaValue(e.target.value)}
            />
            <Button
              className={cx("header-btn-global refresh-btn")}
              // type="submit"
              // id="refresh-btn"
              onClick={drawCaptcha}
            >
              <FontAwesomeIcon
                className={cx("icon-reload")}
                icon={faArrowsRotate}
              />
            </Button>{" "}
            <br></br>
          </div>
        </div>
        <div className={cx("btn-block-log-in")}>
          <Button className={cx("tool-btn ")} onClick={handleSubmit}>
            <p className={cx("btn-text")}>ĐĂNG KÝ</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sign_up;
