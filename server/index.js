import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import clientRoutes from './routes/client.js'
import managementRoutes from './routes/management.js'
import generalRoutes from './routes/general.js'
import salesRoutes from './routes/sales.js'

// DATA imports //
import User from './models/User.js'
import Product from './models/Product.js'
import ProductStat from './models/ProductStat.js'
import { dataUser, dataProduct, dataProductStat } from './data/index.js'

// CONGIGURATION //
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// ROUTES //
app.use('/client', clientRoutes)
app.use('/general', generalRoutes)
app.use('/management', managementRoutes)
app.use('/sales', salesRoutes)

// MONGOOSE SETUP //
const PORT = process.env.PORT
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server Runing:http://localhost:${PORT}`))
        // ONLY ADD DATA ONE TIME HERE //
        // User.insertMany(dataUser) 
        // Product.insertMany(dataProduct)
        // ProductStat.insertMany(dataProductStat)
    })
    .catch(error => console.log(`Did not connect ${error}`))