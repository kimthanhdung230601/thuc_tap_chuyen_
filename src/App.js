import { Route, Routes } from "react-router-dom";
import "./App.scss";
// import "../node_modules/react-bootstrap/scss"
import Nav from "./component/Admin/Nav";
import Title from "./component/Admin/Title";
import Activity from "./page/admin/ActivityLog";
import Discount from "./page/admin/Discount";
import Member from "./page/admin/Members";
import NewPost from "./page/admin/NewPost";
import Noti from "./page/admin/Noti";
import Pay from "./page/admin/Pay";
import Posts from "./page/admin/Posts";
import Security from "./page/admin/Security";
import Setting from "./page/admin/Setting/index.js";
import Trans from "./page/admin/Setting/Trans";
import Account from "./page/user/Account";
import Intro from "./page/user/Intro";
import Header from "./page/user/Intro";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Intro />} />
        <Route path={"/user"} element={<Account />} />
        <Route path={"/activity"} element={<Activity />} />
        <Route path={"/discount"} element={<Discount />} />
        <Route path={"/member"} element={<Member />} />
        <Route path={"/post"} element={<Posts />} />
        <Route path={"/newpost"} element={<NewPost />} />
        <Route path={"/notification"} element={<Noti />} />
        <Route path={"/pay"} element={<Pay />} />
        <Route path={"/setting"} element={<Setting />} />
        <Route path={"/security"} element={<Security />} />
        <Route path={"/user"} element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
