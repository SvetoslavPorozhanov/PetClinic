const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { petController } = require('../controllers');

// middleware that is specific to this router

router.get('/', petController.getAllPets);
router.get('/:petId', petController.getPet);
router.post('/', auth(), petController.createPet);

router.put('/:petId', auth(), petController.editPet);
router.delete('/:petId/:ownerId', auth(), petController.deletePetWithOwner);
router.delete('/:petId', auth(), petController.deletePetWithoutOwner);

module.exports = router