const minnum=1;
const maxnum=100;

var answer=Math.floor(Math.random()*(maxnum-minnum +1));
console.log(answer)
let attempts=0;
let running=true;
var guess;
do{

    while(guess!==answer)
        {
            

             guess=parseInt(prompt("GUESS ANY NUMBER BETWEEN (1-100)"));
             attempts++;
        if(isNaN(guess))
            {
                alert("PLEASE ENTER A VALID NUMBER");
            }
            else if(guess>maxnum||guess<minnum)
            {
                alert("PLEASE ENTER A VALID NUMBER");
            }
            else{
            
                if(guess>answer)
                {
                    alert("TOO HIGH");
        
                }
                else if(guess<answer)
                {
                    alert("TOO LOW")
        
                }
                else{
                 alert(`CONGRATULATIONS , YOU GOT THE CORRECT ANSWER ${answer} IN ${attempts} ATTEMPTS` );
                    
                }
            }
        }
        running =0;
        guess=0;
        attempts=0;
        
        running= parseInt(prompt("Enter 1 to play again"));
    }while(running===1);

