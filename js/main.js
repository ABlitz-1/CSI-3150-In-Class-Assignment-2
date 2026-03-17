let cat = document.getElementsByClassName('cat');
let dog = document.getElementsByClassName('dog');
let cow = document.getElementsByClassName('cow');

let catb = document.getElementsByClassName('catb');
let dogb = document.getElementsByClassName('dogb');
let cowb = document.getElementsByClassName('cowb');

let hidecat = document.getElementById('hidecat');
let hidedog = document.document.getElementById('hidedog')
let hidecow = document.document.getElementById('hidecow')

catb.addEventListener("click", function() {
  cat.hidden = false;
  catb.style.backgroundColor = "lightgreen";
});

dogb.addEventListener("click", function() {
  dog.hidden = false;
  dogb.style.backgroundColor = "lightgreen";
});

cowb.addEventListener("click", function() {
  cow.hidden = false;
  cowb.style.backgroundColor = "lightgreen";
});

hidecat.addEventListener("click", function() {
  cat.hidden = true;
  catb.style.backgroundColor = "white";
});

hidedog.addEventListener("click", function() {
  dog.hidden = true;
  dogb.style.backgroundColor = "white";
});

hidecow.addEventListener("click", function() {
  cow.hidden = true;
  cowb.style.backgroundColor = "white";
});