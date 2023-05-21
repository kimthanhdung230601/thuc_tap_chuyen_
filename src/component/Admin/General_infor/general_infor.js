import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faPercent, faCoins } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "../General_infor/General.module.scss";
const cx = classNames.bind(styles);

function General() {
  return (
    <Row className={cx("general")}>
      <Col xs={12} sm={6} md={6} lg={3} className={cx("block-total")}>
        <div className={cx("block-wrap")}>
          <div className={cx("text")}>
            <p className={cx("title")}>Tổng thu nhập</p>
            <p className={cx("quantity")}>$2,435</p>
          </div>
          <div className={cx("block-icon")}>
            {" "}
            <FontAwesomeIcon
              className={cx("icon")}
              style={{ color: "#7366FF" }}
              icon={faBox}
            />
          </div>
        </div>
      </Col>
      <Col xs={12} sm={6} md={6} lg={3} className={cx("block-total")}>
        <div className={cx("block-wrap")}>
          <div className={cx("text")}>
            <p className={cx("title")}>Tổng thành viên </p>
            <p className={cx("quantity")}>10</p>
          </div>
          <div className={cx("block-icon")}>
            {" "}
            <FontAwesomeIcon
              className={cx("icon")}
              style={{ color: "#FFAA05" }}
              icon={faUser}
            />
          </div>
        </div>
      </Col>
      <Col xs={12} sm={6} md={6} lg={3} className={cx("block-total")}>
        <div className={cx("block-wrap")}>
          {" "}
          <div className={cx("text")}>
            <p className={cx("title")}>Tài khoản đã bán </p>
            <p className={cx("quantity")}>35</p>
          </div>
          <div className={cx("block-icon")}>
            {" "}
            <FontAwesomeIcon
              className={cx("icon")}
              style={{ color: "#FF3364" }}
              icon={faPercent}
            />
          </div>
        </div>
      </Col>
      <Col xs={12} sm={6} md={6} lg={3} className={cx("block-total")}>
        <div className={cx("block-wrap")}>
          <div className={cx("text")}>
            <p className={cx("title")}>Doanh thu đơn hàng </p>
            <p className={cx("quantity")}>$2,435</p>
          </div>
          <div className={cx("block-icon")}>
            {" "}
            <FontAwesomeIcon
              className={cx("icon")}
              style={{ color: "#54BA4A" }}
              icon={faCoins}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default General;
