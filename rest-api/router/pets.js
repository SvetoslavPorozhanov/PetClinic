const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { petController } = require('../controllers');

// middleware that is specific to this router

router.get('/', petController.getAllPets);

module.exports = router