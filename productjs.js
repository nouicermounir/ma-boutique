// ========================================
// PRODUCT DATABASE
// ========================================
const products = {
    // Gaming Products
    "ps5-controller": {
        name: "Manette PS5 DualSense",
        price: 69.99,
        image: "https://www.pcline.dz/1127-large_default/manette-playstation-5-dualsense-white-sans-fil-original.jpg",
        description: "Manette sans fil PlayStation 5 avec retour haptique avancé et gâchettes adaptatives. Vivez chaque action dans le jeu avec des sensations réalistes.",
        colors: ["#ffffff", "#000000", "#ff0000", "#0066ff"],
        specs: [
            "Retour haptique immersif",
            "Gâchettes adaptatives dynamiques",
            "Microphone intégré",
            "Batterie rechargeable",
            "Connectivité sans fil Bluetooth"
        ]
    },
    "microphone-pro": {
        name: "Microphone Streaming Pro",
        price: 49.99,
        image: "https://m.media-amazon.com/images/I/81GYqmukfcL._AC_SY300_SX300_QL70_FMwebp_.jpg",
        description: "Microphone USB professionnel parfait pour le gaming, le streaming et les podcasts. Qualité audio studio à portée de main.",
        colors: ["#000000", "#ff0000", "#0066ff"],
        specs: [
            "Connexion USB plug-and-play",
            "Réduction de bruit avancée",
            "Support anti-choc inclus",
            "Compatible PC, PS4, PS5",
            "Bouton mute tactile"
        ]
    },
    "keyboard-rgb": {
        name: "Clavier Mécanique RGB",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
        description: "Clavier gaming mécanique avec switches Blue, rétroéclairage RGB personnalisable et conception anti-ghosting.",
        colors: ["#000000", "#ffffff", "#ff0000"],
        specs: [
            "Switches mécaniques Blue",
            "RGB personnalisable 16.8M couleurs",
            "Anti-ghosting complet",
            "Repose-poignet magnétique",
            "Cable tressé détachable"
        ]
    },
    "gaming-mouse": {
        name: "Souris Gaming Pro",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
        description: "Souris optique haute précision avec capteur 16000 DPI et 7 boutons programmables pour les gamers exigeants.",
        colors: ["#000000", "#ffffff", "#ff0000", "#00ff00"],
        specs: [
            "Capteur optique 16000 DPI",
            "7 boutons programmables",
            "RGB synchronisé",
            "Poids ajustable",
            "Polling rate 1000Hz"
        ]
    },
    "gaming-headset": {
        name: "Casque Gaming 7.1",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500&h=500&fit=crop",
        description: "Casque surround 7.1 virtuel avec micro antibruit et coussinets en mousse à mémoire de forme ultra-confortables.",
        colors: ["#000000", "#ff0000", "#0066ff"],
        specs: [
            "Son surround 7.1 virtuel",
            "Micro antibruit rétractable",
            "Coussinets mousse mémoire",
            "Compatible multi-plateformes",
            "Contrôles audio intégrés"
        ]
    },
    "mouse-pad": {
        name: "Tapis de Souris XXL",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=500&fit=crop",
        description: "Grand tapis de souris gaming 900x400mm avec surface en tissu et base antidérapante pour une précision maximale.",
        colors: ["#000000", "#ff0000", "#0066ff", "#00ff00"],
        specs: [
            "Dimensions: 900x400x3mm",
            "Surface en tissu tissé",
            "Base caoutchouc antidérapante",
            "Bords renforcés",
            "Lavable en machine"
        ]
    },

    // Perfume Products
    "royal-oud": {
        name: "Royal Oud",
        price: 95.00,
        image: "https://i5.walmartimages.com/seo/Creed-Royal-Oud-Eau-de-Parfum-Unisex-Fragrance-1-7-Oz_6bd34d08-9008-4261-beb7-594b41872078.9950599af84b1421fd40ea4fd6cb97c4.jpeg",
        description: "Parfum oriental intense aux notes d'Oud précieux, ambre et santal. Une fragrance luxueuse et envoûtante.",
        colors: ["#8B4513", "#FFD700", "#000000"],
        specs: [
            "Concentration: Eau de Parfum",
            "Volume: 100ml",
            "Notes de tête: Citron, Bergamote",
            "Notes de cœur: Oud, Cèdre",
            "Notes de fond: Ambre, Santal"
        ]
    },
    "vanille-supreme": {
        name: "Vanille Suprême",
        price: 78.00,
        image: "https://luxurious-fragrances.com/wp-content/uploads/2025/08/supreme-vanille.jpg",
        description: "Senteur douce et gourmande à la vanille bourbon et caramel. Parfait pour les amateurs de fragrances sucrées.",
        colors: ["#FAEBD7", "#DEB887", "#FFE4C4"],
        specs: [
            "Concentration: Eau de Parfum",
            "Volume: 100ml",
            "Notes de tête: Vanille Bourbon",
            "Notes de cœur: Caramel, Praline",
            "Notes de fond: Musc, Bois de santal"
        ]
    },
    "elegance-homme": {
        name: "Élégance Homme",
        price: 65.00,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop",
        description: "Eau de parfum masculine sophistiquée aux notes boisées et épicées. L'élégance à l'état pur.",
        colors: ["#2F4F4F", "#8B4513", "#000000"],
        specs: [
            "Concentration: Eau de Parfum",
            "Volume: 100ml",
            "Notes de tête: Bergamote, Cardamome",
            "Notes de cœur: Cèdre, Vétiver",
            "Notes de fond: Ambre, Musc"
        ]
    },
    "rose-mystique": {
        name: "Rose Mystique",
        price: 72.00,
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&h=500&fit=crop",
        description: "Eau de parfum féminine aux notes florales délicates de rose et jasmin. Une fragrance romantique et raffinée.",
        colors: ["#FFB6C1", "#FF69B4", "#C71585"],
        specs: [
            "Concentration: Eau de Parfum",
            "Volume: 100ml",
            "Notes de tête: Rose de Damas, Pivoine",
            "Notes de cœur: Jasmin, Iris",
            "Notes de fond: Musc blanc, Patchouli"
        ]
    },
    "sport-intense": {
        name: "Sport Intense Homme",
        price: 58.00,
        image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&h=500&fit=crop",
        description: "Eau de toilette fraîche et dynamique pour homme actif. Notes aquatiques et mentholées énergisantes.",
        colors: ["#4682B4", "#00CED1", "#1E90FF"],
        specs: [
            "Concentration: Eau de Toilette",
            "Volume: 100ml",
            "Notes de tête: Menthe, Citron",
            "Notes de cœur: Notes marines, Lavande",
            "Notes de fond: Ambre gris, Cèdre"
        ]
    },
    "glamour-nuit": {
        name: "Glamour Nuit",
        price: 85.00,
        image: "https://photos.enjoei.com.br/glamour-nuit-111331833/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82MzQzMTAwL2RmMjBmMzA1ZTFlODk0NmE5YjRjZWEyZjIwYWM4ZTA4LmpwZw",
        description: "Eau de parfum sophistiquée aux notes orientales de patchouli et vanille. Sensuelle et mystérieuse.",
        colors: ["#800080", "#4B0082", "#000000"],
        specs: [
            "Concentration: Eau de Parfum",
            "Volume: 100ml",
            "Notes de tête: Bergamote, Mandarine",
            "Notes de cœur: Jasmin, Patchouli",
            "Notes de fond: Vanille, Encens"
        ]
    },

    // Phone Products
    "iphone-14": {
        name: "iPhone 14",
        price: 899.00,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
        description: "iPhone 14 avec écran Super Retina XDR, puce A15 Bionic et système photo double caméra avancé.",
        colors: ["#000000", "#ffffff", "#0000ff", "#ff0000", "#ffd700"],
        specs: [
            "Écran Super Retina XDR 6.1\"",
            "Puce A15 Bionic",
            "Stockage: 128 Go",
            "Double caméra 12MP",
            "5G ultra-rapide"
        ]
    },
    "samsung-s23": {
        name: "Samsung Galaxy S23",
        price: 799.00,
        image: "https://iphoneprixalgerie.com/img/product/177/main.jpg",
        description: "Samsung Galaxy S23 avec écran Dynamic AMOLED 120Hz, processeur Snapdragon 8 Gen 2 et triple caméra.",
        colors: ["#000000", "#ffffff", "#800080", "#00ff00"],
        specs: [
            "Écran Dynamic AMOLED 120Hz",
            "Snapdragon 8 Gen 2",
            "Stockage: 256 Go",
            "Triple caméra 50MP",
            "Batterie 3900mAh"
        ]
    },
    "xiaomi-13-pro": {
        name: "Xiaomi 13 Pro",
        price: 699.00,
        image: "https://lh5.googleusercontent.com/rHFDzn_CaSbggHYnpdCdFxA4YXl4pvOrFJSPHmQeOGYLqUuzZ9u4RfCKtiv4fo0tcXo=w2400",
        description: "Xiaomi 13 Pro avec système photo Leica, processeur Snapdragon 8 Gen 2 et charge rapide 120W.",
        colors: ["#000000", "#ffffff", "#008000"],
        specs: [
            "Écran AMOLED 6.73\" 120Hz",
            "Snapdragon 8 Gen 2",
            "Stockage: 256 Go",
            "Caméra Leica 50MP",
            "Charge rapide 120W"
        ]
    },
    "huawei-p50": {
        name: "Huawei P50",
        price: 549.00,
        image: "https://brothers-phone.com/wp-content/uploads/2024/04/Images-site-5.png",
        description: "Huawei P50 avec triple caméra professionnelle et processeur Snapdragon 888 4G puissant.",
        colors: ["#000000", "#ffffff", "#ffd700"],
        specs: [
            "Écran OLED 6.5\" 90Hz",
            "Snapdragon 888 4G",
            "Stockage: 128 Go",
            "Triple caméra 50MP",
            "Charge rapide 66W"
        ]
    },
    "infinix-note-30": {
        name: "Infinix Note 30",
        price: 249.00,
        image: "https://mobijil.com/wp-content/uploads/2025/01/Infinix-Note-30-5G-500x500-1-1024x1024.jpg",
        description: "Infinix Note 30 5G avec charge rapide 68W, grand écran et batterie longue durée.",
        colors: ["#000000", "#0066ff", "#00ff00"],
        specs: [
            "Écran IPS 6.78\" 120Hz",
            "MediaTek Dimensity 6080",
            "Stockage: 128 Go",
            "Caméra 108MP",
            "Charge rapide 68W"
        ]
    },
    "realme-gt": {
        name: "Realme GT Master",
        price: 329.00,
        image: "https://static.realme.net/v2/realme-gt-luna-a/images/specs/2-c89f67769e.png",
        description: "Realme GT Master avec processeur Snapdragon 778G, écran AMOLED et charge rapide 65W.",
        colors: ["#ffffff", "#000000", "#ffff00"],
        specs: [
            "Écran Super AMOLED 120Hz",
            "Snapdragon 778G 5G",
            "Stockage: 128 Go",
            "Triple caméra 64MP",
            "Charge rapide 65W"
        ]
    },

    // Accessory Products
    "fast-charger": {
        name: "Chargeur Rapide 30W",
        price: 19.99,
        image: "https://www.hoco-algerie.com/wp-content/uploads/2022/01/hoco-n16-scenery-65w-three-port-wall-charger-eu-set-with-type-c-to-type-c-cable-package.jpg",
        description: "Chargeur mural rapide 30W compatible avec tous les appareils Android et iPhone. Charge ultra-rapide et sécurisée.",
        colors: ["#ffffff", "#000000"],
        specs: [
            "Puissance: 30W",
            "Compatible USB-C et Lightning",
            "Protection contre la surchauffe",
            "Compatible iPhone et Android",
            "Cable USB-C inclus"
        ]
    },
    "power-bank": {
        name: "Power Bank 20,000mAh",
        price: 29.99,
        image: "https://dz.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/90/5145/1.jpg?5631",
        description: "Batterie externe haute capacité 20000mAh avec charge rapide et double port USB.",
        colors: ["#000000", "#ffffff", "#0066ff"],
        specs: [
            "Capacité: 20000mAh",
            "Double port USB",
            "Charge rapide 18W",
            "Indicateur LED",
            "Protection multiple"
        ]
    },
    "bluetooth-earbuds": {
        name: "Écouteurs Bluetooth",
        price: 34.99,
        image: "https://campusinformatique.com/wp-content/uploads/2024/12/ECOUTEUR-BLUETOOTH-HOCO-EQ12.webp",
        description: "Écouteurs Bluetooth sans fil avec autonomie 20h, boîtier de charge et réduction de bruit.",
        colors: ["#ffffff", "#000000", "#ff69b4"],
        specs: [
            "Autonomie: 20 heures",
            "Bluetooth 5.0",
            "Réduction de bruit",
            "Boîtier de charge inclus",
            "Résistant à l'eau IPX5"
        ]
    }
};

