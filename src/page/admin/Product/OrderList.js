import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { Col, Row, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Add, Delete, Edit, View } from "../../../component/Admin/Button";
import Header from "../../../component/Admin/Header/header";
import Heading from "../../../component/Admin/Heading";
import Nav from "../../../component/Admin/Nav";
import Show from "../../../component/Admin/Show";
import Title from "../../../component/Admin/Title";
import styles from "./Product.module.scss";

const cx = classNames.bind(styles);

function OrderList() {
  const location = useLocation();
  const name = location.pathname;
  let router = name.substring(1);
  return (
    <>
      <div className={cx("warpper")}>
        <Row style={{ padding: "0" }}>
          <div className={cx("col-custom")}>
            <Nav path={router} />
          </div>

          <Col className="col-lg-12" id="content">
            <Header />
            <div className={cx("content")}>
              <Title title={"Sản phẩm"} icon={faBarsStaggered} />
              <div className={cx("container-wrapper")}>
                <Heading title={"Danh sách đơn hàng"} />

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
                          <div className={cx("table-col-item")}>
                            {" "}
                            Mã đơn hàng
                          </div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Username</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}>
                            {" "}
                            Tên sản phẩm
                          </div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}>Chuyên mục</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Giá</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Thời gian</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}>
                            {" "}
                            Trạng thái
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
                          <div className={cx("table-col-item")}>
                            HFERRUHJHRU37347387
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}>graceizmi</div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}>
                            Adobe photoshop
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}>Thiết kế</div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}>2500000</div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}>09-09-2023</div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}>
                            <span className={cx("table-col-active")}>
                              Hoàn thành
                            </span>
                          </div>
                        </td>

                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}>
                            <View />
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

export default OrderList;
