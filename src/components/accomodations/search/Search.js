import React from "react";
import PropTypes from "prop-types";

function Search({ doSearch }) {
	return (
		<>
		<div className="search">
		<input
			className="search__field"
			placeholder="Search accomodations"
			onChange={function (e) {
				doSearch(e.target.value);
			}}
		/>
		</div>
		</>
	);
}

Search.propTypes = {
	doSearch: PropTypes.func.isRequired,
};

export default Search;
