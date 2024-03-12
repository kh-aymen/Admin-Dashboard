import express from 'express'
import { getUser, getDashboardStats } from '../controllers/general.js'

const routes = express.Router()

routes.get('/user/:id', getUser)
routes.get("/dashboard", getDashboardStats)

export default routes