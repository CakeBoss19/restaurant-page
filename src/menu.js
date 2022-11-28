// This will be a menu module that contains all variables to produce and distribute menu object information.
import tagMaker from "./tagMaker";

function item(name, price, id){
  return {
    name: name,
    price: price,
    id: id,

    createDomElement() {
      const name = tagMaker('li', 'item-name', this.name);
      const price = tagMaker('li', 'item-price', this.price);
    
      const menuItem = tagMaker('li', 'menu-item');
      menuItem.appendChild(name);
      menuItem.appendChild(price);
      
      return menuItem;
    }
  }
}

function getList(){
  let menuArray = [];

  let tomato = item('tomato', 4, 'app');
  let steak = item('steak', 12, 'main');
  let yogurt = item('yogurt', 3, 'app');
  let milkshake = item('milkshake', 6, 'app');
  let linguini = item('linguini', 14, 'main');
  let fish = item('fish', 12, 'main');

  menuArray.push(tomato);
  menuArray.push(steak);
  menuArray.push(yogurt);
  menuArray.push(milkshake);
  menuArray.push(linguini);
  menuArray.push(fish);

  return menuArray;
}


export { getList };