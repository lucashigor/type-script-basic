import { Request, Response } from 'express'

import User from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const { page = 1 } = req.query

    const users = await User.paginate({}, { page, limit: 10 })

    return res.json(users)
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const user = await User.findById(req.params.id)

    return res.json(user)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })

    return res.json(user)
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    await User.findByIdAndDelete(req.params.id)

    return res.json(true)
  }
}

export default new UserController()
