import React from "react";
import PropTypes from "prop-types";

function Search({ doSearch }) {
	return (
		<input
			className="search"
			placeholder="Search establishments"
			onChange={function (e) {
				doSearch(e.target.value);
			}}
		/>
	);
}

Search.propTypes = {
	doSearch: PropTypes.func.isRequired,
};

export default Search;
