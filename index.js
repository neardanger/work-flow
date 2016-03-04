function myName(name){
  return name
}

var express = require('express')
var mongoose = require('mongoose')

var app = express()

//changes in boilerplate-node


app.get('/home',function(req,res){
  Find({},function(err,home){
    res.json("Aersome")
  })
})


///
