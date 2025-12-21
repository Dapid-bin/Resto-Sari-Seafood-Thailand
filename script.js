:root {
    --primary: #dc2626;
    --accent: #f59e0b;
    --dark: #0f172a;
    --light: #f8fafc;
    --success: #25d366;
    --radius: 12px;
    --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { font-family: 'Inter', sans-serif; background-color: #0b1120; color: var(--light); line-height: 1.6; }
.container { max-width: 1000px; margin: 0 auto; padding: 0 20px; }

/* Header & Status */
.header { padding: 15px 0; background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(10px); position: sticky; top: 0; z-index: 100; border-bottom: 1px solid rgba(255,255,255,0.1); }
.header .container { display: flex; justify-content: space-between; align-items: center; }
.logo { width: 50px; height: 50px; border-radius: 50%; border: 2px solid var(--accent); }
.logo-container { display: flex; align-items: center; gap: 12px; }
.logo-text h1 { font-size: 1.2rem; }
.status-badge { font-size: 0.8rem; display: flex; align-items: center; gap: 6px; background: #1e293b; padding: 5px 12px; border-radius: 20px; }
.status-dot { width: 8px; height: 8px; border-radius: 50%; background: #64748b; }
.status-dot.open { background: var(--success); box-shadow: 0 0 8px var(--success); }

/* Hero */
.hero { padding: 40px 0; text-align: center; background: linear-gradient(to bottom, #0f172a, #0b1120); }
.hero h2 { font-size: 2.2rem; background: linear-gradient(to right, #f59e0b, #dc2626); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 10px; }
.info-grid { display: flex; gap: 15px; justify-content: center; margin: 25px 0; flex-wrap: wrap; }
.info-card { background: #1e293b; padding: 15px; border-radius: var(--radius); min-width: 200px; text-align: left; border-left: 4px solid var(--accent); }
.hero-cta-btn { display: inline-block; padding: 12px 25px; background: var(--primary); color: white; text-decoration: none; border-radius: 30px; font-weight: bold; transition: 0.3s; }
.hero-cta-btn:hover { transform: translateY(-3px); background: #b91c1c; }

/* Book Viewer */
.book-viewer { margin-top: 20px; }
.book-page-container { position: relative; width: 100%; height: 450px; background: #1e293b; border-radius: var(--radius); overflow: hidden; }
.book-page { position: absolute; width: 100%; height: 100%; object-fit: contain; opacity: 0; transition: 0.4s ease; background: white; }
.book-page.active { opacity: 1; }
.page-thumbnails { display: flex; gap: 10px; overflow-x: auto; padding: 15px 0; scrollbar-width: none; }
.thumbnail { width: 60px; height: 80px; object-fit: cover; border-radius: 4px; opacity: 0.5; cursor: pointer; transition: 0.3s; flex-shrink: 0; }
.thumbnail.active { opacity: 1; border: 2px solid var(--accent); transform: scale(1.1); }

/* Search */
.search-section { margin-top: 30px; position: relative; }
.search-box { position: relative; }
.search-box i { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: #64748b; }
#menuSearch { width: 100%; padding: 15px 15px 15px 45px; border-radius: 30px; border: 1px solid #334155; background: #1e293b; color: white; font-size: 1rem; }
.search-results { background: #1e293b; border-radius: var(--radius); margin-top: 10px; max-height: 300px; overflow-y: auto; display: none; border: 1px solid #334155; }
.search-result-item { padding: 15px; border-bottom: 1px solid #334155; display: flex; justify-content: space-between; align-items: center; }
.search-result-item h4 { font-size: 0.95rem; }
.add-from-search { background: var(--success); border: none; color: white; width: 35px; height: 35px; border-radius: 50%; cursor: pointer; }

/* Order Summary */
.order-summary { background: #1e293b; padding: 25px; border-radius: var(--radius); margin-top: 40px; }
.order-list { list-style: none; margin: 20px 0; }
.order-item { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px dotted #334155; }
.quantity-controls { display: flex; align-items: center; gap: 10px; }
.qty-btn { background: #334155; border: none; color: white; width: 25px; height: 25px; border-radius: 4px; cursor: pointer; }
.order-total { padding-top: 20px; border-top: 2px solid #334155; }
.total-row { display: flex; justify-content: space-between; margin-bottom: 10px; color: #94a3b8; }
.total-row.main { font-size: 1.5rem; font-weight: bold; color: var(--accent); }
.wa-btn-order { display: block; background: var(--success); color: white; text-align: center; padding: 15px; border-radius: var(--radius); text-decoration: none; font-weight: bold; margin-top: 15px; }

/* Floating Cart */
.floating-cart { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%) translateY(100px); background: var(--accent); color: var(--dark); padding: 12px 25px; border-radius: 50px; font-weight: bold; display: flex; align-items: center; gap: 10px; text-decoration: none; transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 99; box-shadow: 0 10px 20px rgba(0,0,0,0.5); }
.floating-cart.show { transform: translateX(-50%) translateY(0); }

/* Modal & Notification */
.modal { display: none; position: fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:1001; justify-content:center; align-items:center; }
.modal-content { background:#1e293b; width:90%; max-width:600px; border-radius:var(--radius); position:relative; overflow:hidden; }
.notification { position: fixed; top: 20px; right: 20px; background: var(--accent); color: var(--dark); padding: 12px 20px; border-radius: 8px; font-weight: bold; transform: translateX(200%); transition: 0.4s; z-index: 9999; }
.notification.show { transform: translateX(0); }

@media (max-width: 600px) {
    .book-page-container { height: 280px; }
    .hero h2 { font-size: 1.6rem; }
}
