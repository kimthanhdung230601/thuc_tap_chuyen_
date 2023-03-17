import {
  faBell,
  faCircleCheck,
  faPaperPlane,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Col, Row } from "react-bootstrap";
import Heading from "../../../component/Admin/Heading";
import Nav from "../../../component/Admin/Nav";
import Title from "../../../component/Admin/Title";
import styles from "./Noti.module.scss";

const cx = classNames.bind(styles);

function Noti() {
  return (
    <>
      <div className={cx("wrapper")}>
        <Row>
          <Col sm={2} className={cx("col-custom-3")}>
            <Nav />
          </Col>
          <Col sm={10}>
            <Title title={"Thông báo"} icon={faBell} />
            <div className={cx("container-wrapper")}>
              <Heading title={"Thông báo"} />
              <div className={cx("noti-wrap")}>
                <div className={cx("noti-heading")}>
                  Gửi thông báo đến thành viên
                </div>
                <div className={cx("noti-item")}>
                  <div className={cx("noti-name")}>
                    Chọn thành viên nhận thông báo
                  </div>
                  <input type="text" className={cx("noti-input")} />
                </div>
                <div className={cx("noti-item")}>
                  <div className={cx("noti-name")}>Tiêu đề</div>
                  <input type="text" className={cx("noti-input")} />
                </div>
                <div className={cx("noti-item")}>
                  <div className={cx("noti-name")}>Nội dung</div>
                  <textarea type="text" className={cx("noti-input")} />
                </div>
                <div className={cx("noti-note")}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className={cx("noti-icon")}
                  />
                  <span>
                    Gửi đến Email cho khách hàng được chọn. (quá trình này có
                    thể mất một vài phút tuỳ vào số lượng user)
                  </span>
                </div>
              </div>
              <div className={cx("noti-btn")}>
                <button className={cx("btn-wrap", "btn-send")}>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className={cx("btn-icon")}
                  />
                  <span className={cx("btn-name")}>Gửi</span>
                </button>
                <button className={cx("btn-wrap", "btn-cls")}>
                  <span className={cx("btn-name")}>Đóng</span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Noti;
