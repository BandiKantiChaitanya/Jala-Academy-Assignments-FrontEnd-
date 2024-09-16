let datebutton=document.getElementById('date')
let display=document.getElementById('display')


datebutton.addEventListener('click',()=>{
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    display.textContent=`Current Date and Time: ${formattedDateTime}`
    
})

