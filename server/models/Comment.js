const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
    author: {
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
        required: true,
        trim: true
    },
    productId: {
        type: String,
        required: true,
    }
    
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
