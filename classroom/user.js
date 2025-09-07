const express=require("express");
const router=express.Router();
//users

//Index-users
router.get("/",(req,res)=>{
    res.send("get for users");
});
// show 
router.get("/:id",(req,res)=>{
    res.send("get for show users");
});
//post route
router.post("/",(req,res)=>{
    res.send("post for users");
});
router.delete("/:id",(req,res)=>{
    res.send("delete for users id");
});
module.exports=router;