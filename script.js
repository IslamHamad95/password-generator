
let myarr=[];
let capitalAlphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"];
let smallAlphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u","v","w","x","y","z"];
let tenCharacters=document.getElementById("ten")
let fifteenCharacters=document.getElementById("fifteen")
let twentyCharacters=document.getElementById("twenty")

function calculating(length) {
  myarr=[]
  for (let i=0;i<length;i++){
  
    let num1= Math.floor(Math.random()*(capitalAlphabet.length ));
     let ca=capitalAlphabet[num1];
     
      let num2= Math.floor(Math.random()*(smallAlphabet.length));
     let cs=smallAlphabet[num2];
     
     let num=Math.floor(Math.random()*10);
     
     let wordArray=[ca,cs,num,num];
     let index=Math.floor(Math.random()*4);
     
     myarr.push(wordArray[index]);
   }

}

function checkedLength() {
  document.getElementById("textcopied").style.display = "none";
  if (tenCharacters.checked){
    //console.log(tenCharacters.value);
    return(tenCharacters.value)
  
    }
    else if (fifteenCharacters.checked){
    //console.log(fifteenCharacters.value);
    return(fifteenCharacters.value)
    }
    else if (twentyCharacters.checked){
    //console.log(twentyCharacters.value);
    return(twentyCharacters.value)
    }
    else{
      return(8)
    }
  
}
function myFunction(){
  console.log(checkedLength())
  calculating(checkedLength())
   document.getElementById("generated-password").value = myarr.join("");

  
}