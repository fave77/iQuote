const controller = require('../controllers/quotes.controller');

module.exports = app => {
	app.get('/quotes', controller.serveMultiple);
	app.get('/quote/:author', controller.serveSingle);
};
