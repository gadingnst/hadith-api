import Fs from 'fs'
import { Browser as IBrowser } from 'puppeteer'
import { BASEURL, Browser } from './config'
import { sleep, range } from './utils'

const { writeFile } = Fs.promises

const _ = (async () => {
  await getAllHaditsByName('nasai', 358, 10)
  console.log('> We were done!')
})()

type Data = {
  number: number
  arab: string
  id: string
}

async function getAllHaditsByName(haditsName: string, maxPage: number, worker = 5, headless = true): Promise<void> {
  console.log(`> Get started to crawl HR.${haditsName.toUpperCase()}..`)
  
  let data: Data[] = []
  const browser = await Browser(headless)
  const max = Math.ceil(maxPage / worker)
  const fileName = `./books/${haditsName}.json`

  for (let i = 1; i <= max; i++) {
    const offset = ((i - 1) * worker) + 1
    const limit = i * worker
    const pages = range(offset, limit)
    console.log(`> Getting on page: ${pages.join(',')}`)
    const hadits = await Promise.all(pages.map(page => 
      getHadits(browser, haditsName, page)
    ))
    data = [...data, ...hadits.flat(1)]
    console.log('> Done')
    await sleep({ delay: 500 })
  }

  browser.close()
  console.log(`\n> Writing to ${fileName}..`)
  await writeFile(fileName, JSON.stringify(data, null, 2))
  console.log(`> Crawl HR.${haditsName.toUpperCase()} Done!\n`)
}

async function getHadits(browser: IBrowser, haditsName: string, num: number): Promise<Data[]> {
  const page = await browser.newPage()
  await page.goto(`${BASEURL}/hadits/${haditsName}?page=${num}`, { waitUntil: 'load' })
  const hadits = await page.evaluate(() => {
    const exists = document.querySelector('.panel.panel-default')
    if (exists) {
      const target: any = document.querySelector('.container-fluid > .col-md-6 > .row')
      const data: Data[] = [...target.children].reduce((acc: Data[], panel: HTMLElement) => {
        const haditsNumber = <string>panel.querySelector('h2.title-header > a')?.textContent
        if (haditsNumber) {
          const panelBody: any = panel.querySelector('div.panel-body')
          const plainArab = <string>panelBody?.querySelector('p.arabic')?.textContent
          const id = <string>panelBody?.querySelectorAll('p')[1].textContent
          const number = parseInt(haditsNumber.replace(/[A-Za-z]/gi, '').trim(), 10)
          const arab = unescape(escape(plainArab).replace(/%0A/gi, ''))
          acc.push({ number, arab, id })
        }
        return acc
      })
      return data
    }
    return []
  })
  page.close()
  return hadits
}

// async function getHaditsList() {
//   const browser = await Browser()
//   const page = await browser.newPage()
//   await page.goto(BASEURL + '/hadits', { waitUntil: 'load' })
//   const listHadits = await page.evaluate(() => {
//     const target: any = document.querySelector('.container-fluid > .col-md-6 > .row')
//     const data = [...target.children].map((elem: HTMLElement) => {
//       const name = elem.querySelector('h3 > a')?.textContent
//       const amount = <string>elem.querySelector('div.text-muted')?.textContent?.split(/\s+/)[0]
//       const numberOfHadits = parseInt(amount, 10)
//       return { name, numberOfHadits }
//     })
//     return data
//   })
//   browser.close()
//   return listHadits
// }
