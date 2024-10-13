import mongoose from "mongoose";

const ProductosEsquema = mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    marca: String,
    categoria: String,
    detalles: String,
    envio: Boolean
})

export default ProductosEsquema