'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TodoSchema = new Schema({
  content:          String,
  responsible_user: String,
  registrant_user:  String,
  limit:            Date,
  created_at:       { type: Date, default: Date.now },
  updated_at:       Date,
  deleted_at:       Date
});

module.exports = mongoose.model('Todo', TodoSchema);