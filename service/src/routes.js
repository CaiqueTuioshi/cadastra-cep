import {Router} from 'express'

import CepController from './controllers/CepController'

const routes = Router()

routes.get('/ceps', CepController.findAll)
routes.get('/ceps/:id', CepController.findById)
routes.post('/ceps', CepController.create)
routes.put('/ceps/:id', CepController.edit)
routes.delete('/ceps/:id', CepController.delete)

export default routes