const PORT = 3001

const express = require('express')
const cors = require('cors')
const router = require('./router/')

const app = express()
app.use(router)
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
