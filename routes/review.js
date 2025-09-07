const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../model/listing.js");
const ExpressError=require("../utils/ExpressError.js");
const Review=require("../model/review.js");
const {validateReview, isLoggedIn, isreviewAuthor}=require("../middleware.js");
const  reviewController= require("../controllers/review.js");

//post review route
// router.post("/",validateReview 
//     ,wrapAsync(async(req,res)=>{
//     let listing=await Listing.findById(req.params.id);
//     if(!listing){
//       req.flash("error","Lsting not found");
//               return res.redirect("/listings"); // ✅ STOP execution if listing not found
//     }

    
//     let newReview=new Review(req.body.review);
//     listing.reviews.push(newReview);
//     await newReview.save();
//     await listing.save();
//     console.log("new review saved");
//     req.flash("success","New review created ");
//     res.redirect(`/listings/${listing._id}`);

// }));
//post review route
router.post("/",isLoggedIn,validateReview 
    ,wrapAsync(reviewController.createReview));
//delete review route
router.delete("/:reviewId",isLoggedIn,
   isreviewAuthor,
   wrapAsync(reviewController.destroyReview));
module.exports=router;
