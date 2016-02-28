(function() {
  'use strict';
  var i;
  var l;
  var j;
  var r;
  var shuffArray = [];
  var divs = [];
  var begin = 0;
  var end = 35;

  var randomInt = function(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
  }

  var shuffle = function(array) {
    for(i = begin; i < end; i++) {
      array[i] = i;
    }
    l = array.length;
    while (l) {
      i = Math.floor(Math.random() * l--);
      j = array[l];
      array[l] = array[i];
      array[i] = j;
    }
    return array;
  }

  shuffArray = shuffle(shuffArray);


})();
