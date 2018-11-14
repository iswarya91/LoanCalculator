const calculateBtn = document.querySelector(".calculate");
const loanAmt = document.querySelector("#loanAmount");
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');

const result = document.querySelector('#result');
const monthlyPayDisp = document.querySelector('#monthlyPay');
const totAmountDisp = document.querySelector('#totalPay');
const totInterestDisp = document.querySelector('#totalInterest')
const alertDialog = document.querySelector(".alert");
const loadingDiv = document.querySelector("#loading");

calculateBtn.addEventListener('click', function (e) {
    loadingDiv.style.display = 'block';
    result.style.display = 'none';
    setTimeout(claculateLoan, 2000);
    e.preventDefault();
});

function claculateLoan() {
    loadingDiv.style.display = 'none';
    if (loanAmt.value === '' || interest.value === '' || years.value === '') {
        if (alertDialog.style.display !== 'block') {
            alertDialog.innerHTML = 'Please provide all the required details';
            alertDialog.style.display = 'block';
            window.setTimeout(function () { alertDialog.style.display = "none" }, 3000)
        }

        return;
    }
    const loanAmount = Number(loanAmt.value);
    const interestRate = Number(interest.value);
    const totYears = Number(years.value)
    const totAmount = loanAmount * Math.pow((1 + (interestRate / 100 / 12)), totYears * 12);
    const monthlyPay = totAmount / (12 * totYears);
    const totInterest = totAmount - loanAmount;
    displayResult(monthlyPay, totAmount, totInterest)

}

function displayResult(monthlyPay, totAmount, totInterest) {
    result.style.display = 'block';
    monthlyPayDisp.setAttribute('value', '$' + monthlyPay.toFixed(2));
    totAmountDisp.setAttribute('value', '$' + totAmount.toFixed(2));
    totInterestDisp.setAttribute('value', '$' + totInterest.toFixed(2))

}