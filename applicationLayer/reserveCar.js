function reserveCar() {	
	var customer1 = new Customer("Jenny", "Hendler", "bla", "bla");

//	If the user has paid the previous Bill then he is directed to the directions page, otherwise
//	it has to pay the previous bill
	if (customer1.checkPreviousBill() == true) {
		window.location = 'directionToCar.html'; 
	}
	else {
		window.location = 'payBill.html';
	}
}