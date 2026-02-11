const User = require('../models/userModel');

const getAllUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }s
    };
const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };
module.exports = {
    getAllUsers,
    createUser
};