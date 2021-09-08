//creating the user models for the database

const mongoose = require("mongoose"); //import mongoose to be used
const Schema = mongoose.Schema;

const CategorySchema = new mongoose.Schema(
    {
       catname:{
           type: Array, 
            required: false,
       }
       
}, {timestamps: true}
);
//exporting this schema
module.exports = mongoose.model("Category", CategorySchema); //the module name is "Post"