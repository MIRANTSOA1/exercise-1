// 1) Count items:
function getCount(){ 
    var elem = document.getElementsByClassName("list")
    const h1 = document.createElement("h1")
    var i=0;
    var count = 0;
    while(elem[0].getElementsByTagName("li")[i++]){
        count++
    }
    h1.innerText = count + " items"
    document.querySelector(".list").appendChild(h1)
}
// *****************************************************************************
//2) MouseOver:
var bold_text = document.getElementsByTagName("b")
var p = document.getElementsByTagName("p")
function MouseOver(){
    var i=0;
    var count = 0;
    while(p[0].getElementsByTagName("b")[i++]){
        bold_text[count].style.color = "yellow"
        count++
    }
}
function MouseOut(){
    var j=0;
    var count = 0;
    while(p[0].getElementsByTagName("b")[j++]){
        bold_text[count].style.color = "black"
        count++
    }
}
// *****************************************************************************
//3) Show the width and height of the window:
const height = document.querySelector("#height");
const width = document.querySelector("#width");
function windowSize() {
    height.textContent = window.innerHeight;
    width.textContent = window.innerWidth;
}
window.onresize = windowSize;
