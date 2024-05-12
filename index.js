const myCheckBox=document.getElementById("myCheckbox");
const visaBtn=document.getElementById("visaBtn");
const masterCardBtn=document.getElementById("masterCardBtn");
const payPalBtn=document.getElementById("payPalBtn");
const mySubmit=document.getElementById("mySubmit");
const subResult=document.getElementById("subResult");
const paymentResult=document.getElementById("paymentResult");

mySubmit.onclick=function(){
    
        if(myCheckBox.checked){
                subResult.textContent=`You are subscribed`;
        }
        else{
                subResult.textContent=`You are not subscribed`;  
        }
        
        if(visaBtn.checked){
                paymentResult.textContent="you are paying with VISA"
        }
        else if(masterCardBtn.checked){
                paymentResult.textContent="you are paying with MasterCard "
        }
        else if(payPalBtn.checked){
                paymentResult.textContent="you are paying with PayPal "
        }
        else{
                paymentResult.textContent="you must select apayment type"
        }
        



        
        
    
}