const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
require('dotenv').config();

app.use(express.static(__dirname + "/src"));

app.get('/', function (req, res) {
    //   res.send('hello world')
    res.sendFile(__dirname + "/src/index.html");
})

const PORT = process.env.PORT || 3000;
server.listen(PORT);