const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema({
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	users: {
		type: Array,
		required: true,
	},
});
