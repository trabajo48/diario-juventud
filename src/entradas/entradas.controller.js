const entradasCtrl = {};
const Entrada = require('./entradas.model');


entradasCtrl.createEntrada = async (req, res) => {

    const {title, author, description, isbn, text, categoria} = req.body;

    const newEntrada = new Entrada({title, author, description, isbn, text, categoria});

    const entradaSaved = await newEntrada.save()

    res.status(201).json(entradaSaved);
};

entradasCtrl.getEntradas = async (req, res) => {
    const entradas = await Entrada.find();
    res.json(entradas)
};

entradasCtrl.getEntradaById = async (req, res) => {
    const entrada = await Entrada.findById(req.params.entradaId);
    res.status(200).json(entrada)
};

entradasCtrl.getEntradaByTitle = async (req, res) => {
    const entrada = await Entrada.findOne(req.params.entradaTitle);
    res.status(200).json(entrada)
};

entradasCtrl.editEntradaById = async (req, res) => {
    const updateEntrada = await Entrada.findByIdAndUpdate(req.params.entradaId, req.body, {
        new: true
    })
    res.status(200).json(updateEntrada)
};

entradasCtrl.deleteEntradaById = async (req, res) => {
    const {entradaId} = req.params;
    await Entrada.findByIdAndDelete(entradaId)
    res.status(204).json()
};

module.exports = entradasCtrl;
// {} [] || \\