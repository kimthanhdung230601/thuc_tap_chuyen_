import { faGear, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Config from "../../../component/Admin/Config";
import Heading from "../../../component/Admin/Heading";
import Nav from "../../../component/Admin/Nav";
import Title from "../../../component/Admin/Title";
import BankSetting from "./BankSetting";
import GeneralInfor from "./GeneralInfor";
import ProductSetting from "./ProductSetting";
import styles from "./Setting.module.scss";
import VirtualTrading from "./VirtualTrading";

const cx = classNames.bind(styles);

function Setting() {
  const handleClickSelect = (event) => {
    const elementClicked = event.target;
    const heading = document.getElementsByClassName("heading");

    const content = document.getElementsByClassName("content");

    for (var i = 0; i < heading.length; i++) {
      heading[i].style.borderBottom = "solid 2px rgba(0, 0, 0, 0.1)";
      content[i].style.display = "none";
    }
    elementClicked.style.borderBottom = "solid 2px var(--primary)";
    document.getElementById(`${elementClicked.id}-content`).style.display =
      "block";
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <Row>
          <Col sm={2} className={cx("col-custom-3")}>
            <Nav />
          </Col>
          <Col sm={10} className={cx("col-custom-3")}>
            <Title title={"Cài đặt"} icon={faGear} />
            <div className={cx("container-wrapper")}>
              <div className={cx("container-heading")}>
                <div onClick={handleClickSelect} className={cx("heading-wrap")}>
                  <Heading
                    title={"Thông tin chung"}
                    id={"infor"}
                    className="heading"
                  />
                </div>
                <div onClick={handleClickSelect} className={cx("heading-wrap")}>
                  <Heading
                    title={"Hiển thị sản phẩm"}
                    id={"product"}
                    className="heading"
                  />
                </div>
                <div onClick={handleClickSelect} className={cx("heading-wrap")}>
                  <Heading
                    title={"Giao dịch ảo"}
                    id={"trans"}
                    className="heading"
                  />
                </div>
                <div onClick={handleClickSelect} className={cx("heading-wrap")}>
                  <Heading
                    title={"Ngân hàng auto"}
                    id={"bank"}
                    className="heading"
                  />
                </div>
              </div>
              <div
                id="infor-content"
                style={{ display: "block" }}
                className="content"
              >
                <GeneralInfor />
              </div>

              <div
                id="product-content"
                style={{ display: "none" }}
                className="content"
              >
                <ProductSetting />
              </div>

              <div
                id="trans-content"
                style={{ display: "none" }}
                className="content"
              >
                <VirtualTrading />
              </div>

              <div
                id="bank-content"
                style={{ display: "none" }}
                className="content"
              >
                <BankSetting />
              </div>
              <Config />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Setting;
