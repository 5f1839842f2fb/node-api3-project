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

server.listen(5005, () => {
  console.log("listening on 5005")
})