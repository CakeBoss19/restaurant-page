import tagMaker from "./tagMaker";
import Icon from './logo.png';
import Background from './shrimp-portrait.jpg';

export default function contactsPage() {  
  function header() {
    const myIcon = new Image();
    myIcon.src = Icon;

    const h1 = tagMaker('h1');
    h1.innerHTML = 'Contacts';

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
    console.log('contacts page');
    const leftSide = tagMaker('div', 'left-main');
    const myBackground = new Image();
    myBackground.src = Background;

    leftSide.appendChild(myBackground);

    const rightSide = tagMaker('div', 'right-main');
    const article = tagMaker('article');
    article.innerHTML = 'Here at Herrington\'s Harbor, we make your actual dreams come true';

    const orderLink = tagMaker('a');
    orderLink.innerHTML = 'Place an order today!';
    orderLink.href = '#';

    rightSide.appendChild(article);
    rightSide.appendChild(orderLink);

    const main = tagMaker('main');
    main.appendChild(leftSide);
    main.appendChild(rightSide);

    return main;
  }
  function footer() {

    const p = tagMaker('p', 'copyright');
    p.innerHTML = 'Copyright @ 2022, Degrasso Digital. LLC';

    const footer = tagMaker('footer');
    footer.appendChild(p);

    return footer;
  }

  const contactspage = tagMaker('div', 'contacts-page');

  contactspage.appendChild(header());
  contactspage.appendChild(main());
  contactspage.appendChild(footer());

  return contactspage;
}