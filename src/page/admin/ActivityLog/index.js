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
import Header from "../../../component/Admin/Header/header";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

function Activity() {
  const location = useLocation();
  const name = location.pathname;
  let router = name.substring(1);
  return (
    <>
      <title>Nhật kí hoạt động</title>
      <div className={cx("wrapper")}>
        <Row style={{ padding: "0" }}>
          <div className={cx("col-custom")}>
            <Nav path={router} />
          </div>

          <Col className="col-lg-12" id="content">
            <Header />

            <div className={cx("content")}>
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
                  {/*  */}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Activity;
