const users = require('../models/usermodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//register
exports.registerController = async (req, res) => {
    console.log("Inside registerController");
    const { username, email, password } = req.body;

    try {
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(406).json("Already existing User...");
        } else {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            console.log("Hashed password:", hashedPassword);

            const newUser = new users({
                username,  email, password: hashedPassword,
            });
            await newUser.save();
            console.log("New user saved:", newUser);
            res.status(200).json(newUser);
        }
    } catch (err) {
        res.status(401).json(err);
        console.log(err);
    }
};

//login
exports.loginController = async (req, res) => {
    console.log("Inside LoginController");
    const { email, password } = req.body;

    try {
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            console.log("Stored user details:", existingUser);

            const decryptPassword = await bcrypt.compare(password, existingUser.password);
            console.log("Password match:", decryptPassword);

            if (decryptPassword) {
                const token = jwt.sign({ userId: existingUser._id }, process.env.jWTPASSWORD);
                res.status(200).json({ user: existingUser, token });
            } else {
                res.status(404).json("Incorrect Password.");
            }
        } else {
            res.status(404).json("Incorrect email");
        }
    } catch (err) {
        console.log(err);
        res.status(401).json(err);
    }
};
//profile updation  