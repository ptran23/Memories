
//restapitutorial.com/httpstatuscodes.html for status codes
import PostMessage from "../models/postMessages.js";

export const getPosts = async (req,res) => {
    try {
        const postMessages = await PostMessage.find(); // async function due to the time it takes to locate the post


        res.status(200).json(postMessages);

    } catch (error){
        res.status(404).json({message:error.message});
    }
}

export const createPosts = async (req,res) => {
    const post = req.body;
    const newPost= new PostMessage(post);

    try {
       await newPost.save();
       res.status(201).json(newPost);

    }catch (error){
        res.status(409).json({ message:error.message})

    }
}