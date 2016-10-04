var http = require("http");
var express = require ("express");
var app = express();

// let us initiate basic handler and add router explicitly

app.use(express.bodyParser());	
app.use(app.router);

// basic routes def start here

// when a broswer places a GET req / the response will be followed

app.get("/",function(req,res){	
	res.send("i am from / GET req");
});


//let us construct basic form

app.get("/addCar",function(req,res){
	res.sendfile("./addCar.html"); 

})

app.post("/addCar",function(req,res)
{
	var carPlate=req.body.carPlate; 
	var carBrand=req.body.carBrand;
	var carModel=req.body.carModel; 
	var carYear=req.body.carYear; 
	var carColor=req.body.carColor; 
	var carType=req.body.carType;  
	res.send("A new car has been created:</br> Car Plate: "	+carPlate+"</br>Car Brand:"+carBrand+"</br>Car Model:"+carModel+"</br>Year:"+carYear+"</br>Car Color:"+carColor+"</br>Car Type:"+carType);
});


http.createServer(app).listen(3000);