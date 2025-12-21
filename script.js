const menuItems = [
    // ========== SEAFOOD MIX (PAKET) ==========
    { id: 1, name: "Seafood Mix S (1-2 Orang)", price: 65000, category: "seafood", description: "Isi: Kepiting 1 ekor, Kerang ijo, Kerang dara, Cumi, Udang", rating: 4.7, page: 1 },
    { id: 2, name: "Seafood Mix M (2-3 Orang)", price: 100000, category: "seafood", description: "Isi: Kepiting 1 ekor, Kerang ijo, Kerang dara, Cumi, Udang", rating: 4.8, page: 1 },
    { id: 3, name: "Seafood Mix L (3-4 Orang)", price: 200000, category: "seafood", description: "Isi: Kepiting 2 ekor, Kerang ijo, Kerang dara, Cumi, Udang", rating: 4.9, page: 1 },

    // ========== UDANG ==========
    { id: 4, name: "Udang Saos Padang", price: 40000, category: "seafood", description: "Udang segar saus padang", rating: 4.5, page: 1 },
    { id: 5, name: "Udang Goreng Tepung", price: 38000, category: "seafood", description: "Udang krispi", rating: 4.4, page: 1 },
    { id: 6, name: "Udang Telor Asin", price: 40000, category: "seafood", description: "Udang saus telur asin", rating: 4.6, page: 1 },
    { id: 7, name: "Udang Lada Garam", price: 40000, category: "seafood", description: "Udang tumis lada garam", rating: 4.4, page: 1 },
    { id: 8, name: "Udang Saos Tiram", price: 40000, category: "seafood", description: "Udang saus tiram", rating: 4.3, page: 1 },
    { id: 9, name: "Udang Balado", price: 40000, category: "seafood", description: "Udang bumbu balado", rating: 4.7, page: 1 },

    // ========== CUMI & KERANG ==========
    { id: 10, name: "Cumi Goreng Tepung", price: 35000, category: "seafood", description: "Cumi crispy", rating: 4.5, page: 1 },
    { id: 11, name: "Cumi Lada Garam", price: 35000, category: "seafood", description: "Cumi tumis lada garam", rating: 4.4, page: 1 },
    { id: 12, name: "Cumi Telor Asin", price: 35000, category: "seafood", description: "Cumi saus telur asin", rating: 4.6, page: 1 },
    { id: 13, name: "Cumi Saos Padang", price: 35000, category: "seafood", description: "Cumi saus padang", rating: 4.5, page: 1 },
    { id: 14, name: "Kerang Kepa", price: 25000, category: "seafood", description: "Pilihan: Saos Padang/Tiram", rating: 4.2, page: 1 },
    { id: 15, name: "Kerang Batik", price: 25000, category: "seafood", description: "Pilihan: Saos Padang/Tiram", rating: 4.3, page: 1 },
    { id: 16, name: "Kerang Ijo", price: 25000, category: "seafood", description: "Pilihan: Saos Padang/Tiram", rating: 4.4, page: 1 },

    // ========== GURAME (PORSI) ==========
    { id: 17, name: "Gurame Bakar Cabe Ijo", price: 35000, category: "ikan", description: "Gurame bakar bumbu cabe ijo", rating: 4.7, page: 2 },
    { id: 18, name: "Gurame Bakar Terasi", price: 35000, category: "ikan", description: "Gurame bakar bumbu terasi", rating: 4.6, page: 2 },
    { id: 19, name: "Gurame Bakar Kecap", price: 35000, category: "ikan", description: "Gurame bakar kecap manis", rating: 4.5, page: 2 },
    { id: 20, name: "Gurame Bakar Sambel Bawang", price: 35000, category: "ikan", description: "Gurame bakar sambal bawang", rating: 4.4, page: 2 },
    { id: 21, name: "Gurame Bakar Rica-rica", price: 35000, category: "ikan", description: "Gurame bakar rica pedas", rating: 4.6, page: 2 },
    { id: 22, name: "Gurame Goreng Kering", price: 35000, category: "ikan", description: "Gurame goreng garing", rating: 4.3, page: 2 },
    { id: 23, name: "Gurame Saos Bangkok", price: 35000, category: "ikan", description: "Gurame goreng saus Bangkok", rating: 4.5, page: 2 },
    { id: 24, name: "Gurame Telor Asin", price: 35000, category: "ikan", description: "Gurame saus telur asin", rating: 4.6, page: 2 },
    { id: 25, name: "Gurame Saos Mangga", price: 35000, category: "ikan", description: "Gurame dengan serutan mangga", rating: 4.4, page: 2 },
    { id: 26, name: "Gurame Sambel Matah Thailand", price: 35000, category: "ikan", description: "Gurame matah khas Thai", rating: 4.7, page: 2 },

    // ========== IKAN LAINNYA (ONS/PORSI) ==========
    { id: 27, name: "Bawal Bakar", price: 85000, category: "ikan", description: "Semua varian bumbu", rating: 4.7, page: 2 },
    { id: 28, name: "Nila Bakar", price: 25000, category: "ikan", description: "Semua varian bumbu", rating: 4.4, page: 2 },
    { id: 29, name: "Nila Goreng Kering", price: 25000, category: "ikan", description: "Nila goreng garing", rating: 4.2, page: 2 },
    { id: 30, name: "Kakap Bakar/Goreng", price: 14000, unit: "ons", category: "ikan", description: "Harga per ons", rating: 4.5, page: 2 },
    { id: 31, name: "Kakap Steam Lemon", price: 14000, unit: "ons", category: "ikan", description: "Steam asam segar per ons", rating: 4.8, page: 2 },
    { id: 32, name: "Kakap Steam Tomyum", price: 14000, unit: "ons", category: "ikan", description: "Steam pedas tom yum per ons", rating: 4.7, page: 2 },
    { id: 33, name: "Kakap Steam Soya", price: 14000, unit: "ons", category: "ikan", description: "Steam kecap asin per ons", rating: 4.6, page: 2 },
    { id: 34, name: "Salem Bakar", price: 8000, unit: "ons", category: "ikan", description: "Ikan salem bakar per ons", rating: 4.3, page: 2 },
    { id: 35, name: "Kakap Baramundi Garam Thailand", price: 15000, unit: "ons", category: "ikan", description: "Spesial Baramundi per ons", rating: 4.9, page: 2 },

    // ========== TOM YUM & SALAD ==========
    { id: 36, name: "Mama Tomyum Seafood", price: 45000, category: "soup", description: "Tomyum porsi besar", rating: 4.9, page: 3 },
    { id: 37, name: "Tom Yum Seafood", price: 40000, category: "soup", description: "Isian udang, cumi, ikan", rating: 4.8, page: 3 },
    { id: 38, name: "Tom Yum Ikan", price: 40000, category: "soup", description: "Tom yum daging ikan", rating: 4.5, page: 3 },
    { id: 39, name: "Tom Yum Ayam", price: 35000, category: "soup", description: "Tom yum daging ayam", rating: 4.5, page: 3 },
    { id: 40, name: "Pepaya Salad (Somtam)", price: 15000, category: "salad", description: "Salad pepaya Thailand", rating: 4.4, page: 3 },
    { id: 41, name: "Mangga Salad", price: 15000, category: "salad", description: "Salad mangga segar", rating: 4.4, page: 3 },

    // ========== BASIL & MIE ==========
    { id: 42, name: "Basil Ayam", price: 20000, category: "basil", description: "Ayam tumis kemangi Thai", rating: 4.7, page: 3 },
    { id: 43, name: "Basil Kerang Batik", price: 20000, category: "basil", description: "Kerang tumis kemangi Thai", rating: 4.6, page: 3 },
    { id: 44, name: "Pad Thai", price: 25000, category: "mie", description: "Kweteiau goreng Thai", rating: 4.8, page: 3 },
    { id: 45, name: "Mie Goreng Seafood", price: 25000, category: "mie", description: "Mie goreng isian laut", rating: 4.5, page: 3 },

    // ========== SAYURAN ==========
    { id: 46, name: "Kangkung Bawang Putih", price: 10000, category: "sayuran", description: "Tumis kangkung polos", rating: 4.1, page: 4 },
    { id: 47, name: "Kangkung Terasi", price: 15000, category: "sayuran", description: "Tumis kangkung terasi", rating: 4.3, page: 4 },
    { id: 48, name: "Kailan Ayam", price: 18000, category: "sayuran", description: "Tumis kailan & ayam", rating: 4.3, page: 4 },
    { id: 49, name: "Brokoli Ayam", price: 18000, category: "sayuran", description: "Tumis brokoli & ayam", rating: 4.3, page: 4 },
    { id: 50, name: "Capcay Ayam", price: 18000, category: "sayuran", description: "Sayur campur ayam", rating: 4.2, page: 4 },
    { id: 51, name: "Capcay Udang", price: 20000, category: "sayuran", description: "Sayur campur udang", rating: 4.4, page: 4 },

    // ========== NASI & PAKET ==========
    { id: 52, name: "Nasi Goreng Seafood", price: 25000, category: "nasi", description: "Nasi goreng udang cumi", rating: 4.5, page: 4 },
    { id: 53, name: "Nasi Goreng Nanas", price: 20000, category: "nasi", description: "Nasi goreng nanas Thai", rating: 4.6, page: 4 },
    { id: 54, name: "Nasi Goreng Ayam", price: 15000, category: "nasi", description: "Nasi goreng ayam original", rating: 4.3, page: 4 },
    { id: 55, name: "Nasi Putih", price: 5000, category: "pelengkap", description: "Nasi putih hangat", rating: 4.0, page: 1 },
    { id: 56, name: "Paket Nasi Basil Ayam + Telor + Es Teh", price: 27000, category: "paket", description: "Hemat & lengkap", rating: 4.8, page: 1 },

    // ========== SAMBAL (5 RIBU) ==========
    { id: 57, name: "Sambel Rica-rica", price: 5000, category: "sambal", description: "Pedas rica", rating: 4.5, page: 1 },
    { id: 58, name: "Sambel Bawang", price: 5000, category: "sambal", description: "Gurih bawang", rating: 4.5, page: 1 },
    { id: 59, name: "Sambal Terasi", price: 5000, category: "sambal", description: "Aroma terasi", rating: 4.5, page: 1 },
    { id: 60, name: "Sambel Cabe Ijo", price: 5000, category: "sambal", description: "Pedas cabe ijo", rating: 4.5, page: 1 },

    // ========== MINUMAN ==========
    { id: 61, name: "Thai Tea", price: 22000, category: "minuman", description: "Teh susu khas Thai", rating: 4.9, page: 5 },
    { id: 62, name: "Thai Green Tea", price: 22000, category: "minuman", description: "Teh hijau susu Thai", rating: 4.8, page: 5 },
    { id: 63, name: "Thai Coffee", price: 22000, category: "minuman", description: "Kopi susu khas Thai", rating: 4.7, page: 5 },
    { id: 64, name: "Es Teh Manis", price: 7000, category: "minuman", description: "Es teh manis segar", rating: 4.2, page: 5 },
    { id: 65, name: "Jus Alpukat", price: 15000, category: "minuman", description: "Jus buah segar", rating: 4.5, page: 5 },
    { id: 66, name: "Jus Mangga", price: 15000, category: "minuman", description: "Jus buah segar", rating: 4.5, page: 5 },
    { id: 67, name: "Kelapa Muda Batok", price: 15000, category: "minuman", description: "Kelapa segar asli", rating: 4.6, page: 5 },
    { id: 68, name: "Mocktail Sunset Island", price: 28000, category: "minuman", description: "Minuman segar dingin", rating: 4.7, page: 5 },

    // ========== DESSERT ==========
    { id: 69, name: "Mango Sticky Rice", price: 15000, category: "dessert", description: "Ketan mangga manis", rating: 4.8, page: 5 },
    { id: 70, name: "Singkong Thailand", price: 15000, category: "dessert", description: "Singkong manis vla santan", rating: 4.7, page: 5 },
    { id: 71, name: "Es Teler", price: 15000, category: "dessert", description: "Es teler spesial", rating: 4.6, page: 5 },
    { id: 72, name: "Es Red Rubbies", price: 15000, category: "dessert", description: "Dessert delima Thailand", rating: 4.7, page: 5 }
];


