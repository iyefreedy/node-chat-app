const express = require("express");
const { createServer } = require("node:http");
const mongoose = require("mongoose");

require("dotenv").config();

const userRoutes = require("./src/routes/userRoutes");
const authRoutes = require("./src/routes/authRoutes");

const app = express();
const server = createServer(app);
const cookieParser = require("cookie-parser");
const cors = require("cors");

const corsOptions = {
	origin: true,
	methods: ["POST"],
	credentials: true,
	maxAge: 3600,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.get("/", (req, res) => {
	return res.status(200).json({
		message: "Chat App v0.1",
	});
});

app.use(authRoutes);
app.use("/api", userRoutes);

const start = async () => {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/chat-app");

		server.listen(3000, () => {
			console.log(`Server running at http://localhost:3000`);
		});
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

start();
