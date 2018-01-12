
//EXO ONE
let body = document.querySelector("body");
body.classList.remove("bg-aqua");
body.classList.add("bg-olive");
let firstParagraph = document.getElementById("first-paragraph");
firstParagraph.classList.remove("bg-lime", "gray");
firstParagraph.classList.add("aqua");
let classesWithSilver = document.getElementsByClassName("bg-silver");
for (var i = 0; i < classesWithSilver.length; i++) {
  classesWithSilver[i].classList.add("bg-teal");
  classesWithSilver[i].classList.remove("bg-silver");
}

let blockquote = document.getElementsByTagName("blockquote");
for (var i = 0; i < blockquote.length; i++) {
  blockquote[i].classList.add("bg-white");
}

//EXO TWO
let myTable = document.querySelector("#my-table");
myTable.classList.add("bg-purple");

let container = document.querySelectorAll(".container > p");
for (var i = 0; i < container.length; i++) {
  container[i].classList.add("shadow");
}

//EXO THREE
let pre = document.getElementsByTagName("pre");
for (var i = 0; i < pre.length; i++) {
  pre[i].style.color = "red";
  pre[i].style.backgroundColor = "blue";
  pre[i].style["border-top"] = "3px solid red";
  pre[i].style["border-bottom"] = "3px solid red";
}

let h3First = document.getElementsByTagName("h3")[0];
h3First.innerHTML = "<em>Itelic title ! yeah !</em>";

let h2First = document.getElementsByTagName("h2")[0];
h2First.innerText = "<strong>HTML doens't work !</strong>";

//EXO FOUR
let ulFirst = document.getElementsByTagName("ul")[0];
let li = document.createElement("li");
li.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
ulFirst.appendChild(li);

let link = li.querySelectorAll("a")[0];
link.style.color = "white";

//EXO FIVE
let olFirst = document.getElementsByTagName("ol")[0];
let olChildren = olFirst.children;
console.log(olChildren);
for (var i = (olChildren.length -1); i >= 0; i--) {
  olFirst.removeChild(olChildren[i]);
}
console.log(olChildren);
(var i = (olChildren.length -1); i >= 0; i--
let tab = ["Silent Teacher", "Code Monkey", "CodeCombat"];
for (var i = 0; i < tab.length; i++) {
  let newLi = document.createElement("li");
    newLi.innerText = tab[i];
    olFirst.appendChild(newLi);
}
