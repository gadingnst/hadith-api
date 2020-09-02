import { Request, Response } from 'express'
import Handler from './BaseHandler'
import Hadith from '../Models/Hadith'

class HadithHandler extends Handler {

  public index(req: Request, res: Response): void {
    try {
      const data = Hadith.available()
      this.sendHttp(res, {
        code: 200,
        message: `${data.length} books sent.`,
        data
      })
    } catch (err) {
      this.handleHttpError(req, res, err)
    }
  }

  public getByNumber(req: Request, res: Response): void {
    const { name, number } = req.params
    try {
      const parsedNumber = parseInt(number, 10)
      const hadithName = Hadith.beautyName(name)

      if (Number.isNaN(parsedNumber)) this.setHttpError({
        code: 400,
        message: 'Hadith number must be number.'
      })

      const hadith = Hadith.getByName(name)
      if (!hadith) this.setHttpError({
        code: 404,
        message: `${hadithName} not available.`
      })

      const contents = Hadith.getByNumber(hadith, parsedNumber)
      if (!hadith) this.setHttpError({
        code: 404,
        message: `HR. ${hadithName} No. ${parsedNumber} not available.`
      })

      this.sendHttp(res, {
        code: 200,
        message: `HR. ${hadithName} No. ${parsedNumber} sent.`,
        data: {
          name: `HR. ${hadithName}`,
          id: name,
          available: hadith.length,
          contents
        }
      })
    } catch (err) {
      this.handleHttpError(req, res, err)
    }
  }

  public getByName(req: Request, res: Response): void {
    const { name } = req.params
    const { range = '' } = req.query
    const [from, to] = (range as string).split('-')
      .map(num => {
        const parsed = parseInt(num, 10)
        return !Number.isNaN(parsed) ? parsed : null
      })
      
    try {
      const hadithName = Hadith.beautyName(name)
      if (from && to) {
        if (from < 1) this.setHttpError({
          code: 400,
          message: `Start range shouldn\'t below 1`
        })

        const requestedRange = (to - from) + 1
        if (requestedRange > 300) this.setHttpError({
          code: 400,
          message: `Reached max number of hadiths requested. Max: 300, but you request ${requestedRange}.`
        })

        const hadith = Hadith.getByName(name)
        if (!hadith) this.setHttpError({
          code: 404,
          message: `${hadithName} not available.`
        })
        
        const data = Hadith.getByNumberRange(hadith, from, to)
        const total = hadith.length
        const totalRequested = data.length
        if (to > total) this.setHttpError({
          code: 400,
          message: `Out of range hadith on ${hadithName}`
        })
        
        this.sendHttp(res, {
          code: 200,
          message: `${totalRequested} hadiths requested.`,
          data: {
            name: `HR. ${hadithName}`,
            id: name,
            available: total,
            requested: totalRequested,
            hadiths: data
          }
        })
      } else {
        this.setHttpError({
          code: 400,
          message: 'Format range doesn\'t match with {number-number}. Example: /books/bukhari?range=1-50'
        })
      }
    } catch (err) {
      this.handleHttpError(req, res, err)
    }
  }

}

export default new HadithHandler()