// ========================================
// SELECTED PRODUCT STATE
// ========================================
let selectedProduct = null;
let selectedColor = null;
let selectedQuantity = 1;

// ========================================
// INITIALIZE PRODUCT PAGE
// ========================================
function initProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId || !products[productId]) {
        window.location.href = 'index.html';
        return;
    }

    selectedProduct = products[productId];
    loadProductDetails();
}

// ========================================
// LOAD PRODUCT DETAILS
// ========================================
function loadProductDetails() {
    document.getElementById('productName').textContent = selectedProduct.name;
    document.getElementById('productPrice').textContent = selectedProduct.price.toFixed(2) + '€';
    document.getElementById('productDescription').textContent = selectedProduct.description;
    document.getElementById('productImage').src = selectedProduct.image;
    document.getElementById('productImage').alt = selectedProduct.name;

    // Load Colors
    const colorOptions = document.getElementById('colorOptions');
    colorOptions.innerHTML = '';
    selectedProduct.colors.forEach((color, index) => {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color-option' + (index === 0 ? ' selected' : '');
        colorDiv.style.backgroundColor = color;
        colorDiv.onclick = () => selectColor(color, colorDiv);
        colorOptions.appendChild(colorDiv);
    });
    selectedColor = selectedProduct.colors[0];

    // Load Specs
    const specsList = document.getElementById('productSpecs');
    specsList.innerHTML = '';
    selectedProduct.specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        specsList.appendChild(li);
    });

    updateTotalPrice();
}

