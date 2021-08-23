const { Schema, model } = require("mongoose");

const publicidadSchema = new Schema({
    title: {type: String, required: true },
    section: [{
        ref: 'Categoria',
        type: Schema.Types.ObjectId
    }],
    text: { type: String, required: false },
    created_at: { type: Date },
    imagePath: { type: String, required: false }
}, {
    versionKey: false
})

module.exports = model("Publicidad", publicidadSchema);