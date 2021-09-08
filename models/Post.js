//creating the user models for the database

const mongoose = require("mongoose"); //import mongoose
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema(
    {
       
        title:{
            type: String,
            required: true,
            unique: true,
           
        },
        description:{
            type: String,
            required: true, 
        },
        postPhoto:{
            type: String,
            required:false,
        },
       username:{
            type: Schema.Types.ObjectId, 
            ref: 'User'
        },
        categories:{
           type: Array,
        },
       comments: [{
             type: mongoose.Schema.Types.ObjectId,
             ref: 'Comment'
           }]
       
}, {timestamps: true},

);
//exporting this schema
module.exports = mongoose.model("Post", PostSchema); //the module name is "Post"