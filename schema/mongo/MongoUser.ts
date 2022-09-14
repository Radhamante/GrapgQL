import mongoose from 'mongoose';

const user = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    booksBorrowed: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'book', required: true },
    ],
    isAdmin: {
        type: Boolean,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    historys: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'History',
            required: true,
        },
    ],
});

export default mongoose.model('User', user);
