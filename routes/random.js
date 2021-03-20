var express = require("express");
const {set} = require("../app");
var router = express.Router();
var Student = require("../model/student");

router.get("/", function (req, res) {
	Student.find().then((data) => {
		var d1 = [];
		var d2 = [];
		data.forEach((r) => {
			d1.push(r);
			d2.push(r);
		});
		var resp = [];
		d1.forEach((d) => {
			d2.forEach((k) => {
				if (d.student_id != k.student_id && d.level != k.level) {
					var index1 = d1.indexOf(d);
					var index2 = d2.indexOf(k);

					resp.push(d.student_id, k.student_id);
					d1.splice(index1, 1);
					d1.splice(index2, 1);
					d2.splice(index2, 1);
					d2.splice(index1, 1);
				}
			});
		});

		if (d1.length > 0 && d2.length > 0) {
			var z = d1.filter((D) => {
				return d2.indexOf((D) != -1)
			})
			z.forEach((Z)=>{
				resp.push(Z.student_id)
			})
		}

		var datas = [...new Set(resp)]
		res.render("random", {
			data: datas,
		});
	});
});

module.exports = router;
