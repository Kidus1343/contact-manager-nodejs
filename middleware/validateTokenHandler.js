const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");


const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    // Check if token is in the header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
        // Get token from header
        token = req.headers.authorization.split(" ")[1];
        // Verify token
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        // Attach user to request object
        req.user = decoded.user;
        next();
        } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error("Not authorized");
        }
    }
    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
    }   
);

module.exports = validateToken;
