import tagMaker from "./tagMaker";
import Icon from './logo.png';
import Background from './shrimp-portrait.jpg';

export default function homePage() {
  function main() {  
    console.log('home page');
    const leftSide = tagMaker('div', 'left-main');
    const myBackground = new Image();
    myBackground.src = Background;

    leftSide.appendChild(myBackground);

    const rightSide = tagMaker('div', 'right-main');
    const article = tagMaker('article', false, 'Where actual dreams come true');

    const orderLink = tagMaker('a', false, 'Place an order today!');
    orderLink.href = '#';

    rightSide.appendChild(article);
    rightSide.appendChild(orderLink);

    const main = tagMaker('main');
    main.appendChild(leftSide);
    main.appendChild(rightSide);

    return main;
  }
  function footer() {

    const p = tagMaker('p', 'copyright', 'Copyright @ 2022, Degrasso Digital. LLC');

    const footer = tagMaker('footer');
    footer.appendChild(p);

    return footer;
  }

  const homepage = tagMaker('div', 'home-page');

  homepage.appendChild(main());
  homepage.appendChild(footer());

  return homepage;
}