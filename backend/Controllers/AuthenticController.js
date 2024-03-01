import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt';

// Registration
export const registerUser = async (req, res) => {
    try {
        const { username, password, firstname, lastname } = req.body;

        // Validate user input to ensure essential data is present
        if (!username || !password || !firstname || !lastname) {
            return res.status(400).json({ message: "Missing required fields." });
        }

        // Check for existing username before hashing password for security
        const existingUser = await UserModel.findOne({ username: username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists." });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        const newUser = new UserModel({ username, password: hashedPass, firstname, lastname });
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ message: "Internal server error." });
    }
};

// Login
export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate user input to ensure essential data is present
        if (!username || !password) {
            return res.status(400).json({ message: "Missing required fields." });
        }

        const user = await UserModel.findOne({ username: username });

        if (!user) {
            // Handle non-existent username with a specific message
            return res.status(401).json({ message: "Invalid credentials." }); // Avoid revealing username existence
        }

        const validity = await bcrypt.compare(password, user.password);

        if (validity) {
            res.status(200).json(user);
        } else {
            res.status(401).json({ message: "Invalid credentials." }); // Avoid revealing password issue
        }
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ message: "Internal server error." });
    }
};
