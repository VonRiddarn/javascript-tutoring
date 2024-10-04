const persons = [];

const buttonObject = document.querySelector("button");


buttonObject.addEventListener("click", hejsan);

function hejsan(elementThing)
{
	elementThing.preventDefault();
	
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;

    persons.push({
        name: name,
        age: age,
    });
	
   console.log(persons);
}


function hejsanHej()
{
	let hej = 20;
	
	let obj = 
	{
		name: "hej",
		age: 55,
	};
	
	return obj; 
}

const alias = "Kim";
const age = 5;

const person = {};

person.name = "Kim";
person.age = 5;

console.log(person.name);
console.log(person.age);

