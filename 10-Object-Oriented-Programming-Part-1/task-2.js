function CoffeeMachine(power, capacity) {
    var _power = power;
    let waterAmount = 0;
  
    const waterHeatCapacity = 4200;
  
    function getTimeToBoil() {
      return waterAmount * waterHeatCapacity * 80 / power;
    }

    this.getPower = function()
    {
      return _power;
    }
  
    // Smart method
    this.setWaterAmount = function(amount) {
      if (amount < 0) {
        throw new Error('Value should be positive');
      }
      if (amount > capacity) {
        throw new Error("Can't put water more then " + capacity);
      }
  
      waterAmount = amount;
    };
  
    this.getWaterAmount = function() {
      return waterAmount;
    };
  
    function onReady() {
      console.log('Coffee is ready');
    }
  
    this.run = function() {
      setTimeout(onReady, getTimeToBoil());
    };
  }

var coffeeMachine = new CoffeeMachine(50000, 1200);
coffeeMachine.getPower();