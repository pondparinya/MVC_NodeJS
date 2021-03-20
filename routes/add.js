var express = require("express");
var router = express.Router();
var Student = require('../model/student')


// เปิิดหน้า add
router.get("/", function (req, res, next) {
	res.render("add");
});

// เมื่อกด submit แล้วให้ทำ function นี้
router.post("/", function (req, res, next) {
  //  เมื่อกด submit ให้ทำการเก็บข้อมูลมาไว้ที่่ตัวแปร
	const { firstname, lastname, student_id } = req.body;
  // สร้าง array เอาไว้เก็บ error
	let errors = [];
  // สร้างเงื่อนไข ถ้ากรอกข้อมูลไม่ครบให้เก็บ error ไว้
	if (!firstname || !lastname || !student_id) {
		errors.push({ msg: "กรุณากรอกข้อมูลให้ครบ" });
	}
  // สร้างเงื่อนไข ถ้าหรอกรหัสนศ ไม่ครบ 8 ตัวให้เก็บ error
  if (student_id.length !== 8) {
    errors.push({msg : "ใส่รหัสนักศึกษาให้ครบ 8 ตัว"})
  }
  var ids = student_id[0]+student_id[1]
  if (ids == "63") {
    let level = 1
    var newtStudent = new Student ({
      firstname ,
      lastname,
      student_id,
      level,
    })
  }
  if (ids == "62"){
    let level = 2
    var newtStudent = new Student ({
      firstname ,
      lastname,
      student_id,
      level,
    })
  }
  if (ids == "61"){
    let level = 2
    var newtStudent = new Student ({
      firstname ,
      lastname,
      student_id,
      level,
    })
  }
  if (ids == "60"){
    let level = 4
    var newtStudent = new Student ({
      firstname ,
      lastname,
      student_id,
      level,
    })

  }
  // ถ้ามี error ให้เปิดหน้า add แล้วส่ง error, firstname, lastname ,student_id ไปด้วย
	if (errors.length > 0) {
		res.render('add', {
			errors,
      firstname,
      lastname,
      student_id
		});
  // ถ้าไม่เข้าเงื่อนไช ให้ทำการ บันทึกลงใน database
	} else {
    newtStudent.save()
    .then(user =>{
      res.redirect('/')
    })
  }

});

module.exports = router;

