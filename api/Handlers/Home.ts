import { Request, Response } from 'express'
import Handler from './BaseHandler'

class HomeHandler extends Handler {

  public index(req: Request, res: Response): void {
    try {
      res.status(200).send({
        maintaner: 'Sutan Gading Fadhillah Nasution <sutan.gnst@gmail.com>',
        source: 'https://github.com/sutanlab/hadith-api',
        endpoints: {
          list: {
            pattern: 'https://api.hadith.sutanlab.id/books',
            description: 'Returns the list of available Hadith Books.'
          },
          hadith: {
            pattern: 'https://api.hadith.sutanlab.id/books/{name}?range={number}-{number}',
            example: 'https://api.hadith.sutanlab.id/books/muslim?range=1-150',
            description: 'Returns hadiths by range of number. (Note: For performance reasons, max accepted range: 300)'
          },
          spesific: {
            pattern: 'https://api.hadith.sutanlab.id/books/{name}/{number}',
            example: 'https://api.hadith.sutanlab.id/books/bukhari/52',
            description: 'Returns spesific hadith.'
          }
        }
      })
    } catch (err) {
      this.handleHttpError(req, res, err)
    }
  }

}

export default new HomeHandler()