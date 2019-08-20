require('dotenv').config();
var express = require('express');
var app = express();
var knex = require('../db/knex');
var bodyParser = require('body-parser');

exports.newItem = function(req, res, next) {
  // console.log(req.body);
  var item = req.body;
  item.images = JSON.stringify(item.images);
  
  knex('store')
  .insert(item)
  .then(function() {
    res.send('success')
  })
  .catch(function(err) {
    console.log(err);
  })
  
}

exports.getItems = function(req, res, send) {
  knex('store')
  .select('*')
  .then(function(data) {
    res.send(data)
  })
  .catch(function(err) {
    console.log(err);
  })
}
