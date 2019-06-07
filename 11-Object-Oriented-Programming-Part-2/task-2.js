function CoffeeMachine(power) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	
    function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}
  	
    this.run = function() {
    	setTimeout(function() {
			console.log('Coffee is ready!');
    	}, getTimeToBoil());
	};

}


CoffeeMachine.prototype.setWaterAmount(amount)
{
    waterAmount = amount;

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();