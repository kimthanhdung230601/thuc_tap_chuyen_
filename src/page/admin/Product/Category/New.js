import { faBarsStaggered, faUpload } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import { Col, Row } from "react-bootstrap";
import { Add, Close } from "../../../../component/Admin/Button";
import Header from "../../../../component/Admin/Header/header";
import Heading from "../../../../component/Admin/Heading";
import Nav from "../../../../component/Admin/Nav";
import Title from "../../../../component/Admin/Title";

import styles from "../../Posts/NewPost.module.scss";

const cx = classNames.bind(styles);

function NewCategory() {
  return (
    <div className={cx("wrapper")}>
      <Row style={{ padding: "0" }}>
        <div className={cx("col-custom")}>
          <Nav path={"product/category"} />
        </div>

        <Col className="col-lg-12" id="content">
          <Header />
          <div className={cx("content")}>
            {" "}
            <Title title={"Sản phẩm"} icon={faBarsStaggered} />
            <div className={cx("container-wrapper")}>
              <Heading title={"Thêm chuyên mục mới"} />
              <div className={cx("container-posts")}>
                {" "}
                <div className={cx("post-infor")}>
                  <span className={cx("post-heading")}>
                    Thông tin chuyên mục
                  </span>
                  <div>
                    <div className={cx("post-item")}>
                      <div className={cx("post-title")}>Tên chuyên mục</div>
                      <input type="text" className={cx("post-input")} />
                    </div>
                    <div className={cx("post-item")}>
                      <div className={cx("post-title")}>Trạng thái</div>
                      <select className={cx("post-select", "post-input")}>
                        <option className={cx("post-option", "post-input")}>
                          Hiển thị
                        </option>
                        <option className={cx("post-option", "post-input")}>
                          Ẩn
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className={cx("post-btn")}>
                    <Add name={"Thêm mới"} />
                    <Close />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default NewCategory;
