"use strict";
const navBtn = document.querySelector(".hamburger");

navBtn.addEventListener("click", function (e) {
  if (e.target) {
    e.target.src = "images/icon-close.svg";
  }
  //   let attr = e.target.getAttribute("src");
  //   if(e.target){

  //   }
  //   e.target.setAttribute('src') = "images/icon-close.svg";

  //   console.log(attr);
});
