import tagMaker from "./tagMaker";
import Icon from "./logo.png";
import * as Menu from "./menu"

export default function menuPage() {
  function header() {
    const myIcon = new Image();
    myIcon.src = Icon;

    const h1 = tagMaker('h1');
    h1.innerHTML = 'Menu';

    const homeBtn = tagMaker('button', 'home-button');
    const menuBtn = tagMaker('button', 'menu-button');
    const contactsBtn = tagMaker('button', 'contact-button');

    homeBtn.innerHTML = 'Home';
    menuBtn.innerHTML = 'Menu';
    contactsBtn.innerHTML = 'Contacts';

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
  function main() {  
    const appMenu = tagMaker('ul', 'app-menu');
    const mainMenu = tagMaker('ul', 'main-menu');
    
    Menu.getList().forEach((menuItem) => {
      if(menuItem.id == 'app') {
        appMenu.appendChild(menuItem.createDomElement());
      } else {
        mainMenu.appendChild(menuItem.createDomElement());
      } return
    })

    const main = tagMaker('main');
    main.appendChild(appMenu);
    main.appendChild(mainMenu);

    return main;
  }
  function footer() {

    const p = tagMaker('p', 'copyright', 'Copyright @ 2022, Degrasso Digital. LLC');

    const footer = tagMaker('footer');
    footer.appendChild(p);

    return footer;
  }

  const menupage = tagMaker('div','menu-page');

  menupage.appendChild(header());
  menupage.appendChild(main());
  menupage.appendChild(footer());

  return menupage;
}
