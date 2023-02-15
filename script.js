//variables
const stateTax = 0.1;


//functions
function increamentor(id){
    const valueField =document.getElementById(id);
    const valueInNumber = parseInt(valueField.value);
    let newValue = valueInNumber + 1;
    valueField.value = newValue;
}

function decreamentor(id){
    const valueField =document.getElementById(id);
    const valueInNumber = parseInt(valueField.value);
   if(valueInNumber>0){
    let newValue = valueInNumber - 1;
    valueField.value = newValue;
   }
}

function multiplier(price, qtyId){
    // const priceField = document.getElementById(priceId)
    // console.log(priceField)
    // const price = parseFloat(priceField.innerText)

    const valueField =document.getElementById(qtyId);
    const qty = parseInt(valueField.value);
    return price * qty
}

function getValuebyId(elementID){
    const element = document.getElementById(elementID);
    const value = parseInt(element.innerText)
    return value
}

function setValuebyId(elementID, value){
    const element = document.getElementById(elementID);
    element.innerText = value;
}

function makeTotal(){
    const getValuePhone = getValuebyId('phone-price')
    const getValueCase = getValuebyId('case-price')
    //total price
    const totalPirce = getValueCase + getValuePhone

    // total tax
    const tax = parseFloat((totalPirce * stateTax).toFixed(2))

    // grandTotal

    const grandTotal = totalPirce + tax;
    //setValue
    setValuebyId('subtotal', totalPirce)
    setValuebyId('tax', tax)
    setValuebyId('grandTotal', grandTotal)
}




document.getElementById('phone-plus-btn').addEventListener('click', function(){
    increamentor('phone-qty-field')
    const priceField =document.getElementById('phone-price')
    priceField.innerText= multiplier(1219, 'phone-qty-field')


    makeTotal()
})

document.getElementById('phone-minus-btn').addEventListener('click', function(){
    decreamentor('phone-qty-field')
    const priceField =document.getElementById('phone-price')
    priceField.innerText= multiplier(1219, 'phone-qty-field')


    makeTotal()
})



document.getElementById('case-plus-btn').addEventListener('click', function(){
    increamentor('case-qty-field')
    const priceField =document.getElementById('case-price')
    priceField.innerText= multiplier(59, 'case-qty-field')


    makeTotal()
})

document.getElementById('case-minus-btn').addEventListener('click', function(){
    decreamentor('case-qty-field')
    const priceField =document.getElementById('case-price')
    priceField.innerText= multiplier(59, 'case-qty-field')


    makeTotal()
})