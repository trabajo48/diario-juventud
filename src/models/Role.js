const { Schema, model } = require("mongoose");

export const ROLES = ["admin", "moderator"];

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

module.exports = model("Role", roleSchema);
// {} [] || \\
