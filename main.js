window.onload = init;
var num;


var view = {
    displayQuote: function(quote){
        //Code for displaying quote
        var q = document.getElementById("quote");
        q.innerHTML = quote;
    },
    displayPerson: function(person){
        //Code for displaying person
        var p = document.getElementById("person");
        p.innerHTML = "-" + person;
    },
    displayColor: function(colour){
        //Code for displaying color
        document.getElementsByTagName("body")[0].style.backgroundColor = colour;
        document.getElementById("access").style.backgroundColor = colour;
        document.getElementById("person").style.color = colour;
        document.getElementById("quote").style.color = colour;
        document.getElementsByClassName("fa fa-twitter")[0].style.backgroundColor = colour;
    }
}


var model = {
    //Storage for colors
    colors: ["#7083CB", "#708C3B", "#B38066", "#66B380", "#8B7D6B", "#008B8B", "#FF7F50"],
    //Storage for quotes
    quotes: ["Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.",
            "You miss 100% of the shots you don’t take.",
            "Life is what happens to you while you’re busy making other plans.",
            "Every child is an artist.  The problem is how to remain an artist once he grows up.",
            "Start where you are. Use what you have.  Do what you can.",
            "I didn’t fail the test. I just found 100 ways to do it wrong.",
            "Build your own dreams, or someone else will hire you to build theirs.",
            "It does not matter how slowly you go as long as you do not stop.",
            "If you do what you’ve always done, you’ll get what you’ve always gotten.",
            "Either write something worth reading or do something worth writing.",
            "Expect problems and eat them for breakfast.",
            "Pain is just weakness leaving your body.",
            "We have just enough religion to make us hate, but not enough to make us love one another",
            "There is nothing permanent except change"
            ],
    //Storage for persons
    persons: ["Robert Frost",
            "Wayne Gretzky",
            "John Lennon",
            "Pablo Picasso",
            "Arthur Ashe",
            "Benjamin Franklin",
            "Farrah Gray",
            "Confucius",
            "Tony Robbins",
            "Benjamin Franklin",
            "Alfred A. Montapert",
            "Gen Lewis B. Puller",
            "Jonathan Swift",
            "Heraclitus"
            ]
}


var controller = {
    generator: function() {
        var index = Math.floor(Math.random()*model.quotes.length);
        if(index === num){
            if(index === 0)
                index++;
            else
                index--;
        }
        var indexcolor = Math.floor(Math.random()*model.colors.length);
        view.displayColor(model.colors[indexcolor]);
        view.displayPerson(model.persons[index]);
        view.displayQuote(model.quotes[index]);
        document.getElementById("tweet").setAttribute("href", ("https://twitter.com/intent/tweet?hashtags=quotes&text=\"" + model.quotes[index] + "\"    - " + model.persons[index]));
        num = index;
    }


}

function init() {
    controller.generator();
    button = document.getElementById("access");
    button.onclick = controller.generator;
}