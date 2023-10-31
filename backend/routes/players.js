const express = require('express');
const router = express.Router();


const { getAllPlayers, addPlayer, deletePlayer, updatePlayer} = require('../controllers/players');


router.route('/').get(getAllPlayers).post(addPlayer);
router.route('/:id').delete(deletePlayer).put(updatePlayer);



module.exports = router;