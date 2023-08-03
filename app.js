"use strict";
const financeForm = document.querySelector("#financeForm");
// :')
financeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let transactionType = document.querySelector("#dataType").value;
    let transaction = document.querySelector("#transaction").value;
    let transactionDetails = document.querySelector("#transactionDetails").value;
    let transactionAmount = document.querySelector("#transactionAmount").value;
    let transactionHistory = (document.querySelector(".transaction-history"));
    let defaultHistory = transactionHistory === null || transactionHistory === void 0 ? void 0 : transactionHistory.innerHTML;
    const newHistory = `
    <li>
        <h4>${transactionType}</h4>
        <p>You ${transactionType} Rp. ${transactionAmount} for ${transaction} (Note: ${transactionDetails})</p>
    </li>
    `;
    defaultHistory += newHistory;
    if (transactionHistory != undefined) {
        transactionHistory.innerHTML = defaultHistory;
    }
});
// const newH4 = document.createElement("h4")
// newH4.textContent = "Hallo Semua"
// console.log(newH4.innerText);
