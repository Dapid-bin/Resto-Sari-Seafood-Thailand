// DATABASE (Potongan Contoh - Pastikan ID unik dan urut)
const menuItems = [
    { id: 1, name: "Paket Seafood Mix S", price: 65000, page: 1, desc: "Kerang ijo, dara, cumi, udang" },
    { id: 2, name: "Gurame Bakar Cabe Ijo", price: 35000, page: 2, desc: "Gurame segar dengan sambal ijo" },
    { id: 87, name: "Thai Tea", price: 22000, page: 5, desc: "Teh Thailand autentik" }
    // Tambahkan menu lainnya di sini...
];

let cart = JSON.parse(localStorage.getItem('sariSeafoodCart')) || [];
let currentPage = 1;
const totalPages = 20;

// INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
    renderBookPages();
    renderThumbnails();
    updateOrderSummary();
    updateStatus();
    initSearch();
    
    // Navigasi Tombol
    document.getElementById('prevPage').onclick = () => changePage(-1);
    document.getElementById('nextPage').onclick = () => changePage(1);
    document.getElementById('openMapBtn').onclick = () => document.getElementById('mapModal').style.display = 'flex';
    document.getElementById('closeMapModal').onclick = () => document.getElementById('mapModal').style.display = 'none';
    document.getElementById('clearOrder').onclick = clearCart;
});

// BOOK LOGIC
function renderBookPages() {
    const container = document.getElementById('bookContainer');
    for (let i = 1; i <= totalPages; i++) {
        const img = document.createElement('img');
        img.src = `./assets/images/menu-page-${i}.jpg`;
        img.className = `book-page ${i === 1 ? 'active' : ''}`;
        img.dataset.page = i;
        container.appendChild(img);
    }
}

function renderThumbnails() {
    const container = document.getElementById('thumbnailsContainer');
    for (let i = 1; i <= totalPages; i++) {
        const thumb = document.createElement('img');
        thumb.src = `./assets/images/menu-page-${i}.jpg`;
        thumb.className = `thumbnail ${i === 1 ? 'active' : ''}`;
        thumb.onclick = () => { currentPage = i; updateBookView(); };
        container.appendChild(thumb);
    }
}

function changePage(dir) {
    currentPage += dir;
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;
    updateBookView();
}

function updateBookView() {
    document.querySelectorAll('.book-page').forEach(p => p.classList.remove('active'));
    document.querySelector(`.book-page[data-page="${currentPage}"]`).classList.add('active');
    
    document.querySelectorAll('.thumbnail').forEach((t, i) => {
        t.classList.toggle('active', i + 1 === currentPage);
        if(i + 1 === currentPage) t.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    
    document.getElementById('currentPage').textContent = currentPage;
}

// SEARCH LOGIC
function initSearch() {
    const input = document.getElementById('menuSearch');
    const results = document.getElementById('searchResults');
    
    input.oninput = () => {
        const val = input.value.toLowerCase();
        results.innerHTML = '';
        if (val.length < 2) { results.style.display = 'none'; return; }
        
        const filtered = menuItems.filter(m => m.name.toLowerCase().includes(val));
        if (filtered.length > 0) {
            results.style.display = 'block';
            filtered.forEach(m => {
                const div = document.createElement('div');
                div.className = 'search-result-item';
                div.innerHTML = `
                    <div>
                        <h4>${m.name}</h4>
                        <small>Rp ${m.price.toLocaleString()} | Hal ${m.page}</small>
                    </div>
                    <button class="add-from-search" onclick="addToCart(${m.id})"><i class="fas fa-plus"></i></button>
                `;
                results.appendChild(div);
            });
        }
    };
}

// CART LOGIC
function addToCart(id) {
    const item = menuItems.find(m => m.id === id);
    const existing = cart.find(c => c.id === id);
    
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    
    saveAndRefresh();
    notify(`✅ ${item.name} ditambah!`);
}

function updateQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
        saveAndRefresh();
    }
}

function clearCart() {
    if(confirm("Hapus semua pesanan?")) {
        cart = [];
        saveAndRefresh();
    }
}

function saveAndRefresh() {
    localStorage.setItem('sariSeafoodCart', JSON.stringify(cart));
    updateOrderSummary();
}

function updateOrderSummary() {
    const list = document.getElementById('orderList');
    const totalCont = document.getElementById('orderTotalContainer');
    const emptyText = document.getElementById('emptyOrderText');
    const floatCart = document.getElementById('floatingCart');
    
    list.innerHTML = '';
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.qty;
        totalPrice += (item.price * item.qty);
        
        const li = document.createElement('li');
        li.className = 'order-item';
        li.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <small>Rp ${item.price.toLocaleString()}</small>
            </div>
            <div class="quantity-controls">
                <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
            </div>
        `;
        list.appendChild(li);
    });

    emptyText.style.display = cart.length ? 'none' : 'block';
    totalCont.style.display = cart.length ? 'block' : 'none';
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalPrice').textContent = `Rp ${totalPrice.toLocaleString()}`;
    document.getElementById('floatCartCount').textContent = totalItems;
    
    // Tampilkan tombol melayang jika ada isi
    floatCart.classList.toggle('show', totalItems > 0);

    // Update WA Link
    updateWaLink(totalPrice);
}

function updateWaLink(total) {
    let msg = "Halo Sari Seafood Thailand, saya mau pesan:\n\n";
    cart.forEach((c, i) => {
        msg += `${i+1}. ${c.name} (${c.qty}x)\n`;
    });
    msg += `\nTotal: Rp ${total.toLocaleString()}\n\nNama: \nAlamat: `;
    document.getElementById('orderWaBtn').href = `https://wa.me/6287771050628?text=${encodeURIComponent(msg)}`;
}

// UI UTILS
function notify(msg) {
    const n = document.getElementById('notification');
    n.textContent = msg;
    n.classList.add('show');
    setTimeout(() => n.classList.remove('show'), 3000);
}

function updateStatus() {
    const hour = new Date().getHours();
    const isOpen = hour >= 9 && hour < 22;
    const dot = document.querySelector('.status-dot');
    const text = document.querySelector('.status-text');
    
    dot.className = `status-dot ${isOpen ? 'open' : ''}`;
    text.textContent = isOpen ? 'BUKA SEKARANG' : 'TUTUP';
}
