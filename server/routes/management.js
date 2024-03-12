import express from 'express'
import { getAdmins, getUserPerformance } from '../controllers/management.js'

const routes = express.Router()

routes.get('/admins', getAdmins)
routes.get("/performance/:id", getUserPerformance)

export default routes