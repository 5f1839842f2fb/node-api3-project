const db = require('./users/userDb')

const logger = (req, res, next) => {
  const date = new Date();
  console.log(`-------------------------\nurl: ${req.originalUrl}\nmethod: ${req.method}\n${date.toISOString()}`);
  next();
}

const validateUserId = (req, res, next) => {
  db.getById(req.params.id)
  .then(response => {
    if (response !== undefined) {
      req.user = response
      next()
    } else {
      console.log('invalid user requested')
      res.status(400).json({ message: "invalid user id" })
    }
    
  })
  .catch(error => {
    console.log(error)
    res.status(500).send(error)
  })
}

const validateNewUser = (req, res, next) => {
  if (!("name" in req.body)) {
    res.status(400).json({ message: "missing name field"})
  } else {
    next()
  }
}

const validateNewPost = (req, res, next) => {
  if (!("user_id" in req.body)) {
    res.status(400).json({ message: "missing user_id field"})
  } else
  if (!("text" in req.body)) {
    res.status(400).json({ message: "missing text field"})
  } else {
    next()
  }
}

module.exports = {
  logger,
  validateUserId,
  validateNewUser,
  validateNewPost
}