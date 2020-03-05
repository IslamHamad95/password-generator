let myarr=[];
let capitalAlphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"];
let smallAlphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u","v","w","x","y","z"];


for (let i=0;i<16;i++){
  
 let num1= Math.floor(Math.random()*(capitalAlphabet.length ));
  let ca=capitalAlphabet[num1];
  
   let num2= Math.floor(Math.random()*(smallAlphabet.length));
  let cs=smallAlphabet[num2];
  
  let num=Math.floor(Math.random()*10);
  
  let wordArray=[ca,cs,num,num];
  let index=Math.floor(Math.random()*4);
  
  myarr.push(wordArray[index]);
}


function myFunction(){

   document.getElementById("generated-password").value = myarr.join("");
  document.location.href="#";
  
}