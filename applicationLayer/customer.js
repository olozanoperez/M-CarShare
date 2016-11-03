var Customer = function(firstName, lastName, email, address) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.address = address;
	this.id = 1;
	this.status = "suspended";
	this.sendConfirmationEmail();
};

Customer.prototype.checkPreviousBill = function(){
	return true;
};

Customer.prototype.sendConfirmationEmail = function() {
	console.log("Send mail to: " + this.email);
}

Customer.prototype.customerVerified = function() {
	this.status = "active";
	console.log("Customer status: " + this.status);
}

Customer.prototype.sayHello = function(name) {
	console.log("Hello, I'm " + this.firstName + " " + this.id);
}

var customer1 = new Customer ("Jenny", "Hendler", "bla", "bla");
customer1.sayHello("Hello");
customer1.checkPreviousBill();
customer1.customerVerified();