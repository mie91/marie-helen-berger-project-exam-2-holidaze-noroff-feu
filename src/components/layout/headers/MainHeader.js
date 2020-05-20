import React from 'react';
import PropTypes from "prop-types";

function MainHeader ({title}) {
    return (
        <h1 className="mainHeader">{title}</h1>
    );
}

    MainHeader.propTypes = {
        title: PropTypes.string.isRequired
    };

export default MainHeader;