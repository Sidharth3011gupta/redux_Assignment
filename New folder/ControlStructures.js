const permission = 2;
if(permission==1){
    console.log("user is super admin")
}
else if(permission==2){
    console.log("User has limited access")
}
else{
    console.log("No access")
}
const choice = 4;
switch(choice){
    case 1:
        console.log("Sunday");
    case 2:
        console.log("Monday");
    default:
        console.log("April")
}


let count =1;
for(let i =count; i<10; i++){
    console.log(i)
}
console.log(count)
while(count<20){
    console.log("count",count)
    count++ ;
}
let x=10
do{
console.log(x);
x++;
}while(x<5)