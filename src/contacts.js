import tagMaker from "./tagMaker";

function contact(name, job, email){
  return {
    name: name,
    job: job,
    email: email,

    createDomElement(destination) {
      const name = tagMaker('li', 'name', this.name);
      const job = tagMaker('li', 'job', this.job);
      const email = tagMaker('li', 'email', this.email);
    
      const contact = tagMaker('li', 'contact');
      contact.appendChild(name);
      contact.appendChild(job);
      contact.appendChild(email);

      destination.appendChild(contact);
    }
  }
}

function getList(){
  let contactArray = [];

  let tom = contact('Tom Larry', 'Store Manager', 'big-boss@apple.com');
  let mike = contact('Mike Granbull', 'Head Chef', 'lotsa-cooks@pear.com');
  let will = contact('Will Beckten', 'Sommelier', 'tasty-wine@grape.com');


  contactArray.push(tom);
  contactArray.push(mike);
  contactArray.push(will);


  return contactArray;
}

function mainElement() {  
  const contacts = tagMaker('ul', 'contact-list');
  
  getList().forEach((contact) => {
    contact.createDomElement(contacts);
  })

  const main = tagMaker('main');
  main.appendChild(contacts);

  return main;
}

function main(domElement) {
  domElement.firstElementChild.after(mainElement());
}

export { main };