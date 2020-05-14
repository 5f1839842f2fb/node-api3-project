const express = require('express');
const router = express.Router();

const db = require('./userDb')
const postdb = require('../posts/postDb')

const mw = require('../middleware')

router.use('/:id', mw.validateUserId)
router.post('/', mw.validateNewUser)
router.post('/:id/posts', mw.validateNewPost)

router.post('/', (req, res) => {
  db.insert(req.body)
  .then(response => {
    res.status(201).send(response)
  })
  .catch(error => {
    res.status(500).send(error)
  })
});

router.post('/:id/posts', (req, res) => {
  postdb.insert(req.body)
  .then(response => {
    res.status(201).send(response)
  })
  .catch(error => {
    res.status(500).send(error)
  })
});

router.get('/', (req, res) => {
  db.get()
  .then(response => {
    res.status(200).send(response)
  })
  .catch(error => {
    res.status(500).send(error)
  })
});

router.get('/:id', (req, res) => {
  db.getById(req.params.id)
  .then(response => {
    res.status(200).send(response)
  })
  .catch(error => {
    res.status(500).send(error)
  })
});

router.get('/:id/posts', (req, res) => {
  db.getUserPosts(req.params.id)
  .then(response => {
    res.status(200).send(response)
  })
  .catch(error => {
    res.status(500).send(error)
  })
});

router.delete('/:id', (req, res) => {
  db.remove(req.params.id)
  .then(response => {
    res.status(200).send(response)
  })
  .catch(error => {
    res.status(500).send(error)
  })
});

router.put('/:id', (req, res) => {
  db.update(req.params.id, req.body)
  .then(response => {
    res.status(200).send(response)
  })
  .catch(error => {
    res.status(500).send(error)
  })
});

module.exports = router;
