let items = localStorage.getItem('cartItems');
let data  = JSON.parse(items)

console.log(data);

const div = document.querySelector('.div')
const total = document.querySelector('.total')

function renderItems(){
    
    data.map((items , index)=>{
        div.innerHTML += `
        <div class="border mt-3 px-5 py-3">
        <div>Phone : ${items.brand} ${items.model}</div>
        <div>Price : ${items.price}</div> 
        <button onclick="decrease(${index})" class="btn btn-primary  py-1">-</button>
        <span class="fs-3 ">${items.quantity}</span>
        <button onclick="decrease(${index})" class="btn btn-primary py-1">+</button>
        </div>
        `
    })
}

renderItems()

let quantity = document.querySelector('#quantity')

function decrease(index){
    if (data[index].quantity === 0) {
        alert('llmvnsjhbvsh')
    }else{
    data[index].quantity -= 1
    }
    renderItems()
}

function increase(index){
    data[index].quantity += 1
    renderItems()
}

const totalAmount = data.reduce((acc , curVal)=>{
    return acc + curVal.price
} , 0)
total.innerHTML = totalAmount



















// console.log('cart items');

// // console.log(cartItems)

// const div = document.querySelector('div');

// function renderItems (){
//     if(cartItems != null && cartItems.length > 0){
//         for(let i = 0; i < cartItems.length; i++){
//             console.log(cartItems[i]);
//             div.innerHTML += `
//             <div class="border border-light rounded m-5 p-3">
//             <h1>Model: ${cartItems[i].brand + ' ' + cartItems[i].model}</h1>
//             <h1>Price: ${cartItems[i].price}</h1>
//             </div>
//             `
//         }
//     }else{
//         console.log('cart item empty ha maalik')
//         div.innerHTML = `
//         <h3 class="text-center">No Item Found...</h3>
//         `
//     }
// }

// renderItems()


