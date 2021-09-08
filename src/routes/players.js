const { parse } = require('dotenv');
const express = require('express');
const Players = require('../models/Players');
const router = express.Router();

const Player = require('../models/Players');

router.get('/', async (req, res) => {
    try {
        const { page, limit, id, nickname, status } = req.query;
         
        const options = {
            page: parseInt(page, 10) || 1,
            limit: parseInt(limit, 10) || 16
        }

        let players;

        if (id == null || id.length == 0 && nickname == null || nickname.length == 0 && status == null || status.length == 0) {
            players = await Player.paginate({}, options);
        } else {
            players = await Player.paginate({ $or: [{ id: id }, { nickname: {$in: [/ + nickname + /] } }, {status: {$in: [/status/] } }] }, options);
        }
        res.json(players);
    } catch (err) {
        console.error(`Something went wrong: ${err}`);
    }
});

module.exports = router;