// Create a new customer with all attributes given
var Customer = function(firstName, lastName, email, address) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.address = address;
	/** TODO
	 * create proper ID automatically
	 */
	this.id = 1;
	this.status = "suspended";
	this.sendConfirmationEmail();
};

// Check, if the previous bill of the customer was paid
Customer.prototype.checkPreviousBill = function(){
	/** TODO
	 * Implement check of previous bill
	 */
	return true;
};

// Send a email so the customer can confirm his/her mailaddress
Customer.prototype.sendConfirmationEmail = function() {
	/** TODO
	 * Implement sending of confirmation mail
	 */
	console.log("Send mail to: " + this.email);
	return "Send mail to: " + this.email;
}

// Verifies the customer's mailadress and sets his/her status to active
Customer.prototype.customerVerified = function() {
	this.status = "active";
	console.log("Customer status: " + this.status);
}

// Testfunction
Customer.prototype.sayHello = function(name) {
	console.log("Hello, I'm " + this.firstName + " " + this.id);
	return ("Hello, I'm " + this.firstName + " " + this.id);
}

var customer1 = new Customer ("Jenny", "Hendler", "bla", "bla");
customer1.sayHello("Hello");
customer1.checkPreviousBill();
customer1.customerVerified();
var customer2 = new Customer ("Oscar", "Lozano", "dasda@hotmail.com", "asdasa");
function myFunction() {
	document.getElementById("demo").innerHTML = customer2.sendConfirmationEmail();
	setTimeout(function(){
	       window.location='directionToCar.html';
	    }, 5000);
	}