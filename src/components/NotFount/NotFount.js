import React from 'react';
import notfountimg from "../../404.svg";
import "./NotFount.css";

const NotFount = () => {
    return (
        <div className="not-fount">
            <img src={notfountimg} alt="" />
            <h1>Page is Not Found</h1>
            <p>The page you want to go is not currently available</p>
            <div className="button-area">
            </div>
        </div>
    );
};

export default NotFount;