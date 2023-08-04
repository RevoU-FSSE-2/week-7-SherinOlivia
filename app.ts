
const financeForm = document.querySelector("#financeForm") as HTMLFormElement


// :')
financeForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let transactionType = (document.querySelector("#dataType") as HTMLSelectElement).value
    let transaction:string = (document.querySelector("#transaction") as HTMLInputElement).value
    let transactionDetails:string = (document.querySelector("#transactionDetails") as HTMLInputElement).value
    let transactionAmount:string = (document.querySelector("#transactionAmount") as HTMLInputElement).value.toLocaleString()

    if ((transaction == "" || transaction == null) || (transactionDetails == "" || transactionDetails == null ) || (transactionAmount == "" || transactionAmount == null)){
        alert('Field Cannot Be Empty..!!!!')
    } else {
        let transactionHistory = (document.querySelector(".transaction-history")) as HTMLUListElement

        if (transactionHistory != undefined || null) {
            let defaultHistory = transactionHistory?.innerHTML
            const newHistory = `
            <li>
                <h4>${transactionType}</h4>
                <p>You ${transactionType} Rp. ${transactionAmount} for ${transaction} (Note: ${transactionDetails})</p>
            </li>
            `
            transactionHistory.innerHTML = defaultHistory += newHistory; 
            
            // clear input fields when click submit
            let formInputs = document.querySelectorAll("#dataType, #transaction, #transactionDetails, #transactionAmount")
            formInputs.forEach(formInput => {
                interface form {
                   formInput: string;
                }
                formInput.value = ""
            })
        }


    }

})

