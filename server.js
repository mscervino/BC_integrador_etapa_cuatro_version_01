import express from 'express'
import cors from 'cors'

import 'dotenv/config'
import routerProductos from './routes/productos.router.js'
import getConnection from './utils/get-connection.js'
import routerCarritos from './routes/carrito.router.js'

const app = express()
const PORT = process.env.PORT || 2222
const uri_remota = process.env.URI_MONGO

app.use(express.json())
app.use(cors())

app.use('/api/v1/productos', routerProductos)
app.use('/api/v1/carritos', routerCarritos)

app.get('/', (req, res) => {
  res.redirect('/api/v1/productos')
})

app.all('*', (req, res) => {
    res
        .status(404)
        .json ({
            ruta: '${req.url}',
            metodo: '${req.metod}',
            mensaje: 'No se puede acceder al recurso que están queriendo acceder'
        })
})

app.listen(PORT, (err) => {
    if ( err ) throw new Error('No se pudo levantar el servidor' , err)
    console.log(`Servidor funcionando en: http://localhost:${PORT}`)
    getConnection(uri_remota)
})