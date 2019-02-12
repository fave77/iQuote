import React from 'react';

const NextButton = props => (
	<div>
		<button onClick = { props.handleQuote } className = 'fa fa-arrow-right'></button>
	</div>
);

export default NextButton;
