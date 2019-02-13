## Documentation

Although, this API has been developed for **iQuote** still it can also be used for 3rd party projects!

#### Request /GET multiple quotes
- https://iquote101.herokuapp.com/quotes - return all the quotes
- https://iquote101.herokuapp.com/quotes?limit=5 - return only 5 quotes
- https://iquote101.herokuapp.com/quotes?author=benjamin+franklin - returns all the quotes by *Benjamin Franklin*
- https://iquote101.herokuapp.com/quotes?author=benjamin+franklin&limit=1 - return only 1 quote by *Benjamin Franklin*

#### Request /GET single quote
- https://iquote101.herokuapp.com/quote/pablo%20picasso - return a quote by *Pablo Picasso*

#### Sample Response
- Request: 
  - https://iquote101.herokuapp.com/quotes?limit=5
- Response:
```json
[
  {
    "quote":"Life is what happens to you while you’re busy making other plans.",
    "author":"John Lennon"
  },
  {
    "quote":"I didn’t fail the test. I just found 100 ways to do it wrong.",
    "author":"Benjamin Franklin"
  },
  {
    "quote":"Start where you are. Use what you have. Do what you can.",
    "author":"Arthur Ashe"
  },
  {
    "quote":"There is nothing permanent except change.",
    "author":"Heraclitus"
  },
  {
    "quote":"You miss 100% of the shots you don’t take.",
    "author":"Wayne Gretzky"
  }
]
```

###### Note: The quotes included in response object are random


## License

The MIT License 2019 - [Priyabrata Biswas](https://github.com/pbiswas101).
