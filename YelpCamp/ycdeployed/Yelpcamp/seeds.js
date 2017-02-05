var mongoose = require("mongoose");
var Campground= require("./models/campground");
var Comment = require("./models/comment");

var data = [
    
    {name:"Kasol",image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum "},
    {name:"Yosemite",image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
    {name:"third",image:"https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
    {name:"fourth",image:"https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}
                
    
    
    ]

function seedDB(){
 
 console.log("removing");
    Campground.remove({},function(err){
    
        if(err) {
            console.log("error "+err);
        }
        // else 
        // {
        //     console.log("Db cleared successfully");
        // }
    
        //  //add a few campgrounds
        //  data.forEach(function(seed)
        // {
        //      Campground.create(seed,function(err,added){
        //      if(err )
        //         {
        //             console.log("error "+err);
        //         }
        //      else 
        //         {
        //              //add a few comment to each camp
        //             console.log("added "+added);
        //             Comment.create({text:"Nice place",author:"me"},function(err,comment){
        //                 if(err) 
        //                 {
        //                     console.log("error while commenting");
        //                 }
        //                 else 
        //                 {
        //                     added.comments.push(comment);
        //                     added.save();
        //                     console.log("Created new comment");
        //                 }

        //             });
        //         }

        //     });
            
             
        //  });
    
    
     });
   
    
   
}

module.exports = seedDB;

