const mongoose= require("mongoose");

const bookSchema=new mongoose.Schema({
    title: {type:String,required:true},
    authors:[String],
    description:String,
    image:String,
    infolink:String
},{timestamps:true});

module.exports=mongoose.model("Book",bookSchema);