const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const PetSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    thumb: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    adopted: {
        type: String,
        default: "no"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userName: {
        type: String
    }
})

module.exports = mongoose.model('Pet', PetSchema);