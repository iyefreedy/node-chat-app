/**
 * @typedef {Object} UserSchema
 * @property {string} username - Nama pengguna.
 * @property {string} email - Email pengguna.
 * @property {string} password - Kata sandi pengguna.
 */

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	updatedAt: {
		type: Date,
		default: null,
	},
});

UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();
	try {
		const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
		this.password = await bcrypt.hash(this.password, salt);
		return next();
	} catch (err) {
		return next(err);
	}
});

UserSchema.methods.validatePassword = async function (data) {
	return bcrypt.compare(data, this.password);
};

/** @type {mongoose.Model<any>} */
const User = new mongoose.model("User", UserSchema);

module.exports = User;
