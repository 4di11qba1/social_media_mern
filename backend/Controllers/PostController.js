import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";

//Create a Post
export const createPost = async(req, res) => {
    const newPost = new PostModel(req.body)

    try {
        await newPost.save()
        res.status(200).json("Post Created.")
    } catch (error) {
        res.status(500).json(error)
    }
}

//Get a Post
export const getPost = async(req, res) => {
    const id = req.params.id

    try {
        const post = await PostModel.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Update a Post
export const updatePost = async(req, res) => {
    const postId = req.params.id

    const {userId} = req.body

    try {
        const post = await PostModel.findById(postId)
        if (post.userId === userId) {
            await post.updateOne({$set: req.body})
            res.status(200).json("Post updated.")
        }
        else {
            res.status(403).json("You can change only your own posts.")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//Delete a Post
export const deletePost = async(req, res) => {
    const id = req.params.id
    const {userId} = req.body

    try {
        const post = await PostModel.findById(id)
        if (userId === post.userId) {
            await post.deleteOne();
            res.status(200).json("Post deleted.")
        }
        else {
            res.status(403).json("You can delete your own posts only.")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//Like/Dislike a Post
export const likePost = async(req, res) => {
    const id = req.params.id
    const {userId} = req.body

    try {
        const post = await PostModel.findById(id)
        if (!post.likes.includes(userId)) {
            await post.updateOne({$push: {likes: userId}})
            res.status(200).json("Post liked.")
        }
        else {
            await post.updateOne({$pull: {likes: userId}})
            res.status(200).json("Post unliked.")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//Get Timeline Posts
export const getTimelinePosts = async (req, res) => {
    const userId = req.params.id;

    try {
        // Fetch current user's posts
        const currUserPosts = await PostModel.find({ userId: userId });

        // Fetch IDs of users followed by the current user
        const currentUser = await UserModel.findById(userId);
        const followedUserIds = currentUser.followings;

        // Fetch posts of followed users
        const followedPosts = await PostModel.find({ userId: { $in: followedUserIds } });

        // Combine current user's posts and followed users' posts
        const timelinePosts = currUserPosts.concat(...followedPosts).sort((a, b) => {
            return b.createdAt - a.createdAt
        });

        res.status(200).json(timelinePosts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
