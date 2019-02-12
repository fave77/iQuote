const quotes = require('../models/quotes.model');

validate_limit = (limit, res) => {
	let req_limit = parseInt(limit);
	if(typeof limit == 'undefined') {
		return ({
			report: true,
			limit: quotes.length
		});
	} else if(isNaN(req_limit) || req_limit < 0) {
		res.status(400);
		res.json({
			'Error': 'Invalid Limit!',
			'Message': 'Please pass a non-negative integer'
		});
		return ({
			report: false,
		});
	} else if(req_limit > quotes.length) {
		res.status(400);
		res.json({
			'Error': 'Maximum Limit Exceeded!',
			'Maximum Limit': quotes.length,
			'Requested Limit': req_limit
		});
		return ({
			report: false,
		});
	} else {
		return ({
			report: true,
			limit: req_limit
		});
	}
};

const validate_author = (author, quotes, res) => {
	let filter_quotes = [];
	author = (typeof author == 'undefined') ? '' : author;
	for(let i = 0; i < quotes.length; i++)
		(quotes[i].author.toLowerCase().includes(author.toLowerCase()))
			&& filter_quotes.push(quotes[i]);
	if(filter_quotes.length || !quotes.length) {
		return ({
			report: true,
			filter_quotes: filter_quotes
		});
	} else {
		res.status(404);
		res.json({
			'Error': 'Author Not Found!',
			'Requested Author': author
		});
		return ({
			report: false,
		});
	}
};

exports.serveMultiple = (req, res) => {
	const limit_validation = validate_limit(req.query.limit, res);
	if(!limit_validation.report) return 0;
	let limit = limit_validation.limit;
	const avail_quotes = quotes.slice();
	const filter_quotes = [];
	const author_validation = validate_author(req.query.author, avail_quotes, res);
	if(!author_validation.report) return 0;
	if(limit < author_validation.filter_quotes.length) {
		while(limit) {
			let index = Math.floor(Math.random() * author_validation.filter_quotes.length);
			filter_quotes.push(author_validation.filter_quotes.splice(index, 1)[0]);
			limit--;
		}
		res.status(200);
		res.json(filter_quotes);
	} else {
		res.status(200);
		res.json(author_validation.filter_quotes);
	}
};

exports.serveSingle = (req, res) => {
	const author_validation = validate_author(req.params.author, quotes, res);
	if(!author_validation.report) return 0;
	const filter_quotes = author_validation.filter_quotes;
	res.status(200);
	res.json(filter_quotes[Math.floor(Math.random() * filter_quotes.length)])
};
