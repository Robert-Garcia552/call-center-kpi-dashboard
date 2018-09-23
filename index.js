const express = require('express');
const axios = require('axios');
const app = express();

var port = process.env.PORT || 5000;

app.get('/api/data', (req, res) => {
    let chartData = [
        {x: 'Sunday', y: Math.floor(Math.random() * 20)},
        {x: 'Monday', y: Math.floor(Math.random() * 20)},
        {x: 'Tuesday', y: Math.floor(Math.random() * 20)},
        {x: 'Wednesday', y: Math.floor(Math.random() * 20)},
        {x: 'Thursday', y: Math.floor(Math.random() * 20)},
        {x: 'Friday', y: Math.floor(Math.random() * 20)},
        {x: 'Saturday', y: Math.floor(Math.random() * 20)}
    ]
    res.send(chartData)
});

app.listen(port, function() {
    console.log(`Listening on port ${port}!`)
    })