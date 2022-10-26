const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentsSchema = new Schema({
    author: {
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
        required: true,
        trim: true
    }
});

const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;
