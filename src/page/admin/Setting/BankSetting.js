import { faGear, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Col, Row } from "react-bootstrap";

import styles from "./Setting.module.scss";

const cx = classNames.bind(styles);
function BankSetting() {
  return (
    <div className={cx("container-infor")}>
      <Row className={cx("container-infor-wrap")}>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>Status</div>
            <div>
              <select type="text" className={cx("infor-input")}>
                <option className={cx("infor-option")}>ON</option>
                <option className={cx("infor-option")}>OFF</option>
              </select>
              <span>Chọn OFF hệ thống sẽ tạm dừng auto bank.</span>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>Server 1</div>
            <div>
              <select type="text" className={cx("infor-input")}>
                <option className={cx("infor-option")}>ON</option>
                <option className={cx("infor-option")}>OFF</option>
              </select>
              <span>
                Nạp tiền theo hoá đơn, quét QR code...Ưu điểm: dễ dàng quản lý
                và cộng tay - Nhược điểm: xử lý chậm hơn vài chục giây.
              </span>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>Server 2</div>
            <div>
              <select type="text" className={cx("infor-input")}>
                <option className={cx("infor-option")}>ON</option>
                <option className={cx("infor-option")}>OFF</option>
              </select>
              <span>
                Nạp tiền theo nội dung + id ví dụ: shopmailco473Ưu điểm: xử lý
                nhanh - Nhược điểm: Khó cộng thủ công khi ngân hàng bảo trì.
              </span>
            </div>
          </div>
        </Col>
      </Row>
      <Row className={cx("container-infor-wrap")}>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>Ngân hàng</div>
            <div>
              <select type="text" className={cx("infor-input")}>
                <option className={cx("infor-option")}>MB bank</option>
              </select>
              <span>Chọn ngân hàng bạn cần sử dụng. </span>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>Token bank</div>
            <input
              type="text"
              placeholder="Nhập token ngân hàng"
              className={cx("infor-input")}
            />
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>Số tài khoản</div>
            <input
              type="text"
              placeholder="Nhập số tài khoản ngân hàng cần auto"
              className={cx("infor-input")}
            />
          </div>
        </Col>
      </Row>
      <Row className={cx("container-infor-wrap")}>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>Mật khẩu Internet Banking</div>
            <input
              type="text"
              placeholder="Nhập mật khẩu"
              className={cx("infor-input")}
            />
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>Nội dung nạp</div>
            <input
              type="text"
              placeholder="Nhập nội dung"
              className={cx("infor-input")}
            />
            <span>Áp dụng cho server 2</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default BankSetting;
