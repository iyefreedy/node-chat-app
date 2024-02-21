const jwt = require("jsonwebtoken");
const fs = require("fs");

const User = require("../models/user");

const signIn = async (req, res) => {
	const { email, password } = req.body;

	console.log(email, password)

	const foundUser = await User.findOne({ email: email }).exec();
	if (!foundUser || !(await foundUser.validatePassword(password))) {
		return res.status(401).json({
			message: "Invalid credential"
		});
	}

	let privateKey = fs.readFileSync(
		"./private.pem",
		{ encoding: "utf-8" },

	);

	const payload = {
		uid: foundUser._id.toString(),
		name: foundUser.name,
	}

	const token = jwt.sign(payload, privateKey, {
		algorithm: "RS256",
		expiresIn: "15m",
		audience: "http://localhost:5173",
		issuer: "http://localhost:3000"
	});

	return res.status(200).json({
		access_token: token,
	});
};

module.exports = {
	signIn,
};
