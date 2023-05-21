import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ReactPaginate from "react-paginate";
import Activity from "./page/admin/ActivityLog";
import Discount from "./page/admin/Discount";
import Member from "./page/admin/Members";
import NewPost from "./page/admin/Posts/NewPost";
import Noti from "./page/admin/Noti";
import Pay from "./page/admin/Pay";
import Posts from "./page/admin/Posts";
import Security from "./page/admin/Security";
import Setting from "./page/admin/Setting/index.js";
import Account from "./page/user/Account";
import Intro from "./page/user/Intro";
import Product from "./page/admin/Product";
import New from "./page/admin/Product/New";
import Category from "./page/admin/Product/Category";
import NewCategory from "./page/admin/Product/Category/New";
import OrderList from "./page/admin/Product/OrderList";
import Dashboard from "./page/admin/Dashboard";
import Balance from "./page/admin/Balance";
import Sign_client from "./page/user/Sign/Sign";
import NewDiscount from "./page/admin/Discount/New";

// import Sign from "./page/admin/Sign/Sign";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/chippisoft"} element={<Intro />} />
        <Route path={"/sign"} element={<Sign_client />} />
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/user"} element={<Account />} />
        <Route path={"/activity"} element={<Activity />} />
        <Route path={"/balance"} element={<Balance />} />
        <Route path={"/discount"} element={<Discount />} />
        <Route path={"/discount/new"} element={<NewDiscount />} />
        <Route path={"/member"} element={<Member />} />
        <Route path={"/post"} element={<Posts />} />
        <Route path={"/newpost"} element={<NewPost />} />
        <Route path={"/notification"} element={<Noti />} />
        <Route path={"/pay"} element={<Pay />} />
        <Route path={"/setting"} element={<Setting />} />
        <Route path={"/security"} element={<Security />} />
        <Route path={"/user"} element={<Account />} />
        <Route path={"/product/list"} element={<Product />} />
        <Route path={"/product/new"} element={<New />} />
        <Route path={"/product/category"} element={<Category />} />
        <Route path={"/product/category/new"} element={<NewCategory />} />
        <Route path={"/product/order"} element={<OrderList />} />
      </Routes>
    </div>
  );
}

export default App;