// ========================================
// SELECT COLOR
// ========================================
function selectColor(color, element) {
    selectedColor = color;
    document.querySelectorAll('.color-option').forEach(el => {
        el.classList.remove('selected');
    });
    element.classList.add('selected');
}

// ========================================
// CHANGE QUANTITY
// ========================================
function changeQuantity(change) {
    const qtyInput = document.getElementById('quantity');
    let newQty = parseInt(qtyInput.value) + change;

    if (newQty < 1) newQty = 1;
    if (newQty > 10) newQty = 10;

    qtyInput.value = newQty;
    selectedQuantity = newQty;
    updateTotalPrice();
}

// ========================================
// UPDATE TOTAL PRICE
// ========================================
function updateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const total = selectedProduct.price * quantity;
    document.getElementById('totalPrice').textContent = total.toFixed(2) + '€';
}

// ========================================
// ADD TO CART
// ========================================
function addProductToCart() {
    if (!selectedProduct || !selectedColor) {
        alert('Veuillez sélectionner une couleur');
        return;
    }

    const quantity = parseInt(document.getElementById('quantity').value);

    // Add each item individually (for cart display)
    for (let i = 0; i < quantity; i++) {
        addToCart(
            `${selectedProduct.name} (${getColorName(selectedColor)})`,
            selectedProduct.price
        );
    }

    showNotification(`${quantity}x ${selectedProduct.name} ajouté au panier!`);

    // Redirect back after 1 second
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// ========================================
// GET COLOR NAME
// ========================================
function getColorName(hexColor) {
    const colorNames = {
        '#ffffff': 'Blanc',
        '#000000': 'Noir',
        '#ff0000': 'Rouge',
        '#0066ff': 'Bleu',
        '#00ff00': 'Vert',
        '#ffff00': 'Jaune',
        '#ff69b4': 'Rose',
        '#800080': 'Violet',
        '#ffd700': 'Or',
        '#8B4513': 'Marron',
        '#FFD700': 'Doré',
        '#FAEBD7': 'Crème',
        '#DEB887': 'Beige',
        '#FFE4C4': 'Bisque',
        '#2F4F4F': 'Gris Ardoise',
        '#FFB6C1': 'Rose Clair',
        '#FF69B4': 'Rose Vif',
        '#C71585': 'Rouge Violet',
        '#4682B4': 'Bleu Acier',
        '#00CED1': 'Turquoise',
        '#1E90FF': 'Bleu Dodger',
        '#4B0082': 'Indigo',
        '#008000': 'Vert Foncé'
    };

    return colorNames[hexColor] || hexColor;
}

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================
window.addEventListener('DOMContentLoaded', () => {
    initProductPage();
    checkUserLogin();
    updateCart();
});