import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
        maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email',
        ],
    },
    inquiryType: {
        type: String,
        required: [true, 'Please select an inquiry type'],
        enum: [
            'Buy a template',
            'Customize an existing design',
            'Full custom portfolio',
            'Something else'
        ]
    },
    message: {
        type: String,
        required: [true, 'Please provide a message'],
        maxlength: [2000, 'Message cannot be more than 2000 characters'],
    },
    status: {
        type: String,
        enum: ['new', 'read', 'replied', 'archived'],
        default: 'new'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
