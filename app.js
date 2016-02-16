'use strict';

/*
Create an array for each time. This means that there will be 18 properties per object :( = saddest face ever.
Plan for object

var example = {
t1: [time string, minPizza, maxPizza,minDelivery,maxDelivery],
t2: [],
t3: [],
t4: [],
t5: [],
t6: [],
t7: [],
t8: [],
t9: [],
t10: [],
t11: [],
t12: [],
t13: [],
t14: [],
t15: [],
t16: [],
t17: [],
t18: [],
generateRandom: function(min,max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
},

calcDrivers: function(deliveries) {
  if (deliveries % 3 === 0) {
  var drivers = deliveries / 3;
} else {
  var drivers = Math.floor(deliveries/3) + 1
}
return drivers;
}
}

Use a for in loop to iterate through object. May need to create some check so it only loops through properties and not methods, not sure if a for in loop iterates over both or just properties:
var x;
for (x in example) {
var hour = example[x][0];
var pizzas = example.generateRandom(example[x][1],example[x][2]);
var deliveries = example.generateRandom(example[x][3],example[x][4]);
}


*/


var listFodder = ['things', 45, 'blue bears', 'beagles', 99];
var placeForMahList = document.getElementById('ballard');
function listify(listed) {
  for (var i=0; i < listed.length; i++) {

    //build an li element
    var liEl = document.createElement('li');
    liEl.textContent = listed[i];
    placeForMahList.appendChild(liEl);
  }
}

listify(listFodder);
