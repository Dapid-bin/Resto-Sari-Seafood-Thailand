// DATA MENU - 20 ITEM (EDIT SESUAI MENU ASLI)
const menuItems = [
    { 
        id: 1, 
        name: "Kepiting Saus Thailand", 
        price: 85000, 
        image: "./assets/images/img01.jpg",
        category: "seafood",
        description: "Kepiting segar dengan saus khas Thailand yang pedas manis.",
        rating: 4.5
    },
    { 
        id: 2, 
        name: "Cumi Bakar Madu", 
        price: 65000, 
        image: "./assets/images/img02.jpg",
        category: "seafood",
        description: "Cumi bakar dengan olesan madu dan bumbu rempah khas.",
        rating: 4.7
    },
    { 
        id: 3, 
        name: "Udang Goreng Tepung", 
        price: 70000, 
        image: "./assets/images/img03.jpg",
        category: "seafood",
        description: "Udang jumbo crispy dengan tepung khusus dan saus mayo.",
        rating: 4.3
    },
    { 
        id: 4, 
        name: "Gurame Asam Manis", 
        price: 75000, 
        image: "./assets/images/img04.jpg",
        category: "seafood",
        description: "Gurame goreng krispi dengan saus asam manis nanas.",
        rating: 4.6
    },
    { 
        id: 5, 
        name: "Kerang Hijau Saus Padang", 
        price: 55000, 
        image: "./assets/images/img05.jpg",
        category: "seafood",
        description: "Kerang hijau segar dengan saus padang yang gurih pedas.",
        rating: 4.4
    },
    { 
        id: 6, 
        name: "Bubur Kepiting", 
        price: 45000, 
        image: "./assets/images/img06.jpg",
        category: "utama",
        description: "Bubur lembut dengan daging kepiting dan telur puyuh.",
        rating: 4.2
    },
    { 
        id: 7, 
        name: "Nasi Goreng Seafood", 
        price: 45000, 
        image: "./assets/images/img07.jpg",
        category: "utama",
        description: "Nasi goreng dengan campuran seafood lengkap dan telur.",
        rating: 4.4
    },
    { 
        id: 8, 
        name: "Mie Goreng Seafood", 
        price: 40000, 
        image: "./assets/images/img08.jpg",
        category: "utama",
        description: "Mie goreng dengan udang, cumi, dan sayuran segar.",
        rating: 4.3
    },
    { 
        id: 9, 
        name: "Tom Yum Goong", 
        price: 55000, 
        image: "./assets/images/img09.jpg",
        category: "utama",
        description: "Sup udang pedas asam khas Thailand dengan jamur dan rempah.",
        rating: 4.8
    },
    { 
        id: 10, 
        name: "Green Curry Chicken", 
        price: 50000, 
        image: "./assets/images/img10.jpg",
        category: "utama",
        description: "Kari hijau Thailand dengan ayam dan terong.",
        rating: 4.5
    },
    { 
        id: 11, 
        name: "Pad Thai", 
        price: 45000, 
        image: "./assets/images/img11.jpg",
        category: "utama",
        description: "Mie goreng khas Thailand dengan tauge dan kacang.",
        rating: 4.6
    },
    { 
        id: 12, 
        name: "Som Tam (Salad Pepaya)", 
        price: 35000, 
        image: "./assets/images/img12.jpg",
        category: "utama",
        description: "Salad pepaya muda Thailand yang segar dan pedas.",
        rating: 4.4
    },
    { 
        id: 13, 
        name: "Satay Ayam", 
        price: 30000, 
        image: "./assets/images/img13.jpg",
        category: "utama",
        description: "Sate ayam dengan bumbu kacang dan ketupat.",
        rating: 4.3
    },
    { 
        id: 14, 
        name: "Spring Roll", 
        price: 25000, 
        image: "./assets/images/img14.jpg",
        category: "utama",
        description: "Lumpia goreng isi sayuran dan daging.",
        rating: 4.2
    },
    { 
        id: 15, 
        name: "Es Teh Thailand", 
        price: 15000, 
        image: "./assets/images/img15.jpg",
        category: "minuman",
        description: "Es teh dengan rasa khas Thailand yang menyegarkan.",
        rating: 4.2
    },
    { 
        id: 16, 
        name: "Es Jeruk", 
        price: 12000, 
        image: "./assets/images/img16.jpg",
        category: "minuman",
        description: "Es jeruk segar dengan sedikit mint.",
        rating: 4.0
    },
    { 
        id: 17, 
        name: "Air Mineral", 
        price: 8000, 
        image: "./assets/images/img17.jpg",
        category: "minuman",
        description: "Air mineral botol 600ml.",
        rating: 4.0
    },
    { 
        id: 18, 
        name: "Thai Milk Tea", 
        price: 20000, 
        image: "./assets/images/img18.jpg",
        category: "minuman",
        description: "Teh susu Thailand yang khas dengan rasa vanila.",
        rating: 4.7
    },
    { 
        id: 19, 
        name: "Es Kopi Thailand", 
        price: 18000, 
        image: "./assets/images/img19.jpg",
        category: "minuman",
        description: "Kopi Thailand dengan susu dan gula aren.",
        rating: 4.5
    },
    { 
        id: 20, 
        name: "Jus Alpukat", 
        price: 22000, 
        image: "./assets/images/img20.jpg",
        category: "minuman",
        description: "Jus alpukat dengan susu dan coklat.",
        rating: 4.6
    }
];

