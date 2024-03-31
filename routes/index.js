var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about'); 
});

router.get('/milestone', function(req, res, next) {
  res.render('milestone', { title: 'Milestone' }); 
});

router.get('/feeding', function(req, res, next) {
  res.render('awards', { title: 'Feeding' }); 
});

router.get('/partner', function(req, res, next) {
  res.render('login'); 
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' }); 
});router.get('/donate', function(req, res, next) {
  res.render('donate'); 
});

router.get('/donate/NGO', function(req, res, next) {
  let restaurant = req.query.restaurant;
  res.render('ngo', { restaurant: restaurant }); 
});
router.get('/person', function(req, res, next) {
  let name = req.query.name;
  let restaurant = req.query.restaurant;
  res.render('singleNGO', { name: name, restaurant: restaurant }); 
});

router.get('/thankyou', function(req, res, next) {
  let name = req.query.name;
  let restaurant = req.query.restaurant;
  res.render('thankyou', { name: name, restaurant: restaurant });
});




module.exports = router;
