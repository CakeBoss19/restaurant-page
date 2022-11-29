import tagMaker from "./tagMaker";
import Icon from './logo.png';

export default function header() {
  const myIcon = new Image();
  myIcon.src = Icon;

  const h1 = tagMaker('h1', 'text-5xl', 'Herrington\'s Harbor');

  const homeBtn = tagMaker('button', 'home-button', 'Home');
  const menuBtn = tagMaker('button', 'menu-button', 'Menu');
  const contactsBtn = tagMaker('button', 'contact-button', 'Contacts');

  homeBtn.dataset.id = 0;
  menuBtn.dataset.id = 1;
  contactsBtn.dataset.id = 2;

  const tabs = tagMaker('div', 'tabs');
  tabs.appendChild(homeBtn);
  tabs.appendChild(menuBtn);
  tabs.appendChild(contactsBtn);

  const header = tagMaker('header');
  header.appendChild(myIcon);
  header.appendChild(h1);
  header.appendChild(tabs);

  return header;
}