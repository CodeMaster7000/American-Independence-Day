(function(){
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
function moveHorizontal() {
  this.style.left = Math.floor(getRandomArbitrary(5,95)) + '%';
  this.style.top = Math.floor(getRandomArbitrary(100,120)) + 'vh';
}
function CreateMoreFireworks(){
  for(var x = 0; x < 20; x++) {
    var delay = getRandomArbitrary(0, 3) + 's';
    var ul = document.createElement('ul');
    ul.classList.add('firework');
    ul.style.left = Math.floor(getRandomArbitrary(5,95)) + '%';
    ul.style.top = Math.floor(getRandomArbitrary(100,120)) + 'vh';
    ul.style.animationDelay = delay;
    for(var y = 0; y < 6; y++){
      var li = document.createElement('li');
      li.classList.add('bam');
      li.style.background = "#000";
      li.style.animationDelay = delay;
      ul.appendChild(li);
    }  document.querySelector('.mask').appendChild(ul);
  }
}
CreateMoreFireworks();
var fireworks = document.querySelectorAll('.firework');
fireworks.forEach(function(x){ x.addEventListener("webkitAnimationIteration", moveHorizontal);
  x.addEventListener("animationend", moveHorizontal);
});
})();
