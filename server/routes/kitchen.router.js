const express = require('express');
const router = express.Router();

const data = [];

router.post('/', (req, res) => {
    console.log(req.body);
    data.push(req.body);
    if(error) {
        console.log(error);
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }
})


module.exports = router;