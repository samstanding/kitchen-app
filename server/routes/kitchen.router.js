const express = require('express');
const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appsAtlTJjiLxQsTs');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    base('Table 1').create({
        Email: req.body.email, 
        Name: req.body.name, 
        Option: req.body.option, 
        mOption: req.body.mOption }, 
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