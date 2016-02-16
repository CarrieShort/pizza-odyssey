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

// Objects which store data by store
var ballardData = {
  t1: ['8:00am', 0, 4,0,4],
  t2: ['9:00am', 0, 4,0,4],
  t3: ['10:00am', 0, 4,0,4],
  t4: ['11:00am', 0, 7,0,4],
  t5: ['12 noon', 0, 7,0,4],
  t6: ['1:00pm', 0, 7,0,4],
  t7: ['2:00pm', 2, 15,1,4],
  t8: ['3:00pm', 2, 15,1,4],
  t9: ['4:00pm', 2, 15,1,4],
  t10: ['5:00pm', 15, 35,3,8],
  t11: ['6:00pm', 15, 35,3,8],
  t12: ['7:00pm', 15, 35,3,8],
  t13: ['8:00pm', 12, 31,5,12],
  t14: ['9:00pm', 12, 31,5,12],
  t15: ['10:00pm', 12, 31,5,12],
  t16: ['11:00pm', 5, 20,6,11],
  t17: ['12 midnight', 5, 20,6,11],
  t18: ['1:00am', 5, 20,6,11],
  generateRandom: function(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  calcDrivers: function(deliveries) {
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
  },
  listify: function(ulId) {
    var totalPizzas = 0;
    var listLocation = document.getElementById(ulId);
    var x;
    for (x in this) {
      if (typeof(this[x]) === 'object') {
        var hour = this[x][0];
        var pizzas = this.generateRandom(this[x][1],this[x][2]);
        var numDeliveries = this.generateRandom(this[x][3],this[x][4]);
        var numDrivers = this.calcDrivers(numDeliveries);
        var liEl = document.createElement('li');
        liEl.textContent = hour + ' ' + pizzas + ' pizzas, ' + numDeliveries + ' deliveries -- [ ' + numDrivers + ' ]' ;
        listLocation.appendChild(liEl);
        totalPizzas = totalPizzas + numDeliveries + pizzas;
      }
    }
    return totalPizzas;
  }
};

var firstHillData = {
  t1: ['8:00am', 0, 4,0,4],
  t2: ['9:00am', 0, 4,0,4],
  t3: ['10:00am', 0, 4,0,4],
  t4: ['11:00am', 0, 7,0,4],
  t5: ['12 noon', 0, 7,0,4],
  t6: ['1:00pm', 0, 7,0,4],
  t7: ['2:00pm', 2, 15,1,4],
  t8: ['3:00pm', 2, 15,1,4],
  t9: ['4:00pm', 2, 15,1,4],
  t10: ['5:00pm', 15, 35,3,8],
  t11: ['6:00pm', 15, 35,3,8],
  t12: ['7:00pm', 15, 35,3,8],
  t13: ['8:00pm', 12, 31,5,12],
  t14: ['9:00pm', 12, 31,5,12],
  t15: ['10:00pm', 12, 31,5,12],
  t16: ['11:00pm', 5, 20,6,11],
  t17: ['12 midnight', 5, 20,6,11],
  t18: ['1:00am', 5, 20,6,11],
  generateRandom: function(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  calcDrivers: function(deliveries) {
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
  },
  listify: function(ulId) {
    var totalPizzas = 0;
    var listLocation = document.getElementById(ulId);
    var x;
    for (x in this) {
      if (typeof(this[x]) === 'object') {
        var hour = this[x][0];
        var pizzas = this.generateRandom(this[x][1],this[x][2]);
        var numDeliveries = this.generateRandom(this[x][3],this[x][4]);
        var numDrivers = this.calcDrivers(numDeliveries);
        var liEl = document.createElement('li');
        liEl.textContent = hour + ' ' + pizzas + ' pizzas, ' + numDeliveries + ' deliveries -- [ ' + numDrivers + ' ]' ;
        listLocation.appendChild(liEl);
        totalPizzas = totalPizzas + numDeliveries + pizzas;
      }
    }
    return totalPizzas;
  }
};

var internationalDistData = {
  t1: ['8:00am', 0, 4,0,4],
  t2: ['9:00am', 0, 4,0,4],
  t3: ['10:00am', 0, 4,0,4],
  t4: ['11:00am', 0, 7,0,4],
  t5: ['12 noon', 0, 7,0,4],
  t6: ['1:00pm', 0, 7,0,4],
  t7: ['2:00pm', 2, 15,1,4],
  t8: ['3:00pm', 2, 15,1,4],
  t9: ['4:00pm', 2, 15,1,4],
  t10: ['5:00pm', 15, 35,3,8],
  t11: ['6:00pm', 15, 35,3,8],
  t12: ['7:00pm', 15, 35,3,8],
  t13: ['8:00pm', 12, 31,5,12],
  t14: ['9:00pm', 12, 31,5,12],
  t15: ['10:00pm', 12, 31,5,12],
  t16: ['11:00pm', 5, 20,6,11],
  t17: ['12 midnight', 5, 20,6,11],
  t18: ['1:00am', 5, 20,6,11],
  generateRandom: function(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  calcDrivers: function(deliveries) {
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
  },
  listify: function(ulId) {
    var totalPizzas = 0;
    var listLocation = document.getElementById(ulId);
    var x;
    for (x in this) {
      if (typeof(this[x]) === 'object') {
        var hour = this[x][0];
        var pizzas = this.generateRandom(this[x][1],this[x][2]);
        var numDeliveries = this.generateRandom(this[x][3],this[x][4]);
        var numDrivers = this.calcDrivers(numDeliveries);
        var liEl = document.createElement('li');
        liEl.textContent = hour + ' ' + pizzas + ' pizzas, ' + numDeliveries + ' deliveries -- [ ' + numDrivers + ' ]' ;
        listLocation.appendChild(liEl);
        totalPizzas = totalPizzas + numDeliveries + pizzas;
      }
    }
    return totalPizzas;
  }
};
var sluData = {
  t1: ['8:00am', 0, 4,0,4],
  t2: ['9:00am', 0, 4,0,4],
  t3: ['10:00am', 0, 4,0,4],
  t4: ['11:00am', 0, 7,0,4],
  t5: ['12 noon', 0, 7,0,4],
  t6: ['1:00pm', 0, 7,0,4],
  t7: ['2:00pm', 2, 15,1,4],
  t8: ['3:00pm', 2, 15,1,4],
  t9: ['4:00pm', 2, 15,1,4],
  t10: ['5:00pm', 15, 35,3,8],
  t11: ['6:00pm', 15, 35,3,8],
  t12: ['7:00pm', 15, 35,3,8],
  t13: ['8:00pm', 12, 31,5,12],
  t14: ['9:00pm', 12, 31,5,12],
  t15: ['10:00pm', 12, 31,5,12],
  t16: ['11:00pm', 5, 20,6,11],
  t17: ['12 midnight', 5, 20,6,11],
  t18: ['1:00am', 5, 20,6,11],
  generateRandom: function(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  calcDrivers: function(deliveries) {
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
  },
  listify: function(ulId) {
    var totalPizzas = 0;
    var listLocation = document.getElementById(ulId);
    var x;
    for (x in this) {
      if (typeof(this[x]) === 'object') {
        var hour = this[x][0];
        var pizzas = this.generateRandom(this[x][1],this[x][2]);
        var numDeliveries = this.generateRandom(this[x][3],this[x][4]);
        var numDrivers = this.calcDrivers(numDeliveries);
        var liEl = document.createElement('li');
        liEl.textContent = hour + ' ' + pizzas + ' pizzas, ' + numDeliveries + ' deliveries -- [ ' + numDrivers + ' ]' ;
        listLocation.appendChild(liEl);
        totalPizzas = totalPizzas + numDeliveries + pizzas;
      }
    }
    return totalPizzas;
  }
};
var georgetownData = {
  t1: ['8:00am', 0, 4,0,4],
  t2: ['9:00am', 0, 4,0,4],
  t3: ['10:00am', 0, 4,0,4],
  t4: ['11:00am', 0, 7,0,4],
  t5: ['12 noon', 0, 7,0,4],
  t6: ['1:00pm', 0, 7,0,4],
  t7: ['2:00pm', 2, 15,1,4],
  t8: ['3:00pm', 2, 15,1,4],
  t9: ['4:00pm', 2, 15,1,4],
  t10: ['5:00pm', 15, 35,3,8],
  t11: ['6:00pm', 15, 35,3,8],
  t12: ['7:00pm', 15, 35,3,8],
  t13: ['8:00pm', 12, 31,5,12],
  t14: ['9:00pm', 12, 31,5,12],
  t15: ['10:00pm', 12, 31,5,12],
  t16: ['11:00pm', 5, 20,6,11],
  t17: ['12 midnight', 5, 20,6,11],
  t18: ['1:00am', 5, 20,6,11],
  generateRandom: function(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  calcDrivers: function(deliveries) {
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
  },
  listify: function(ulId) {
    var totalPizzas = 0;
    var listLocation = document.getElementById(ulId);
    var x;
    for (x in this) {
      if (typeof(this[x]) === 'object') {
        var hour = this[x][0];
        var pizzas = this.generateRandom(this[x][1],this[x][2]);
        var numDeliveries = this.generateRandom(this[x][3],this[x][4]);
        var numDrivers = this.calcDrivers(numDeliveries);
        var liEl = document.createElement('li');
        liEl.textContent = hour + ' ' + pizzas + ' pizzas, ' + numDeliveries + ' deliveries -- [ ' + numDrivers + ' ]' ;
        listLocation.appendChild(liEl);
        totalPizzas = totalPizzas + numDeliveries + pizzas;
      }
    }
    return totalPizzas;
  }
};
var ravennaData = {
  t1: ['8:00am', 0, 4,0,4],
  t2: ['9:00am', 0, 4,0,4],
  t3: ['10:00am', 0, 4,0,4],
  t4: ['11:00am', 0, 7,0,4],
  t5: ['12 noon', 0, 7,0,4],
  t6: ['1:00pm', 0, 7,0,4],
  t7: ['2:00pm', 2, 15,1,4],
  t8: ['3:00pm', 2, 15,1,4],
  t9: ['4:00pm', 2, 15,1,4],
  t10: ['5:00pm', 15, 35,3,8],
  t11: ['6:00pm', 15, 35,3,8],
  t12: ['7:00pm', 15, 35,3,8],
  t13: ['8:00pm', 12, 31,5,12],
  t14: ['9:00pm', 12, 31,5,12],
  t15: ['10:00pm', 12, 31,5,12],
  t16: ['11:00pm', 5, 20,6,11],
  t17: ['12 midnight', 5, 20,6,11],
  t18: ['1:00am', 5, 20,6,11],
  generateRandom: function(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  calcDrivers: function(deliveries) {
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
  },
  listify: function(ulId) {
    var totalPizzas = 0;
    var listLocation = document.getElementById(ulId);
    var x;
    for (x in this) {
      if (typeof(this[x]) === 'object') {
        var hour = this[x][0];
        var pizzas = this.generateRandom(this[x][1],this[x][2]);
        var numDeliveries = this.generateRandom(this[x][3],this[x][4]);
        var numDrivers = this.calcDrivers(numDeliveries);
        var liEl = document.createElement('li');
        liEl.textContent = hour + ' ' + pizzas + ' pizzas, ' + numDeliveries + ' deliveries -- [ ' + numDrivers + ' ]' ;
        listLocation.appendChild(liEl);
        totalPizzas = totalPizzas + numDeliveries + pizzas;
      }
    }
    return totalPizzas;
  }
};

// // Functions
// function generateRandom(min,max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// function calcDrivers(deliveries) {
//   if (deliveries % 3 === 0) {
//     var drivers = deliveries / 3;
//   } else {
//     var drivers = Math.floor(deliveries/3) + 1
//   }
//   if (drivers === 0) {
//     var driverMsg = 'driver not recommended';
//   } else {
//     var driverMsg = 'drivers recommended: ' + drivers;
//   };
//   return driverMsg;
// }
//
// function listify (objectVar, ulId) {
//   // console.log(objectVar);
//   // console.log(ulId);
//   var listLocation = document.getElementById(ulId);
//   var x;
//   for (x in objectVar) {
//     var hour = objectVar[x][0];
//     var pizzas = generateRandom(objectVar[x][1],objectVar[x][2]);
//     var numDeliveries = generateRandom(objectVar[x][3],objectVar[x][4]);
//     var numDrivers = calcDrivers(numDeliveries);
//     // console.log('the time is: ' + hour);
//     // console.log('number of pizzas are: ' + pizzas);
//     // console.log('number of deliveries are : ' + numDeliveries);
//     // console.log('number of recomended drivers are :' + numDrivers);
//     var liEl = document.createElement('li');
//     liEl.textContent = hour + ' ' + pizzas + ' pizzas, ' + numDeliveries + ' deliveries -- [ ' + numDrivers + ' ]' ;
//     listLocation.appendChild(liEl);
//   }
// };

// Generate Lists for each data set
var ballardTotal = ballardData.listify('ballard');
var firstHillTotal =firstHillData.listify('firsthill');
var internationalDistTotal = internationalDistData.listify('international-dist');
var sluTotal = sluData.listify('slu');
var georgetownTotal = georgetownData.listify('georgetown');
var ravennaTotal = ravennaData.listify('ravenna');
console.log('Ballard total ' + ballardTotal);
console.log('First Hill total ' + firstHillTotal);
console.log('The International District total ' + internationalDistTotal);
console.log('South Lake Union total ' + sluTotal);
console.log('Georgetown total ' + georgetownTotal);
console.log('Ravenna total ' + ravennaTotal);


//Questions for tomorrow:
// 1. calculating number of drivers based on random number of deliveries could end with lack of drivers, maybe should be based on max?
// 2. as of now deliveries > # of pizzas....?
// 3. my functions live outside my object, didn't seem to make sense to store them in object as I couldn't use the benefit of this operators and the like.... also i want to use the same functions across 6 objects.
// 4. Client Question: Do you deliver pizza's between 2:00 am and 3:00 am or do you close at 2:00?
