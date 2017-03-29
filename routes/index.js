var express = require('express');
var router = express.Router();
const Pageres = require('pageres');
var webshot = require('webshot');
var path = require('path')

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', {
    title: 'Take Screen Shot of Website'
  });
});

router.post('/', function (req, res, next) {
  var dest = path.join(__dirname, "../public/images/");
  var pageres = new Pageres({
      delay: 2
    })
    .src(req.body.url, ['480x320'], {
      crop: false,
      filename: "temp"
    })
    .dest(dest)
    .run()
    .then(() => console.log("Done"))
    .then(() => res.redirect('/images/temp.png'))
})

module.exports = router;