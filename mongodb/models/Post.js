const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    prompt: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
})

const Post = new mongoose.model('post', postSchema)

module.exports = Post