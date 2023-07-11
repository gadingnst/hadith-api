# Hadith - API

> Simple Islamic Hadith API with Indonesia Translation.

### Deploy
Already deployed in [https://api.hadith.gading.dev] or you can deploy your own at:

[![Deploy your own with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%gadingnst%hadith-api)


### Data Source
- [x] [tafsirq.com](https://tafsirq.com/hadits)
- [ ] Your contribution ?

### Available Hadith
- [x] Muslim
- [x] Bukhari
- [x] Tirmidzi
- [x] Nasai
- [x] Abu Daud
- [x] Ibnu Majah
- [x] Ahmad
- [x] Darimi
- [x] Malik
- [ ] Your contribution ?

### Features
- [x] Arabic 
- [x] Indonesia Translation
- [ ] Your contribution ?

### Endpoint usage
- [x] `/books` = Returns the list of available Hadith Books.
- [x] `/books/{name}?range={number}-{number}` = Returns hadiths by range of number. **Example: [/books/bukhari?range=300-500](https://api.hadith.gading.dev/books/bukhari?range=300-500)**. *(Note: For performance reasons, max accepted range: 300)*
- [x] `/books/{name}/{number}` = Returns spesific hadith. **Example: [/books/muslim/5](https://api.hadith.gading.dev/books/muslim/5)**

### Example Response
> Fetching on [HR. Muslim No. 5](https://api.hadith.gading.dev/books/muslim/5)

[![`/books/muslim/5`](https://raw.githubusercontent.com/gadingnst/hadith-api/master/screenshots/example-result.png)](https://raw.githubusercontent.com/gadingnst/hadith-api/master/screenshots/example-result.png)

### Recommended Arabic Fonts 
- [quran.musil.com](http://quran.mursil.com/Web-Print-Publishing-Quran-Text-Graphics-Fonts-and-Downloads/fonts-optimized-for-quran)
- [Uthmani](https://groups.google.com/forum/#!topic/colteachers/Y6iKganK0tQ)

### Available Commands
- `yarn start` = run server.
- `yarn dev` = run develop server.
- `yarn crawl` = collect new data from the data source, then unifying it in one JSON file.

### LICENSE
MIT

## Support or Donate Me

### Global
[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B71P7PB)

### Indonesia
- Bank Syariah Mandiri [REK: 7142365973 (SUTAN GADING F NASUTION)]
- [Trakteer](https://trakteer.id/gadingnst)
- [Karyakarsa](https://karyakarsa.com/gadingnst)

---
Copyright © 2020 by Sutan Gading Fadhillah Nasution
