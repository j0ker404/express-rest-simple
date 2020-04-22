const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

/**
 * Lets make a simple joke rest
 * server
 * 
 */

let jokes = ['Today, my son asked "Can I have a book mark?" and I burst into tears. 11 years old and he still doesn\'t know my name is Brian.',
    'My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right.',
    'How do you make holy water? You boil the hell out of it.                ',
    'I bought some shoes from a drug dealer. I don\'t know what he laced them with, but I was tripping all day!',
]

// get request
app.get('/greet', function (req, res) {
    res.send('Hi there');
    console.log("Sending greeting");
});

app.get('/joke', (req, res) => {
    let index = Math.floor(Math.random() * jokes.length);
    res.json({
        joke: jokes[index]
    });
});



// start server
app.listen(port, () => {
    console.log(`Listening at: http://localhost:${port}`);
});