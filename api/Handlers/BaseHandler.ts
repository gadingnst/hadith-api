import { Request, Response } from 'express'
import Http, { HttpResponse } from '../Helpers/Http'
import HttpError from '../Helpers/HttpError'

class Handler {
  protected sendHttp<T>(res: Response, data: HttpResponse<T>): Response {
    return Http.send(res, data)
  }

  protected setHttpError({ code, message }: HttpResponse<undefined>): void {
    throw new HttpError(code, message)
  }

  protected handleHttpError(req: Request, res: Response, error: Error): Response {
    return HttpError.handle(req, res, error)
  }
}

export default Handler