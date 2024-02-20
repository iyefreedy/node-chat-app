const mongoose = require("mongoose");

const message = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
	},
});
