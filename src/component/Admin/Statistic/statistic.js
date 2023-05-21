import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames/bind";
import styles from "../Statistic/Statistic.module.scss";
const cx = classNames.bind(styles);
function Statistic() {
  return (
    <>
      <div className={cx("tables")}>
        <div className={cx("table")}>
          {" "}
          <div className={cx("title")}>Thống kê tháng 2</div>
          <Table responsive hover size="sm" className={cx("table-month table")}>
            <tbody>
              <tr>
                <td className={cx("td-icon")} style={{ width: "30%" }}>
                  <FontAwesomeIcon
                    // className={cx("icon")}
                    style={{ color: "#7366FF" }}
                    icon={faRotateRight}
                  />
                </td>

                <td wider>Doanh thu đơn hàng </td>
                <td style={{ color: "#54BA4A" }}>$14,987.13</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    // className={cx("icon")}
                    style={{ color: "#FF3364" }}
                    icon={faCartShopping}
                  />
                </td>
                <td>Tài khoản đã bán </td>
                <td style={{ color: "#FC4438" }}>70 </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    // className={cx("icon")}
                    style={{ color: "#FFAA05" }}
                    icon={faUser}
                  />
                </td>
                <td>Thành viên mới </td>
                <td style={{ color: "#54BA4A" }}>5 </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className={cx("table")}>
          {" "}
          <div className={cx("title")}>Thống kê tháng 2</div>
          <Table responsive hover size="sm" className={cx("table-month table")}>
            <tbody>
              <tr>
                <td className={cx("td-icon")} style={{ width: "30%" }}>
                  <FontAwesomeIcon
                    // className={cx("icon")}
                    style={{ color: "#7366FF" }}
                    icon={faRotateRight}
                  />
                </td>

                <td wider>Doanh thu đơn hàng </td>
                <td style={{ color: "#54BA4A" }}>$14,987.13</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    // className={cx("icon")}
                    style={{ color: "#FF3364" }}
                    icon={faCartShopping}
                  />
                </td>
                <td>Tài khoản đã bán </td>
                <td style={{ color: "#FC4438" }}>70 </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    // className={cx("icon")}
                    style={{ color: "#FFAA05" }}
                    icon={faUser}
                  />
                </td>
                <td>Thành viên mới </td>
                <td style={{ color: "#54BA4A" }}>5 </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className={cx("table")}>
          {" "}
          <div className={cx("title")}>Thống kê tháng 2</div>
          <Table responsive hover size="sm" className={cx("table-month table")}>
            <tbody>
              <tr>
                <td className={cx("td-icon")} style={{ width: "30%" }}>
                  <FontAwesomeIcon
                    // className={cx("icon")}
                    style={{ color: "#7366FF" }}
                    icon={faRotateRight}
                  />
                </td>

                <td wider>Doanh thu đơn hàng </td>
                <td style={{ color: "#54BA4A" }}>$14,987.13</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    // className={cx("icon")}
                    style={{ color: "#FF3364" }}
                    icon={faCartShopping}
                  />
                </td>
                <td>Tài khoản đã bán </td>
                <td style={{ color: "#FC4438" }}>70 </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    // className={cx("icon")}
                    style={{ color: "#FFAA05" }}
                    icon={faUser}
                  />
                </td>
                <td>Thành viên mới </td>
                <td style={{ color: "#54BA4A" }}>5 </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      {/* <Table responsive className={cx("table-week table")}>
        <div className={cx("title")}>Thống kê tháng 2</div>
        <tbody>
          <tr>
            <td>
              <FontAwesomeIcon
                // className={cx("icon")}
                style={{ color: "#7366FF" }}
                icon={faRotateRight}
              />
            </td>

            <td>Doanh thu đơn hàng </td>
            <td style={{ color: "#54BA4A" }}>$14,987.13</td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                // className={cx("icon")}
                style={{ color: "#FF3364" }}
                icon={faCartShopping}
              />
            </td>
            <td>Tài khoản đã bán </td>
            <td style={{ color: "#FC4438" }}>70 </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                // className={cx("icon")}
                style={{ color: "#FFAA05" }}
                icon={faUser}
              />
            </td>
            <td>Thành viên mới </td>
            <td style={{ color: "#54BA4A" }}>5 </td>
          </tr>
        </tbody>
      </Table>
      <Table responsive className={cx("table-today table")}>
        <div className={cx("title")}>Thống kê tháng 2</div>
        <tbody>
          <tr>
            <td>
              <FontAwesomeIcon
                // className={cx("icon")}
                style={{ color: "#7366FF" }}
                icon={faRotateRight}
              />
            </td>

            <td>Doanh thu đơn hàng </td>
            <td style={{ color: "#54BA4A" }}>$14,987.13</td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                // className={cx("icon")}
                style={{ color: "#FF3364" }}
                icon={faCartShopping}
              />
            </td>
            <td>Tài khoản đã bán </td>
            <td style={{ color: "#FC4438" }}>70 </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                // className={cx("icon")}
                style={{ color: "#FFAA05" }}
                icon={faUser}
              />
            </td>
            <td>Thành viên mới </td>
            <td style={{ color: "#54BA4A" }}>5 </td>
          </tr>
        </tbody>
      </Table> */}
    </>
  );
}

export default Statistic;
