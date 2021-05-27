import express from 'express'
import router0150 from './routers/router0150'

const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.use('/0150', router0150)

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
