window.addItem = function(button){
    console.log("STEP 1: clicked");

    const card = button.parentElement;
    console.log("STEP 2: card found", card);

    const nameEl = card.querySelector("h3");
    const priceEl = card.querySelector("p");

    console.log("STEP 3: elements found", nameEl, priceEl);

    const name = nameEl.innerText;
    const price = priceEl.innerText;

    const cartItems = document.getElementById("cartItems");
    console.log("STEP 4: cartItems element", cartItems);

    if(!cartItems){
        console.error("cartItems NOT FOUND in HTML");
        return;
    }

    const li = document.createElement("li");
    li.innerText = `${name} - ${price}`;

    cartItems.appendChild(li);

    console.log("STEP 5: item added");
};