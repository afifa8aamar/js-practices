function CoffeeMachine(power, capacity) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	var Running = false;
    function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
	
    this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
	    
    this.getWaterAmount = function(amount) {

		return waterAmount;
    };

    function onReady() {
		console.log('Coffee is ready');
    }
    
	this.run = function() {
        Running = true;
        setTimeout(onReady, getTimeToBoil());
        Running = true;
    };

    CoffeeMachine.prototype.setOnReady= function(cb) 
    {
        Running = false;
        var amount = coffeeMachine.getWaterAmount();
        console.log( 'Coffee is ready: ' + amount + ' ml' ); // Coffee is ready: 150 ml
        cb();           
        
    }

    CoffeeMachine.prototype.isRunning = function()
    {
        return Running ;
    }
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log('Before: ' + coffeeMachine.isRunning()); // Before: false

coffeeMachine.run();

console.log('In progress: ' + coffeeMachine.isRunning()); // In progress: true

coffeeMachine.setOnReady(function() {
	console.log('After: ' + coffeeMachine.isRunning()); // After: false
});