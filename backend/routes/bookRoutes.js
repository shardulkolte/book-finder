const express= require("express");
const router=express.Router();
const Book=require("../models/Book");

//get all books
router.get("/", async(req,res)=>{
    try{
        const books=await Book.find();
        res.json(books);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

//post a new book
router.post("/",async(req,res)=>{
    const{title,authors,description,image,infolink}=req.body;
    const book=new Book({title,authors,description,image,infolink});
    try{
        const newBook=await book.save();
        res.status(201).json(newBook);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

//delete book by id
router.delete("/:id",async(req,res)=>{
    try{
        const book=await Book.findByIdAndDelete(req.params.id);
        if(!book){
            return res.status(404).json({message:"Book Not Found"});
        }
        res.json({message:"Book deleted successfully"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;