import React from 'react';

const TweetButon = props => (
	<div>
		<button onClick = { props.handleTweet } className = 'fa fa-twitter'></button>
	</div>
);

export default TweetButon;
