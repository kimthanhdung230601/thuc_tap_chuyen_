import { faEdit, faRug, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Col, Row, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Add, Delete, Edit } from "../../../component/Admin/Button";
import Header from "../../../component/Admin/Header/header";
import Heading from "../../../component/Admin/Heading";
import Nav from "../../../component/Admin/Nav";
import Show from "../../../component/Admin/Show";
import Title from "../../../component/Admin/Title";
import styles from "./Discount.module.scss";

const cx = classNames.bind(styles);

function Discount() {
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
              <Title title={"Khuyến mãi/ Giảm giá"} icon={faRug} />
              <div className={cx("container-wrapper")}>
                <Heading title={"Mã giảm giá"} />
                <Add
                  name={"Thêm mới"}
                  action={"Redirect"}
                  data={"discount/new"}
                />
                <Show />
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
                            Mã giảm giá
                          </div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Số lượng</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}>
                            {" "}
                            Đã sử dụng
                          </div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Giảm</div>
                        </th>
                        <th className={cx("table-col-heading")}>
                          <div className={cx("table-col-item")}> Thời gian</div>
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
                          <div className={cx("table-col-item")}>admin1</div>
                        </td>
                        <td className={cx("table-col")}>
                          <div
                            className={cx("table-col-item", "number-discount")}
                          >
                            20 000
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item", "used")}>50</div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item", "total-money")}>
                            10 500 000đ
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <div className={cx("table-col-item")}>
                            2022-10-05 09:58:33
                          </div>
                        </td>
                        <td className={cx("table-col")}>
                          <ul className={cx("table-col-item")}>
                            <Delete />
                            <br />
                            <Edit />
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

export default Discount;
