const express = require('express');
const userRouters = require('../controller/users');
const router = express.Router();


router
.post('/',userRouters.createUsers)
.get('/',userRouters.readAllUsers)
.get('/:id',userRouters.readSingleUsers)
.put('/:id',userRouters.updateAndReplace)
.patch('/:id',userRouters.update)
.delete('/:id',userRouters.delete)

exports.routes = router
