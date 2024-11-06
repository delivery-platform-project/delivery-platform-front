import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Shop from "../pages/shop/Shop";
import Join from "../pages/Join/Join";
import Main from "../pages/Main/Main";
import Navbar from "../common/Navbar/Navbar";
import BookMark from "../pages/BookMark/BookMark";
import Myinfo from "../pages/MyInfo/Myinfo";
import Order from "../pages/Order/Order";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/shop/:id" element={<Shop />} />
                <Route path="/bookmark" element={<BookMark />} />
                <Route path="/myInfo" element={<Myinfo />} />
                <Route path="/order" element={<Order />} />
            </Routes>
            <Navbar />
        </div>
    );
};

export default Router;
