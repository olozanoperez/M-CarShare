// Create a new car with all attributes given
var Car = function(plate, brand, model, color, year, carClass, status, kmCost, timeCost, creator, picture, location, description) {
	this.plate = plate;
	this.brand = brand;
	this.model = model;
	this.color= color;
	this.year = year;
	this.carClass = carClass;
	this.status = status;
	this.kmCost = kmCost;
	this.timeCost = timeCost;
	this.creator = creator;
	this.picture = picture;
	this.location = location;
	this.description = description;
}

// Calculate costs for km and hours driven
Car.prototype.getCosts = function(kmDriven, hoursDriven) {
	var kmCost = kmDriven * kmCost;
	var timeCost = hoursDriven * timeCost;
	var costs = {kmCost, timeCost};
	return costs;
}

// Calculate air distance of car from given point
Car.prototype.calculateDistance = function(latitude, longitude) {
	/** TODO
	 * Calculate distance properly
	 */
	return 15;
}