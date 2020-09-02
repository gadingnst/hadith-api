import Puppeteer from 'puppeteer'
import Dotenv from 'dotenv'

Dotenv.config()

type Env = {
  [variable: string]: string
}

export const {
  BASEURL,
  NODE_ENV
} = process.env as Env

export const Browser = (headless = true) => Puppeteer.launch({
  headless,
  ignoreHTTPSErrors: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
})
