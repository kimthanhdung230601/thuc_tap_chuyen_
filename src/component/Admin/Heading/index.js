import classNames from "classnames/bind";
import styles from "./Heading.module.scss";

const cx = classNames.bind(styles);

function Heading(props) {
  return (
    <>
      <div className={cx("heading-title")}>
        <span id={props.id} className="heading" style={props.style}>
          {props.title}
        </span>
      </div>
    </>
  );
}

export default Heading;
