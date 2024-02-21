const express = require("express");
const { createServer } = require("node:http");
const mongoose = require("mongoose");

require("dotenv").config();

const userRoutes = require("./src/routes/userRoutes");
const authRoutes = require("./src/routes/authRoutes");

const app = express();
const server = createServer(app);
const cookieSession = require('cookie-session')
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use(cookieSession({
    domain: "http://localhost:5173",
    httpOnly: true,
    keys: ["token"],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

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
