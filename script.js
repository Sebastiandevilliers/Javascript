
    let countHuman = 0;
    let countPc = 0;
    
    
    let rock = "Rock"
    let paper = "Paper"
    let scissors = "Scissors"
    let compSelect;
    let comp;


    

   

    let round = window.prompt("How many rounds")
    for(let i = 0; i<round; i++){1
        for(let k = 0; k<3; k++){
            let random = Math.floor(Math.random() * 3)+1;
    console.log(random)
    if(random == 1){
        compSelect = "rock";
    }
    if(random == 2){
        compSelect = "paper";
    }
    if(random == 3){
        compSelect = "scissors";
    }


      let userSelect = parseInt(prompt());

      

      switch(userSelect){
          case 1:
              console.log("ONe selected")
              if(compSelect == "rock"){
                  
              }
              if(compSelect == "scissors"){
                    countHuman++
                }
             if(compSelect == "paper"){
                    countPc++
                      }

              break;
          case 2:
            if(compSelect == "paper"){
                
            }
            if(compSelect == "scissors"){
                  countPc++
            }
            if(compSelect == "rock"){
                    countHuman++
                    }
                break;

            case 3:
            if(compSelect == "scissors"){
                
            }
            if(compSelect == "paper"){
                countHuman++
            }
            if(compSelect == "rock"){
                    countHuman++
                    }
                break;
                }

                
            }

        

      }
      console.log(compSelect);
      console.log(countPc + " Pc")
      console.log(countHuman + " Player")

      if(countHuman > countPc){
        //alert("Player wins")
    }else{
      //  alert("Computer wins")
    }

    if(compSelect == "rock" ){
        console.log("Ture")
    }

    document.getElementById("b1").addEventListener("click", function(){alert("Rock Selected");});

