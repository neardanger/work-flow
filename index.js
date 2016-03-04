function myName(name){
  return name
}

var express = require('express')
var mongoose = require('mongoose')

var app = express()
var bodyParser = require('body-parser')

//changes in boilerplate-node

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.get('/home',function(req,res){
  Find({},function(err,home){
    res.json("Aersome")
  })
})

/////////something to create conflict with
///////hahahahahahahahahhahhhahhhhhh
