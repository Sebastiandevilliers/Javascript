
window.onload = function(){

let userSelect = 0;
let random;
let countHuman = 0;
let countPc = 0;


   let b = document.querySelector("#b1");
   b.onclick = function(){userSelect = 1}
   
   b.addEventListener("click", () => {
    let random = Math.floor(Math.random() * 3)+1;
    console.log(random + " pc");
    if(random == 1){
        compSelect = "rock";
    }
    if(random == 2){
        compSelect = "paper";
    }
    if(random == 3){
        compSelect = "scissors";
    }
    if(compSelect == "rock"){
                  
    }
    if(compSelect == "scissors"){
          countHuman++
      }
   if(compSelect == "paper"){
          countPc++
            }
        console.log(countPc + " Pc count");
        console.log(countHuman + " Count");});
   
   

    let a = document.querySelector("#b2");
    a.onclick = function(){userSelect = 2}
    a.addEventListener("click", () => {console.log(userSelect);});
    

    let c = document.querySelector("#b3");
    c.onclick = function(){userSelect = 3}
    
    c.addEventListener("click", () => {console.log(userSelect);});

    //console.log(userSelect);

  
}
