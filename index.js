// bill-input-value
let billInput = document.getElementById('bill')
let customValue = document.getElementById('custom-value')
let nopValue = document.getElementById('NOP-input')

let resetbtn = document.getElementById('reset-btn')
let showError = document.querySelector('.nof-people')


// Here value are print
let tipAmount = document.getElementById('tipAmount')
let totalAmount = document.getElementById('totalAmount')


let billValue = 0
let tipbtnAmount = .15
let peopleValue = 1

// validation
function validateFloat(s) {
    let rgx = /^[0-9*]\.?[0-9]*$/
    return s.match(rgx)
}

billInput.addEventListener('input', ()=>{    
    if (!validateFloat(bill.value)) {
        bill.value = bill.value.substring(0, bill.value.length-1) || 0
    }
    billValue = parseInt(billInput.value)
    calculateTip();
})

// button class
let btnAmount = document.querySelectorAll('.btn')
btnAmount.forEach(btn => {
    btn.addEventListener('click', handleClick)
})
function handleClick(e) {
    btnAmount.forEach(btn => {
        if (e.target.value == btn.value) {
            tipbtnAmount = parseInt(btn.value)/100
        }
    })
    console.log(tipbtnAmount);  // tipValue
    calculateTip();
}

customValue.addEventListener('input', ()=>{
    if (!validateFloat(customValue.value)) {
        customValue.value = 0
    }
    tipbtnAmount = parseInt(customValue.value)/100
    calculateTip()
})

nopValue.addEventListener('input', setPeopleValue)
function setPeopleValue() {
    if (!validateFloat(nopValue.value)) {
        nopValue.value = 0
    }
    peopleValue = parseInt(nopValue.value)
    if (peopleValue === 0) {
        showError.classList.add('is-error')
        showError.classList.remove('is-ok')
    }else {
        showError.classList.remove('is-error')
        showError.classList.add('is-ok')
    }
    calculateTip()
}

function calculateTip() {
    if (peopleValue >= 1) {
        let ttipAmount = (billValue*tipbtnAmount)/peopleValue
        let totleAmount = (billValue + billValue*tipbtnAmount)/peopleValue
        tipAmount.innerHTML = '$' + ttipAmount.toFixed(2)
        totalAmount.innerHTML = '$' + totleAmount.toFixed(2)
        // let totalAmount = ;
    }
}

resetbtn.addEventListener('click', ()=>{
    billInput.value = 0
    nopValue.value = 1
    tipbtnAmount = .15
    tipAmount.innerHTML = '$0.00'
    totalAmount.innerHTML = '$0.00'
})



