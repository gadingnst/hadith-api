import { Request, NextFunction } from 'express'

const cache: any = {}

export default (req: Request, res: any, next: NextFunction) => {
  const key = req.url
  
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=86400, stale-while-revalidate')

  if (cache[key]) {
    return res.status(200).send(cache[key])
  }

  res.sendResponse = res.send
  res.send = (body: any) => {
    cache[key] = body
    res.sendResponse(body)
  }
  
  next()
}