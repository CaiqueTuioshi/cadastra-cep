import {Request, Response} from 'express'

import Cep from '../schemas/Cep'

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
      if (req.body.cep < 100000 || req.body.cep > 999999) {
        throw new Error('O CEP deve ser um número maior que 100.000 e menor que 999.999')
      }
  
      const cep = await Cep.create(req.body)
  
      return res.json(cep)
    } catch (error) {      
      return res.status(400).json(error)
    }
  }

  public async edit (req: Request, res: Response): Promise<Response> {
    try {
      if (req.body.cep < 100000 || req.body.cep > 999999) {
        throw new Error('O CEP deve ser um número maior que 100.000 e menor que 999.999')
      }
  
      const cep = await Cep.findOneAndUpdate({_id: req.params.id}, req.body)

      return res.json(cep)
    } catch (error) {      
      return res.status(400).json(error)
    }
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const cep = await Cep.remove({ _id: req.params.id })

    return res.json('Cep removido com sucesso')
  }
}

export default new CepController()