// VARIABEL GLOBAL
let cart = JSON.parse(localStorage.getItem('sariSeafoodCart')) || [];
const openHour = 9; // 09:00
const closeHour = 22; // 22:00
let currentPage = 1;
let totalPages = 20;
let map = null;
let modalMap = null;

// DOM ELEMENTS
const menuSearch = document.getElementById('menuSearch');
const searchResults = document.getElementById('searchResults');
const searchBtn = document.getElementById('searchBtn');
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
const notification = document.getElementById('notification');
const cartCounter = document.getElementById('cartCounter');
const currentPageEl = document.getElementById('currentPage');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const thumbnailsContainer = document.getElementById('thumbnailsContainer');
const openMapBtn = document.getElementById('openMapBtn');
const mapModal = document.getElementById('mapModal');
const closeMapModal = document.getElementById('closeMapModal');
const closeModalBtn = document.getElementById('closeModalBtn');

// INITIALIZE
document.addEventListener('DOMContentLoaded', function() {
    initBookViewer();
    initSearch();
    updateOrderSummary();
    updateStatus();
    setupEventListeners();
    initGoogleMap();
    initModalMap();
    
    // Update status setiap menit
    setInterval(updateStatus, 60000);
    
    // Update order setiap 5 detik (untuk sinkronisasi antar tab)
    setInterval(syncCart, 5000);
});

