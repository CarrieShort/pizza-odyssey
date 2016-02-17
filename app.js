'use strict';
//example data structure
var ballardData = [[0,4,0,4],[0,4,0,4],[0,4,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[2,15,1,4],[2,15,1,4],[2,15,1,4],[15,35,3,8],[15,35,3,8],[15,35,3,8],[12,31,5,12],[12,31,5,12],[12,31,5,12],[5,20,6,11],[5,20,6,11],[5,20,6,11]];

// push time to storeData
function modData() {
  console.log('data goes');
  for(var i=0; i < ballardData.length; i++){
    var timeNum = (8 + i);
    if (timeNum < 12) {
      var timeString = timeNum + ':00 am';
    } else if(timeNum === 12) {
      var timeString = timeNum + ':00 noon';
    } else if(timeNum === 24) {
      var timeString = (timeNum - 12) + ':00 midnight';
    } else if (timeNum > 24){
      var timeString = (timeNum - 24) + ':00 am';
    } else if (timeNum > 12){
      var timeString = (timeNum - 12) + ':00 pm';
    }

    console.log(i);
    ballardData[i].push(timeString);
  }
}
modData();


// cunstructor function
function PizzaShop(storeLocation,storeData) {
  this.storeLocation = storeLocation;
  this.storeData = storeData;
}

// extend PizzaShop

// generate random function
PizzaShop.prototype.generateRandom = function(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// calculate number of drivers
PizzaShop.prototype.calcDrivers = function(deliveries) {
  if (deliveries % 3 === 0) {
    var drivers = deliveries / 3;
  } else {
    var drivers = Math.floor(deliveries/3) + 1
  }
  if (drivers === 0) {
    var driverMsg = 'driver not recommended';
  } else {
    var driverMsg = 'drivers recommended: ' + drivers;
  };
  return driverMsg;
}

// build out table and make calculations

PizzaShop.prototype.reportData = function (){

// build table here
// build table headers here
  for (var i=0; i < this.storeData.length; i++){
    // Build tr here
    var numPizzas = this.generateRandom(this.storeData[i][0],this.storeData[i][1]);
    var numDeliveries = this.generateRandom(this.storeData[i][2],this.storeData[i][3]);
    var numDrivers = this.calcDrivers(numDeliveries);
    this.storeData[i] = [this.storeData[i][4],numPizzas,numDeliveries,numDrivers];
    console.log(this.storeData[i]);
    // for (var j=0; j < this.storeData[i].length; i++) {
    //   // build TDs here
    // }

  }

}

var ballard = new PizzaShop('Ballard',ballardData);

ballard.reportData();
