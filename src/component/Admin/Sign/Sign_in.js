import { useState, useEffect, useRef } from "react";
// import Captcha from "../captcha/Captcha";
import Button from "../Button/btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Sign_in.module.scss";
import { type } from "@testing-library/user-event/dist/type";
const cx = classNames.bind(styles);

function Sign_in() {
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
    for (let i = 0; i < 6; i++) {
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
  const handleSubmit = (e) => {
    //kiểm tra captcha
    e.preventDefault();
    if (captchaValue === currentCaptcha) {
      // alert("Captcha chính xác!");
      captcha = true;
    } else {
      // alert("Nhập sai captcha!");
      captcha = false;
      // drawCaptcha();
    }
    // fetch API
    fetch("http://localhost:8080/user/" + user.email)
      .then((response) => response.json())
      .then((data) => {
        if (data.password === user.password && captcha == true) {
          localStorage.setItem("isLogIn", true);
          console.log(data);
          // navigate("/");

          alert("đăng nhập thành công");
        } else {
          if (user.email === null || user.password === null)
            alert("vui lòng nhập đầy đủ thông tin");
          if (data.password !== user.password) {
            alert("bạn đã sai mật khẩu");
            drawCaptcha();
          }
          if (captcha == false) {
            alert("bạn đã sai captcha");
            drawCaptcha();
          }
        }
      })
      .catch((err) => {
        alert("tài khoản này chưa tồn tại");
        console.log(err);
      });
  };
  return (
    <div className={cx("sign-in-block")}>
      <div className={cx("input-block")}>
        <div className={cx("user-name")}>
          <p className={cx("label-user")}>Tên tài khoản</p> <br />
          <input
            className={cx("input")}
            type="text"
            id="email"
            name="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="tài khoản"
          />
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
        </div>
        <div className={cx("check-box ")}>
          <input className={cx("input-check-box")} type="checkbox" />
          <label className={cx("label-check-book")}>ghi nhớ mật khẩu</label>
        </div>
      </div>
      <div className={cx("btn")}>
        {/* <Captcha /> */}
        {/* capcha */}
        <div>
          <canvas ref={canvasRef} id="captcha" width={200} height={50} />
          <br />
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
            </Button>
          </div>
        </div>
        <div className={cx("btn-block-log-in")}>
          <Button className={cx("tool-btn ")} onClick={handleSubmit}>
            <p className={cx("btn-text")}>ĐĂNG NHẬP</p>
          </Button>
        </div>
      </div>
      <div className={cx("forgot-pass")}>
        <p className={cx("text-forgot-pass")}>Quên mật khẩu?</p>
      </div>
    </div>
  );
}

export default Sign_in;
