function getPin(){
    const pin=Math.round(Math.random()*10000);
    const pinString=pin + '';
    if(pinString.length == 4)
    {
       
        return pin;
    }
    else{
      return  getPin();
    }
}
function generatePin(){
    const pin=getPin();
    console.log(pin);
    document.getElementById("display-pin").value=pin;
}

document.getElementById("key-pad").addEventListener("click",
function(event){
   const number=event.target.innerText;
   if(isNaN(number))
   {
      if(number=="C")
      {
        document.getElementById("typed-numbers").value=""; 
      }
   }
  else{
    const calc=document.getElementById("typed-numbers");
    calc.value=calc.value + number;
  }

});

document.getElementById("submit-btn").addEventListener("click",function(){
   const pin=document.getElementById("display-pin").value;
   const typedNumbers= document.getElementById("typed-numbers").value;
   const sucessMessage=document.getElementById("notify-success");
   const failError=document.getElementById("notify-fail");
   if(pin==typedNumbers)
   {
     sucessMessage.style.display="block";
     failError.style.display="none";
   }
   else{
     sucessMessage.style.display="none";
     failError.style.display="block";
   }
});