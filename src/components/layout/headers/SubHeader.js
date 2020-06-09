import React from 'react';
import PropTypes from "prop-types";

function SubHeader ({title}) {
    return (
        <h2 className="sub-header">{title}</h2>
    );
}

SubHeader.propTypes = {
    title: PropTypes.string.isRequired
 };

export default SubHeader;