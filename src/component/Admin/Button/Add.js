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

function Add(props) {
  const navigate = useNavigate();
  const Redirect = (link) => {
    console.log(link);
    console.log("add");

    navigate(`/${link}`);
  };
  return (
    <button
      className={cx("btn-wrap", "btn-add")}
      onClick={() => Redirect(props.link)}
    >
      <FontAwesomeIcon
        icon={props.icon ? props.icon : faPlus}
        className={cx("btn-icon")}
      />
      <span className={cx("btn-name")}>{props.name}</span>
    </button>
  );
}

export default Add;
