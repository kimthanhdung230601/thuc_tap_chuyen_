import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Button() {
  return (
    <>
      <button className={cx("btn-wrap")}>
        <FontAwesomeIcon className={cx("btn-icon")} icon={faFileExcel} />
        <span className={cx("btn-name")}>Xuất file excel</span>{" "}
      </button>
    </>
  );
}

export default Button;
