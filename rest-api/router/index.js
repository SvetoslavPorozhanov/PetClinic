const router = require('express').Router();
const users = require('./users');
const owners = require('./owners');
const pets = require('./pets');

router.use('/users', users);
router.use('/owners', owners);
router.use('/pets', pets);

module.exports = router;
