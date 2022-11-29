import "./styles/style.css";
import header from "./header";
import footer from "./footer";
import * as Home from "./home";
import * as Menu from "./menu"
import * as Contacts from "./contacts";

const content = document.getElementById('content');
content.appendChild(header());
content.appendChild(footer());

window.addEventListener('load', (e) => {
  Home.main(content);
});

const homeButton = document.querySelector('[data-id="0"]');
const menuButton = document.querySelector('[data-id="1"]');
const contactsButton = document.querySelector('[data-id="2"]');

homeButton.addEventListener('click', () => {
  let currentMain = document.querySelector('main');
  content.removeChild(currentMain);
  Home.main(content);
})

menuButton.addEventListener('click', () => {
  let currentMain = document.querySelector('main');
  content.removeChild(currentMain);
  Menu.main(content);
})

contactsButton.addEventListener('click', () => {
  let currentMain = document.querySelector('main');
  content.removeChild(currentMain);
  Contacts.main(content);
});