// This will be a menu module that contains all variables to produce and distribute menu object information.


function item(name, price, id){
  return {
    name: name,
    price: price,
    id: id,
    getName() {
      return this.name;
    },
    getPrice() {
      return this.price;
    },
  }
};

export function getMenu(){
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

