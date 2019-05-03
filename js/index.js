// Your code goes here
const navigationList = document.querySelectorAll(".nav-link");
console.log(navigationList);
navigationList.forEach(function(element){
    element.addEventListener("mouseover", function(event){
            event.target.style.color = "yellow";
    });

    element.addEventListener("mouseleave", function(event){
        event.target.style.color = "black";
    });

});

