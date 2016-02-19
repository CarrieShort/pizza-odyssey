'use strict';
// Data Sources
var ballardData = [[0,4,0,4],[0,4,0,4],[0,4,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[2,15,1,4],[2,15,1,4],[2,15,1,4],[15,35,3,8],[15,35,3,8],[15,35,3,8],[12,31,5,12],[12,31,5,12],[12,31,5,12],[5,20,6,11],[5,20,6,11],[5,20,6,11]];

var firstHillData = [[1,3,1,7],[1,3,1,7],[1,3,1,7],[5,9,2,8],[5,9,2,8],[5,9,2,8],[2,13,1,6],[2,13,1,6],[2,13,1,6],[18,32,3,9],[18,32,3,9],[18,32,3,9],[1,3,5,12],[1,3,5,12],[1,3,5,12],[8,20,6,16],[8,20,6,16],[8,20,6,16]];

var internationalDistData = [[0,4,0,4],[0,4,0,4],[0,4,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[2,15,1,4],[2,15,1,4],[2,15,1,4],[10,26,4,6],[10,26,4,6],[10,26,4,6],[8,22,7,15],[8,22,7,15],[8,22,7,15],[0,2,2,8],[0,2,2,8],[0,2,2,8]];

var sluData = [[0,4,0,4],[0,4,0,4],[0,4,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[5,15,0,4],[5,15,0,4],[5,15,0,4],[25,39,13,18],[25,39,13,18],[25,39,13,18],[22,36,5,22],[22,36,5,22],[22,36,5,22],[5,21,16,31],[5,21,16,31],[5,21,16,31]];

var georgetownData = [[2,7,3,5],[2,7,3,5],[2,7,3,5],[3,8,3,9],[3,8,3,9],[3,8,3,9],[1,5,1,4],[1,5,1,4],[1,5,1,4],[5,13,2,4],[5,13,2,4],[5,13,2,4],[22,41,15,42],[22,41,15,42],[22,41,15,42],[15,20,6,21],[15,20,6,21],[15,20,6,21]];

var ravennaData = [[0,4,0,4],[0,4,0,4],[0,4,0,4],[0,7,0,4],[0,7,0,4],[0,7,0,4],[2,15,1,4],[2,15,1,4],[2,15,1,4],[6,9,5,18],[6,9,5,18],[6,9,5,18],[4,8,2,5],[4,8,2,5],[4,8,2,5],[2,4,3,11],[2,4,3,11],[2,4,3,11]];

var summaryArray =[];

// cunstructor function
function PizzaShop(storeLocation,storeData) {
  this.storeLocation = storeLocation;
  this.storeData = storeData;
  this.tableHeaders = ['Time','Pizzas Sold in Store','Pizzas Delivered','Recommended Drivers'];
  this.hoursOfOperation = ['8:00 am','9:00 am','10:00 am','11:00 am','12:00 noon','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm','9:00 pm','10:00 pm','11:00 pm','12:00 midnight','1:00 am'];
}

// extend PizzaShop constructor with methods
// generate random function
PizzaShop.prototype.generateRandom = function(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// calculate number of drivers
PizzaShop.prototype.calcDrivers = function(deliveries) {
  if (deliveries % 3 === 0) {
    var drivers = deliveries / 3;
  } else {
    var drivers = Math.floor(deliveries/3) + 1
  }
  return drivers;
};

PizzaShop.prototype.calcData = function() {
  this.tableData = [];
  //Tracking Variables
  var totalPizzas = 0;
  var totalStorePizzas = 0;
  var totalDeliveries = 0;
  var totalDrivers = 0;
  for (var i=0; i < this.storeData.length; i++){
    var numPizzas = this.generateRandom(this.storeData[i][0],this.storeData[i][1]);
    var numDeliveries = this.generateRandom(this.storeData[i][2],this.storeData[i][3]);
    var numDrivers = this.calcDrivers(numDeliveries);
    this.tableData.push( [this.hoursOfOperation[i],numPizzas,numDeliveries,numDrivers]);

    totalPizzas = totalPizzas + numDeliveries + numPizzas;
    totalStorePizzas = totalStorePizzas + numPizzas;
    totalDeliveries = totalDeliveries + numDeliveries;
  }
  var totalDrivers = Math.ceil(this.calcDrivers(totalDeliveries)/18);
  summaryArray.push([this.storeLocation,totalStorePizzas,totalDeliveries,totalDrivers]);
  return totalPizzas;
}

PizzaShop.prototype.reportData = function() {
  var totals = this.calcData();
  tablify(this.tableData,this.tableHeaders,'build',this.storeLocation);
  return totals;
}

function tablify(tableData, tableHeaders,buildLocation,summary){
  var contentLocation = document.getElementById(buildLocation);
  var paragraph = document.createElement('p');
  paragraph.textContent = summary;
  var table = document.createElement('table');
  var headTR = document.createElement('tr');

  if (contentLocation) {
    contentLocation.appendChild(paragraph);
    contentLocation.appendChild(table);
  }
  table.appendChild(headTR);

  //Table Headers
  for (var i=0; i < tableHeaders.length; i++) {
    var newTH = document.createElement('th');
    newTH.textContent = tableHeaders[i];
    headTR.appendChild(newTH);
  }
  for (var i=0; i < tableData.length; i++) {
    var row = document.createElement('tr');
    table.appendChild(row);
    for (var j=0; j < tableData[i].length; j++){
      var cell = document.createElement('td');
      cell.textContent = tableData[i][j];
      row.appendChild(cell);
    }
  }
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

// Build summary table
tablify(summaryArray,['Location','Pizzas','Deliveries','Avg Drivers per Hour'],'summary','A summary of all 3001Pizza Locations');

var summaryArray =[];

// cunstructor function
function PizzaShop(storeLocation,storeData) {
  this.storeLocation = storeLocation;
  this.storeData = storeData;
  this.tableHeaders = ['Time','Pizzas Sold in Store','Pizzas Delivered','Recommended Drivers'];
  this.hoursOfOperation = ['8:00 am','9:00 am','10:00 am','11:00 am','12:00 noon','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm','9:00 pm','10:00 pm','11:00 pm','12:00 midnight','1:00 am'];
}

// extend PizzaShop constructor with methods
// generate random function
PizzaShop.prototype.generateRandom = function(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// calculate number of drivers
PizzaShop.prototype.calcDrivers = function(deliveries) {
  if (deliveries % 3 === 0) {
    var drivers = deliveries / 3;
  } else {
    var drivers = Math.floor(deliveries/3) + 1
  }
  return drivers;
};

PizzaShop.prototype.calcData = function() {
  this.tableData = [];
  //Tracking Variables
  var totalPizzas = 0;
  var totalStorePizzas = 0;
  var totalDeliveries = 0;
  var totalDrivers = 0;
  for (var i=0; i < this.storeData.length; i++){
    var numPizzas = this.generateRandom(this.storeData[i][0],this.storeData[i][1]);
    var numDeliveries = this.generateRandom(this.storeData[i][2],this.storeData[i][3]);
    var numDrivers = this.calcDrivers(numDeliveries);
    this.tableData.push( [this.hoursOfOperation[i],numPizzas,numDeliveries,numDrivers]);

    totalPizzas = totalPizzas + numDeliveries + numPizzas;
    totalStorePizzas = totalStorePizzas + numPizzas;
    totalDeliveries = totalDeliveries + numDeliveries;
  }
  var totalDrivers = Math.ceil(this.calcDrivers(totalDeliveries)/18);
  summaryArray.push([this.storeLocation,totalStorePizzas,totalDeliveries,totalDrivers]);
  return totalPizzas;
}

PizzaShop.prototype.reportData = function() {
  var totals = this.calcData();
  tablify(this.tableData,this.tableHeaders,'build',this.storeLocation);
  return totals;
}

function tablify(tableData, tableHeaders,buildLocation,summary){
  var contentLocation = document.getElementById(buildLocation);
  var paragraph = document.createElement('p');
  paragraph.textContent = summary;
  var table = document.createElement('table');
  var headTR = document.createElement('tr');

  if (contentLocation) {
    contentLocation.appendChild(paragraph);
    contentLocation.appendChild(table);
  }
  table.appendChild(headTR);

  //Table Headers
  for (var i=0; i < tableHeaders.length; i++) {
    var newTH = document.createElement('th');
    newTH.textContent = tableHeaders[i];
    headTR.appendChild(newTH);
  }
  for (var i=0; i < tableData.length; i++) {
    var row = document.createElement('tr');
    table.appendChild(row);
    for (var j=0; j < tableData[i].length; j++){
      var cell = document.createElement('td');
      cell.textContent = tableData[i][j];
      row.appendChild(cell);
    }
  }
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

// Build summary table
tablify(summaryArray,['Location','Pizzas','Deliveries','Avg Drivers per Hour'],'summary','A summary of all 3001Pizza Locations');

//Event Handler

//Variables for event handler
var createStoreForm = document.getElementById('createStore');
var addRowForm = document.getElementById('addRow');
var startNewStore = document.getElementById('done');
var currentStore;
// Event handler function

function handleNewStore(event){
  event.preventDefault();
  var inputStore = event.target.inputStoreLoc.value;
  var inputPMin = parseInt(event.target.inputPizzaMin.value);
  var inputPMax = parseInt(event.target.inputPizzaMax.value);
  var inputDMin = parseInt(event.target.inputDeliveryMin.value);
  var inputDMax = parseInt(event.target.inputDeliveryMax.value);

  if (!inputStore || !event.target.inputPizzaMin.value || !event.target.inputPizzaMax.value || !event.target.inputDeliveryMin.value || !event.target.inputDeliveryMax.value ) {
    return alert('Fields cannot be empty!');
  }

  // new CookieShop(event.target.storeName.value, event.target.min.value, event.target.max.value, event.target.avgCookie.value);
  var initialData = [[inputPMin,inputPMax,inputDMin,inputDMax]];
  currentStore = new PizzaShop(inputStore,initialData);
  createStoreForm.style.display = 'none';
  addRowForm.style.display = 'block'
  currentStore.reportData();
}

function updateNewStore(event){
  event.preventDefault();
  var inputPMin = parseInt(event.target.inputPizzaMin.value);
  var inputPMax = parseInt(event.target.inputPizzaMax.value);
  var inputDMin = parseInt(event.target.inputDeliveryMin.value);
  var inputDMax = parseInt(event.target.inputDeliveryMax.value);

  if (!event.target.inputPizzaMin.value || !event.target.inputPizzaMax.value || !event.target.inputDeliveryMin.value || !event.target.inputDeliveryMax.value ) {
    return alert('Fields cannot be empty!');
  }

  // new CookieShop(event.target.storeName.value, event.target.min.value, event.target.max.value, event.target.avgCookie.value);
  var additionalData = [inputPMin,inputPMax,inputDMin,inputDMax];
  currentStore.storeData.push(additionalData);
  var parent = document.getElementById('build');
  var child = parent.lastChild;
  parent.removeChild(child);
  child = parent.lastChild;
  parent.removeChild(child);
  currentStore.reportData();
}


// Event handler
createStoreForm.addEventListener('submit', handleNewStore);
addRowForm.addEventListener('submit', updateNewStore);

startNewStore.addEventListener('click', function() {
  createStoreForm.style.display = 'block';
  addRowForm.style.display = 'none'
});
