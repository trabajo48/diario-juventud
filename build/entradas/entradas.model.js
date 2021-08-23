"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model,
    models = _require.models;

var entradaShema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: true
  },
  categoria: [{
    ref: 'Categoria',
    type: Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
});
module.exports = model('Entrada', entradaShema); // {} [] || \\