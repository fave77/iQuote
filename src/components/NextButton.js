import React from 'react';

const NextButton = props => (
	<div>
		<button onClick = { props.handleQuote } className = 'fa fa-arrow-circle-right'></button>
	</div>
);

export default NextButton;
