'use strict';
//example data structure
var ballardData = [[0,4,0,4],[0,4,0,4],[0,4,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[2,15,1,4],[2,15,1,4],[2,15,1,4],[15,35,3,8],[15,35,3,8],[15,35,3,8],[12,31,5,12],[12,31,5,12],[12,31,5,12],[5,20,6,11],[5,20,6,11],[5,20,6,11]];

var firstHillData = [[1,3,1,7],[1,3,1,7],[1,3,1,7],[5,9,2,8],[5,9,2,8],[5,9,2,8],[2,13,1,6],[2,13,1,6],[2,13,1,6],[18,32,3,9],[18,32,3,9],[18,32,3,9],[1,3,5,12],[1,3,5,12],[1,3,5,12],[8,20,6,16],[8,20,6,16],[8,20,6,16]];

var internationalDistData = [[0,4,0,4],[0,4,0,4],[0,4,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[2,15,1,4],[2,15,1,4],[2,15,1,4],[10,26,4,6],[10,26,4,6],[10,26,4,6],[8,22,7,15],[8,22,7,15],[8,22,7,15],[0,2,2,8],[0,2,2,8],[0,2,2,8]];

var sluData = [[0,4,0,4],[0,4,0,4],[0,4,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[5,15,0,4],[5,15,0,4],[5,15,0,4],[25,39,13,18],[25,39,13,18],[25,39,13,18],[22,36,5,22],[22,36,5,22],[22,36,5,22],[5,21,16,31],[5,21,16,31],[5,21,16,31]];

var georgetownData = [[2,7,3,5],[2,7,3,5],[2,7,3,5],[3,8,3,9],[3,8,3,9],[3,8,3,9],[1,5,1,4],[1,5,1,4],[1,5,1,4],[5,13,2,4],[5,13,2,4],[5,13,2,4],[22,41,15,42],[22,41,15,42],[22,41,15,42],[15,20,6,21],[15,20,6,21],[15,20,6,21]];

var ravennaData = [[0,4,0,4],[0,4,0,4],[0,4,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[2,15,1,4],[2,15,1,4],[2,15,1,4],[6,9,5,18],[6,9,5,18],[6,9,5,18],[4,8,2,5],[4,8,2,5],[4,8,2,5],[2,4,3,11],[2,4,3,11],[2,4,3,11]];

// cunstructor function
function PizzaShop(storeLocation,storeData) {
  this.storeLocation = storeLocation;
  this.storeData = storeData;
}

// extend PizzaShop constructor with methods
// function to modify storeData arrays by adding time
PizzaShop.prototype.modData = function() {
  for(var i=0; i < this.storeData.length; i++){
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
    this.storeData[i].push(timeString);
  }
}


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
  this.modData();
  // build table and table headers here
  var totalPizzas = 0;
  var contentLocation = document.getElementById('build');
  var paragraph = document.createElement('p');
  paragraph.textContent = this.storeLocation;
  var table = document.createElement('table');

  if (contentLocation) {
    contentLocation.appendChild(paragraph);
    contentLocation.appendChild(table);
  }

  for (var i=0; i < this.storeData.length; i++){
    // Build tr here
    var newTR = document.createElement('tr');
    table.appendChild(newTR);
    var numPizzas = this.generateRandom(this.storeData[i][0],this.storeData[i][1]);
    var numDeliveries = this.generateRandom(this.storeData[i][2],this.storeData[i][3]);
    var numDrivers = this.calcDrivers(numDeliveries);
    var tempArray = [this.storeData[i][4],numPizzas,numDeliveries,numDrivers];

    for (var j=0; j < tempArray.length; j++){
      // build TDs here
      var newTD = document.createElement('td');
      newTD.textContent = tempArray[j];
      newTR.appendChild(newTD);
    }
    totalPizzas = totalPizzas + numDeliveries + numPizzas;
  }
  return totalPizzas;
}

//Construct Objects
var ballard = new PizzaShop('Ballard',ballardData);
var firstHill = new PizzaShop('First Hill',firstHillData);
var internationalDist = new PizzaShop('The International District',internationalDistData);
var slu = new PizzaShop('South Lake Union',sluData);
var georgetown = new PizzaShop('Georgetown',georgetownData);
var ravenna = new PizzaShop('Ravenna',ravennaData);

// runs functions which print tables and returns and stores total pizzas
var ballardTotal = ballard.reportData();
var firstHillTotal = firstHill.reportData();
var internationalDistTotal = internationalDist.reportData();
var sluTotal = slu.reportData();
var georgetownTotal = georgetown.reportData();
var ravennaTotal = ravenna.reportData();

// calculate total pizzas per week
var pizzaOdysseys = (ballardTotal + firstHillTotal + internationalDistTotal + sluTotal + georgetownTotal + ravennaTotal) * 6;
var odysseyLocation = document.getElementById('odysseys');

// print total to index.html
if (odysseyLocation) {
  odysseyLocation.textContent = pizzaOdysseys;
}
