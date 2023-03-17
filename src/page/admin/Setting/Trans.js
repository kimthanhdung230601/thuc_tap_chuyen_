import classNames from "classnames/bind";
import Heading from "../../../component/Admin/Heading";
import styles from "./Setting.module.scss";

const cx = classNames.bind(styles);

function Trans() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("container-heading")}>
          <Heading title={"Thông tin chung"} />
          <Heading title={"Hiển thị sản phẩm"} />
          <Heading title={"Giao dịch ảo"} />
          <Heading title={"Ngân hàng auto"} />
        </div>
      </div>
      <div className={cx("container-infor")}>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Title</div>
          <input type="text" className={cx("infor-input")} />
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Tiêu đề khi share lên MXH</div>
          <input type="text" className={cx("infor-input")} />
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Mô tả</div>
          <input type="text" className={cx("infor-input")} />
        </div>
      </div>
    </>
  );
}

export default Trans;
