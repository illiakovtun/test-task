"use strict";
exports.__esModule = true;
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.post("/calculate", function (req, res) {
    var firstNumber = req.body.firstNumber;
    var secondNumber = req.body.secondNumber;
    var sum = firstNumber + secondNumber;
    res.json({ sum: sum });
});
app.listen(8000, function () {
    console.log('server running at port 8000');
});
