var express = require("express");
var router = express.Router();
var Student = require("../model/student");

router.get('/:_id', function (req, res) {
	var _id = req.params._id
	Student.findById(_id).then((data) => {
		var firstname = data.firstname;
		var lastname = data.lastname;
		var student_id = data.student_id;
		res.render('edit', {
			firstname,
			lastname,
			student_id,
			_id
		})
	})
})

router.post('/', function (req, res) {
	var student_id = req.body.student_id
	var firstname = req.body.firstname
	var lastname = req.body.lastname
	var _id = req.body._id
	var ids = student_id[0] + student_id[1]
	console.log(_id)
	console.log(student_id)
	console.log(firstname)
	console.log(lastname)
	if (ids == "60") {
		var level = 4

	}
	if (ids == "61") {
		var level = 3
	}
	if (ids == "62") {
		var level = 2
	}
	if (ids == "63") {
		var level = 1
	}
	Student.updateOne({_id: _id}, {
		$set: {
			firstname: firstname,
			lastname: lastname,
			student_id: student_id,
			level: level
		}
	}, function(r){
     console.log(r)
		res.redirect('/')
	})
})






module.exports = router;
