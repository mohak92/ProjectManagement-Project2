const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    profileImageUrl: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    groups: [{
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }],
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }],
    chat: [{
        type: Schema.Types.ObjectId,
        ref: 'Chat'
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

UserSchema.plugin(uniqueValidator);
const User = mongoose.model('users', UserSchema);
module.exports = User;