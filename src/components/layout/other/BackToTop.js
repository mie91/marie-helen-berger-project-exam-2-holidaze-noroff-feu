import React from "react";
import { FiArrowUp } from "react-icons/fi"

const BackToTop = function () {
    function ScrollToTop() {
        window.scrollTo({ behavior: "smooth", top: 0 });
    }

    return  <div className="toTop">
                <button className="toTop__button" onClick={ScrollToTop}>
                    <FiArrowUp size={30}/>
                </button>
            </div>;
};

export default BackToTop;