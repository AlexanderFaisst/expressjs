var express = require('express');
var router = express.Router();

router.get('/feedback', function(req, res) {

  res.render('feedback', {
    pageTitle: 'it just keeps going!',
    pageID: 'feedback'
  });

});

module.exports = router;
