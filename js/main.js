let cat = document.getElementsByClassName('cat');
let dog = document.getElementsByClassName('dog');
let cow = document.getElementsByClassName('cow');

let catb = document.getElementsByClassName('catb');
let dogb = document.getElementsByClassName('dogb');
let cowb = document.getElementsByClassName('cowb');

catb.addEventListener("click", function() {
  cat.hidden = false;
  catb.style.backgroundColor = "lightgreen"
});

dogb.addEventListener("click", function() {
  dog.hidden = false;
  dogb.style.backgroundColor = "lightgreen"
});

cowb.addEventListener("click", function() {
  cow.hidden = false;
  cowb.style.backgroundColor = "lightgreen"
});