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

//Google map

function initMap() {
  var yellowstone = { lat: 44.427, lng: -110.588 };
  var map = new google.maps.Map(document.getElementById("yellowstone-map"), {
    zoom: 8,
    center: yellowstone
  });
  var marker = new google.maps.Marker({ position: yellowstone, map: map });
}
