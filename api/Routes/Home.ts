import Router from './BaseRouter'
import Home from '../Handlers/Home'

class HomeRoute extends Router<typeof Home> {
  constructor() {
    super(Home)
  }

  public routes() {
    this.router.get('/', this.bindHandler(Home.index))
  }
}

export default new HomeRoute().router