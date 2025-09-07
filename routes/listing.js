const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const {listingSchema}=require("../schema.js")
const Listing=require("../model/listing.js");
const ExpressError=require("../utils/ExpressError.js");
const{isLoggedIn, isOwner,validateListing}=require("../middleware.js");
const listingController=require("../controllers/listings.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");

const upload = multer({ storage })

// const Review=require("../model/review.js");

//new route
router.get("/new",isLoggedIn,listingController.renderNewForm);
router
.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync( listingController.creatListing));

router.route("/:id") 
.get( wrapAsync(listingController.ShowListing))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,
    wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));
// index route

//router.get("/",wrapAsync(listingController.index));

// show route
// router.get("/:id", wrapAsync(listingController.ShowListing));

//create route
//router.post("/",validateListing,isLoggedIn,isOwner,
  //  wrapAsync( listingController.creatListing));



//edit-route
router.get("/:id/edit",isLoggedIn,isOwner,validateListing,wrapAsync(listingController.renderEditForm));

//update route
// router.put("/:id",isLoggedIn,isOwner,validateListing,
    // wrapAsync(listingController.updateListing));
//   delete route
// router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));


module.exports=router;
