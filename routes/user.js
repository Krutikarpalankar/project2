const express=require("express");
const router=express.Router();
const User=require("../model/user.js");
const wrapAsync=require("../utils/wrapAsync.js");
const passport=require("passport");
 const {saveRedirectUrl}=require("../middleware.js");
const userController = require("../controllers/user.js");
router.route("/signup")
.get((req,res)=>{
    res.render("users/signup.ejs");
})
.post(wrapAsync(userController.signUp));
router.route("/login")
.get(userController.renderLoginForm)
.post(
    saveRedirectUrl,
    
    passport.authenticate('local', 
        { 
            failureRedirect: '/login' ,
            failureFlash:true,}),userController.login
           
)

// router.get("/signup",(req,res)=>{
//     res.render("users/signup.ejs");
// });
// router.post("/signup",wrapAsync(userController.signUp));
// router.get("/login",userController.renderLoginForm);
// router.post(
//     "/login",
//     saveRedirectUrl,
    
//     passport.authenticate('local', 
//         { 
//             failureRedirect: '/login' ,
//             failureFlash:true,}),userController.login
           
// );
router.get("/logout",userController.logOut)


module.exports=router;