const PORT = 3001

const express = require('express')
const router = require('./router/')

const app = express()
app.use(router)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
