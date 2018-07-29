const express = require('express');
const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appsAtlTJjiLxQsTs');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    base('Table').create({
        Email: req.body.email, 
        Name: req.body.name, 
        WallLength: parseFloat(req.body.wallLength), 
        DesiredHeight: parseFloat(req.body.desiredHeight),
        SinkFromWall: parseFloat(req.body.sinkFromWall),
        Range: parseFloat(req.body.range) }, 
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