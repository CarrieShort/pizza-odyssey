'use strict';
//example data structure
var ballardData = [[0,4,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4]];

// // push time to dataSet
// function modData() {
//   console.log('data goes');
//   for(var i=0; i < ballardData.length; i++){
//     var timeNum = (8 + i);
//     if (timeNum < 12) {
//       var timeString = timeNum + ':00 am';
//     } else if(timeNum === 12) {
//       var timeString = timeNum + ':00 noon';
//     } else if(timeNum === 24) {
//       var timeString = (timeNum - 12) + ':00 midnight';
//     } else if (timeNum > 24){
//       var timeString = (timeNum - 24) + ':00 am';
//     } else if (timeNum > 12){
//       var timeString = (timeNum - 12) + ':00 pm';
//     }
//
//     console.log(i);
//     ballardData[i].push(timeString);
//   }
// }
// modData();


// // cunstructor function
// function PizzaShop(storeLocation,storeData) {
//   this.storeLocation = storeData;
//   this.dataSet = dataSet;
// }
//
// // extend PizzaShop
//
// // generate random function
// PizzaShop.prototype.generateRandom = function(min,max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// // calculate number of drivers
// PizzaShop.prototype.calcDrivers = function() {
//
// }
//
// // build out table and make calculations
//
// PizzaShop.prototype.reportData = function (){
//   console.log(this.dataSet);
//   for (var i=0; i < this.dataSet.length; i++){
//     console.log (this.dataSet[i]);
//     var numPizzas = this.generateRandom(this.dataSet[i][1],this.dataSet[i][1]);
//     console.log(numPizzas);
//     var numDeliveries = this.generateRandom(this.dataSet[i][3],this.dataSet[i][4]);
//     console.log(numDeliveries);
//   }
//
// }
//
// var ballard = new PizzaShop('Ballard',ballardData);
//
// ballard.reportData();
