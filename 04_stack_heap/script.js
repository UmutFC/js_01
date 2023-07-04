// Primitive Types: Stored directly in the 'stack', where it is accessed from

// Reference Types: Stored in the heap and accessed by reference

// when you create new variable with referencing another variable which is already created, if it is 'primitive' type it will stack which means it will create the same value on stack but if it is 'reference' type it will just put reference to already existing value, it will not recreate same object again.
let name = "John";

let person = {
  name: "Furkan",
};

let newName = name;

let newPerson = person;

// but the issue here is, while reference type values point to the same value, if you make changes on the value in the heap even with variables come after, it will also change it for original one too. because they are poiting the same value
newPerson.name = "Brad";
console.log(person.name);
