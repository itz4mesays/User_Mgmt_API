import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    firstname: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    email_address: {
        required: true,
        type: String,
        unique: true
    },
    phone_number: {
        required: true,
        type: String,
        unique: true
    }
}, {
    timestamps: true
})

export const User : object = mongoose.model('User', UserSchema)