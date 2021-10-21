const express = require('express');
const path = require('path');

const app = express();

app.use('/index.css', express.static(path.join(__dirname, '../index.css')));
app.use('/index.js', express.static(path.join(__dirname, '../index.js')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
})

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})