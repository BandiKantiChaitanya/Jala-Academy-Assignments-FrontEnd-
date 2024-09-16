let div=document.getElementById('count')
// let button=document.createElement('button')

let count=0;


function counter(){
    count++;
    div.innerHTML=`<p>${count}</p><button onclick="counter()">count</button>`
}

counter();

