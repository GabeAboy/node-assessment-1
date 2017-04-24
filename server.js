var express = require('express')
var bodyParser = require('body-parser')

var userCtrl = require('./userCtrl.js')
var app = module.exports = express()

app.use(bodyParser.json())
port = 3000


app.get('/api/users',(req,res,next)=>{
  var users = userCtrl.readAll()
  res.status(200).send(users)
  
})
app.get('/api/users/:userId',function(req,res) {
  var id = Number(req.params.userId)

  var response = userCtrl.findUserById(id)

  if(response)res.status(200).send(response)
  else res.status(404).send()
})
app.get('/api/admins',(req,res)=>{
  var response = userCtrl.getAdmins()
  res.status(200).send(response)
})

app.get('/api/nonadmins',(req,res)=>{
  var response = userCtrl.getNonAdmins()
  res.status(200).send(response)
})
app.put('/api/users/:userId',(req,res,next)=>{
  var id = Number(req.params.userId)
  var obj = req.body
  console.log(obj);
  var response = userCtrl.updateUser(id,obj)
  res.status(200).send(response)

})
app.post('/api/users',(req,res,next)=>{
  res.status(200).send(userCtrl.createUser(req.body))
})
app.delete('/api/users/:userId',(req,res,next)=>{
    var id = Number(req.params.userId)
    var response = userCtrl.removeUser(id)
    res.status(200).send(response)

})

app.listen(port,()=>{
  console.log('Hello from port: ',port);
})
