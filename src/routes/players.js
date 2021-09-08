const { parse } = require('dotenv');
const express = require('express');
const router = express.Router();

const Player = require('../models/Players');

router.get('/', async (req, res) => {
    try {
        const { page, limit } = req.query;
         
        const options = {
            page: parseInt(page, 10) || 1,
            limit: parseInt(limit, 10) || 16
        }

        const players = await Player.paginate({}, options);
        res.json(players);
    } catch (err) {
        console.error(`Something went wrong: ${err}`);
    }
});

module.exports = router;