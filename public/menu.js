console.log("menu.js loaded");

// 1. addItem function
window.addItem = function(button){

    const card = button.parentElement;
    const name = card.querySelector("h3").innerText;
    const price = card.querySelector("p").innerText;
    const itemPrice = Number(price.replace(/[^\d]/g, ""));

    // 🔥 SEND DATA TO BACKEND HERE
    fetch("/cart/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            price: itemPrice
        })
    });

    const cartItems = document.getElementById("cartItems");
    console.log("Added to backend + UI");

    let existingItem = Array.from(cartItems.children).find(li =>
        li.dataset.name === name
    );

    if(existingItem){
        let qty = parseInt(existingItem.dataset.qty);
        qty++;

        existingItem.dataset.qty = qty;
        existingItem.innerText = `${name} - ₹${itemPrice} × ${qty}`;

    } else {
        const li = document.createElement("li");

        li.dataset.name = name;
        li.dataset.qty = 1;

        li.innerHTML = `
            ${name} - ₹${itemPrice} × 1
            <button onclick="removeItem(this)">❌</button>
        `;

        cartItems.appendChild(li);
    }

    updateTotal(); // 👈 call function here
};


window.removeItem = function(button){

    const li = button.parentElement;

    li.remove();

    updateTotal();
};

// 2. updateTotal function (WRITE HERE ↓)
function updateTotal(){
    const cartItems = document.getElementById("cartItems");
    let total = 0;

    Array.from(cartItems.children).forEach(li => {
        const priceText = li.innerText.match(/₹(\d+)/);
        const qty = parseInt(li.dataset.qty);

        if(priceText){
            total += Number(priceText[1]) * qty;
        }
    });

    document.getElementById("totalPrice").innerText = total;
}
