import mongoose from "mongoose"
import ProductosEsquema from "./ProductosEsquema.js"

const ProductosModelo = mongoose.model('productos', ProductosEsquema)


const obtenerTodos = async() => {

    try {
        const productos = await ProductosModelo.find()
        return productos
    } catch (error) {
        console.log('[obtenerTodos]', error)
    }
}

const obtenerUnProducto = async (id) => {
    try {
        const prducto = await ProductosModelo.findById(id)
        console.log(producto)
        return producto
    } catch (error) {
        console.log('[obtenerUnProducto]', error)
    }
}

const crearProducto = async (producto) => {
    
    try {
        const productoCreado = await ProductosModelo.create(producto)
        return productoCreado
    } catch (error) {
        console.log('[crearProducto]', error)
    }
}

const updateProducto = () => {
    
}

const deleteProducto = async (id) => {
    
    try {
        const productoBorrado = await ProductosModelo.findByIdAndDelete(id)
        return productoBorrado
    } catch (error) {
        console.log('[deleteProducto]', error)
    }
}


export default {
    obtenerTodos,
    obtenerUnProducto,
    crearProducto,
    updateProducto,
    deleteProducto
}