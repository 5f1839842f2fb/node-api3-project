const express = require('express');
const router = express.Router();

const db = require('./postDb')
const mw = require('../middleware')
router.use(mw.logger)

router.get('/', (req, res) => {
  res.status(200).send('hello from postRouter')
});

router.use('/:id', mw.validateUserId)

router.get('/:id', (req, res) => {
  res.status(200).send(req.user)
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
