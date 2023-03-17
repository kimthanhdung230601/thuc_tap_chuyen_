import { faLock, faPlus } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import Nav from "../../../component/Admin/Nav";
import Title from "../../../component/Admin/Title";
import styles from "./Security.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";
import Heading from "../../../component/Admin/Heading";
import Show from "../../../component/Admin/Show";

const cx = classNames.bind(styles);
function Security() {
  return (
    <>
      <div className={cx("wrapper")}>
        <Row>
          <Col sm={2} className={cx("col-custom-3")}>
            <Nav />
          </Col>
          <Col sm={10} className={cx("col-custom-9")}>
            <Title title="Bảo mật" icon={faLock} />
            <div className={cx("container-wrapper")}>
              <div className={cx("container-bg")}>
               <Heading title = {"Cấu hình và bảo mật"} />

                <Row className={cx("status-wrap")}>
                  <Col>
                    <div className={cx("status")}>Status</div>
                    <select className={cx("select-option")}>
                      <option className={cx("option-item")}>ON</option>
                      <option className={cx("option-item")}>OFF</option>
                    </select>
                    <div className={cx("status-warn")}>
                      Hệ thống sẽ bật tính năng xác minh IP khi truy cập Admin
                      nếu bạn chọn ON( lưu ý: bạn phải nhập IP của bạn vào danh
                      sách phía dưới trước khi chọn ON chức năng này)
                    </div>
                  </Col>
                  <Col xs={7}>
                    <div className={cx("list-wrapper")}>
                      <div className={cx("list-heading")}>
                      <span className={cx("list-title")}>
                        Danh sách IP được truy cập admin
                      </span>
                      <button className={cx("list-btn")}>
                        <FontAwesomeIcon
                          icon={faPlus}
                          className={cx("list-btn-icon")}
                        />
                        <span className={cx("list-btn-name")}>Thêm IP mới</span>
                      </button>
                    </div>
                   <Show />
                    <Table className={cx("table-custom")}>
                      <thead className={cx("table-heading")}>
                        <tr className={cx("table-line")}>
                          <th className={cx("table-col-heading")}><div className={cx("table-col-item")}> IP</div></th>
                          <th className={cx("table-col-heading")}><div className={cx("table-col-item")}> Thao tác</div></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={cx("table-line-item")}>
                          <td className={cx("table-col")}><div className={cx("table-col-item")}> 192.161.0929392</div></td>
                          <td className={cx("table-col")}>
                            <button className={cx("btn-col")}> Xóa </button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    </div>
                    
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Security;
