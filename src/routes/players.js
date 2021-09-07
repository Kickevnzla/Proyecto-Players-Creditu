const express = require('express');
const router = express.Router();

const Player = require('../models/Players');

router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        console.error(`Something went wrong: ${err}`);
    }
});

module.exports = router;