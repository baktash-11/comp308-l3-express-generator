const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index', 
  { 
    title: 'Home', 
    body: 'Welcome to Node And Express JS'
  });
});

/* GET about page. */
router.get('/about', (req, res, next)=> {
  res.render('index', 
  { 
    title: 'About', 
    body: 'Welcome to Node And Express JS'
  });
});
module.exports = router;
//