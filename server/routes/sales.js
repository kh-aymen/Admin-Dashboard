import express, { Router } from 'express'
import { getSales } from '../controllers/sales.js'


const routes = express.Router()

routes.get("/sales", getSales)

export default routes