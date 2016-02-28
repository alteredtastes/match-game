(function() {
  'use strict';
  var i;
  var l;
  var j;
  var shuffArray = [];
  var divs = [];
  var imgs = [];
  var begin = 0;
  var end = 35;
  var srcs = ['images/0.jpg', 'images/1.jpg',
              'images/2.jpg', 'images/3.jpg',
              'images/4.jpg', 'images/5.jpg',
              'images/6.jpg', 'images/7.jpg',
              'images/8.jpg', 'images/9.jpg',
              'images/10.jpg', 'images/11.jpg',
              'images/12.jpg', 'images/13.jpg',
              'images/14.jpg', 'images/15.jpg',
              'images/16.jpg', 'images/17.jpg'];
  var body = document.getElementsByTagName('body')[0];
  var container = document.createElement('div');
  var cWidth = 700;
  var cHeight = 700;

  var shuffle = function(array) {
    for(i = begin; i <= end; i++) {
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

  body.appendChild(container);
  container.style.margin = '0px auto';
  container.style.boxSizing = 'border-box';
  container.style.width = cWidth.toString() + 'px';
  container.style.height = cHeight.toString() + 'px';
  container.style.backgroundColor = 'black';

  for(i = begin; i <= end; i++) {
    divs[i] = document.createElement('div');
    container.appendChild(divs[i]);
    divs[i].getAttribute('id', 'divId' + shuffArray[i].toString());
    divs[i].className = 'divs';
    divs[i].style.boxSizing = 'border-box';
    divs[i].style.float = 'left';
    divs[i].style.width = (cWidth/6).toString() + 'px';
    divs[i].style.height = (cHeight/6).toString() + 'px';
    divs[i].style.border = '1px solid white';
    divs[i].style.backgroundColor = 'rgba(255,0,0,0.1)';
  }

  for(i = begin; i <= end; i++) {
    imgs[i] = document.createElement('img');
    divs[shuffArray[i]].appendChild(imgs[i]);
    imgs[i].getAttribute('id', 'imgsId' + shuffArray[i].toString());
    imgs[i].className = 'imgs';
    if(i <= Math.floor(end/2)){
      imgs[i].src = srcs[i];
    }else{
      imgs[i].src = srcs[i - Math.floor(end/2)];
    }
  }


})();
