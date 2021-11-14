"use strict"

let triggerButton = document.querySelector(".darkModeTriger");

triggerButton.addEventListener("click", function(){
    let text = document.getElementById("text");
    let myBody = document.querySelector("body");
    myBody.classList.toggle("light");
    if(myBody.classList.contains("light")){
        triggerButton.innerHTML = '<span class="material-icons" id="light-icon">brightness_3</span>';
        text.innerHTML = "Light Mode";
    }else{
        triggerButton.innerHTML = '<span class="material-icons" id="light-icon">brightness_high</span>';
        text.innerHTML = "Dark Mode";
    }
});