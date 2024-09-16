let div1=document.getElementById('accessing')
let p=document.createElement('div')
let person={
    firstname:'John',
    lastname:'Doe',
    age:22
}

// objects can be accesed through dot and brackets
div1.innerHTML=`
                <h1>Dot Notation:${person.firstname} ${person.lastname} ${person.age}</h1>
                <h1>Bracket Notation:${person['firstname']} ${person['lastname']} ${person['age']} </h1>`


let message;

p.innerHTML=`outputMessage = 'The value of the variable before initialization:  ${message}'`;     

message = 'Hello, this is a message!';

p.innerHTML+=`<br>outputMessage = 'The value of the variable after initialization:  ${message}'</br>`;

div1.append(p)