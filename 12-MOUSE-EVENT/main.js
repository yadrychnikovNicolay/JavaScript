let hoverMe = document.getElementsByClassName("hoverMe");
let reset = document.getElementById("reset");
let axeX = document.getElementById("axe-x");
let axeY = document.getElementById("axe-y");
let body = document.getElementsByTagName("body");


for (var i = 0; i < hoverMe.length; i++) {
  hoverMe[i].addEventListener("mouseover", function(event){
    event.target.style.visibility = "hidden";
    // setTimeout(function(){
    //   event.target.style.visibility = "visible";
    // }, 500);
  }, false);
}

reset.addEventListener("click", function(){
  for (var i = 0; i < hoverMe.length; i++) {
    hoverMe[i].style.visibility = "visible";
  }
});

for (var i = 0; i < body.length; i++) {
  body[i].addEventListener("mousemove", function(event){
    let posX = event.clientX;
    let posY = event.clientY;
    axeX.innerText = "position x " + posX;
    axeY.innerText = "position y " + posY;
  }, false);
}
