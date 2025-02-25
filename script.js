function compute()
{
    //validate principal...make sure it has a positive number before continue with the calculation
    if(validatePrincipal()){

    //get the principal value
    var principal = document.getElementById("principal").value;
    //get the rate value
    var rate = document.getElementById("rate").value;
    //get the No of years
    var years = document.getElementById("years").value;

    //calculate the interest amount
    var interest = principal * years * rate/100;

    //calculate the maturity year
    var year = new Date().getFullYear() + parseInt(years);

    //calculate the total amount on the maturity year
    var amount = parseFloat(principal) + parseFloat(interest);

    //get the "result" ref
    var result = document.getElementById("result");

     //display the result
     var principalSpan = document.createElement("span");
     principalSpan.setAttribute('class', 'yellowBG');
     principalSpan.innerText= principal;

     var rateSpan = document.createElement("span");
     rateSpan.setAttribute('class', 'yellowBG');
     rateSpan.innerText= rate +"%";

     var amountSpan = document.createElement("span");
     amountSpan.setAttribute('class', 'yellowBG');
     amountSpan.innerText= amount;

     var yearSpan = document.createElement("span");
     yearSpan.setAttribute('class', 'yellowBG');
     yearSpan.innerText= amount;

    var resultContent = `If you deposit ` + principalSpan.outerHTML + `, \<br\> at an interest rate of `
                        + rateSpan.outerHTML + `  <br\> You will receive an amount of   `
                        + amountSpan.outerHTML + `, <br\> in the year  ` + yearSpan.outerHTML
                        + ` <br\>`
    result.innerHTML =resultContent;
    }
}

function updateRate(){
    //get the rate value
    var rateval = document.getElementById("rate").value;

    //display the rate on the span
    document.getElementById("rate_val").innerHTML=rateval;
}

function validatePrincipal(){
  var principal = document.getElementById("principal");

   if(principal.value == "" || parseFloat(principal.value) <= 0.0){
     if (confirm('Enter a positive number')) {
        //set focus on principat input
        principal.focus();
        result.innerHTML=""; //reset the previously calculated result -- if any
        return false;
     }
   }
   return true;

}
