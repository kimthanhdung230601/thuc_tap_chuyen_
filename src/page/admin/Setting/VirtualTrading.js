import { faGear, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Col, Row } from "react-bootstrap";

import styles from "./Setting.module.scss";

const cx = classNames.bind(styles);

function VirtualTrading() {
  return (
    <div className={cx("container-infor")}>
      <Row className={cx("container-infor-wrap")}>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>
              Vị trí hiện giao dịch gần đây{" "}
            </div>
            <input type="text" className={cx("infor-input")} />
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>ON/OFF Giao dịch gần đây</div>
            <input type="text" className={cx("infor-input")} />
            <span className={cx("infor-justice")}>
              {" "}
              Giao dịch mua tài khoản gần đây được hiển thị tại trang home.
            </span>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>ON/OFF Tạo giao dịch ảo</div>
            <input type="text" className={cx("infor-input")} />
            <span>
              {" "}
              Hệ thống tự tạo giao dịch nạp tiền và mua hàng ảo để tăng uy tín.
            </span>
          </div>
        </Col>
      </Row>
      <Row className={cx("container-infor-wrap")}>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>
              Không tạo giao dịch ảo khi sản phẩm hết hàng
            </div>
            <input type="text" className={cx("infor-input")} />
            <span>
              {" "}
              Chọn ON để ngưng tạo giao dịch ảo khi sản phẩm hết tài khoản (chỉ
              áp dụng cho sản phẩm up lên web, không áp dụng cho sản phẩm API).
            </span>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>Số lượng mua tối thiểu</div>
            <input type="text" className={cx("infor-input")} />
            <span> Số lượng mua ảo tối thiểu cho 1 đơn hàng.</span>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>Số lượng mua tối đa</div>
            <input type="text" className={cx("infor-input")} />
            <span> Số lượng mua ảo tối đa cho 1 đơn hàng.</span>
          </div>
        </Col>
      </Row>
      <Row className={cx("container-infor-wrap")}>
        <Col xs={12} sm={6} md={6} lg={4}>
          {" "}
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>Tốc độ tạo giao dịch mua ảo</div>
            <input type="text" className={cx("infor-input")} />
            <span>
              {" "}
              Tốc độ tạo giao dịch mua ảo, số càng bé giao dịch tạo ra càng
              nhanh.
            </span>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>Mệnh giá nạp ảo ngẫu nhiên</div>
            <input type="text" className={cx("infor-input")} />
            <span>
              {" "}
              Tốc độ tạo giao dịch mua ảo, số càng bé giao dịch tạo ra càng
              nhanh.
            </span>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>Tốc độ tạo giao dịch nạp ảo</div>
            <input type="text" className={cx("infor-input")} />
            <span>
              {" "}
              Tốc độ tạo giao dịch nạp ảo, số càng bé giao dịch tạo ra càng
              nhanh.
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default VirtualTrading;
