import express from 'express'
import { getAdmins } from '../controllers/management.js'

const routes = express.Router()

routes.get('/admins', getAdmins)

export default routes