var express = require("express");
var app = express() ;
var bodyParser = require("body-parser") ;
var mongoose=require("mongoose");
var Campground = require("./models/campground");
var seedDB=require("./seeds");
var Comment = require("./models/comment");
var passport=require("passport");
var LocalStrategy = require("passport-local");
var User = require("./models/user");
var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var indexRoutes = require("./routes/index");
var methodOverride = require("method-override");
var flash = require("connect-flash");

//seedDB();


//Passport configuration

app.use(require("express-session")({
    
    secret:"Abhishek",
    resave:false,
    saveUninitialized:false
}));
app.use(methodOverride("_method"));


app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


mongoose.connect("mongodb://localhost/yelp_camp");
console.log("connected to db yelp_camp");


//Schema setup
// var campgroundSchema=new mongoose.Schema({
//     name:String,
//     image:String,
//     description:String
// });

// var Campground = mongoose.model("Campground",campgroundSchema);


// Campground.create(
//         {
//           name :"Yosemite",
//           image : "https://jameskaiser.com/wp-content/uploads/2015/03/camp-4-yosemite-valley.jpg",
//           description:"Yosemite campsite in USA"
        
//         },
//         function(err,campgrnd)
//         {
//             if(err)
//             {
//                  console.log("error");  
//             }
//             else
//             {   
//                     console.log("Newly created campground");
//                     console.log("Campground "+campgrnd);
//             }
//         }
        
    
//     );



// var campgrounds = [
//         {name :"Zion",image : "https://www.nps.gov/zion/planyourvisit/images/South_CG_r_1.jpg"},
//         {name:"Kasol",image:"http://d2847ql9t214mi.cloudfront.net/wp-content/uploads/2015/07/Camping-in-Kasol-Himachal-Pradesh.jpg"},
//         {name:"Yosemite",image:"https://jameskaiser.com/wp-content/uploads/2015/03/camp-4-yosemite-valley.jpg"},
//         {name:"Triund",image:"http://www.ecocampuk.co.uk/wp-content/uploads/2011/08/Sussex-Campsite-with-Bell-Tents-7.jpeg"},
//         {name:"KP",image:"http://www.dismalscanyon.com/campsites/images/sleeping_water_5177_900px.jpg"}
//         ] ; 

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname+"/public"));

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error=req.flash("error");
   res.locals.success=req.flash("success");
   next();
});

app.set("view engine" ,"ejs") ;

app.use(indexRoutes);


app.use("/campgrounds",campgroundRoutes);

app.use("/campgrounds/:id/comments",commentRoutes);


app.listen(process.env.PORT,process.env.IP,function()
{
    console.log("yelpcamp server started");
});