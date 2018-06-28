import React from "react";

export const withLoadingIndicator = Component => props =>
	props.isLoading ? (
		<div>
			<p>Loading Cats ...</p>
		</div>
	) : (
		<Component {...props} />
	);
