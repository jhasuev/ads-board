const PORT = 3001

const express = require('express')
const cors = require('cors')
const router = require('./router/')

const app = express()
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use(router)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
