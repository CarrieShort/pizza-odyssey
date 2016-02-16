'use strict';
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
