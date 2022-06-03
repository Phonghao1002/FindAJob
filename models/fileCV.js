const mongoose = require('mongoose')


const fileCVSchema = new mongoose.Schema({
    nameCV: {
        type: String,
        required: [true, "Please enter your name CV!"],
        trim: true
    },
    descriptionCV:{
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("FileCV", fileCVSchema)