// VARIABEL GLOBAL
let cart = JSON.parse(localStorage.getItem('sariSeafoodCart')) || [];
const openHour = 9; // 09:00
const closeHour = 22; // 22:00

// DOM ELEMENTS
const menuGrid = document.getElementById('menuGrid');
const orderList = document.getElementById('orderList');
const orderTotalContainer = document.getElementById('orderTotalContainer');
const totalItemsEl = document.getElementById('totalItems');
const totalPriceEl = document.getElementById('totalPrice');
const emptyOrderText = document.getElementById('emptyOrderText');
const orderWaBtn = document.getElementById('orderWaBtn');
const clearOrderBtn = document.getElementById('clearOrder');
const statusBadge = document.getElementById('statusBadge');
const statusDot = statusBadge.querySelector('.status-dot');
const statusText = statusBadge.querySelector('.status-text');
const nextStatusEl = document.getElementById('nextStatus');
const footerStatusEl = document.getElementById('footerStatus');
const mainWaBtn = document.getElementById('mainWaBtn');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalInfo = document.getElementById('modalInfo');
const closeModal = document.getElementById('closeModal');
const notification = document.getElementById('notification');

// INITIALIZE
document.addEventListener('DOMContentLoaded', function() {
    initMenu();
    initFilters();
    updateOrderSummary();
    updateStatus();
    setupEventListeners();
    
    // Update status setiap menit
    setInterval(updateStatus, 60000);
    
    // Update order setiap 5 detik (untuk sinkronisasi antar tab)
    setInterval(syncCart, 5000);
});

