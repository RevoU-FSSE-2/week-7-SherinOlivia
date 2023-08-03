
const financeForm = document.querySelector("#financeForm") as HTMLFormElement


// :')
financeForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let transactionType = (document.querySelector("#dataType") as HTMLSelectElement).value
    let transaction:string = (document.querySelector("#transaction") as HTMLInputElement).value
    let transactionDetails:string = (document.querySelector("#transactionDetails") as HTMLInputElement).value
    let transactionAmount:string = (document.querySelector("#transactionAmount") as HTMLInputElement).value

    let transactionHistory = (document.querySelector(".transaction-history")) as HTMLUListElement


    let defaultHistory = transactionHistory?.innerHTML
    const newHistory = `
    <li>
        <h4>${transactionType}</h4>
        <p>You ${transactionType} Rp. ${transactionAmount} for ${transaction} (Note: ${transactionDetails})</p>
    </li>
    `
    defaultHistory += newHistory
    if (transactionHistory != undefined) {
        transactionHistory.innerHTML = defaultHistory;
    }
})







// const newH4 = document.createElement("h4")
// newH4.textContent = "Hallo Semua"

// console.log(newH4.innerText);