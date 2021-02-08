const test = document.querySelectorAll("test");

document.addEventListener("onclick", ShopAlert);

function ShopAlert() {
   alert("The following item has been added to your shopping cart")
   Addingitems();
}


let items = [""]

function Addingitems() {
    items.push("item");
    document.getElementById("cart").innerHTML = items;
}