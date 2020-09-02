# Hadith - API

> Simple Hadith API with Indonesia Translation.

## Deployed in: https://api.hadith.sutanlab.id

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
- [ ] Your requests ?

### Features
- [x] Arabic 
- [x] Indonesia Translation
- [ ] Your requests ?

### Endpoint usage
- [x] `/books` = Returns the list of available Hadith Books.
- [x] `/books/{surah}?range={number}-{number}` = Returns hadiths by range of number. **Example: `/books/muslim?range=300-500`**. *(Note: For performance reasons, max accepted range: 300)*
- [x] `/books/{name}/{number}` = Returns spesific hadith. **Example: `/books/bukhari/52`**
- [ ] Your requests ?

### Example Response
> Fetching on [HR. Muslim No. 5](https://api.hadith.sutanlab.id/books/muslim/5)

[![`/books/muslim/5`](https://raw.githubusercontent.com/sutanlab/hadith-api/master/screenshots/example-result.jpeg)](https://raw.githubusercontent.com/sutanlab/hadith-api/master/screenshots/example-result.jpeg)

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
- [Trakteer](https://trakteer.id/sutanlab)
- [Karyakarsa](https://karyakarsa.com/sutanlab)

---
Copyright © 2020 by Sutan Gading Fadhillah Nasution
