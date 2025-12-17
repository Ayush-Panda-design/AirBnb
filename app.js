const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
}



main()
  .then(() => {console.log("Connected to DB");})
  .catch(err => {console.log(err);});


app.set("view engine", "ejs");  //“I am using EJS as my template engine.”
app.set("views", path.join(__dirname, "views")); //All my EJS files are inside the views folder.”
app.use(express.urlencoded({extended: true})); //Form data sent by HTML forms

app.get("/", (req,res) => {
 res.send("Hi, I am the root");
});

//index route
app.get("/listings", async(req,res) =>{
    const allListings = await Listing.find({});
    res.render("listings/index", {allListings});
        
    });


//New Route
app.get("/listings/new", (req,res) => {
        res.render("listings/new.ejs");
});


//show route
app.get("/listings/:id", async(req,res) =>{
  let {id} = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", {listing});
});
    

//Create Route
app.post("/listings", async(req,res) => {
         let {title, description, image, price, country, location}
});


// app.get("/testListing", async(req,res) => {
  //     let sampleListing = new Listing({
    //    title: "My new villa",
      //  description: "By the beach",
//        price: 1200,
  //      location: "Calengute, Goa",
    //    country: "India",
      // });


 //await sampleListing.save();
 //console.log("sample was saved");
 //res.send("Successful testing");
//});



app.listen(8080, () =>{
    console.log("server is listening to port 8080");
});


