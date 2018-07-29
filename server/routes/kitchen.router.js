const express = require('express');
const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appsAtlTJjiLxQsTs');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    base('Table').create({
        Email: req.body.email, 
        Name: req.body.name, 
        WallLength: req.body.wallLength, 
        DesiredHeight: req.body.desiredHeight,
        SinkFromWall: req.body.sinkFromWall,
        Range: req.body.range }, 
        function(err, record) {
        if (err) { 
            console.error('error:', err); 
            res.sendStatus(500);
            return; 
        } else {
            console.log(record.getId());
            res.sendStatus(200);
        }
    });
})


module.exports = router;