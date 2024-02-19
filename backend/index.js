import express from 'express'
import { createServer } from 'node:http'
import mongoose from 'mongoose';

import User from './src/models/user.js';

const app = express()
const server = createServer(app);

app.use(express.json())



app.get('/', (req, res) => {
    return res.status(200).json({
        "message": "Chat App v0.1"
    })
})

app.get('/users', async (req, res) => {
    const users = await User.find()
    return res.status(200).json({
        data: users
    });
})

app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id)
    return res.status(200).json({
        data: user
    });
})

app.post('/users', async (req, res) => {
    const user = new User({ ...req.body })
    const insertedUser = await user.save();

    return res.status(201).json(insertedUser);
})

app.put('/users/:id', async (req, res) => {
    const { id } = req.params;

    await User.updateOne({ id }, req.body);
    const updatedUser = await User.findById(id);
    return res.status(200).json(updatedUser);
})

app.delete("/users/:id", async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    return res.status(200).json(deletedUser);
});

const start = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/chat-app')

        server.listen(3000, () => {
            console.log(`Server running at http://localhost:3000`);
        })
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

start()