let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
    showNotification(`${name} ajouté au panier!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><p>Votre panier est vide</p></div>';
        cartTotal.textContent = '0.00€';
        return;
    }

    let html = '';
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
    cartTotal.textContent = total.toFixed(2) + '€';
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active');
}

function showNotification(message) {
    const notification = document.createElement('div');
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
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

function payWithPayPal() {
    if (cart.length === 0) {
        alert('Votre panier est vide !');
        return;
    }

    // Calcul du total
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });

    // Redirection vers PayPal avec les paramètres
    // IMPORTANT: Remplacez 'VOTRE_EMAIL_PAYPAL' par votre vrai email PayPal
    const paypalEmail = 'VOTRE_EMAIL_PAYPAL@example.com';
    const currency = 'EUR';
    const itemName = `Commande TechStyle Shop (${cart.length} article${cart.length > 1 ? 's' : ''})`;
    
    // Construction de l'URL PayPal
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${encodeURIComponent(paypalEmail)}&item_name=${encodeURIComponent(itemName)}&amount=${total.toFixed(2)}&currency_code=${currency}&return=https://votresite.com/success&cancel_return=https://votresite.com/cancel`;
    
    // Redirection vers PayPal
    window.open(paypalUrl, '_blank');
}

// Gestion de l'utilisateur connecté
function checkUserLogin() {
    const currentUser = localStorage.getItem('currentUser');
    const userLink = document.getElementById('userLink');
    
    if (currentUser) {
        const user = JSON.parse(currentUser);
        userLink.textContent = `👤 ${user.name}`;
    } else {
        userLink.textContent = '👤 Connexion';
    }
}

function handleUserAction() {
    const currentUser = localStorage.getItem('currentUser');
    
    if (currentUser) {
        // Si l'utilisateur est connecté, afficher un menu
        const user = JSON.parse(currentUser);
        const logout = confirm(`Bonjour ${user.name} !\n\nVoulez-vous vous déconnecter ?`);
        
        if (logout) {
            localStorage.removeItem('currentUser');
            alert('Déconnexion réussie !');
            window.location.reload();
        }
    } else {
        // Si non connecté, rediriger vers la page de connexion
        window.location.href = 'login.html';
    }
}

// Vérifier la connexion au chargement de la page
window.addEventListener('DOMContentLoaded', checkUserLogin);
```

## 📁 Structure finale de votre projet :
```