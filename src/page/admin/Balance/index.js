import classNames from "classnames/bind";

import Title from "../../../component/Admin/Title";

import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "../ActivityLog/Activity.module.scss";
import Heading from "../../../component/Admin/Heading";
import Show from "../../../component/Admin/Show";
import { Col, Row, Table } from "react-bootstrap";
import Header from "../../../component/Admin/Header/header";
import Nav from "../../../component/Admin/Nav";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

function Balance() {
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
              {" "}
              <Title title="Lịch sử" icon={faClockRotateLeft} />
              <div className={cx("container-wrapper")}>
                <Heading title={"Biến động số dư"} />
                <Show />
                <div className={cx("table-wrap")}>
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
                          <div className={cx("table-col-item")}>
                            {" "}
                            Số tiền trước
                          </div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}>
                            {" "}
                            Số tiền thay đổi
                          </div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}>
                            {" "}
                            Số tiền hiện tại
                          </div>
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
                          <div className={cx("table-col-item")}> admin</div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item", "table-col-1")}>
                            {" "}
                            10.000.000
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item", "table-col-2")}>
                            {" "}
                            50.000
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item", "table-col-3")}>
                            {" "}
                            10.050.000
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}>
                            {" "}
                            2022-10-05 09:58:33
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}>
                            {" "}
                            Hoá đơn nạp tiền #P9Q7V
                          </div>
                        </td>
                      </tr>
                      <tr className={cx("table-line-item")}>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}> 1</div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}> admin</div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item", "table-col-1")}>
                            {" "}
                            10.000.000
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item", "table-col-2")}>
                            {" "}
                            50.000
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item", "table-col-3")}>
                            {" "}
                            10.050.000
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}>
                            {" "}
                            2022-10-05 09:58:33
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}>
                            {" "}
                            Hoá đơn nạp tiền #P9Q7V
                          </div>
                        </td>
                      </tr>
                      <tr className={cx("table-line-item")}>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}> 1</div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}> admin</div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item", "table-col-1")}>
                            {" "}
                            10.000.000
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item", "table-col-2")}>
                            {" "}
                            50.000
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item", "table-col-3")}>
                            {" "}
                            10.050.000
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}>
                            {" "}
                            2022-10-05 09:58:33
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}>
                            {" "}
                            Hoá đơn nạp tiền #P9Q7V
                          </div>
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

export default Balance;
