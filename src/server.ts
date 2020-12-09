import { Request, Response } from "express";
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')



const app = express();

app.use(bodyParser.json())
app.use(cors())

app.post("/calculate", (req: Request, res: Response) => {
    const firstNumber: number = req.body.firstNumber;
    const secondNumber: number = req.body.secondNumber;
    const sum = firstNumber + secondNumber;
    res.json({sum})
})

app.listen(8000, () => {
    console.log('server running at port 8000')
})


export {}