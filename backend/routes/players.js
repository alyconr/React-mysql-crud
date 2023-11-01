const express = require('express');
const router = express.Router();


const { getAllPlayers, getPlayer, addPlayer, deletePlayer, updatePlayer} = require('../controllers/players');


router.route('/').get(getAllPlayers).post(addPlayer);
router.route('/:id').get(getPlayer).delete(deletePlayer).put(updatePlayer);



module.exports = router;