import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faPercent, faCoins } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "./Total.module.scss";
const cx = classNames.bind(styles);

function Total() {
  return (
    <Row className={cx("Total")}>
      <Col
        xs={12}
        sm={6}
        md={6}
        lg={3}
        className={cx("block-total")}
        style={{
          backgroundColor:
            "linear-gradient( 144.16deg,rgba(115, 102, 255, 0.1) 19.06%,rgba(115, 102, 255, 0) 79.03%)",
        }}
      >
        <div className={cx("block-wrap")}>
          <div className={cx("text")}>
            <p className={cx("title")}>Tổng tiền nạp toàn thời gian </p>
            <p className={cx("quantity")}>2435</p>
          </div>
        </div>
      </Col>
      <Col xs={12} sm={6} md={6} lg={3} className={cx("block-total")}>
        <div className={cx("block-wrap")}>
          <div className={cx("text")}>
            <p className={cx("title")}>Tổng tiền nạp tháng 2 </p>
            <p className={cx("quantity")}>10000</p>
          </div>
        </div>
      </Col>
      <Col xs={12} sm={6} md={6} lg={3} className={cx("block-total")}>
        <div className={cx("block-wrap")}>
          <div className={cx("text")}>
            <p className={cx("title")}>Tổng tiền nạp toàn tuần </p>
            <p className={cx("quantity")}>35000</p>
          </div>
        </div>
      </Col>
      <Col className={cx("block-total")}>
        <div className={cx("block-wrap")}>
          <div className={cx("text")}>
            <p className={cx("title")}>Tổng tiền nạp hôm nay </p>
            <p className={cx("quantity")}>2435</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Total;
