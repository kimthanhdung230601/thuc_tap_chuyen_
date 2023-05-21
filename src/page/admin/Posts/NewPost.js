import {
  faClipboard,
  faRug,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Add, Close } from "../../../component/Admin/Button";
import Header from "../../../component/Admin/Header/header";
import Heading from "../../../component/Admin/Heading";
import Nav from "../../../component/Admin/Nav";
import Title from "../../../component/Admin/Title";
import styles from "./NewPost.module.scss";

const cx = classNames.bind(styles);

function NewPost() {
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
              <Title title={"Bài viết"} icon={faClipboard} />
              <div className={cx("container-wrapper")}>
                <Heading title={"Thêm bài viết"} />
                <div className={cx("container-posts")}>
                  <Row>
                    <Col xs={4}>
                      <div className={cx("post-img-wrap")}>
                        <label for="file" className={cx("for-input-file")}>
                          <FontAwesomeIcon
                            className={cx("file-icon")}
                            icon={faUpload}
                          />
                          <br />
                          Dung lượng file tối đa 1MB. Định dạng: JPG, PNG
                        </label>
                        <br />
                        <input
                          type="file"
                          className={cx("post-img")}
                          id="file"
                          name="file"
                        />
                      </div>
                    </Col>
                    <Col xs={8}>
                      <div className={cx("post-infor")}>
                        <span className={cx("post-heading")}>
                          Thông tin bài viết
                        </span>
                        <div>
                          <div className={cx("post-item")}>
                            <div className={cx("post-title")}>Tiêu đề*</div>
                            <input type="text" className={cx("post-input")} />
                          </div>
                          {/* <div className={cx("post-item-wrap")}> */}
                          <div className={cx("post-item")}>
                            <div className={cx("post-title")}>Trạng thái*</div>
                            <select className={cx("post-select", "post-input")}>
                              <option
                                className={cx("post-option", "post-input")}
                              >
                                Hiển thị
                              </option>
                              <option
                                className={cx("post-option", "post-input")}
                              >
                                Ẩn
                              </option>
                            </select>
                          </div>
                          <div className={cx("post-item")}>
                            <div className={cx("post-title")}>Tác giả</div>
                            <input type="text" className={cx("post-input")} />
                          </div>
                          {/* </div> */}
                          <div className={cx("post-item")}>
                            <div className={cx("post-title")}>Nội dung*</div>
                            <textarea
                              type="text"
                              className={cx("post-input")}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={cx("post-btn")}>
                        <Add name={"Thêm mới"} />
                        <Close />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default NewPost;
