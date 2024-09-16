let myform=document.getElementById('myform')
let error=document.getElementById('error')
let text=document.getElementById('text')

myform.addEventListener('submit',function(event){

    if(text.value.trim()==''){
        error.textContent='This Value cannot be empty'
        event.preventDefault();
    }else{
        error.textContent=''
    }
})
