const router = require("express").Router()
const Comment = require("../models/Comment")
const Post = require("../models/Post");

//creating catergory logic

router.post("/posts/:id/comment", async (req, res) =>{
    const newComment = new Comment(req.body);//we create a new comment for the database
        
    try{
        //we need to try and catch the new comment and save it

        const currentPost = await Post.findByIdAndUpdate(req.params.id)//we need to find the post that has the comment via the id
            currentPost.comments.push(newComment)//we need to push the comment into the post

            await newComment.save();
            await currentPost.save()//we saved the new post with the comment
        res.status(200).json(currentPost)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})



router.get("/posts/:id/comment/:id", async (req, res) =>{
    try{
        const comments = await Comment.findById(req.params.id).populate('username').populate("postId");//we need to try and catch the new category and save it
        res.status(200).json(comments)
    }catch(err){
        res.status(500).json(err)
    }
})




module.exports = router