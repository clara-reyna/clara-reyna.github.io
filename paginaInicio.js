let cantTareas = prompt("How many issues do you want to view today?")
 console.log(cantTareas)
 if (cantTareas == false){
     console.log("you have to write something")
 }
 let x = true 
 while(x){
     cantTareas = prompt("How many issues do you want to view today?")
     if (!(cantTareas == false || cantTareas == null)){
         x =false
     } 
    }  
