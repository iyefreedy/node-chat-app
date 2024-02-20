const jwt = require("jsonwebtoken");
const fs = require("fs");

const User = require("../models/user");

const signIn = async (req, res) => {
	const { email, password } = req.body;

	const foundUser = await User.findOne({ email: email }).exec();
	if (!foundUser || !(await foundUser.validatePassword(password))) {
		return res.status(401).send("Invalid credential");
	}

	let privateKey = ''

	fs.readFile(
		"./private.pem",
		{ encoding: "utf-8" },
		(err, data) => {
			if (err) {
				throw new Error("Error while read data from file")
			}

			privateKey = data;
		}
	);
	console.log(privateKey);

	// const token = jwt.sign(foundUser, fs.readFileSync("./private.pem"), {
	// 	algorithm: "RS256",
	// 	expiresIn: "2h",
	// });

	return res.status(200).json({
		access_token: "token",
	});
};

module.exports = {
	signIn,
};
