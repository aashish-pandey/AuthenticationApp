var express = require('express')

var signup = require('./signup')
var authenticate = require('./authenticate')
app = express()

const PORT = process.env.PORT || 3030;

app.listen(PORT, function(){
    console.log("Authentication system is running")
})

app.get('/', signup)

app.get('/welcome', authenticate)