const express = require('express');
const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appsAtlTJjiLxQsTs');
const router = express.Router();

const data = [];


router.post('/', (req, res) => {
    console.log(req.body);
    // let Email = req.body.email;
    // let Name = req.body.name;
    // let Option = req.body.option;
    base('Table 1').create({Email: req.body.email, Name: req.body.name, Option: req.body.option }, function(err, record) {
        if (err) { console.error('error:', err); return; }
        console.log(record.getId());
    });
    data.push(req.body);

    console.log(data);
    
})


module.exports = router;