import "./styles/practice-style.css";
import homePage from "./homePage";
import menuPage from "./menuPage";
import contactsPage from "./contactsPage";

window.addEventListener('load', (e) => {
  const content = document.getElementById('content');
  content.appendChild(homePage());
});

let buttons = document.getElementsByTagName('button');
let btnsArray = Array.prototype.slice.call(buttons);
console.log(btnsArray);
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