// INISIALISASI MENU
function initMenu() {
    menuGrid.innerHTML = '';
    
    menuItems.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.className = `menu-card ${item.category}`;
        menuCard.dataset.id = item.id;
        
        const ratingStars = getStarRating(item.rating);
        
        menuCard.innerHTML = `
            <div class="menu-img-container">
                <img src="${item.image}" alt="${item.name}" class="menu-img">
                <span class="menu-badge">${item.category === 'seafood' ? '🦀 Seafood' : 
                                        item.category === 'utama' ? '🍚 Makanan' : 
                                        '🥤 Minuman'}</span>
            </div>
            <div class="menu-content">
                <div class="menu-header">
                    <h3 class="menu-title">${item.name}</h3>
                    <span class="menu-price">Rp ${item.price.toLocaleString('id-ID')}</span>
                </div>
                <p class="menu-desc">${item.description}</p>
                <div class="menu-footer">
                    <div class="menu-rating">
                        ${ratingStars}
                        <span>(${item.rating})</span>
                    </div>
                    <button class="add-to-cart" data-id="${item.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        
        menuGrid.appendChild(menuCard);
    });
    
    // Add event listeners untuk gambar dan tombol
    document.querySelectorAll('.menu-img').forEach(img => {
        img.addEventListener('click', function() {
            const itemId = this.closest('.menu-card').dataset.id;
            showImageModal(itemId);
        });
    });
    
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const itemId = parseInt(this.dataset.id);
            addToCart(itemId);
        });
    });
}

// FILTER MENU
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class dari semua button
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class ke button yang diklik
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            const menuCards = document.querySelectorAll('.menu-card');
            
            menuCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// FUNGSI KERANJANG BELANJA
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    saveCart();
    updateOrderSummary();
    showNotification(`${item.name} ditambahkan ke keranjang!`);
    
    // Efek visual pada tombol
    const addBtn = document.querySelector(`.add-to-cart[data-id="${itemId}"]`);
    addBtn.innerHTML = '<i class="fas fa-check"></i>';
    addBtn.style.background = 'var(--success)';
    addBtn.style.color = 'white';
    
    setTimeout(() => {
        addBtn.innerHTML = '<i class="fas fa-plus"></i>';
        addBtn.style.background = '';
        addBtn.style.color = '';
    }, 1000);
}

function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(i => i.id === itemId);
    if (itemIndex !== -1) {
        const itemName = cart[itemIndex].name;
        cart.splice(itemIndex, 1);
        saveCart();
        updateOrderSummary();
        showNotification(`${itemName} dihapus dari keranjang`);
    }
}

function updateQuantity(itemId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(itemId);
        return;
    }
    
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateOrderSummary();
    }
}

function clearCart() {
    if (cart.length > 0) {
        cart = [];
        saveCart();
        updateOrderSummary();
        showNotification('Keranjang dikosongkan');
    }
}

function saveCart() {
    localStorage.setItem('sariSeafoodCart', JSON.stringify(cart));
}

function syncCart() {
    const savedCart = JSON.parse(localStorage.getItem('sariSeafoodCart')) || [];
    if (JSON.stringify(savedCart) !== JSON.stringify(cart)) {
        cart = savedCart;
        updateOrderSummary();
    }
}

// UPDATE TAMPILAN KERANJANG
function updateOrderSummary() {
    orderList.innerHTML = '';
    
    if (cart.length === 0) {
        emptyOrderText.style.display = 'block';
        orderTotalContainer.style.display = 'none';
        orderWaBtn.classList.add('disabled');
        orderWaBtn.href = "#";
        totalItemsEl.textContent = "0";
        totalPriceEl.textContent = "Rp 0";
        return;
    }
    
    emptyOrderText.style.display = 'none';
    orderTotalContainer.style.display = 'block';
    orderWaBtn.classList.remove('disabled');
    
    let totalItems = 0;
    let totalPrice = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalItems += item.quantity;
        totalPrice += itemTotal;
        
        const li = document.createElement('li');
        li.className = 'order-item';
        li.innerHTML = `
            <div class="order-item-info">
                <h4>${item.name}</h4>
                <p>Rp ${item.price.toLocaleString('id-ID')} × ${item.quantity}</p>
            </div>
            <div class="order-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                </div>
                <div class="remove-item" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
        `;
        
        orderList.appendChild(li);
    });
    
    // Update total
    totalItemsEl.textContent = totalItems;
    totalPriceEl.textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
    
    // Update WhatsApp link
    const message = generateWhatsAppMessage();
    orderWaBtn.href = `https://wa.me/6287771050628?text=${encodeURIComponent(message)}`;
}

// STATUS BUKA/TUTUP
function updateStatus() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;
    const openTime = openHour * 60;
    const closeTime = closeHour * 60;
    
    const isOpen = currentTime >= openTime && currentTime < closeTime;
    
    // Update badge di header
    statusDot.className = isOpen ? 'status-dot open' : 'status-dot closed';
    statusText.textContent = isOpen ? 'BUKA SEKARANG' : 'TUTUP';
    
    // Update jam berikutnya
    let nextStatusText = '';
    if (isOpen) {
        const remainingMinutes = closeTime - currentTime;
        const remainingHours = Math.floor(remainingMinutes / 60);
        const remainingMins = remainingMinutes % 60;
        nextStatusText = `Tutup dalam ${remainingHours}j ${remainingMins}m`;
    } else {
        // Jika tutup, hitung jam buka besok
        let nextOpenMinutes;
        if (currentTime < openTime) {
            // Masih tutup, buka hari ini
            nextOpenMinutes = openTime - currentTime;
        } else {
            // Sudah lewat jam tutup, buka besok
            nextOpenMinutes = (24 * 60 - currentTime) + openTime;
        }
        const nextOpenHours = Math.floor(nextOpenMinutes / 60);
        const nextOpenMins = nextOpenMinutes % 60;
        nextStatusText = `Buka dalam ${nextOpenHours}j ${nextOpenMins}m`;
    }
    
    nextStatusEl.textContent = nextStatusText;
    footerStatusEl.textContent = isOpen ? '✅ Sekarang BUKA' : '❌ Sekarang TUTUP';
    
    // Update tombol WhatsApp utama
    if (isOpen) {
        mainWaBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Pesan via WhatsApp';
        mainWaBtn.style.background = 'linear-gradient(to right, #25d366, #128c7e)';
    } else {
        mainWaBtn.innerHTML = '<i class="fas fa-clock"></i> Kami Sedang Tutup';
        mainWaBtn.style.background = 'var(--gray)';
        mainWaBtn.onclick = function(e) {
            e.preventDefault();
            showNotification(`Kami buka pukul 09:00 - 22:00 WIB. Silakan pesan untuk esok hari.`);
        };
    }
}

