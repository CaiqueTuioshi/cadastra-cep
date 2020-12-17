import {Request, Response} from 'express'

import Cep from '../schemas/Cep'
import { validaCep } from '../utils/CepValidation'

class CepController {
  public async findAll (req: Request, res: Response): Promise<Response> {
    const ceps = await Cep.find()

    return res.json(ceps)
  }

  public async findById (req: Request, res: Response): Promise<Response> {
    const cep = await Cep.findById(req.params.id)

    return res.json(cep)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    try {
      validaCep(req.body.cep)
  
      const cep = await Cep.create(req.body)
  
      return res.json(cep)
    } catch (error) {      
      if (error) {
       return res.status(400).json({errorMessage: error.toString().replace('Error:', '')})
      }
    }
  }

  public async edit (req: Request, res: Response): Promise<Response> {
    try {
      validaCep(req.body.cep)
  
      const cep = await Cep.findOneAndUpdate({_id: req.params.id}, req.body)

      return res.json(cep)
    } catch (error) {      
      return res.status(400).json({errorMessage: error.toString().replace('Error:', '')})
    }
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    await Cep.remove({ _id: req.params.id })

    return res.json({successMessage: 'Cep removido com sucesso'})
  }
}

export default new CepController()