const express = require('express');
const router = express.Router();


router.get('/contact', (req, res, next)=>{
    res.render('contact', 
        {
            title: 'contact', 
            body: 'Welcome to Node and Express JS!'
        });
});

module.exports = router;