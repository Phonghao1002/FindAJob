const mongoose = require('mongoose')


const recruiterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    address: {
        type: String,
        required: [true, "Please enter your address!"]
    },
    phone: {
        type: Number,
        required: [true, "Please enter your Phone!"]
    },
    NameCompanies: {
        type: String,
        required: [true, "Please enter your Name Companies!"]
    },
    description: {
        type: String,
        required: [true, "Please enter your description!"]
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Recruiter", recruiterSchema)