"use strict";
const financeForm = document.querySelector("#financeForm");
// :')
financeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let transactionType = document.querySelector("#dataType").value;
    let transaction = document.querySelector("#transaction").value;
    let transactionDetails = document.querySelector("#transactionDetails").value;
    let transactionAmount = document.querySelector("#transactionAmount").value.toLocaleString();
    if ((transaction == "" || transaction == null) || (transactionDetails == "" || transactionDetails == null) || (transactionAmount == "" || transactionAmount == null)) {
        alert('Field Cannot Be Empty..!!!!');
    }
    else {
        let transactionHistory = (document.querySelector(".transaction-history"));
        if (transactionHistory != undefined || null) {
            let defaultHistory = transactionHistory === null || transactionHistory === void 0 ? void 0 : transactionHistory.innerHTML;
            const newHistory = `
            <li>
                <h4>${transactionType}</h4>
                <p>You ${transactionType} Rp. ${transactionAmount} for ${transaction} (Note: ${transactionDetails})</p>
            </li>
            `;
            transactionHistory.innerHTML = defaultHistory += newHistory;
            // clear input fields when click submit
            let formInputs = document.querySelectorAll("#dataType, #transaction, #transactionDetails, #transactionAmount");
            formInputs.forEach(formInput => {
                formInput.value = "";
            });
        }
    }
});
