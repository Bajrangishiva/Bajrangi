let a = document.querySelector(".content-box")
var none= document.querySelector(".divimage")
a.addEventListener("mouseenter",function(){
    none.style.display="block";
})
a.addEventListener("mouseleave",function(){
    none.style.display="none";
})
  // var elem= document.querySelector("#elem1");
  // elem.addEventListener("mouseenter",function(){
  //   var image= elem.getAttribute("image1");
  //   none.style.backgroundImage = `url(${image})`
  // }) 
   
let elem=document.querySelectorAll(".items")
elem.forEach (function(e){
e.addEventListener("mouseenter",function() {
  var image= e.getAttribute("image1");
        none.style.backgroundImage=`url(${image})`
})
})
document.addEventListener("contextmenu",function(e){
     e.preventDefault()
},false)
// counter code is start // counter code is start // counter code is start // counter code is start // counter code is start 
let valueDisplays = document.querySelectorAll(".num");
 let interval = 5000;
valueDisplays.forEach((valueDisplay) => {
let startValue = 0;
let endValue = parseInt(valueDisplay.getAttribute
("data-val"));
let duration = Math.floor (interval / endValue);
let counter = setInterval(function () {
startValue += 1;
valueDisplay.textContent = startValue;
if (startValue == endValue) {
clearInterval(counter);
}

}, duration);
1});
 
 
 