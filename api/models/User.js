const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    district: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 0
    },
    joinDate: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', function(next) {
    if(!this.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if(err) return next(err);

        bcrypt.hash(this.password, salt, (err, hash) => {
            if(err) return next(err);
            this.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('user', UserSchema);