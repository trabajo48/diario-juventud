const { Schema, model } = require("mongoose");

const categoriaSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

module.exports = model("Categoria", categoriaSchema);
// {} [] || \\
