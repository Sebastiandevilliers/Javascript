
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

            if(random == 1){ 
            const img = document.createElement('img');
            img.src = "Rock.jpg";
            img.style.height = '300px';
            img.style.width = '300px';
            img.style.display = "Flex";
            img.style.alignContent = "center";
            document.body.appendChild(img);
            function remove(){
                document.body.removeChild(img);
            }
            setTimeout(remove, 1000);
        }

            if(random == 2){ 
                
                const img = document.createElement('img');
            img.src = "Paper.jpg";
            img.style.height = '300px';
            img.style.width = '300px';
            img.style.display = "Flex";
            img.style.alignContent = "center";
            document.body.appendChild(img);
                function remove(){
                    document.body.removeChild(image);
                }
                setTimeout(remove, 10000);
            }
                
               // let timeout;
               

            if(random == 3){ 
                let timeout;
                function scoreFunction(){
                    timeout = setTimeout(alertFunc, 1500);
                }
                const img = document.createElement("img");
                img.src = "Scissors.jpg";
                img.style.height = '300px';
                img.style.width = '300px';
                img.style.alignContent = "center";
                
                document.body.appendChild(img);
            
                function remove(){
                    document.body.removeChild(img);
                }
                setTimeout(remove, 1000);
            }
                
        

       
        
        console.log(countPc + " Pc count");
        console.log(countHuman + " Count");});
   
   

    let a = document.querySelector("#b2");
    a.onclick = function(){userSelect = 2}
    a.addEventListener("click", () => {
    
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

     if(compSelect == "paper"){
                
    }
    if(compSelect == "scissors"){
          countPc++
    }
    if(compSelect == "rock"){
            countHuman++
            };});
    

    let c = document.querySelector("#b3");
    c.onclick = function(){userSelect = 3}
    c.addEventListener("click", () => {
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

        if(compSelect == "scissors"){
                
        }
        if(compSelect == "paper"){
            countHuman++
        }
        if(compSelect == "rock"){
                countHuman++
                }

        console.log(userSelect);});

    //console.log(userSelect);

  
}
