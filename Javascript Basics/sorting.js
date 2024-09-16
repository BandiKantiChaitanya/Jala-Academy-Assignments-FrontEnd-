let div=document.querySelector('div')
let ul=document.createElement('ul')
let btn=document.createElement('button')



let fruits=['Apple','Orange','Dragon Fruit','Pomegranate','Banana','Mango','Strawberry','Grapes']

// before sorting
function displayFruits(){
    ul.innerHTML='';//to clear previous ones
fruits.forEach(fruit => {
    let li=document.createElement('li')
    li.textContent = fruit; // Set the text for each <li>
    ul.appendChild(li);     // Append each <li> to the <ul>
});
}


div.appendChild(ul);

btn.textContent='Click to Rearrange'

btn.onclick=rearrange

function rearrange(){
    fruits.reverse();
    displayFruits()
}


div.appendChild(btn)

displayFruits()