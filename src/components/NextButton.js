import React from 'react';

const NextButton = props => (
	<div>
		<button onClick={ props.handleQuote } className='fa fa-angle-double-right'></button>
	</div>
);

export default NextButton;
