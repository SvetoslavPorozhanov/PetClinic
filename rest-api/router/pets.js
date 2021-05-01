const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { petController } = require('../controllers');

// middleware that is specific to this router

router.get('/', petController.getAllPets);
router.get('/:petId', petController.getPet);
router.post('/', auth(), petController.createPet);

module.exports = router