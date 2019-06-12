import { Router } from 'express'
import UserController from './controllers/UsersController'

const routes = Router()

routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)
routes.get('/', (req, res) => {
  res.send('Hello World')
})

export default routes
