"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROLES = void 0;

var _require = require("mongoose"),
    Schema = _require.Schema,
    model = _require.model;

var ROLES = ["admin", "moderator"];
exports.ROLES = ROLES;
var roleSchema = new Schema({
  name: String
}, {
  versionKey: false
});
module.exports = model("Role", roleSchema); // {} [] || \\