// MODAL GAMBAR
function showImageModal(itemId) {
    const item = menuItems.find(i => i.id === parseInt(itemId));
    if (!item) return;
    
    modalImage.src = item.image;
    modalImage.alt = item.name;
    
    modalInfo.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p class="modal-price">Rp ${item.price.toLocaleString('id-ID')}</p>
        <p><strong>Kategori:</strong> ${item.category === 'seafood' ? 'Seafood' : 
                                      item.category === 'utama' ? 'Makanan Utama' : 'Minuman'}</p>
        <p><strong>Rating:</strong> ${item.rating}/5.0</p>
        <button class="wa-btn-order" style="margin-top: 20px; width: 100%;" 
                onclick="addToCart(${item.id}); imageModal.style.display='none';">
            <i class="fas fa-cart-plus"></i> Tambah ke Pesanan
        </button>
    `;
    
    imageModal.style.display = 'flex';
}

// NOTIFICATION
function showNotification(message, type = 'success') {
    notification.textContent = message;
    notification.className = 'notification';
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// UTILITY FUNCTIONS
function getStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<span class="star filled">★</span>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<span class="star filled">★</span>';
        } else {
            stars += '<span class="star">★</span>';
        }
    }
    
    return stars;
}

function generateWhatsAppMessage() {
    let message = `Halo Sari Seafood Thailand, saya mau pesan:\n\n`;
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ${item.quantity} pcs × Rp ${item.price.toLocaleString('id-ID')}\n`;
    });
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\nTotal: Rp ${totalPrice.toLocaleString('id-ID')}\n`;
    message += `\nNama: \nAlamat: \nCatatan: \n\nTerima kasih!`;
    
    return message;
}

// EVENT LISTENERS
function setupEventListeners() {
    // Clear cart button
    clearOrderBtn.addEventListener('click', clearCart);
    
    // Close modal
    closeModal.addEventListener('click', () => {
        imageModal.style.display = 'none';
    });
    
    // Close modal ketika klik di luar
    window.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
        }
    });
    
    // Event delegation untuk keranjang
    orderList.addEventListener('click', (e) => {
        const target = e.target;
        const itemId = parseInt(target.closest('[data-id]')?.dataset.id);
        
        if (!itemId) return;
        
        if (target.classList.contains('minus') || target.closest('.minus')) {
            const item = cart.find(i => i.id === itemId);
            if (item) updateQuantity(itemId, item.quantity - 1);
        } else if (target.classList.contains('plus') || target.closest('.plus')) {
            const item = cart.find(i => i.id === itemId);
            if (item) updateQuantity(itemId, item.quantity + 1);
        } else if (target.classList.contains('remove-item') || target.closest('.remove-item')) {
            removeFromCart(itemId);
        }
    });
    
    // Tombol WhatsApp utama
    mainWaBtn.addEventListener('click', function(e) {
        if (cart.length > 0) {
            // Jika ada item di keranjang, arahkan ke ringkasan pesanan
            e.preventDefault();
            document.querySelector('.order-summary').scrollIntoView({ behavior: 'smooth' });
            showNotification('Silakan periksa ringkasan pesanan Anda di bawah');
        }
    });
}

// Panggil untuk inisialisasi pertama kali
updateStatus();