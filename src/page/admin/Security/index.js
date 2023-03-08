import { faLock, faPlus } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import Nav from "../../../component/Admin/Nav";
import Title from "../../../component/Admin/Title";
import styles from "./Security.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";

const cx = classNames.bind(styles);
function Security() {
  return (
    <>
      <div className={cx("wrapper")}>
        <Row>
          <Col sm={3} className={cx("col-custom-3")}>
            <Nav />
          </Col>
          <Col sm={9} className={cx("col-custom-9")}>
            <Title title="Bảo mật" icon={faLock} />
            <div className={cx("container-wrapper")}>
              <div className={cx("container-bg")}>
                <span className={cx("title")}>Cấu hình và bảo mật</span>

                <Row>
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
                    <div className={cx("list-sub")}>
                      <div className={cx("list-sub-show")}>
                        <span className={cx("list-sub-title")}>Hiển thị</span>
                        <select className={cx("list-sub-number")}>
                          <option className={cx("list-sub-number")}>1</option>
                          <option className={cx("list-sub-number")}>2</option>
                          <option className={cx("list-sub-number")}>3</option>
                        </select>
                      </div>
                      <div className={cx("list-sub-search")}>
                        <span className={cx("list-sub-search-name")}>
                          Tìm kiếm
                        </span>
                        <input
                          type="text"
                          className={cx("list-sub-search-input")}
                        />
                      </div>
                    </div>
                    <Table className={cx("table")}>
                      <thead className={cx("table-heading")}>
                        <tr className={cx("table-line")}>
                          <th className={cx("table-col")}>IP</th>
                          <th className={cx("table-col")}>Thao tác</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={cx("table-line")}>
                          <td className={cx("table-col")}>192.161.0929392</td>
                          <td className={cx("table-col")}>
                            <button> Xóa </button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
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
