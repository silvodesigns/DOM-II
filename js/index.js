// Your code goes here
const navigationList = document.querySelectorAll(".nav-link");
navigationList.forEach(function(element){
    //MOUSEOVER EVENT
    element.addEventListener("mouseover", function(event){
            event.target.style.color = "yellow";
    });
    //MOUSELEAVE EVENT
    element.addEventListener("mouseleave", function(event){
        event.target.style.color = "black";
    });

});
//SPELL FUN BUS AND INSET ON PAGE
document.addEventListener('keydown', logKey);
var container = document.querySelector(".fun-bus-writting");
function logKey(e) {
    const funBus =[];
        if(e.code == "KeyF"){
            funBus.push("F");

        }
        if(e.code == "KeyU"){
            funBus.push("U");

        }
        if(e.code == "KeyN"){
            funBus.push("N");

        }
        if(e.code == "KeyB"){
            funBus.push("B");

        }
        if(e.code == "KeyS"){
            funBus.push("S");

        }
  funBus.forEach(function(element){
      if(element !== ""){
          container.innerHTML += `<h1>${element}</h1>`;

      }

  });
}
//SCROLL EVENT
var bodyWindow = document.querySelector("body");
window.addEventListener('scroll', function(e) {
   if(e.isTrusted == true){
       bodyWindow.style.backgroundColor ="pink";
   }

});

//COPY EVENT
const source = document.querySelectorAll("body p");
source.forEach(function(element){
    element.addEventListener('copy', function(event){
        event.preventDefault();
    })
});

// addEventListener version
window.addEventListener('online', (event) => {
    console.log("You are now connected to the network.");
});

//double click
const busPic = document.querySelector('.intro img');

busPic.addEventListener('dblclick', function (e) {
  console.log("was double clicked");
});