const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { ownerController } = require('../controllers');

// middleware that is specific to this router

router.get('/', ownerController.getAllOwners);
router.post('/', auth(), ownerController.createOwner);

router.get('/:ownerId', ownerController.getOwner);

router.put('/:ownerId', auth(), ownerController.editOwner);
router.delete('/:ownerId', auth(), ownerController.deleteOwner);
// router.post('/:themeId', auth(), postController.createPost);
// router.put('/:themeId/posts/:postId', auth(), postController.editPost);
// router.delete('/:themeId/posts/:postId', auth(), postController.deletePost);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router