const mongoose = require("mongoose"); //import mongoose to be used
const Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema(
    {
        description:{
            type: String,
            required: true, 
        },
       author:{
            type: Schema.Types.ObjectId, 
            ref: 'User',
            
        },
       
     
}, {timestamps: true}
);
//exporting this schema
module.exports = mongoose.model("Comment", CommentSchema); //the module name is "Post"