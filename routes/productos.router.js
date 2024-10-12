import express from 'express'
const routerProductos = express.Router()

routerProductos.get('/', (req, res) => {
    res.send('ok -> GET ALL (READ))')
})

routerProductos.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    res.send('Ok -> GET ONE (READ))')
})

routerProductos.post('/', (req, res) => {
    const producto = req.body
    console.log(producto)
    res.status(201).send('Ok -> POST (CREATE)')
})

routerProductos.put('/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    const productoEditado = req.body
    console.log(productoEditado)
    res.send('Ok -> PUT (UPDATE)')
})

routerProductos.delete('/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    res.send('Ok -> DELETE (DELETE))')
})

export default routerProductos