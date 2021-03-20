var express = require("express");
var router = express.Router();
var Student = require("../model/student");
/* GET users listing. */

// path นี้ ใทำการดึงข้อมูลจาก database มาเก็บไว้ในตัวแปร data ทั้งหมด
router.get("/", function (req, res, next) {
	Student.find().then((data) => {
		res.render("home", {
			data: data,
		});
	});
});

module.exports = router;
