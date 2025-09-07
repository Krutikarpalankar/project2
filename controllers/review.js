const Listing=require("../model/listing");
const Review=require("../model/review");

//review create
module.exports.createReview=async(req,res)=>{
    let listing=await Listing.findById(req.params.id);
  
    //  if(!listing){
   //    req.flash("error","Listing not found");
   //   return res.redirect("/listings");
   //  }

    let newReview=new Review(req.body.review);
    listing.reviews.push(newReview);
     newReview.author=req.user._id;
     console.log(newReview);
    await newReview.save();
    await listing.save();
    console.log("new review saved");
    req.flash("success","New review created ");
     res.redirect(`/listings/${listing._id}`);
   //  res.redirect(`/listings/${listing._id}`);

};
//review delete
module.exports.destroyReview=async(req,res)=>{
   let{id,reviewId}=req.params;
  //id=id.trim();
 // reviewId=reviewId.trim();
   await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
   await Review.findByIdAndDelete(reviewId);
   req.flash("success","review deleted");
   res.redirect(`/listings/${id}`);

  
};