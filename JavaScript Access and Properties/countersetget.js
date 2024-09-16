let getVal=document.getElementById('getVal')
let setVal=document.getElementById('setVal')
let display=document.getElementById('display')

let counter1={
    _count:0,
    get count(){
        return this._count
    },
    set reset(value){
        // value=0
        this._count=value;
    }
}


function updateDisplay(){
    display.textContent=`${counter1.count}`
}

getVal.addEventListener('click',()=>{
    counter1._count+=1
    updateDisplay()
})

setVal.addEventListener('click',()=>{
    counter1.reset=0
    updateDisplay()
})

updateDisplay()
