const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')
const { v2 } = require('cloudinary')
const Post = require('../mongodb/models/Post')

dotenv.config()
v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


// Get all Posts
router.route('/').get(async (req, res) => {
    try {
        const allPosts = await Post.find({})
        res.status(200).json({ success: true, data: allPosts })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
})
// Create a Posts
router.route('/').post(async (req, res) => {
    const { name, prompt, photo } = req.body;
    try {
        let photoUrl = (await v2.uploader.upload(photo)).secure_url
        const newPost = await Post.create({
            name, prompt, photo: photoUrl
        })
        await newPost.save()
        res.status(201).json({ success: true, data: newPost })
    } catch (error) {
        res.status(500).json({ sucess: false, message: error })
    }
})
dotenv.config()

module.exports = router