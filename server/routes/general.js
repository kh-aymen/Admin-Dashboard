import express from 'express'
import { getUser } from '../controllers/general.js'

const routes = express.Router() 

routes.get('/user/:id', getUser)

export default routes