let names = ["John", "James", "Arnav"]
// console.log(names)
// console.log(names[2]);
// names[2]= "Ajay"
// console.log(names)
// names = [1,2]
// console.log(names)
// console.log(names.length)
// console.log(typeof names)
// for(item=0; item<names.length; item++){
//     console.log(item,names[item])
// }
// for(let item of names){
//     console.log(item)
// }
// for(let item in names){
//     console.log(item)
// }
// console.log(4+5)
// console.log(6+9)


parseInt()

// function getInput(msg="Enter any msg",greeting){
//     const input = prompt(msg);
//     if(greeting){
//         console.log(greeting,input)
//     }
//     else{
//         console.log(input)
//     }

// }

// getInput();
// getInput("Enter a number")
// getInput("Enter name","hello")

function add (a,b){
    console.log("a =", a, "b =", b)
    sum = a+b;
   return sum;
}

const sum1 =add(4,6);
const sum2 = add(2,3)
console.log("sum1", sum1, "sum2", sum2)

const subtract = function(){
    return 9-7
}

console.log(subtract())


const prod = ()=>9*8;
console.log(prod())

const divide = ()=>{
  return  8/2;
}
console.log(divide())
const a=Math.random();
prompt