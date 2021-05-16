import { MenuFactory } from "./menu";

const menu = MenuFactory(document.querySelector(".menu"));
// const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
// menu.addOpenTrigger(openMenuBtn);
menu.addCloseTrigger(closeMenuBtn);
