
const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../model/listing.js");
//const express=require("express");
// const app=express();
// const mongoose=require("mongoose");
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
// const Listing=require("./model/listing.js");
main().then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}
const initDB=async()=>{
   await Listing.deleteMany({});
   initData.data= initData.data.map((obj)=>({
    ...obj,owner:"687a84ae97a7c91775c99110"
   }));
   await Listing.insertMany(initData.data);
   console.log("data was initialised");
};
initDB();