// INIT BOOK VIEWER
function initBookViewer() {
    // Inisialisasi halaman pertama
    updateBookPage();
    
    // Buat thumbnail
    createThumbnails();
    
    // Event listeners untuk navigasi
    prevPageBtn.addEventListener('click', () => changePage(-1));
    nextPageBtn.addEventListener('click', () => changePage(1));
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') changePage(-1);
        if (e.key === 'ArrowRight') changePage(1);
    });
}

function changePage(direction) {
    const newPage = currentPage + direction;
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        updateBookPage();
    }
}

function updateBookPage() {
    // Update active page
    document.querySelectorAll('.book-page').forEach(page => {
        page.classList.remove('active');
        if (parseInt(page.dataset.page) === currentPage) {
            page.classList.add('active');
        }
    });
    
    // Update thumbnails
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
        if (parseInt(thumb.dataset.page) === currentPage) {
            thumb.classList.add('active');
        }
    });
    
    // Update page indicator
    currentPageEl.textContent = currentPage;
    
    // Update button states
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
}

function createThumbnails() {
    thumbnailsContainer.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const thumbnail = document.createElement('img');
        thumbnail.src = `./assets/images/menu-page-${i}.jpg`;
        thumbnail.alt = `Halaman Menu ${i}`;
        thumbnail.className = 'thumbnail';
        thumbnail.dataset.page = i;
        
        if (i === currentPage) {
            thumbnail.classList.add('active');
        }
        
        thumbnail.addEventListener('click', () => {
            currentPage = i;
            updateBookPage();
        });
        
        thumbnailsContainer.appendChild(thumbnail);
    }
}

