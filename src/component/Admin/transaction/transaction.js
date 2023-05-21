import Table from "react-bootstrap/Table";
import classNames from "classnames/bind";
import Show from "../Show";
import Heading from "../Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
import styles from "../transaction/Transaction.module.scss";
const cx = classNames.bind(styles);
function Transaction() {
  return (
    <div className={cx("container-wrapper")}>
      <Heading title={"Giao dịch gần đây"} />
      <Show />
      <div className={cx("table-wrap")}>
        <Table className={cx("table-custom")}>
          <thead className={cx("table-heading")}>
            <tr className={cx("table-line")}>
              <th className={cx("table-col-heading")}>
                <div className={cx("table-col-item")}> #</div>
              </th>
              <th className={cx("table-col-heading")}>
                <div className={cx("table-col-item")}> Họ và tên</div>
              </th>
              <th className={cx("table-col-heading")}>
                <div className={cx("table-col-item")}> Số tiền trước</div>
              </th>
              <th className={cx("table-col-heading")}>
                <div className={cx("table-col-item")}> Số tiền thay đổi</div>
              </th>
              <th className={cx("table-col-heading")}>
                <div className={cx("table-col-item")}> Số tiền hiện tại</div>
              </th>
              <th className={cx("table-col-heading")}>
                <div className={cx("table-col-item")}> Thời gian</div>
              </th>
              <th className={cx("table-col-heading")}>
                <div className={cx("table-col-item")}> Nội dung</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={cx("table-line-item")}>
              <td className={cx("table-col")}>
                <div className={cx("table-col-item")}> 1</div>
              </td>
              <td className={cx("table-col")}>
                <div className={cx("table-col-item")}> Mark</div>
              </td>
              <td className={cx("table-col")}>
                <div className={cx("table-col-item", "prev-money")}>
                  250000000
                </div>
              </td>
              <td className={cx("table-col")}>
                <div className={cx("table-col-item", "add-money")}>
                  250000000
                </div>
              </td>
              <td className={cx("table-col")}>
                <div className={cx("table-col-item", "total-money")}>
                  250000000
                </div>
              </td>
              <td className={cx("table-col")}>
                <div className={cx("table-col-item")}>13:22 20/02/2023</div>
              </td>
              <td className={cx("table-col")}>
                <div className={cx("table-col-item")}>Nạp tiền</div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Transaction;
