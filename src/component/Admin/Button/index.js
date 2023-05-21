import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faEdit,
  faEye,
  faFileExcel,
  faPlus,
  faRightFromBracket,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

export const Edit = () => {
  return (
    <button className={cx("btn-wrap", "action-btn", "btn-edit")}>
      <FontAwesomeIcon icon={faEdit} className={cx("btn-icon")} />
      <span className={cx("btn-name")}>Edit</span>
    </button>
  );
};

export const Add = (props) => {
  const navigate = useNavigate();
  const _handleClick = (data, action) => {
    if (action === "Redirect") {
      navigate(`/${data}`);
    }
  };
  return (
    <button
      className={cx("btn-wrap", "btn-add")}
      onClick={() => _handleClick(props.data, props.action)}
    >
      <FontAwesomeIcon
        icon={props.icon ? props.icon : faPlus}
        className={cx("btn-icon")}
      />
      <span className={cx("btn-name")}>{props.name}</span>
    </button>
  );
};

export const Delete = () => {
  return (
    <button className={cx("btn-wrap", "action-btn", "btn-delete")}>
      <FontAwesomeIcon icon={faTrash} className={cx("btn-icon")} />
      <span className={cx("btn-name")}>Xoá</span>
    </button>
  );
};

export const Logout = () => {
  return (
    <button className={cx("btn-wrap", "action-btn", "btn-logout")}>
      <FontAwesomeIcon icon={faRightFromBracket} className={cx("btn-icon")} />
      <span className={cx("btn-name")}>Logout </span>
    </button>
  );
};

export const Reset = () => {
  return (
    <button className={cx("btn-reset", "btn-wrap")}>
      <FontAwesomeIcon className={cx("btn-icon")} icon={faArrowsRotate} />
      <span className={cx("btn-name")}>Reset top nạp</span>{" "}
    </button>
  );
};

export const Export = () => {
  return (
    <button className={cx("btn-excel", "btn-wrap")}>
      <FontAwesomeIcon className={cx("btn-icon")} icon={faFileExcel} />
      <span className={cx("btn-name")}>Xuất file excel</span>{" "}
    </button>
  );
};

export const View = () => {
  return (
    <button className={cx("btn-view", "btn-wrap")}>
      <FontAwesomeIcon className={cx("btn-icon")} icon={faEye} />
      <span className={cx("btn-name")}>Xem</span>{" "}
    </button>
  );
};

export const Close = () => {
  return (
    <button className={cx("btn-view", "btn-wrap")}>
      <span className={cx("btn-name")}>Đóng</span>{" "}
    </button>
  );
};

export const Save = () => {
  return (
    <button className={cx("btn-save", "btn-wrap")}>
      <FontAwesomeIcon className={cx("btn-icon")} icon={faSave} />
      <span className={cx("btn-name")}>Lưu ngay</span>{" "}
    </button>
  );
};