// SEARCH SYSTEM
function initSearch() {
    searchBtn.addEventListener('click', performSearch);
    menuSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    
    menuSearch.addEventListener('input', () => {
        if (menuSearch.value.length >= 3) {
            performSearch();
        } else {
            searchResults.style.display = 'none';
            searchResults.innerHTML = '';
        }
    });
}

function performSearch() {
    const query = menuSearch.value.trim().toLowerCase();
    searchResults.innerHTML = '';
    
    if (query.length < 2) {
        searchResults.style.display = 'none';
        return;
    }
    
    const results = menuItems.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
    
    if (results.length > 0) {
        searchResults.style.display = 'block';
        
        results.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <div class="search-result-info">
                    <h4>${item.name}</h4>
                    <p class="search-result-desc">${item.description}</p>
                    <p class="search-result-price">Rp ${item.price.toLocaleString('id-ID')}${item.unit ? '/' + item.unit : ''}</p>
                    <div class="search-result-meta">
                        <span><i class="fas fa-tag"></i> ${item.category}</span>
                        <span><i class="fas fa-star"></i> ${item.rating}/5.0</span>
                        <span><i class="fas fa-file"></i> Halaman ${item.page}</span>
                    </div>
                </div>
                <button class="add-from-search" data-id="${item.id}">
                    <i class="fas fa-plus"></i>
                </button>
            `;
            searchResults.appendChild(resultItem);
        });
        
        // Event listener untuk tombol tambah
        document.querySelectorAll('.add-from-search').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = parseInt(this.dataset.id);
                addToCart(itemId);
                menuSearch.value = '';
                searchResults.style.display = 'none';
            });
        });
    } else {
        searchResults.style.display = 'block';
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h4>Menu tidak ditemukan</h4>
                <p>Coba ketik dengan nama menu yang berbeda</p>
            </div>
        `;
    }
}

