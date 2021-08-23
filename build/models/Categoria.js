"use strict";

var _require = require("mongoose"),
    Schema = _require.Schema,
    model = _require.model;

var categoriaSchema = new Schema({
  name: String
}, {
  versionKey: false
});
module.exports = model("Categoria", categoriaSchema); // {} [] || \\