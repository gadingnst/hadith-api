import { Request, Response } from 'express'
import Http from '../Helpers/Http'
import BaseRouter from './BaseRouter'
import Home from './Home'
import Hadith from './Hadith'
import CacheMiddleware from '../Middlewares/Cache'

class Routes extends BaseRouter {
  public routes() {
    this.router.use('/', Home)
    this.router.use('/books', CacheMiddleware, Hadith)
    this.router.use('*', (req: Request, res: Response): void => {
      Http.send(res, {
        code: 404,
        message: 'Sorry, HTTP resource you are looking for was not found.',
        error: true
      })
    })
  }
}

export default new Routes().router