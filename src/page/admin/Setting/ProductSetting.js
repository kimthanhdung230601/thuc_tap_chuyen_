import { faGear, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Col, Row } from "react-bootstrap";

import styles from "./Setting.module.scss";

const cx = classNames.bind(styles);
function ProductSetting() {
  return (
    <div className={cx("container-infor")}>
      <Row className={cx("container-infor-wrap")}>
        <Col xs={12} sm={6} md={6} lg={4}>
          {" "}
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>
              Hiện thỉ cột đánh giá sản phẩm
            </div>
            <div>
              <select type="text" className={cx("infor-input")}>
                <option className={cx("infor-option")}>Hiển thị</option>
                <option className={cx("infor-option")}>Ẩn</option>
              </select>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>Hiển thị cột số lượng đã bán</div>
            <div>
              <select type="text" className={cx("infor-input")}>
                <option className={cx("infor-option")}>Hiển thị</option>
                <option className={cx("infor-option")}>Ẩn</option>
              </select>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          {" "}
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>Ẩn sản phẩm khi hết hàng</div>
            <div>
              <select type="text" className={cx("infor-input")}>
                <option className={cx("infor-option")}>Hiển thị</option>
                <option className={cx("infor-option")}>Ẩn</option>
              </select>
            </div>
          </div>
        </Col>
      </Row>
      <Row className={cx("container-infor-wrap")}>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>
              Hiển thị cột xem trước (preview)
            </div>
            <div>
              <select type="text" className={cx("infor-input")}>
                <option className={cx("infor-option")}>Hiển thị</option>
                <option className={cx("infor-option")}>Ẩn</option>
              </select>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>
              Template giao diện hiện thị sản phẩm
            </div>
            <div>
              <select type="text" className={cx("infor-input")}>
                <option className={cx("infor-option")}>Hiển thị</option>
                <option className={cx("infor-option")}>Ẩn</option>
              </select>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className={cx("container-infor-item")}>
            <div className={cx("infor-name")}>Loại hiển thị</div>
            <div>
              <select type="text" className={cx("infor-input")}>
                <option className={cx("infor-option")}>Hiển thị</option>
                <option className={cx("infor-option")}>Ẩn</option>
              </select>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProductSetting;
