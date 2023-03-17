import {
  faCreditCard,
  faEdit,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Col, Row, Table } from "react-bootstrap";
import Heading from "../../../component/Admin/Heading";
import Nav from "../../../component/Admin/Nav";
import Title from "../../../component/Admin/Title";
import styles from "./Pay.module.scss";

const cx = classNames.bind(styles);

function Pay() {
  return (
    <>
      <div className={cx("wrapper")}>
        <Row>
          <Col sm={2} className={cx("col-custom-3")}>
            <Nav />
          </Col>
          <Col sm={10} className={cx("col-custom-3")}>
            <Title title={"Phương thức thanh toán"} icon={faCreditCard} />
            <div className={cx("container-wrapper")}>
              <Heading title={"Danh sách ngân hàng"} />
              <div className={cx("table-wrap")}>
                <Table className={cx("table-custom")}>
                  <thead className={cx("table-heading")}>
                    <tr className={cx("table-line")}>
                      <th className={cx("table-col-heading")}>
                        <div className={cx("table-col-item")}> #</div>
                      </th>
                      <th className={cx("table-col-heading")}>
                        <div className={cx("table-col-item")}>
                          {" "}
                          Tên ngân hàng
                        </div>
                      </th>
                      <th className={cx("table-col-heading")}>
                        <div className={cx("table-col-item")}>
                          {" "}
                          Tên tài khoản
                        </div>
                      </th>
                      <th className={cx("table-col-heading")}>
                        <div className={cx("table-col-item")}>
                          {" "}
                          Số tài khoản
                        </div>
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
                        <div className={cx("table-col-item")}>MB Bank</div>
                      </td>
                      <td className={cx("table-col")}>
                        <div className={cx("table-col-item")}>
                          Nguyễn Quang Huy
                        </div>
                      </td>
                      <td className={cx("table-col")}>
                        <div className={cx("table-col-item")}>
                          1324324324323423423
                        </div>
                      </td>

                      <td className={cx("table-col")}>
                        <ul className={cx("table-col-item")}>
                          <button
                            className={cx(
                              "btn-wrap",
                              "action-btn",
                              "btn-delete"
                            )}
                          >
                            <FontAwesomeIcon
                              icon={faTrash}
                              className={cx("btn-icon")}
                            />
                            <span className={cx("btn-name")}>Xoá</span>
                          </button>
                          <br />
                          <button
                            className={cx("btn-wrap", "action-btn", "btn-edit")}
                          >
                            <FontAwesomeIcon
                              icon={faEdit}
                              className={cx("btn-icon")}
                            />
                            <span className={cx("btn-name")}>Edit</span>
                          </button>
                          <br />
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Heading title={"Thêm ngân hàng mới"} />
              <div className={cx("bank-wrap")}>
                <div className={cx("bank-item")}>
                  <span className={cx("bank-name")}>Ngân hàng</span>
                  <input type="text" className={cx("bank-input")} />
                </div>
                <div className={cx("bank-item")}>
                  <span className={cx("bank-name")}>Ảnh</span>
                  <input type="file" className={cx("bank-input")} />
                </div>
                <div className={cx("bank-item")}>
                  <span className={cx("bank-name")}>Tên tài khoản</span>
                  <input type="text" className={cx("bank-input")} />
                </div>
                <div className={cx("bank-item")}>
                  <span className={cx("bank-name")}>Số tài khoản</span>
                  <input type="text" className={cx("bank-input")} />
                </div>
                <div className={cx("bank-btn")}>
                  <button className={cx("btn-wrap", "btn-add")}>
                    <FontAwesomeIcon icon={faPlus} className={cx("btn-icon")} />
                    <span className={cx("btn-name")}>Thêm ngay</span>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Pay;
