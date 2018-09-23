const express = require('express');
const axios = require('axios');
const app = express();

var port = process.env.PORT || 5000;

app.get('/api', async (req, res) => {
    let data = axios.get(``)
    res.send(data)
});

app.listen(port, function() {
    console.log(`Listening on port ${port}!`)
    })