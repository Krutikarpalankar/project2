const Listing=require("../model/listing");
const mapToken= process.env.MAP_TOKEN;
const axios = require('axios');
const maptilerClient = require("@maptiler/client");
module.exports.index=async(req,res)=>{
   const allListings=await Listing.find({});
   res.render("listings/index.ejs",{allListings});
};
module.exports.renderNewForm=(req,res)=>{
    console.log(req.user);
   
    res.render("listings/new.ejs");
};
module.exports.ShowListing=(async(req,res)=>{
    let{id}=req.params;
    // id=id.trim();
    const listing=await Listing.findById(id)
    .populate({path:"reviews",populate:{path:"author"}}).populate("owner").lean();
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
    }
   //   console.log(listing);
     
    res.render("listings/show.ejs",{listing,currUser: req.user });
});
module.exports.creatListing=async (req,res,next)=>{
   
  try{
     let url=req.file.path;
     let filename=req.file.filename; 
   newListing=new Listing(req.body.listing);
      newListing.owner=req.user._id;
      newListing.image={url,filename};
//     //    geo coding
     const query = req.body.listing.location;
     const geourl = `https://api.maptiler.com/geocoding/${encodeURIComponent(query)}.json?key=${mapToken}&limit=2`;
     const response = await axios.get(geourl);
     console.log(response.data.features[0].geometry.coordinates);
     const coords = response.data.features[0].geometry.coordinates; // [lng, lat]
     newListing.geometry = {
      type: 'Point', // GeoJSON type
      coordinates: coords
    };
      let savedListing=await newListing.save();
      console.log(savedListing);
      

    //   console.log("listing.owner:",listing.owner);
    //   console.log("req.user:",req.user);
   
       req.flash("success","New Listing Created !");
       res.redirect("/listings");
 } catch (err) {
    next(err);
  }
       // let{title,description,image,price,location,price}=req.body ; 
};
module.exports.renderEditForm=async(req,res)=>{
    
    let{id}=req.params;
    // id=id.trim();
    const listing=await Listing.findById(id);
     if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250");

    res.render("listings/edit.ejs",{listing,originalImageUrl});
};
module.exports.updateListing=async(req,res)=>{
     
    let{id}=req.params;
   // id=id.trim();
  let listing= await Listing.findByIdAndUpdate(id,{...req.body.listing});
  if(typeof req.file!=="undefined"){
  let url=req.file.path;
     let filename=req.file.filename;  
     listing.image={url,filename};
     await listing.save();
  }
       req.flash("success","Listing Updated !");
   res.redirect(`/listings/${id}`);
};
module.exports.destroyListing=async(req,res)=>{
    let {id}=req.params;
   // id=id.trim();
   let deletedListing=await Listing.findByIdAndDelete(id);
   console.log(deletedListing);
//  
   req.flash("success","Listing Successfull Deleted!");
   // res.redirect(`/listings/${id}`);
  res.redirect("/listings/");
}