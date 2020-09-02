export const range = (start: number, end: number): number[] =>
  start === end ? [start] : [start, ...range(start + 1, end)]

export const sleep = async ({ delay = 2000, throwReject = false }) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (throwReject) reject({ timeout: true })
    else resolve()
  }, delay)
})

export default {
  range,
  sleep
}
