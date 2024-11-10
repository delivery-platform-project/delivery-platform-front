import React from "react";
import "./MyInfo.scss";
import MyInfoPage from "../../components/MyInfo/MyInfoPage/MyInfoPage";

const Myinfo = () => {
    return (
        <div className="my-Info-container">
            <div className="my-Info-wrap">
                <h1>내정보</h1>
                <div className="my-Info-box">
                    <img
                        className="my-Info-profile"
                        src="../../assert/user-icon.png"
                    ></img>
                    <div className="my-Info-box-wrap">
                        <p>냠냠</p>
                        <div className="my-Info-btn-box">
                            <div className="my-Info-btn">리뷰관리</div>
                            <div>주소관리</div>
                        </div>
                    </div>
                </div>
                <MyInfoPage/>
            </div>
        </div>
    );
};

export default Myinfo;
