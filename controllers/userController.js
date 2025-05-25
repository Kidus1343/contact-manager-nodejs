// registerUser
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//@route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please include all fields");
    }
    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
}
);

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("Please include all fields");
    }
    // Check for user email
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        // Create access token
        const accessToken = jwt.sign({ 
            user: { 
                name: user.name, 
                email: user.email, 
                id: user.id
             }, 
            }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "30d",   }      
        );

        res.json({accessToken});

    } else {
        res.status(400);
        throw new Error("Invalid credentials");
    }
}
);

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
    // const { _id, name, email } = await User.findById(req.user.id);
    // res.status(200).json({
    //     id: _id,
    //     name,
    //     email,
    // });
}
);

module.exports = {
    registerUser,
    loginUser,
    currentUser,
};