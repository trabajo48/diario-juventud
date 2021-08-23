const Categoria = require('../models/Categoria');

export const createCategorias = async () => {
    try {
        const count = await Categoria.estimatedDocumentCount();

        if (count > 0) return;

        const values = await Promise.all([
            new Categoria({ name: "internacional" }).save(),
            new Categoria({ name: "nacional" }).save(),
            new Categoria({ name: "tlaxcala" }).save(),
            new Categoria({ name: "nativitas" }).save(),
            new Categoria({ name: "deportes" }).save(),
            new Categoria({ name: "actualidad" }).save()
        ]);
        
        console.log(values)
    } catch (error) {
        console.error(error);
    }
};