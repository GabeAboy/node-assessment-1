var express = require('express')
var bodyParser = require('body-parser')

var userCtrl = require('./userCtrl.js')
var app = module.exports = express()

app.use(bodyParser.json())
port = 3000



app.listen(port,()=>{
  console.log('Hello from port: ',port);
})
