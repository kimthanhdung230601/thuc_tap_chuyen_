import classNames from "classnames/bind";
import styles from "./Show.module.scss";

const cx = classNames.bind(styles);
function Show(props) {
  return (
    <>
      <div className={cx("list-sub")}>
        <div className={cx("list-sub-show")}>
          <span className={cx("list-sub-title")}>Hiển thị</span>
          <select className={cx("list-sub-number")}>
            <option className={cx("list-sub-number")}>1</option>
            <option className={cx("list-sub-number")}>2</option>
            <option className={cx("list-sub-number")}>3</option>
          </select>
        </div>
        <div className={cx("list-sub-search")}>
          <span className={cx("list-sub-title", "list-sub-search")}>
            Tìm kiếm
          </span>
          <input
            type="text"
            className={cx("list-sub-search-input", "list-sub-number")}
          />
        </div>
      </div>
    </>
  );
}

export default Show;
