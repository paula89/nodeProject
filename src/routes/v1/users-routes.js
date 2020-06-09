const express = require('express');
const usersControler = require('../../controlers/v1/users-controler');

const router = express();

router.post('/create', (usersControler.createUser()));
router.post('/update', (usersControler.updateUser()));
router.post('/delete', (usersControler.deleteUser()));
router.get('/getAll', (usersControler.getUser()));

module.exports.router = router;
