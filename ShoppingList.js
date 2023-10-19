var btnClick = document.getElementById("enter");
var inptArea = document.getElementById("userinput");
var slctUl = document.querySelector("ul");

btnClick.addEventListener("click", function(){
        if(inptArea.value.length>0){
            var crtLi = document.createElement("li");
            crtLi.appendChild(document.createTextNode(inptArea.value));
            slctUl.appendChild(crtLi)
            inptArea.value="";
        }})

inptArea.addEventListener("keypress", function(event){
        if(inptArea.value.length>0 && event.keyCode ===13){
            var crtLi = document.createElement("li");
            crtLi.appendChild(document.createTextNode(inptArea.value));
            slctUl.appendChild(crtLi)
            inptArea.value="";
        }})
