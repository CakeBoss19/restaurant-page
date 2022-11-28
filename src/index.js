import "./styles/practice-style.css";
import header from "./header";
import footer from "./footer";
import * as Home from "./home";
import menuPage from "./menuPage";
import * as Menu from "./menu";
import contactsPage from "./contactsPage";

const content = document.getElementById('content');
content.appendChild(header());
content.appendChild(footer());

window.addEventListener('load', (e) => {
  Home.main(content);
});

console.log(content);
let buttons = document.getElementsByTagName('button');
let btnsArray = Array.prototype.slice.call(buttons);
btnsArray.forEach(button => {
  console.log(button);
  });

// console.log(homeBtn);

// homeBtn.addEventListener('click', () => { 
//   console.log("Home button");
// });
// menuBtn.addEventListener('click', () => {
//   console.log("Menu button");
// });
// contactsBtn.addEventListener('click', () => {
//   console.log("Contacts button");
// });