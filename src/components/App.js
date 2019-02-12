import React from 'react';
import Quote from './Quote';
import Author from './Author';
import TweetButton from './TweetButton';
import NextButton from './NextButton';
import '../stylesheets/App.css';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			collections: [],
			index: 0,
			quote: '',
			author: ''
		};
	}

	componentDidMount() {
		fetch('https://iquote101.herokuapp.com/quotes')
			.then(res => res.json())
			.then(res => this.setState({
				collections: res
			}))
			.then(_ => this.handleQuote());
	}

	handleTweet() {
		const url = `https://twitter.com/intent/tweet?hashtags=quotes&text="${this.state.quote}" - ${this.state.author}`;
		window.open(url, '_blank');
	}

	handleQuote() {
		const collections = this.state.collections;
		this.setState({
			quote: collections[this.state.index]['quote'],
			author: collections[this.state.index]['author'],
			index: this.state.index < collections.length - 1 ? this.state.index + 1: 0,
		});
	}

  render() {
    return (
			<div>
				<main>
					<Quote msg = { this.state.quote } />
					<Author name = { this.state.author } />
				</main>
				<TweetButton handleTweet = { () => this.handleTweet() } />
				<NextButton handleQuote = { () => this.handleQuote() } />
			</div>
    );
	}

}

export default App;
