const express = require('express');

const cors = require('cors')

const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const jsonParser = bodyParser.json({extended: true})
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(cors())

app.post("/calculate", (req, res, next) => {
    const { firstNumber, secondNumber } = req.body;
    const sum = firstNumber + secondNumber;
    res.json({sum})
})

app.listen(8000, () => {
    console.log('server running at port 8000')
})
