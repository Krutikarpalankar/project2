const express=require("express");
const app=express();
const users=require("./user.js");
const posts=require("./post.js");
const cookieParser=require("cookie-parser");
const session=require("express-session");
const flash=require("connect-flash");
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


const sessionOptions={secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true,
}
app.use(session(sessionOptions));
app.use(flash());
app.use((req,res,next)=>{
     res.locals.success=req.flash("success");
     res.locals.error=req.flash("error");
     next();
})
app.get("/register",(req,res)=>{
    let {name="ananymous"}=req.query;
    req.session.name=name;
    console.log(req.session);
    if(name=="ananymous"){
req.flash("error","error in web");
    }else{
    req.flash("success","user registed successfull!");
    }
    res.redirect("/hello");
});
app.get("/hello",(req,res)=>{
   
    res.render("page.ejs",{name:req.session.name});
})
// app.get("/test",(req,res)=>{
//     res.send("test successful!");
// });
//request count
// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++
//     }else{
//         req.session.count=1;

//     }
    
//     res.send(`you sent a request ${req.session.count} times`)
// })
//cokkies
// app.use(cookieParser("secretcode"));
// app.get("/getsignedcookie",(req,res)=>{
//     res.cookie("made_in","india",{signed:true});
//     res.send("done");
// });
// app.get("/verify",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("verified");
// })
// app.get("/getcookies",(req,res)=>{
//     res.cookie("greet","hello");
//     res.cookie("madeIN","india");
//     console.dir(req.cookies);
//     res.send("sent you some cookies");
// })
// app.get("/greet",(req,res)=>{
//     let{name="anonymous"}=req.params;
//     res.send(`Hi,${name}`);
// })
// //users
// app.use("/users",users);
// //posts
// //index
// app.use("/posts",posts);

app.listen(3000,()=>{
    console.log("server is listing to 3000");
})