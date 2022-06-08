"use strict";

//change navbar styles on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

//show/hide faq answer
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //check icon
    const icon = faq.querySelector(".faq__icon i");
    icon.className =
      icon.className === "uil uil-plus" ? "uil uil-minus" : "uil uil-plus";
  });
});

// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
  overlay.style.display = "block";
  console.log("here");
});

// close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
  overlay.style.display = "none";
};

closeBtn.addEventListener("click", closeNav);
//clicking outside nav menu will also close nav menu
overlay.addEventListener("click", closeNav);
