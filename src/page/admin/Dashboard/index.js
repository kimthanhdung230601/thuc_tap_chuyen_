import Header from "../../../component/Admin/Header/header";
import Nav from "../../../component/Admin/Nav";
import General from "../../../component/Admin/General_infor/general_infor";
import Total from "../../../component/Admin/Total_money/Total_money";
import Statistic from "../../../component/Admin/Statistic/statistic";
import Title from "../../../component/Admin/Title/index";
import Transaction from "../../..//component/Admin/transaction/transaction";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { faGauge } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Dashboard() {
  const location = useLocation();
  const name = location.pathname;
  let router = name.substring(1);

  return (
    <div>
      <Row style={{ padding: "0" }}>
        <div className={cx("col-custom")}>
          <Nav path={router} />
        </div>

        <Col className="col-lg-12" id="content">
          <Header />
          <div className={cx("content")}>
            <Title title={"Bảng điều khiển"} icon={faGauge} />
            <General />
            <Total />
            <Transaction />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
