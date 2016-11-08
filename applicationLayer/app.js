var http = require("http");
var express = require("express");
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var routes = require('routes');
var Customer = require(__dirname + '/application.js');
var reserveCar = require('./reserveCar.js');
// var Customer = require('./applicationLayer/application.js');

app.use(express.bodyParser());
app.use(app.router);
// app.use(Customer);
app.use(express.static(path.join('./presentationLayer')));

app.get("/index.html", function(req, res) {
	res.sendfile("./presentationLayer/" + "index.html");
});

app.get("/addCar.html", function(req, res) {
	res.sendfile("./presentationLayer/" + "addCar.html");
});

app.get("/signIn.html", function(req, res) {
	res.sendfile("./presentationLayer/" + "signIn.html");
});

app.get("/carDetails.html", function(req, res) {
	res.sendfile("./presentationLayer/" + "carDetails.html");
});

app.get("/chooseDirection.html", function(req, res) {
	res.sendfile("./presentationLayer/" + "chooseDirection.html");
});

app.get("/directionToCar.html", function(req, res) {
	res.sendfile("./presentationLayer/" + "directionToCar.html");
});

app.get("/directionToLocation.html", function(req, res) {
	res.sendfile("./presentationLayer/" + "directionToLocation.html");
});

app.get("/emailSent.html", function(req, res) {
	res.sendfile("./presentationLayer/" + "emailSent.html");
});

app.get("/findCar.html", function(req, res) {
	res.sendfile("./presentationLayer/" + "findCar.html");
});

app.get("/payBill.html", function(req, res) {
	res.sendfile("./presentationLayer/" + "payBill.html");
});

app.get("/registerNewUser.html", function(req, res) {
	res.sendfile("./presentationLayer/" + "registerNewUser.html");
});

app.get("/searchResults.html", function(req, res) {
	res.sendfile("./presentationLayer/" + "searchResults.html");
});

app.get("/tripDetails.html", function(req, res) {
	res.sendfile("./presentationLayer/" + "tripDetails.html");
});

// If a new user is registering, his/her data is stored in the userdata.json
// file
app.post("/registerNewUser", function(req, res) {
	fs.readFile('./datalayer/userdata.json', 'utf8', function(err, data) {
		if (err)
			throw err;
		var user_data = JSON.parse(data);
		user_data.push({
			first_name : req.body.firstName,
			last_name : req.body.lastName,
			email_id : req.body.email,
			street_name : req.body.street,
			city_add : req.body.city,
			postal_code : req.body.postalCode,
			province_name : req.body.province,
			password : req.body.password
		});
		var json = JSON.stringify(user_data);
		fs.writeFile('./dataLayer/userdata.json', json);
	})
	res.sendfile('./' + "presentationLayer/emailSent.html");
});

// Checks if the username exists and if the password matches the username if
// yes, a new customer is created.
app.post("/signIn", function(req, res) {
	fs.readFile('./datalayer/userdata.json', 'utf8', function(err, data) {
		if (err)
			throw err;
		var user_data = JSON.parse(data);
		var chck = -1;
		for (var i = 0; i < user_data.length; ++i) {
			if (user_data[i].email_id == req.body.username) {
				chck = i;
				break;
			}
		}
		if (chck != -1 && user_data[chck].password == req.body.password) {
			// var currentUser = new
			// Customer(user_data[chck].first_name,user_data[chck].last_name,user_data[chck].email_id,user_data[chck].street_name,user_data[chck].city_add,user_data[chck].postal_code,user_data[chck].province_name);
			// var currentUser = new
			// Customer(user_data[chck].first_name,user_data[chck].last_name,user_data[chck].email_id,user_data[chck].street_name);
			res.sendfile('./presentationLayer/findCar.html');
		} else {
			res.send("Invalid Username or Password.");
		}
	})
});

app.get('/carDetails.html', function(req,res) {
	res.sendfile('./presentationLayer/findCar.html');
});
	
//app.post("/carDetails", function(req, res) {
//	res.sendfile('./' + "presentationLayer/directionToCar.html");
////	var customer1 = new Customer("Jenny", "Hendler", "bla", "bla");
////	if (customer1.checkPreviousBill() == true) {
////		res.sendfile('./' + "presentationLayer/directionToCar.html");
////		//window.location = 'directionToCar.html';
////	} else {
////		res.sendfile('./' + "presentationLayer/payBill.html");
////		//window.location = 'payBill.html';
////	}
//});

//app.post('/carDetails', function(req, res) {
//	  // Your logic and then redirect
//	  res.redirect('/index.html');
//	});



http.createServer(app).listen(8888);