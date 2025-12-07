// ----------------------------------------
// 🛒 FINAL SHOP CART SYSTEM (FIXED + MERGED)
// ----------------------------------------

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart to storage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Add product
function addToCart(name, price) {
    cart.push({ name, price });

    saveCart();
    updateCart();
    showNotification(`${name} ajouté au panier !`);
}

// Remove product
function removeFromCart(index) {
    cart.splice(index, 1);

    saveCart();
    updateCart();
}

// Clear all
function clearCart() {
    cart = [];
    saveCart();
    updateCart();
}

// -----------------------------
// 🔄 UPDATE CART VIEW (MODAL)
// -----------------------------
function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (!cartCount || !cartItems || !cartTotal) return; // If not on cart page

    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><p>Votre panier est vide</p></div>';
        cartTotal.textContent = '0.00€';
        return;
    }

    let html = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)}€</div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">Supprimer</button>
            </div>
        `;
    });

    cartItems.innerHTML = html;
    cartTotal.textContent = total.toFixed(2) + "€";
}

// -----------------------------
// 🛒 CART MODAL SHOW/HIDE
// -----------------------------
function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active');
}

// -----------------------------
// 🔔 NOTIFICATIONS
// -----------------------------
function showNotification(message) {
    const notification = document.createElement("div");

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;

    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = "slideOut 0.3s ease";
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// -----------------------------
// 💳 PAYPAL PAYMENT
// -----------------------------
function payWithPayPal() {
    if (cart.length === 0) {
        alert("Votre panier est vide !");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);

    // Replace with your PayPal email
    const paypalEmail = "VOTRE_EMAIL_PAYPAL@example.com";
    const currency = "EUR";
    const itemName = `Commande TechStyle Shop (${cart.length} articles)`;

    const paypalUrl =
        `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick` +
        `&business=${encodeURIComponent(paypalEmail)}` +
        `&item_name=${encodeURIComponent(itemName)}` +
        `&amount=${total.toFixed(2)}` +
        `&currency_code=${currency}` +
        `&return=https://votresite.com/success` +
        `&cancel_return=https://votresite.com/cancel`;

    window.open(paypalUrl, "_blank");
}

// -----------------------------
// 👤 USER LOGIN SYSTEM
// -----------------------------
function checkUserLogin() {
    const currentUser = localStorage.getItem("currentUser");
    const userLink = document.getElementById("userLink");

    if (!userLink) return;

    if (currentUser) {
        const user = JSON.parse(currentUser);
        userLink.textContent = `👤 ${user.name}`;
    } else {
        userLink.textContent = "👤 Connexion";
    }
}

function handleUserAction() {
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
        const user = JSON.parse(currentUser);
        const logout = confirm(`Bonjour ${user.name} !\n\nVoulez-vous vous déconnecter ?`);

        if (logout) {
            localStorage.removeItem("currentUser");
            alert("Déconnexion réussie !");
            window.location.reload();
        }
    } else {
        window.location.href = "login.html";
    }
}

// -----------------------------
// 🔗 PRODUCT NAVIGATION
// -----------------------------
function goToProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// -----------------------------
// 🚀 INIT
// -----------------------------
window.addEventListener("DOMContentLoaded", () => {
    checkUserLogin();
    updateCart();
});