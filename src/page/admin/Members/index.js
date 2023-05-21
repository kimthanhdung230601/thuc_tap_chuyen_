import classNames from "classnames/bind";
import { Col, Row, Table } from "react-bootstrap";
import Nav from "../../../component/Admin/Nav";
import Title from "../../../component/Admin/Title";
import Heading from "../../../component/Admin/Heading";
import styles from "./Member.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faEdit,
  faFileExcel,
  faRightFromBracket,
  faTrash,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Show from "../../../component/Admin/Show";
import Button, {
  Delete,
  Edit,
  Export,
  Logout,
  Reset,
} from "../../../component/Admin/Button";
import Header from "../../../component/Admin/Header/header";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

function Member() {
  const location = useLocation();
  const name = location.pathname;
  let router = name.substring(1);
  return (
    <>
      <div className={cx("wrapper")}>
        <Row style={{ padding: "0" }}>
          <div className={cx("col-custom")}>
            <Nav path={router} />
          </div>

          <Col className="col-lg-12" id="content">
            <Header />
            <div className={cx("content")}>
              <Title title={"Thành viên"} icon={faUsers} />
              <div className={cx("container-wrapper")}>
                <Heading title={"Danh sách thành viên"} />
                <div className={cx("container-btn")}>
                  <div className={cx("btn-left")}>
                    <Export />

                    <Reset />
                  </div>
                  <div className={cx("btn-right")}>
                    <Delete />
                  </div>
                </div>
                <Show />
                <div className={cx("table-wrap")}>
                  {" "}
                  <Table className={cx("table-custom")}>
                    <thead className={cx("table-heading")}>
                      <tr className={cx("table-line")}>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> #</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Username</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Ví</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Bảo mật</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Admin</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> CTV</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Thao tác</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={cx("table-line-item")}>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}> 1</div>
                        </td>
                        <td className={cx("table-col")}>
                          <ul className={cx("table-col-item")}>
                            <li className={cx("table-col-li")}>
                              {" "}
                              Tên đăng nhập:
                            </li>
                            <li className={cx("table-col-li")}>
                              {" "}
                              Địa chỉ email:
                            </li>
                            <li className={cx("table-col-li")}>
                              {" "}
                              Số điện thoại:
                            </li>
                            <li className={cx("table-col-li")}>
                              {" "}
                              Tình trạng:{" "}
                              <span className={cx("table-col-active")}>
                                Active
                              </span>
                            </li>
                          </ul>
                        </td>
                        <td className={cx("table-col")}>
                          <ul className={cx("table-col-item")}>
                            <li className={cx("table-col-li")}>
                              {" "}
                              Số dư khả dụng:{" "}
                              <span className={cx("table-col-li-blue")}>
                                0đ
                              </span>
                            </li>
                            <li className={cx("table-col-li")}>
                              {" "}
                              Tổng số tiền nạp:{" "}
                              <span className={cx("table-col-li-gr")}>0đ</span>
                            </li>
                            <li className={cx("table-col-li")}>
                              {" "}
                              Chiết khấu / giảm giá:{" "}
                              <span className={cx("table-col-li-red")}>0đ</span>
                            </li>
                          </ul>
                        </td>
                        <td className={cx("table-col")}>
                          <ul className={cx("table-col-item")}>
                            <li className={cx("table-col-li")}>
                              IP:
                              <li className={cx("table-col-li")}>
                                Status:{" "}
                                <span className={cx("table-col-active")}>
                                  Active
                                </span>
                              </li>
                            </li>
                            <li className={cx("table-col-li")}>
                              Ngày tham gia:
                              <span className={cx("table-col-li")}>0đ</span>
                            </li>
                            <li className={cx("table-col-li")}>
                              Hoạt động gần đây:
                              <span className={cx("table-col-li")}>0đ</span>
                            </li>
                          </ul>
                        </td>
                        <td className={cx("table-col")}>
                          <span className={cx("table-col-active")}>Có</span>
                        </td>
                        <td className={cx("table-col")}>
                          <span
                            className={cx("table-col-ctv", "table-col-active")}
                          >
                            Không
                          </span>
                        </td>
                        <td className={cx("table-col")}>
                          <ul className={cx("table-col-item")}>
                            <Delete />
                            <br />
                            <Edit />
                            <br />
                            <Logout />
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Member;
