
var express  = require("express");
var router  = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

router.get("/",function(req,res){
    
       Campground.find({},function(err,allcamps) {
            if(err) 
            {
                console.log("error "+err);
            }   
            else
            {
                res.render("campgrounds/index",{campgrounds:allcamps,currentUser:req.user}); 
            }
    
       });
       
    //res.render("campgrounds",{campgrounds:campgrounds});    
});

//CREATE route-add new camp to database
router.post("/",middleware.isLoggedIn,function(req,res)
{
   // res.send("you hit post");
   var name = req.body.name;
   var img = req.body.image;
   var desc = req.body.description;
   var price = req.body.price;
   console.log(img);
    var author = 
   {
       id:req.user._id,
       username:req.user.username
   }
   var camp =
   {
       name : name,
       price: price,
       image : img,
       description:desc,
       author:author
   }
  
   
    //campgrounds.push(camp);
    Campground.create(camp,function(err,newlyCreated) 
    {
        if(err) 
        {
            console.log("error "+err );
        }
        else 
        {
            
            console.log("Created campground "+newlyCreated);       
            res.redirect("/campgrounds");
        }
    });
    
    
    
});

//NEW route - show form to create new camp

router.get("/new",middleware.isLoggedIn,function(req,res){
    
   res.render("campgrounds/new"); 
});

//SHOW route - show the details for a particular campground
router.get("/:id",function(req,res){
    
    
   Campground.findById(req.params.id).populate("comments").exec(function(err,foundCamp)
   {
       if(err) {
           console.log("error "+err);
       }
       else 
       {
        //   console.log("Found camp inside show route "+foundCamp+" user "+foundCamp.comments[0].author.username);
            res.render("campgrounds/show",{campground:foundCamp}); 
           
       }
       
   });        
  
   
   
});

//EDIT CAMPGROUND ROUTE
router.get("/:id/edit",middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err) {
            console.log(err);
        }
        else{
        res.render("campgrounds/edit", {campground: foundCampground});}
    });
});


// UPDATE CAMPGROUND ROUTE
router.put("/:id",middleware.checkCampgroundOwnership, function(req, res){
    // find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
       if(err){
           res.redirect("/campgrounds");
       } else {
           //redirect somewhere(show page)
           res.redirect("/campgrounds/" + req.params.id);
       }
    });
});



//DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership,function(req, res){
   Campground.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/campgrounds");
      } else {
          res.redirect("/campgrounds");
      }
   });
});





module.exports = router;