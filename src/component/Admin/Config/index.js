import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Add, Save } from "../Button";
import Heading from "../Heading";
import styles from "./Config.module.scss";

const cx = classNames.bind(styles);

function Config() {
  return (
    <>
      <div className={cx("wrapper")}>
        <span className={cx("title")}>Cấu hình hệ thống</span>
        <div className={cx("config-item")}>
          <div className={cx("config-name")}>Thông báo toàn hệ thống</div>
          <textarea className={cx("config-input")} />
        </div>
        <div className={cx("config-item")}>
          <div className={cx("config-name")}>Ghi chú nạp tiền</div>
          <textarea className={cx("config-input")} />
        </div>
        <div className={cx("config-item")}>
          <div className={cx("config-name")}>Ghi chú vòng quay</div>
          <textarea className={cx("config-input")} />
        </div>
        <div className={cx("config-item")}>
          <div className={cx("config-name")}>Chính sách bảo mật</div>
          <textarea className={cx("config-input")} />
        </div>
        <div className={cx("config-item")}>
          <div className={cx("config-name")}>Điều khoản sử dụng</div>
          <textarea className={cx("config-input")} />
        </div>
        <div className={cx("config-item")}>
          <div className={cx("config-name")}>Lưu ý tiếp thị liên kết</div>
          <textarea className={cx("config-input")} />
        </div>
        <div className={cx("config-item")}>
          <div className={cx("config-name")}>Trang liên hệ</div>
          <textarea className={cx("config-input")} />
        </div>
        <div className={cx("config-btn")}>
          <Save />
        </div>
      </div>
    </>
  );
}

export default Config;
