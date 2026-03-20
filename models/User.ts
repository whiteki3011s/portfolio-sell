import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
    },
    password: {
        type: String,
        select: false, // Don't return password by default
    },
    image: {
        type: String,
    },
    provider: {
        type: String,
        default: 'credentials',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = models.User || model('User', UserSchema);

export default User;
