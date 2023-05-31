const express = require("express")
const randomizor = express()
const ejs = require("ejs")
var catme = require('cat-me');
const mongoose = require("mongoose")
let a = catme()

randomizor.set("view engine", "ejs")

randomizor.use(express.urlencoded({ extended: true }));

const contact = require("../Random/model/contact")

randomizor.get("/", function(req,res){
    res.render("frontpage.ejs",{});
});



//connection
mongoose.connect("mongodb://127.0.0.1:27017/random", (err)=>{
  if(err) console.log('err') ;
  else
  console.log("Ok")
  mongoose.set('strictQuery', false) 


});
randomizor.post("/contact", (req,res) =>{
	console.log("POst REq of contact wrking")
	try {
		const data = contact.create(req.body)
res.redirect("/")		//const co = Contact.create(req.body)
	
	} catch (error) {
		console.log(error)
		res.redirect("/contactprocess")
		
	}
	//posting t0 database
	
	});
	




console.log(a);
randomizor.listen( process.env.PORT| 3000, () => {

})
