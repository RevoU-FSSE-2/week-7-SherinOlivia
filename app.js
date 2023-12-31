"use strict";
const financeForm = document.querySelector("#financeForm");
// :')
financeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let transactionType = document.querySelector("#dataType").value;
    let transaction = document.querySelector("#transaction").value;
    let transactionDetails = document.querySelector("#transactionDetails").value;
    let transactionAmount = document.querySelector("#transactionAmount").value;
    if (transaction == "" || transaction == null) {
        inputAlert('Transaction Purpose');
    }
    if (transactionDetails == "" || transactionDetails == null) {
        inputAlert('Transaction Detail');
    }
    if (transactionAmount == "" || transactionAmount == null) {
        inputAlert('Transaction Amount');
    }
    else {
        let transactionHistory = (document.querySelector(".transaction-history"));
        if (transactionHistory != undefined || null) {
            let newtransactionAmount = +transactionAmount;
            let defaultHistory = transactionHistory === null || transactionHistory === void 0 ? void 0 : transactionHistory.innerHTML;
            const newHistory = `
            <li>
                <h4>${transactionType}</h4>
                <p>You ${transactionType} Rp. ${newtransactionAmount.toLocaleString()} for ${transaction} (Note: ${transactionDetails})</p>
            </li>
            `;
            transactionHistory.innerHTML = defaultHistory += newHistory;
            // clear input fields when click submit
            let formInputs = document.querySelectorAll("#dataType, #transaction, #transactionDetails, #transactionAmount");
            formInputs.forEach((formInput) => {
                formInput.value = "";
            });
        }
    }
    function inputAlert(inputElement) {
        alert(inputElement + ' Cannot Be Empty..!!!!');
    }
});
