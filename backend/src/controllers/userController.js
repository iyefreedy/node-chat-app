const User = require("../models/user");

const getUsers = async (req, res) => {
	const users = await User.find();
	console.log(req.cookies);
	return res.status(200).json({
		data: users,
	});
};

const getUserById = async (req, res) => {
	const { id } = req.params;
	const user = await User.findById(id);
	return res.status(200).json({
		data: user,
	});
};

const createUser = async (req, res) => {
	const user = new User({ ...req.body });
	const insertedUser = await user.save();

	return res.status(201).json(insertedUser);
};

const updateUser = async (req, res) => {
	const { id } = req.params;

	await User.updateOne({ id }, req.body);
	const updatedUser = await User.findById(id);
	return res.status(200).json(updatedUser);
};

const deleteUser = async (req, res) => {
	const { id } = req.params;
	const deletedUser = await User.findByIdAndDelete(id);
	return res.status(200).json(deletedUser);
};

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
