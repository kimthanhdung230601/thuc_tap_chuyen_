import classNames from "classnames/bind";
import styles from "./Heading.module.scss";

const cx = classNames.bind(styles);

function Heading(props) {
  return (
    <>
      <div className={cx("title")}>
        <p id={props.id} className="heading">
          {props.title}
        </p>
      </div>
    </>
  );
}

export default Heading;
