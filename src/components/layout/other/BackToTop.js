import React from "react";
import { FiArrowUp } from "react-icons/fi"

const BackToTop = function () {
    function ScrollToTop() {
        window.scrollTo({ behavior: "smooth", top: 0 });
    }

    return  <div className="to-top">
                <button className="to-top__button" onClick={ScrollToTop}>
                    <FiArrowUp aria-label="Arrow pointing up icon" size={30}/>
                </button>
            </div>;
};

export default BackToTop;