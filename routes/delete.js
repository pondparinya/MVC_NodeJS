var express = require("express");
var router = express.Router();
var Student = require('../model/student')

router.post('/', function(req , res ){
  var _id =   req.body._id
  Student.deleteOne({
      "_id" : _id
  }).then(r => {
    res.redirect('/')
  })

});
module.exports = router;
