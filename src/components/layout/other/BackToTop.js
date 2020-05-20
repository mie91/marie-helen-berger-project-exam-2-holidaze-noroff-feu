import React from "react";
import IconUp from "../../../assets/icons/black/icon_up.png";

const BackToTop = function () {
    function ScrollToTop() {
        window.scrollTo({ behavior: "smooth", top: 0 });
    }

    return  <div className="toTop">
                <button className="toTop__button" onClick={ScrollToTop}><img className="toTop__icon" src={IconUp} alt="Up arrow" /></button>
            </div>;
};

export default BackToTop;