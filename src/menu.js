// This will be a menu module that contains all variables to produce and distribute menu object information.
import tagMaker from "./tagMaker";

function item(name, price, id){
  return {
    name: name,
    price: price,
    id: id,

    createDomElement(destination) {
      const name = tagMaker('li', 'item-name', this.name);
      const price = tagMaker('li', 'item-price', this.price);
    
      const menuItem = tagMaker('li', 'menu-item');
      menuItem.appendChild(name);
      menuItem.appendChild(price);
      
      destination.appendChild(menuItem);
    }
  }
}

function getList(){
  let menuArray = [];

  let tomato = item('Tomato', 4, 'app');
  let steak = item('Steak', 12, 'main');
  let yogurt = item('Yogurt', 3, 'app');
  let milkshake = item('Milkshake', 6, 'app');
  let linguini = item('Linguini', 14, 'main');
  let fish = item('Fish', 12, 'main');

  menuArray.push(tomato);
  menuArray.push(steak);
  menuArray.push(yogurt);
  menuArray.push(milkshake);
  menuArray.push(linguini);
  menuArray.push(fish);

  return menuArray;
}

function mainElement() {  
  const appMenu = tagMaker('ul', 'app-menu');
  const mainMenu = tagMaker('ul', 'main-menu');
  const starter = tagMaker('h2', false, 'Starters');
  const mainm = tagMaker('h2', false, 'Main Course');

  getList().forEach((menuItem) => {
    if(menuItem.id == 'app') {
      menuItem.createDomElement(appMenu);
    } else {
      menuItem.createDomElement(mainMenu);
    }
  });

  const main = tagMaker('main', 'menu');
  main.appendChild(starter);
  main.appendChild(appMenu);
  main.appendChild(mainm);
  main.appendChild(mainMenu);

  return main;
}

function main(domElement) {
  domElement.firstElementChild.after(mainElement());
}

export { main };