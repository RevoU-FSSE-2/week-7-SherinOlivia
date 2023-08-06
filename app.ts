
const financeForm = document.querySelector("#financeForm") as HTMLFormElement


// :')
financeForm.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let transactionType: string = (document.querySelector("#dataType") as HTMLSelectElement).value
    let transaction: string = (document.querySelector("#transaction") as HTMLInputElement).value
    let transactionDetails: string = (document.querySelector("#transactionDetails") as HTMLInputElement).value
    let transactionAmount: string = (document.querySelector("#transactionAmount") as HTMLInputElement).value
        
    if (transaction == "" || transaction == null) {
        inputAlert('Transaction Purpose');
    } if (transactionDetails == "" || transactionDetails == null ) {
        inputAlert('Transaction Detail');
    } if (transactionAmount == "" || transactionAmount == null){
        inputAlert('Transaction Amount');

    } else {
        let transactionHistory: HTMLUListElement = (document.querySelector(".transaction-history"))!

        if (transactionHistory != undefined || null) {
            let newtransactionAmount: number = +transactionAmount;
            let defaultHistory: string = transactionHistory?.innerHTML
            const newHistory: string = `
            <li>
                <h4>${transactionType}</h4>
                <p>You ${transactionType} Rp. ${newtransactionAmount.toLocaleString()} for ${transaction} (Note: ${transactionDetails})</p>
            </li>
            `
            transactionHistory.innerHTML = defaultHistory += newHistory; 
            
            // clear input fields when click submit
            let formInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("#dataType, #transaction, #transactionDetails, #transactionAmount")
            formInputs.forEach((formInput:HTMLInputElement) => {

                formInput.value = ""
            })
        }
    }
        function inputAlert(inputElement:string) {
            alert( inputElement + ' Cannot Be Empty..!!!!')
        }
})

