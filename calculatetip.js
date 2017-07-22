var checkAmountTxt = document.getElementById("check-amount"),
    tipPercentage = document.getElementById("tip-percentage"),
    calculateTipBtn = document.getElementById("calculate-tip-btn"),
    tipAmount = document.getElementById("tip-amount"),
    totalCheck = document.getElementById("total-check");

    calculateTipBtn.addEventListener("click", function() {
        var checkGross = parseFloat(checkAmountTxt.value),
            tipPercentageAmt = parseFloat(tipPercentage.value) / 100,       
            tipAmt = checkGross * tipPercentageAmt,
            finalCheck = checkGross + tipAmt;

            tipAmount.innerHTML = "$" + tipAmt;
            totalCheck.innerHTML = "$" +finalCheck;
    });