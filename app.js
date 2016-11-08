var http = require("http");
var express = require ("express");
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var routes = require('routes');

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'presentationLayer')));
app.use(express.static(path.join(__dirname, 'applicationLayer')));

app.get("/index.html", function (req, res) {
	res.sendfile(__dirname+"/presentationLayer/"+"index.html");
});

app.get("/addCar.html", function (req, res) {
	res.sendfile(__dirname+"/presentationLayer/"+"addCar.html");
});


app.get("/signIn.html", function (req, res) {
	res.sendfile(__dirname+"/presentationLayer/"+"signIn.html");
});

app.get("/carDetails.html", function (req, res) {
	res.sendfile(__dirname+"/presentationLayer/"+"carDetails.html");
});

app.get("/chooseDirection.html", function (req, res) {
	res.sendfile(__dirname+"/presentationLayer/"+"chooseDirection.html");
});

app.get("/directionToCar.html", function (req, res) {
	res.sendfile(__dirname+"/presentationLayer/"+"directionToCar.html");
});

app.get("/directionToLocation.html", function (req, res) {
	res.sendfile(__dirname+"/presentationLayer/"+"directionToLocation.html");
});

app.get("/emailSent.html", function (req, res) {
	res.sendfile(__dirname+"/presentationLayer/"+"emailSent.html");
});

app.get("/findCar.html", function (req, res) {
	res.sendfile(__dirname+"/presentationLayer/"+"findCar.html");
});

app.get("/payBill.html", function (req, res) {
	res.sendfile(__dirname+"/presentationLayer/"+"payBill.html");
});

app.get("/registerNewUser.html", function (req, res) {
	res.sendfile(__dirname+"/presentationLayer/"+"registerNewUser.html");
});

app.get("/searchResults.html", function (req, res) {
	res.sendfile(__dirname+"/presentationLayer/"+"searchResults.html");
});

app.get("/tripDetails.html", function (req, res) {
	res.sendfile(__dirname+"/presentationLayer/"+"tripDetails.html");
});

http.createServer(app).listen(8688);