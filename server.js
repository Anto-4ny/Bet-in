const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userData', { useNewUrlParser: true, useUnifiedTopology: true });

// Define User Schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    birthdate: Date,
    gender: String
});

const User = mongoose.model('User', userSchema);

// Sign Up Route
app.post('/signup', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Sign In Route
app.post('/signin', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password });
        if (!user) {
            return res.status(400).send('Invalid email or password');
        }
        res.send('Sign in successful');
    } catch (error) {
        res.status(500).send(error);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
