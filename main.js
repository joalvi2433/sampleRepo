/* 
//object literals
const Contacts = [
  {
    id: 1,
    fullname: "Joshua",
    isSaved: "Phone",
    familyMembers: {
      father: "Alberto",
      mother: "Random",
      sister: "hanna"
    }
  },
  {
    id: 2,
    fullname: "Edrich",
    isSaved: "SD",
    familyMembers: {
      father: "Egay",
      mother: "Edith",
      sister: "Pau"
    }
  },
  {
    id: 3,
    fullname: "Madam Bertud",
    isSaved: "SD",
    familyMembers: {
      father: "Loko",
      mother: "Mamita",
      sister: "Mentos"
    }
  }
];

for (let i = 0; i < Contacts.length; i++) {
  console.log(Contacts[i].familyMembers.father);
}

// optimize looping
for (let contact of Contacts) {
  console.log(contact.fullname);
}

// array filter
const contactsFullname = Contacts.map(function(contact) {
  return contact.fullname;
});

console.log(contactsFullname);

// filter/Sort Desire Data
const ContactsPhone = Contacts.filter(function(contact) {
  return contact.isSaved == "SD";
});

console.log(ContactsPhone);

//Filter over Filter desire data
const ContactsPhone = Contacts.filter(function(contact) {
  return contact.isSaved == "SD";
}).map(function(contact) {
  return contact.fullname;
});
console.log(ContactsPhone);

// JSON  Java Script Objest Notation
const ContactsJSON = JSON.stringify(Contacts);
console.log(ContactsJSON);


//FUNCTION TYPES

let x = 100;
let y = 200;

function GetSum(x, y) {
  return x + y;
}

console.log(GetSum(x, y)); //console.log(GetSum(100, 200));  kahit wala ng declaration sa taas

//Optimize Funtion ES6
const GetSum = (x, y) => {
  return x + y;
};

console.log(GetSum(100, 300));


//OOP Obeject Oriented Programming
//Constructor Function
function Tao(firstname, lastname, bloodtype) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.bloodtype = bloodtype;

  this.getFullname = () => {
    return `${this.firstname} ${this.lastname}`;
  };
}

//Class Variable name STARTS WITH CAPITAL LETTER
class Tao {
  constructor(firstname, lastname, bloodtype) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.bloodtype = bloodtype;
  }

  getFullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}

//INTANTIATE object

const tao1 = new Tao("Joshua", "Albert", "A+");
const tao2 = new Tao("Hanna", "Panget", "0");

console.log(tao1.getFullname());
console.log(tao2);
*/

//DOM Document OBject Model
//DOM SELECTION

//DOM MANIPULATION

//DOM EVENTS

//FORM VALIDATION
