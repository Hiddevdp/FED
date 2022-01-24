var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = "€ " + slider.value;


slider.oninput = function() {
    output.innerHTML = "€ " + this.value;
}

function openCart() {
    document.getElementById("Cart").style.display = "flex";
    document.getElementById("bag").src = "media/ShoppingbagShop1.jpg";
}

function closeCart() {
    document.getElementById("Cart").style.display = "none";
}