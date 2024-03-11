import express from 'express'
import {
    getProducts,
    getCustomers,
    getTransactions,
    getGeography
} from '../controllers/client.js'
const routes = express.Router()

routes.get('/products', getProducts)
routes.get('/customers', getCustomers)
routes.get('/transactions', getTransactions)
routes.get('/geography', getGeography)

export default routes   