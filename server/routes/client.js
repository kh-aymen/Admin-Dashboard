import express from 'express'
import { getProducts, getCustomers } from '../controllers/client.js'
const routes = express.Router()

routes.get('/products', getProducts)
routes.get('/customers', getCustomers)

export default routes   