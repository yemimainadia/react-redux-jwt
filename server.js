require('dotenv').config()
const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(bodyParser.json());

generateToken = (data) => {
    return jwt.sign(data, process.env.APP_JWT_SECRET);
}

app.post('/login', (req, res) => {
    console.log(req);
    if (req.body.username === 'mima' && req.body.password === 'tes123') {
        const user = {
            username: req.body.username
        }
        res.statusCode = 201
        res.json({
            code: 201,
            message: "success",
            data: {
                token: generateToken(user)
            }
        })
    } else {
        res.statusCode = 404
        res.json({
            code: 404,
        })
    }
});

console.log('testAPI');

app.listen(process.env.PORT);
module.exports = app;