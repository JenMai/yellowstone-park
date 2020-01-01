"use strict";

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuBtn.classList.toggle("close");
  menu.classList.toggle("show");
  menuNav.classList.toggle("show");
  navItems.forEach(item => item.classList.toggle("show"));

  showMenu = !showMenu;
}
