let callButton=document.getElementById('callButton')
let applyButton=document.getElementById('applyButton')

let person={
  fullname:function(){
    return this.firstname+' '+this.lastname
  }
}
let person1={
  firstname:'John',
  lastname:'Doe'
}
let person2={
  firstname:'Mary',
  lastname:'Doe'
}

callButton.addEventListener('click', () => {
  let callFullName = person.fullname.call(person1);
  console.log('Call Result:', callFullName);
});

applyButton.addEventListener('click',function(){
  let applyFullName=person.fullname.apply(person2);
  console.log('Apply Result:',applyFullName)
})

// person.fullname.call(person1)
// person.fullname.apply(person2)

