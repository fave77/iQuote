const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./app/routes/quotes.route');
const port = process.env.PORT || 8000;
const app = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router(app);

app.listen(port, _ => {
	console.log(`Server is listening on port: ${port}`);
});
