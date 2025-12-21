// DATABASE MENU LENGKAP SARI SEAFOOD THAILAND (94 ITEM)
const menuItems = [
    // ========== HIDANGAN LAUT (SEAFOOD) ==========
    { id: 1, name: "Paket Seafood Mix S (1-2 Orang)", price: 65000, category: "seafood", description: "Isi: Kerang ijo, Kerang dara, Cumi, Udang", rating: 4.7, page: 1 },
    { id: 2, name: "Paket Seafood Mix M (2-3 Orang)", price: 100000, category: "seafood", description: "Isi: Kepiting, Kerang ijo, Kerang dara, Cumi, Udang", rating: 4.8, page: 1 },
    { id: 3, name: "Paket Seafood Mix L (3-4 Orang)", price: 200000, category: "seafood", description: "Isi: Kepiting, Kerang ijo, Kerang dara, Cumi, Udang", rating: 4.9, page: 1 },
    { id: 4, name: "Udang Saos Padang", price: 40000, category: "seafood", description: "Udang segar dengan saus padang khas", rating: 4.5, page: 1 },
    { id: 5, name: "Udang Telor Asin", price: 40000, category: "seafood", description: "Udang dengan telur asin gurih", rating: 4.6, page: 1 },
    { id: 6, name: "Udang Lada Garam", price: 40000, category: "seafood", description: "Udang dengan lada garam khas", rating: 4.4, page: 1 },
    { id: 7, name: "Udang Saos Tiram", price: 40000, category: "seafood", description: "Udang dengan saus tiram", rating: 4.3, page: 1 },
    { id: 8, name: "Udang Balado", price: 40000, category: "seafood", description: "Udang dengan sambal balado", rating: 4.7, page: 1 },
    { id: 9, name: "Udang Goreng Tepung", price: 38000, category: "seafood", description: "Udang crispy goreng tepung", rating: 4.4, page: 1 },
    { id: 10, name: "Cumi Goreng Tepung", price: 35000, category: "seafood", description: "Cumi goreng tepung crispy", rating: 4.3, page: 1 },
    { id: 11, name: "Cumi Lada Garam", price: 35000, category: "seafood", description: "Cumi dengan lada garam", rating: 4.5, page: 1 },
    { id: 12, name: "Cumi Telor Asin", price: 35000, category: "seafood", description: "Cumi dengan telur asin", rating: 4.4, page: 1 },
    { id: 13, name: "Cumi Saos Padang", price: 35000, category: "seafood", description: "Cumi dengan saus padang", rating: 4.6, page: 1 },
    { id: 14, name: "Kerang Kepa Saos Padang", price: 25000, category: "seafood", description: "Kerang kepa saus padang", rating: 4.2, page: 1 },
    { id: 15, name: "Kerang Kepa Saos Tiram", price: 25000, category: "seafood", description: "Kerang kepa saus tiram", rating: 4.2, page: 1 },
    { id: 16, name: "Kerang Batik Saos Padang", price: 25000, category: "seafood", description: "Kerang batik saus padang", rating: 4.3, page: 1 },
    { id: 17, name: "Kerang Batik Saos Tiram", price: 25000, category: "seafood", description: "Kerang batik saus tiram", rating: 4.3, page: 1 },
    { id: 18, name: "Kerang Ijo Saos Padang", price: 25000, category: "seafood", description: "Kerang hijau saus padang", rating: 4.4, page: 1 },
    { id: 19, name: "Kerang Ijo Saos Tiram", price: 25000, category: "seafood", description: "Kerang hijau saus tiram", rating: 4.4, page: 1 },
    
    // ========== IKAN (GORENG, BAKAR & STEAM) ==========
    { id: 20, name: "Gurame Bakar Cabe Ijo", price: 35000, category: "ikan", description: "Gurame bakar dengan sambal cabe ijo", rating: 4.7, page: 2 },
    { id: 21, name: "Gurame Bakar Terasi", price: 35000, category: "ikan", description: "Gurame bakar dengan terasi", rating: 4.6, page: 2 },
    { id: 22, name: "Gurame Bakar Kecap", price: 35000, category: "ikan", description: "Gurame bakar dengan kecap manis", rating: 4.5, page: 2 },
    { id: 23, name: "Gurame Bakar Sambel Bawang", price: 35000, category: "ikan", description: "Gurame bakar sambal bawang", rating: 4.4, page: 2 },
    { id: 24, name: "Gurame Bakar Rica-rica", price: 35000, category: "ikan", description: "Gurame bakar rica-rica khas Manado", rating: 4.6, page: 2 },
    { id: 25, name: "Gurame Goreng Kering", price: 35000, category: "ikan", description: "Gurame goreng kering crispy", rating: 4.3, page: 2 },
    { id: 26, name: "Gurame Saos Bangkok", price: 35000, category: "ikan", description: "Gurame dengan saus Bangkok", rating: 4.5, page: 2 },
    { id: 27, name: "Gurame Telor Asin", price: 35000, category: "ikan", description: "Gurame dengan telur asin", rating: 4.6, page: 2 },
    { id: 28, name: "Gurame Saos Mangga", price: 35000, category: "ikan", description: "Gurame dengan saus mangga", rating: 4.4, page: 2 },
    { id: 29, name: "Gurame Sambel Matah Thailand", price: 35000, category: "ikan", description: "Gurame dengan sambal matah Thailand", rating: 4.7, page: 2 },
    { id: 30, name: "Gurame Garam Thailand", price: 40000, category: "ikan", description: "Gurame dengan garam khas Thailand", rating: 4.8, page: 2 },
    { id: 31, name: "Kakap Bakar Cabe Ijo", price: 14000, unit: "ons", category: "ikan", description: "Kakap bakar per ons", rating: 4.5, page: 2 },
    { id: 32, name: "Kakap Bakar Terasi", price: 14000, unit: "ons", category: "ikan", description: "Kakap bakar dengan terasi", rating: 4.4, page: 2 },
    { id: 33, name: "Kakap Bakar Kecap", price: 14000, unit: "ons", category: "ikan", description: "Kakap bakar dengan kecap", rating: 4.3, page: 2 },
    { id: 34, name: "Kakap Bakar Sambel Bawang", price: 14000, unit: "ons", category: "ikan", description: "Kakap bakar sambal bawang", rating: 4.4, page: 2 },
    { id: 35, name: "Kakap Bakar Rica-rica", price: 14000, unit: "ons", category: "ikan", description: "Kakap bakar rica-rica", rating: 4.5, page: 2 },
    { id: 36, name: "Kakap Goreng Kering", price: 14000, unit: "ons", category: "ikan", description: "Kakap goreng kering per ons", rating: 4.3, page: 2 },
    { id: 37, name: "Kakap Saos Bangkok", price: 14000, unit: "ons", category: "ikan", description: "Kakap saus Bangkok per ons", rating: 4.5, page: 2 },
    { id: 38, name: "Kakap Telor Asin", price: 14000, unit: "ons", category: "ikan", description: "Kakap telur asin per ons", rating: 4.6, page: 2 },
    { id: 39, name: "Kakap Saos Mangga", price: 14000, unit: "ons", category: "ikan", description: "Kakap saus mangga per ons", rating: 4.4, page: 2 },
    { id: 40, name: "Kakap Steam Lemon", price: 14000, unit: "ons", category: "ikan", description: "Kakap steam lemon per ons", rating: 4.5, page: 2 },
    { id: 41, name: "Kakap Steam Tomyum", price: 14000, unit: "ons", category: "ikan", description: "Kakap steam tomyum per ons", rating: 4.7, page: 2 },
    { id: 42, name: "Kakap Steam Soya", price: 14000, unit: "ons", category: "ikan", description: "Kakap steam soya per ons", rating: 4.4, page: 2 },
    { id: 43, name: "Ikan Kakap Baramundi Garam Thailand", price: 15000, unit: "ons", category: "ikan", description: "Kakap baramundi garam Thailand", rating: 4.8, page: 2 },
    { id: 44, name: "Bawal Bakar", price: 85000, category: "ikan", description: "Bawal bakar semua varian", rating: 4.6, page: 2 },
    { id: 45, name: "Nila Bakar", price: 25000, category: "ikan", description: "Nila bakar semua varian", rating: 4.3, page: 2 },
    { id: 46, name: "Nila Goreng Kering", price: 35000, category: "ikan", description: "Nila goreng kering", rating: 4.2, page: 2 },
    { id: 47, name: "Salem Bakar", price: 8000, unit: "ons", category: "ikan", description: "Salem bakar per ons", rating: 4.4, page: 2 },
    
    // ========== TOM YUM, BASIL & SALAD ==========
    { id: 48, name: "Mama Tomyum Seafood", price: 45000, category: "tomyum", description: "Tomyum seafood spesial", rating: 4.8, page: 3 },
    { id: 49, name: "Tom Yum Seafood", price: 40000, category: "tomyum", description: "Tom yum seafood", rating: 4.6, page: 3 },
    { id: 50, name: "Tom Yum Ikan", price: 40000, category: "tomyum", description: "Tom yum ikan", rating: 4.5, page: 3 },
    { id: 51, name: "Tom Yum Bakso Ayam", price: 40000, category: "tomyum", description: "Tom yum bakso ayam", rating: 4.4, page: 3 },
    { id: 52, name: "Tom Yum Ayam", price: 35000, category: "tomyum", description: "Tom yum ayam", rating: 4.3, page: 3 },
    { id: 53, name: "Tom Yum Udang", price: 30000, category: "tomyum", description: "Tom yum udang", rating: 4.5, page: 3 },
    { id: 54, name: "Tom Yum Seafood Spesial", price: 40000, category: "tomyum", description: "Tom yum seafood spesial", rating: 4.7, page: 3 },
    { id: 55, name: "Basil Ayam", price: 20000, category: "basil", description: "Ayam basil Thailand", rating: 4.4, page: 3 },
    { id: 56, name: "Basil Crispy Ayam", price: 20000, category: "basil", description: "Ayam crispy basil", rating: 4.5, page: 3 },
    { id: 57, name: "Basil Kerang Batik", price: 20000, category: "basil", description: "Kerang batik basil", rating: 4.3, page: 3 },
    { id: 58, name: "Kwetiau Crispy Basil Ayam", price: 25000, category: "basil", description: "Kwetiau crispy basil ayam", rating: 4.6, page: 3 },
    { id: 59, name: "Crispy Kacang Telor Asin", price: 15000, category: "basil", description: "Kacang crispy telur asin", rating: 4.2, page: 3 },
    { id: 60, name: "Pepaya Salad", price: 15000, category: "salad", description: "Salad pepaya Thailand", rating: 4.3, page: 3 },
    { id: 61, name: "Mangga Salad", price: 15000, category: "salad", description: "Salad mangga Thailand", rating: 4.4, page: 3 },
    { id: 62, name: "Pepaya Salad Telor Asin", price: 18000, category: "salad", description: "Salad pepaya telur asin", rating: 4.5, page: 3 },
    { id: 63, name: "Crispy Pepaya Seafood", price: 25000, category: "salad", description: "Pepaya crispy seafood", rating: 4.4, page: 3 },
    { id: 64, name: "Yum Soun Seafood", price: 25000, category: "salad", description: "Yum soun seafood", rating: 4.3, page: 3 },
    
    // ========== SAYURAN & NASI ==========
    { id: 65, name: "Capcay Udang", price: 20000, unit: "ekor", category: "sayuran", description: "Capcay dengan udang per ekor", rating: 4.4, page: 4 },
    { id: 66, name: "Kailan Ayam", price: 18000, category: "sayuran", description: "Kailan dengan ayam", rating: 4.2, page: 4 },
    { id: 67, name: "Brokoli Ayam", price: 18000, category: "sayuran", description: "Brokoli dengan ayam", rating: 4.3, page: 4 },
    { id: 68, name: "Capcay Ayam", price: 18000, category: "sayuran", description: "Capcay dengan ayam", rating: 4.2, page: 4 },
    { id: 69, name: "Kailan Bawang Putih", price: 15000, category: "sayuran", description: "Kailan bawang putih", rating: 4.1, page: 4 },
    { id: 70, name: "Brokoli Bawang Putih", price: 15000, category: "sayuran", description: "Brokoli bawang putih", rating: 4.1, page: 4 },
    { id: 71, name: "Kangkung Terasi", price: 15000, category: "sayuran", description: "Kangkung terasi", rating: 4.3, page: 4 },
    { id: 72, name: "Kangkung Ayam", price: 15000, category: "sayuran", description: "Kangkung ayam", rating: 4.2, page: 4 },
    { id: 73, name: "Genjer Terasi", price: 15000, category: "sayuran", description: "Genjer terasi", rating: 4.2, page: 4 },
    { id: 74, name: "Genjer Bawang Putih", price: 15000, category: "sayuran", description: "Genjer bawang putih", rating: 4.1, page: 4 },
    { id: 75, name: "Capcay Polos", price: 15000, unit: "ekor", category: "sayuran", description: "Capcay polos per ekor", rating: 4.0, page: 4 },
    { id: 76, name: "Toge Bawang Putih", price: 12000, category: "sayuran", description: "Toge bawang putih", rating: 4.0, page: 4 },
    { id: 77, name: "Kangkung Bawang Putih", price: 10000, category: "sayuran", description: "Kangkung bawang putih", rating: 4.1, page: 4 },
    { id: 78, name: "Nasi Goreng Seafood", price: 25000, category: "nasi", description: "Nasi goreng seafood", rating: 4.5, page: 4 },
    { id: 79, name: "Nasi Goreng Nanas", price: 20000, category: "nasi", description: "Nasi goreng nanas", rating: 4.4, page: 4 },
    { id: 80, name: "Nasi Goreng Ayam Original", price: 15000, category: "nasi", description: "Nasi goreng ayam original", rating: 4.3, page: 4 },
    { id: 81, name: "Nasi Goreng Ayam Daun Jeruk", price: 18000, category: "nasi", description: "Nasi goreng ayam daun jeruk", rating: 4.4, page: 4 },
    { id: 82, name: "Nasi Goreng Ayam Terasi", price: 18000, category: "nasi", description: "Nasi goreng ayam terasi", rating: 4.3, page: 4 },
    { id: 83, name: "Pad Thai", price: 25000, category: "nasi", description: "Pad Thai khas Thailand", rating: 4.7, page: 4 },
    { id: 84, name: "Mie Goreng Seafood", price: 25000, category: "nasi", description: "Mie goreng seafood", rating: 4.5, page: 4 },
    { id: 85, name: "Mie Goreng Telor", price: 15000, category: "nasi", description: "Mie goreng telur", rating: 4.2, page: 4 },
    
    // ========== MINUMAN & PENUTUP ==========
    { id: 86, name: "Coffee", price: 10000, category: "minuman", description: "Kopi Thai", rating: 4.3, page: 5 },
    { id: 87, name: "Thai Tea", price: 22000, category: "minuman", description: "Teh Thai spesial", rating: 4.8, page: 5 },
    { id: 88, name: "Aneka Jus", price: 15000, category: "minuman", description: "Jus buah segar", rating: 4.4, page: 5 },
    { id: 89, name: "Kelapa Muda", price: 15000, category: "minuman", description: "Kelapa muda segar", rating: 4.5, page: 5 },
    { id: 90, name: "Mango Sticky Rice", price: 15000, category: "dessert", description: "Mangga dengan ketan", rating: 4.7, page: 5 },
    { id: 91, name: "Singkong Thailand", price: 15000, category: "dessert", description: "Singkong khas Thailand", rating: 4.5, page: 5 },
    { id: 92, name: "Es Teler", price: 15000, category: "dessert", description: "Es teler special", rating: 4.6, page: 5 },
    { id: 93, name: "Mocktail", price: 22000, category: "minuman", description: "Mocktail special", rating: 4.5, page: 5 },
    { id: 94, name: "Mocktail Spesial", price: 28000, category: "minuman", description: "Mocktail spesial", rating: 4.7, page: 5 }
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