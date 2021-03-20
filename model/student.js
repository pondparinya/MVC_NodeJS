var mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
	firstname: {
		type: String,
	},
	lastname: {
		type: String,
	},
	student_id: {
		type: String,
	},
	level : {
		type: Number,
	}

});

const Student = mongoose.model("students", StudentSchema);

module.exports = Student