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
  var scoreBoard = document.createElement('div');
  var nameHeader = document.createElement('div');
  var missCount = document.createElement('div');
  var matchCount = document.createElement('div');
  var missedCount = 0;
  var matchedCount = 0;
  var cWidth = 600;
  var cHeight = 600;
  var choices = [];

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

  body.appendChild(scoreBoard);
  scoreBoard.style.position = 'relative';
  scoreBoard.style.margin = '-20px auto';
  scoreBoard.style.boxSizing = 'border-box';
  scoreBoard.style.width = '600px';
  scoreBoard.style.height = '70px';

  body.appendChild(nameHeader);
  nameHeader.style.position = 'relative';
  nameHeader.style.top = '-40px';
  nameHeader.style.width = '100%';
  nameHeader.style.fontFamily = 'Helvetica';
  nameHeader.style.color = 'gold';
  nameHeader.style.textShadow = '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';
  nameHeader.style.fontSize = '50px';
  nameHeader.style.textDecoration = 'underline';
  nameHeader.style.textAlign = 'center';
  nameHeader.innerText = 'STRIKE A MATCH!';

  scoreBoard.appendChild(missCount);
  missCount.style.position = 'absolute';
  missCount.style.top = '85px';
  missCount.style.left = '10px';
  missCount.style.width = '120px';
  missCount.style.fontFamily = 'Helvetica';
  missCount.style.textAlign = 'center';
  missCount.innerText = 'MISSES: ' + missedCount;
  missCount.style.border = '1px solid black';

  scoreBoard.appendChild(matchCount);
  matchCount.style.position = 'absolute';
  matchCount.style.top = '85px';
  matchCount.style.right = '10px';
  matchCount.style.width = '120px';
  matchCount.style.fontFamily = 'Helvetica';
  matchCount.style.textAlign = 'center';
  matchCount.innerText = 'MATCHES: ' + matchedCount;
  matchCount.style.border = '1px solid black';

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
    if(e.target.style.opacity === '1') {
      return;
    }else{
      e.target.style.opacity = '1';
      choices.push(e.target);
      if(choices[0].src === choices[1].src) {
        alert('yeah! one match!');
        choices = [];
      }else if(choices.length === 1){
        return;
      }else if(choices[0].src != choices[1].src) {
        choices[0].style.opacity = '0';
        alert('sorry!');
        choices[1].style.opacity = '0';
        choices = [];
      }
    }
  })

})();
