var button1 = document.getElementById('button1');
var button = document.getElementById('button');
var p = document.getElementById('change');

button.onclick = function changecolor(){
    if(p.style.color != 'red'){
    p.style.color = 'red';}
    else{
        p.style.color = 'black';  
    }
}

button1.onclick = function message(){
alert("submitted");
}

// console.log('hello');
// let name = 'Sam';
// console.log(name);


let person = {
    name : 'john' ,
    age : 30
}

console.log(person.name);

person.name = 'SANYAM';
console.log(person.name);

console.log(person);

function namefn(name1){
    console.log('HELLO ' + name1)
}

namefn('harry');


