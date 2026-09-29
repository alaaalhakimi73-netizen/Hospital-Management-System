let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* إضافة */
function add(name) {
    cart.push({ name });
    save();
}

/* حفظ */
function save() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCount();
    showCart();
}

/* عدد */
function updateCount() {
    let count = document.getElementById("count");
    if (count) count.innerText = cart.length;
}

/* عرض السلة */
function showCart() {
    let list = document.getElementById("cartList");
    if (!list) return;

    list.innerHTML = "";

    cart.forEach((item, index) => {
        list.innerHTML += `
      <li>
        ${item.name}
        <button onclick="editCart(${index})">✏️</button>
        <button onclick="deleteCart(${index})">❌</button>
      </li>
    `;
    });
}

/* حذف */
function deleteCart(index) {
    cart.splice(index, 1);
    save();
}

/* تعديل */
function editCart(index) {
    let newName = prompt("تعديل:", cart[index].name);
    if (newName) {
        cart[index].name = newName;
        save();
    }
}

/* تفريغ */
function clearCart() {
    cart = [];
    save();
}

/* فلترة */
function filter(cat) {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (cat === "all") {
            card.style.display = "block";
        } else {
            card.style.display = (card.dataset.cat === cat) ? "block" : "none";
        }
    });
}

/* تشغيل */
updateCount();
showCart();

/* واجهة فقط */
function editProduct(name) {
    let newName = prompt("تعديل المنتج:", name);
    if (newName) alert("تم التعديل: " + newName);
}

function removeProduct(name) {
    alert("تم حذف: " + name);
}