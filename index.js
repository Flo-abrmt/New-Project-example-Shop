const test = document.querySelectorAll("test");

document.addEventListener("onclick", ShopAlert);

function ShopAlert(x) {
   alert("The product has been added to your cart!")
   Addingitems();
}


let items = [""]

function Addingitems() {
    items.push("item");
    document.getElementById("cart").innerHTML = items;
}