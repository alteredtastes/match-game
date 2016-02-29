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
  var srcs = ['images/0.png', 'images/1.png',
              'images/2.png', 'images/3.png',
              'images/4.png', 'images/5.png',
              'images/6.png', 'images/7.png',
              'images/8.png', 'images/9.png',
              'images/10.png', 'images/11.png',
              'images/12.png', 'images/13.png',
              'images/14.png', 'images/15.png',
              'images/16.png', 'images/17.png'];
  var body = document.getElementsByTagName('body')[0];
  var container = document.createElement('div');
  var cWidth = 700;
  var cHeight = 700;
  var mouseup;
  var firstSrc;

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
    divs[i].style.backgroundColor = 'rgba(0,0,0,0.1)';
  }

  for(i = begin; i <= end; i++) {
    imgs[i] = document.createElement('img');
    divs[shuffArray[i]].appendChild(imgs[i]);
    imgs[i].getAttribute('id', 'imgsId' + shuffArray[i].toString());
    imgs[i].className = 'imgs';
    imgs[i].style.width = '100%';
    imgs[i].style.height = '100%';
    imgs[i].style.opacity = '0';
    if(i <= Math.floor(end/2)){
      imgs[i].src = srcs[i];
    }else{
      imgs[i].src = srcs[i - Math.ceil(end/2)];
    }
  }

  container.addEventListener('click', function(e) {
    e.target.style.opacity = '1';
    firstSrc = e.target.src;
  })
  console.log(firstSrc);


})();
