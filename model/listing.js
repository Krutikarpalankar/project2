// const mongoose=require("mongoose");
// const Schema=mongoose.Schema;
// const Review=require("./review.js");
// const listingSchema=new  Schema({
//     title:{
//         type:String,
//         required:true,
//     },
//     description:String,
//     image:{
//         type:String,
//         default:"https://media.istockphoto.com/id/2148296475/photo/a-row-of-blooming-tulips-in-the-park.jpg?s=612x612&w=is&k=20&c=9_MEb3VxmCtdbbOoZReJhfbOi7No71FHr2fItxI6kvg=",
//         set:(v)=>v===""?"https://media.istockphoto.com/id/2148296475/photo/a-row-of-blooming-tulips-in-the-park.jpg?s=612x612&w=is&k=20&c=9_MEb3VxmCtdbbOoZReJhfbOi7No71FHr2fItxI6kvg=":v,
//     },


//     price:Number,
//     location:String,
//     country:String,
//     reviews:[{
//         type:Schema.Types.ObjectId,
//         ref:"Review",

//     }]
// });
// listingSchema.post("findOneAndDelete",async(listing)=>{
//     if(listing){ 
//     await Review.deleteMany({reviews:{$in:listing.reviews}});
//     }
// });
// const Listing=mongoose.model("Listing",listingSchema);
// module.exports=Listing;
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js");
const listingSchema=new  Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
      url:String,
      filename:String,
    },


    price:Number,
    location:String,
    country:String,
    reviews:[{
        type:Schema.Types.ObjectId,
        ref:"Review",

    }],
    owner:{
      type:Schema.Types.ObjectId,
      ref:"User",
    },
    geometry: {
  type: {
    type: String, // "Point"
    enum: ['Point'],//location type  must be point
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  },
}
// category:{
//   type:String,
//   enum:["mountains","arctic","farms","desert"];
// }


    

});
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;
