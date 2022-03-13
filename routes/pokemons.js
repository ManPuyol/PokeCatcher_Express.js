const app = require('express')
const pokemonController = require('../controllers/pokemonController')
const router = app.Router()

router.get('/pokemon', pokemonController.getPokemon)
router.get('/dictionary', pokemonController.getMetaData)
router.post('/pokemon', pokemonController.insertPokemon)
router.delete('/pokemon/:id', pokemonController.releasePokemon)

module.exports = router