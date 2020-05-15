const express = require('express')
const server = express()
const mw = require('./middleware')

const usersRoutes = require('./users/userRouter')

server.use(express.json())
server.use(mw.logger)

server.use('/api/users', usersRoutes)

server.use('/', (req, res) => {
  res.status(200).send('Hello')
})

const PORT = process.env.PORT || 5005;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})