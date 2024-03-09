import express from 'express'
import { getProducts, getCustomers, getTransactions } from '../controllers/client.js'
const routes = express.Router()

routes.get('/products', getProducts)
routes.get('/customers', getCustomers)
routes.get('/transactions', getTransactions)

export default routes   