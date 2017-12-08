var express = require('express');
var router = express.Router();

router.get('/chat', function(req, res) {

  res.render('chat', {
    pageTitle: 'Snak Sammmen For Fanden! Eller you know, lad være',
    pageID: 'chat'
  });

});

module.exports = router;
