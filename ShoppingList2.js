var btnClick = document.getElementById("enter");
var inptArea = document.getElementById("userinput");
var slctUl = document.querySelector("ul");
var listItem = document.querySelectorAll("li");

for (var i = 0; i < listItem.length; i++) {
  listItem[i].setAttribute("class", "done");
  listItem[i].classList.toggle("done");
  listItem[i].addEventListener("click", run1);
  function run1(event) {
    if (event.target.className === "done") {
      event.target.classList.toggle("done");
    } else {
      event.target.classList.toggle("done");
    }
  }
  var dltButton = document.createElement("button");
  dltButton.appendChild(document.createTextNode("delete"));
  listItem[i].appendChild(dltButton);
  dltButton.addEventListener("click", run3);
  function run3(event) {
    if (event.target.parentElement.className === "done") {
      event.target.parentElement.remove();
    } else {
      event.target.parentElement.remove();
    }
  }
}

function inputLength() {
  return inptArea.value.length;
}

function createListElement() {
  var crtLi = document.createElement("li");
  crtLi.appendChild(document.createTextNode(inptArea.value));
  slctUl.appendChild(crtLi);
  crtLi.classList.add("done");
  crtLi.classList.toggle("done");
  crtLi.addEventListener("click", run2);
  function run2(event) {
    if (event.target.className === "done") {
      event.target.classList.toggle("done");
    } else {
      event.target.classList.toggle("done");
    }
  }
  var newDltButton = document.createElement("button");
  newDltButton.appendChild(document.createTextNode("delete"));
  crtLi.appendChild(newDltButton);
  newDltButton.addEventListener("click", run4);
  function run4(event) {
    if (event.target.parentElement.className === "done") {
      event.target.parentElement.remove();
    } else {
      event.target.parentElement.remove();
    }
  }
  inptArea.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(e) {
  if (inputLength() > 0 && e.which === 13) {
    createListElement();
  }
}

btnClick.addEventListener("click", addListAfterClick);

inptArea.addEventListener("keypress", addListAfterKeypress);
