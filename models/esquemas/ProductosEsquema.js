import mongoose from "mongoose";

const ProductosEsquema = mongoose.Schema(
    {
        nombre: {
            type: String,
            require: true
        },    
        precio: Number,
        stock: Number,
        marca: String,
        categoria: String,
        detalles: String,
        envio: Boolean
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export default ProductosEsquema