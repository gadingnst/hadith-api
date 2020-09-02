import Express, { Application } from 'express'
import Cors from 'cors'
import Routes from './api/Routes'

class Server {
  private application: Application
  private port: number | string

  constructor() {
    this.port = process.env.PORT || 3300
    this.application = Express()
    this.plugins()
    this.routes()
  }

  private plugins(): void {
    this.application.use(Express.urlencoded({ extended: true }))
    this.application.use(Express.json())
    this.application.use(Cors())
  }

  private routes(): void {
    this.application.use(Routes)
  }

  public run(): void {
    this.application.listen(this.port, () => {
      console.log(`Server listening on http://localhost:${this.port}`)
    })
  }
}

export default new Server().run()
