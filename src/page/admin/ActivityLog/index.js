import classNames from "classnames/bind";
import Nav from "../../../component/Admin/Nav/index";
import Title from "../../../component/Admin/Title";
import styles from "./Activity.module.scss";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../../../component/Admin/Heading";
import Show from "../../../component/Admin/Show";
import { Table } from "react-bootstrap";

const cx = classNames.bind(styles);

function Activity() {
  return (
    <>
      <div className={cx("wrapper")}>
        <Row>
          <Col sm={2} className={cx("col-custom-3")}>
            <Nav />
          </Col>
          <Col sm={10} className={cx("col-custom-3")}>
            <Title title="Lịch sử" icon={faClockRotateLeft} />
            <div className={cx("container-wrapper")}>
              <Heading title={"Nhật kí hoạt động"} />
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
                        <div className={cx("table-col-item")}> Hành động</div>
                      </th>
                      <th className={cx("table-col-heading")}>
                        <div className={cx("table-col-item")}> Thời gian</div>
                      </th>
                      <th className={cx("table-col-heading")}>
                        <div className={cx("table-col-item")}> IP</div>
                      </th>
                      <th className={cx("table-col-heading")}>
                        <div className={cx("table-col-item")}> Thiết bị</div>
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
                        <div className={cx("table-col-item")}>
                          {" "}
                          [Warning] Đăng nhập thành công vào hệ thống Admin
                        </div>
                      </td>
                      <td className={cx("table-col")}>
                        <div className={cx("table-col-item")}>
                          {" "}
                          2023-02-24 12:35:14
                        </div>
                      </td>
                      <td className={cx("table-col")}>
                        <div className={cx("table-col-item")}>
                          {" "}
                          192.161.0929392
                        </div>
                      </td>
                      <td className={cx("table-col")}>
                        <div className={cx("table-col-item")}>
                          {" "}
                          Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/110.0.0.0 Safari/537.36
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
                        <div className={cx("table-col-item")}>
                          {" "}
                          [Warning] Đăng nhập thành công vào hệ thống Admin
                        </div>
                      </td>
                      <td className={cx("table-col")}>
                        <div className={cx("table-col-item")}>
                          {" "}
                          2023-02-24 12:35:14
                        </div>
                      </td>
                      <td className={cx("table-col")}>
                        <div className={cx("table-col-item")}>
                          {" "}
                          192.161.0929392
                        </div>
                      </td>
                      <td className={cx("table-col")}>
                        <div className={cx("table-col-item")}>
                          {" "}
                          Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/110.0.0.0 Safari/537.36
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
                        <div className={cx("table-col-item")}>
                          {" "}
                          [Warning] Đăng nhập thành công vào hệ thống Admin
                        </div>
                      </td>
                      <td className={cx("table-col")}>
                        <div className={cx("table-col-item")}>
                          {" "}
                          2023-02-24 12:35:14
                        </div>
                      </td>
                      <td className={cx("table-col")}>
                        <div className={cx("table-col-item")}>
                          {" "}
                          192.161.0929392
                        </div>
                      </td>
                      <td className={cx("table-col")}>
                        <div className={cx("table-col-item")}>
                          {" "}
                          Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/110.0.0.0 Safari/537.36
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
                        <div className={cx("table-col-item")}>
                          {" "}
                          [Warning] Đăng nhập thành công vào hệ thống Admin
                        </div>
                      </td>
                      <td className={cx("table-col")}>
                        <div className={cx("table-col-item")}>
                          {" "}
                          2023-02-24 12:35:14
                        </div>
                      </td>
                      <td className={cx("table-col")}>
                        <div className={cx("table-col-item")}>
                          {" "}
                          192.161.0929392
                        </div>
                      </td>
                      <td className={cx("table-col")}>
                        <div className={cx("table-col-item")}>
                          {" "}
                          Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/110.0.0.0 Safari/537.36
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                {/* <Table className={cx("table-custom")}>
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
                </Table> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Activity;
