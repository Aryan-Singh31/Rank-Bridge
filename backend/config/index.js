const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/RANK-BRIDGE", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Database connected successfully"))
.catch(() => console.log("Database connection failed"));

// User Schema (For Login/Signup)
const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Mentor Application Schema
const applicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: { 
        type: String, 
        required: true 
    },
    message: {
        type: String,
        required: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

// Create models
const User = mongoose.model("Authentication", loginSchema);
const Application = mongoose.model("MentorApplication", applicationSchema);

// Export models
module.exports = { User, Application };
