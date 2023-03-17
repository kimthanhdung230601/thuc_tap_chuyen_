import {
  faClipboard,
  faEdit,
  faFileExcel,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Col, Row, Table } from "react-bootstrap";
import Heading from "../../../component/Admin/Heading";
import Nav from "../../../component/Admin/Nav";
import Show from "../../../component/Admin/Show";
import Title from "../../../component/Admin/Title";
import styles from "./Post.module.scss";

const cx = classNames.bind(styles);

function Posts() {
  return (
    <>
      <div className={cx("wrapper")}>
        <Row>
          <Col sm={2} className={cx("col-custom-3")}>
            <Nav />
          </Col>
          <Col sm={10} className={cx("col-custom-3")}>
            <Title title={"Bài viết"} icon={faClipboard} />
            <div className={cx("container-wrapper")}>
              <Heading title={"Danh sách bài viết"} />
              <div className={cx("container-btn")}>
                <button className={cx("btn-excel", "btn-wrap")}>
                  <FontAwesomeIcon
                    className={cx("btn-icon")}
                    icon={faFileExcel}
                  />
                  <span className={cx("btn-name")}>Xuất file excel</span>{" "}
                </button>
                <button className={cx("btn-add", "btn-wrap")}>
                  <FontAwesomeIcon className={cx("btn-icon")} icon={faPlus} />
                  <span className={cx("btn-name")}>Thêm bài viết mới</span>{" "}
                </button>
              </div>
              <Show />
              <Table className={cx("table-custom")}>
                <thead className={cx("table-heading")}>
                  <tr className={cx("table-line")}>
                    <th className={cx("table-col-heading")}>
                      <div className={cx("table-col-item")}> #</div>
                    </th>
                    <th className={cx("table-col-heading")}>
                      <div className={cx("table-col-item")}> Tiêu đề</div>
                    </th>
                    <th className={cx("table-col-heading")}>
                      <div className={cx("table-col-item")}> Ảnh</div>
                    </th>
                    <th className={cx("table-col-heading")}>
                      <div className={cx("table-col-item")}> Ngày đăng</div>
                    </th>
                    <th className={cx("table-col-heading")}>
                      <div className={cx("table-col-item")}> Lượt xem</div>
                    </th>
                    <th className={cx("table-col-heading")}>
                      <div className={cx("table-col-item")}> Trạng thái</div>
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
                      <div className={cx("table-col-item")}>The orbitians</div>
                    </td>
                    <td className={cx("table-col")}>
                      <div className={cx("table-col-item", "img-wrap")}>
                        <img
                          src={require("../../../assets/posts.jpg")}
                          className={cx("table-img")}
                        />
                      </div>
                    </td>
                    <td className={cx("table-col")}>
                      <div className={cx("table-col-item")}>
                        2022-10-05 09:58:33
                      </div>
                    </td>
                    <td className={cx("table-col")}>
                      <div className={cx("table-col-item")}>35</div>
                    </td>
                    <td className={cx("table-col")}>
                      <span className={cx("table-col-active")}>Hiển thị</span>
                    </td>
                    <td className={cx("table-col")}>
                      <ul className={cx("table-col-item")}>
                        <button
                          className={cx("btn-wrap", "action-btn", "btn-delete")}
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
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Posts;
