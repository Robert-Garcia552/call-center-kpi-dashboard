const express = require('express');
const app = express();

var port = process.env.PORT || 5000;


app.use(express.static(__dirname + '/client/build'));

app.get('/api/data', (req, res) => {
    let chartData = [
        {x: 'Sunday', y: Math.floor(Math.random() * 20)},
        {x: 'Monday', y: Math.floor(Math.random() * 30)},
        {x: 'Tuesday', y: Math.floor(Math.random() * 30)},
        {x: 'Wednesday', y: Math.floor(Math.random() * 30)},
        {x: 'Thursday', y: Math.floor(Math.random() * 30)},
        {x: 'Friday', y: Math.floor(Math.random() * 50)},
        {x: 'Saturday', y: Math.floor(Math.random() * 50)}
    ]
    res.send(chartData)
});

app.get('/api/dashboard', (req, res) => {
    res.send(`${Math.floor(Math.random() * 40)}`);
})

app.listen(port, function() {
    console.log(`Listening on port ${port}!`)
    })