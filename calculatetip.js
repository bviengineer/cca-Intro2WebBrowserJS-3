var checkAmountTxt = document.getElementById("check-amount"), //assigns user input from check-amount textbox into checkAmountTxt
    tipPercentage = document.getElementById("tip-percentage"), //assigns user input from tip-percentage textbox into tipPercentage
    calculateTipBtn = document.getElementById("calculate-tip-btn"), //passes the click from the button to this variable
    
    totalCheck = document.getElementById("total-check"); //totalCheck will be used to hold the total cost which will then be displayed in the div with the div with the ID of total-check

    //Function used to clear the text boxes after the tip and total cost have been calculated 
    var clearTxtBoxes = function () {
        document.getElementById("check-amount").value = "";
        document.getElementById("tip-percentage").value = "";
    }

    //What occurs once the calculate tip button is clicked
    calculateTipBtn.addEventListener("click", function() {
        var checkGross = parseFloat(checkAmountTxt.value),
            tipPercentageAmt = parseFloat(tipPercentage.value) / 100,       
            tipAmt = checkGross * tipPercentageAmt,
            finalCheck = checkGross + tipAmt;
            clearTxtBoxes();
                
            totalCheck.innerHTML = "<strong>Amount:</strong> $"+ checkGross + "<br>" + "<strong>Tip Percentage:</strong> " + tipPercentageAmt * 100 + "%" + "<br>" +
            "<strong>Tip Amount:</strong> $" + tipAmt + "<br>" + "<strong>Total Amount:</strong> $" + finalCheck;
    });