//jshint esversion:6
const express=require("express");

const bodyParser=require("body-parser");
// const date=require(__dirname+"/date.js");
const app=express();
var items=["Buy Food","Cook Food","Eat Food"];
var workItems=[];
app.set('view engine','ejs');
app.get("/",function(req,res){

    // let day=date.getDate();     /*activating our getDate function and getting return from it and can also use date.getDay*/
    var today=new Date();
    var options={
      weekday:"long",
      day:"numeric",
      month: "long"
    };
    var day=today.toLocaleDateString("en-US",options);
    res.render("list",{ listTittle:day, newListItems:items});
});
/*setting bodyParser*/
app.use(bodyParser.urlencoded({extended:true}));

/*setting our css file*/
app.use(express.static("public"));
/*hANDLING post request*/
app.post("/",function(req,res){
  if(req.body.list=="Work-Item")
  {
    var item=req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
  }
  else
  {
    var item=req.body.newItem;
    items.push(item);
    res.redirect("/");
  }

})

/* Creating another route*/
app.get("/work",function(req,res){
  res.render("list",{listTittle: "Work-Item",newListItems:workItems})
})

/*Creating route request for about*/

app.get("/about",function(req,res){
  res.render("about.ejs")
})
app.listen(process.env.PORT || 3000,function(){console.log("server has been started")});











/*ejs code for control flow*/
// <% if(curDay==="Saturday"){  %>
//
//   <h1 style="color:yellow;">Its a <%= curDay %>!</h1>
// <% } else { %>
//   <h1 style="color:blue;">Its a <%= curDay %>!</h1>
// <%  } %>


/*code for checking the day in app.js*/
// var day="";
// if(currentDay==0)
// {
//   day="Sunday";
// }
// else if(currentDay==1)
// {
//   day="Monday";
// }
// else if(currentDay==2)
// {
//   day="Tuesday";
// }
// else if(currentDay==3)
// {
//   day="Wednesday";
// }
// else if(currentDay==4)
// {
//   day="Thursday";
// }
// else if(currentDay==5)
// {
//   day="Friday";
// }
// else if(currentDay==6)
// {
//   day="Saturday";
// }