// CART SYSTEM
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

function updateOrderSummary() {
    orderList.innerHTML = '';
    
    if (cart.length === 0) {
        emptyOrderText.style.display = 'block';
        orderTotalContainer.style.display = 'none';
        orderWaBtn.classList.add('disabled');
        orderWaBtn.href = "#";
        totalItemsEl.textContent = "0";
        totalPriceEl.textContent = "Rp 0";
        cartCounter.textContent = "0";
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
                <p>Rp ${item.price.toLocaleString('id-ID')}${item.unit ? '/' + item.unit : ''} × ${item.quantity}</p>
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
    cartCounter.textContent = cart.length;
    
    // Update WhatsApp link
    const message = generateWhatsAppMessage();
    orderWaBtn.href = `https://wa.me/6287771050628?text=${encodeURIComponent(message)}`;
}

// STATUS SYSTEM
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

// GOOGLE MAPS
function initGoogleMap() {
    map = L.map('googleMap').setView([-6.5366, 106.6048], 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Add marker untuk Sari Seafood Thailand
    const restaurantIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    });
    
    L.marker([-6.5366, 106.6048], { icon: restaurantIcon })
        .addTo(map)
        .bindPopup('<b>Sari Seafood Thailand</b><br>Jl. Raya Cibeber, Leuwisadeng, Bogor')
        .openPopup();
}

function initModalMap() {
    modalMap = L.map('modalMap').setView([-6.5366, 106.6048], 16);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(modalMap);
    
    const restaurantIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50]
    });
    
    L.marker([-6.5366, 106.6048], { icon: restaurantIcon })
        .addTo(modalMap)
        .bindPopup('<b>Sari Seafood Thailand</b><br>Jl. Raya Cibeber, Leuwisadeng, Bogor<br><a href="https://maps.app.goo.gl/cW7BtKZ2W681kfss8" target="_blank">Buka di Google Maps</a>')
        .openPopup();
}

// UTILITY FUNCTIONS
function showNotification(message, type = 'success') {
    notification.textContent = message;
    notification.className = 'notification';
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function generateWhatsAppMessage() {
    let message = `Halo Sari Seafood Thailand, saya mau pesan:\n\n`;
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ${item.quantity} ${item.unit || 'pcs'} × Rp ${item.price.toLocaleString('id-ID')}${item.unit ? '/' + item.unit : ''}\n`;
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
            e.preventDefault();
            document.querySelector('.order-section').scrollIntoView({ behavior: 'smooth' });
            showNotification('Silakan periksa ringkasan pesanan Anda di bawah');
        }
    });
    
    // Map modal
    openMapBtn.addEventListener('click', () => {
        mapModal.style.display = 'flex';
        setTimeout(() => {
            modalMap.invalidateSize();
        }, 100);
    });
    
    closeMapModal.addEventListener('click', () => {
        mapModal.style.display = 'none';
    });
    
    closeModalBtn.addEventListener('click', () => {
        mapModal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === mapModal) {
            mapModal.style.display = 'none';
        }
    });
}

// Initialize status
updateStatus();