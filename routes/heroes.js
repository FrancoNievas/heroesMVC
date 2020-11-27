const express = require('express');

const router = express.Router();

const heroesController = require('../controllers/heroesController')

router.get('/' , heroesController.index)
router.get("/:idHeroe",heroesController.heroe)
router.get("/bio/:idHeroe/:ok?",heroesController.bio)

module.exports=router
