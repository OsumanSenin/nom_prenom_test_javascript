let maBoolean = true
let monArray = []
let monObjet ={}
let monString = "string"
let monInt = 0

// let objet ={
//     type:"string",
//     height : "string",

//     all : fonction()= {
//       all =this.type
      
//       }
    
// }
// console.log(all);

function addition(a , b) {
    return a+b
}

if (monInt <8) {
    console.log("ok");
    
}else{
    console.log("nope");
}

for (let index = 0; index < 10; index++) {
   console.log(index);
    
}

let aujourdui = new Date()
    console.log(aujourdui.getDate()+"/"+(aujourdui.getMonth()+1)+"/"+aujourdui.getFullYear())

    function uppercase(string) {
        return string.toUpperCase
    }

    function capitalize(string) {
     string= string.substr(0,1).toUpperCase + string.substr(1).toLowerCase
         
    }

    function lenght(string) {
        string = prompt("ajouter un nom ")
        alert (string.lenght)
    }

    function random(a){
         a =alert(Math.random()*100)
    }

    function random1(min, max) {
        return Math.random() * (max - min) + min;
      }



