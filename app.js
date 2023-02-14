const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let password=document.getElementById("rectangle-1")

function calling(){
   password1()
   password2()
}




function password1(){
   document.getElementById("rectangle-1").textContent=""     //  clearing previous stored input
   for(let i=0;i<15;i++){
      let number=Math.floor(Math.random()*91)
      document.getElementById("rectangle-1").textContent+=characters[number] 
   }
   
  
}

function password2(){
   document.getElementById("rectangle-2").textContent=""   
   for(let i=0;i<15;i++){
      let number=Math.floor(Math.random()*91)
      document.getElementById("rectangle-2").textContent+=characters[number]
      
   }
}



