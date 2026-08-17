// ===== CONFIGURAÇÕES CENTRALIZADAS =====
const CONFIG = {
    whatsapp: '5586981532377',
    googleReviewUrl: 'https://g.page/r/SEU_LINK_AQUI/review',
    endereco: 'R. São Benedito, 475 - Planalto, Parnaíba - PI, 64207-570',
    instagram: 'https://www.instagram.com/legustsalgaderia/',
    horario: {
        segunda_sabado: '08:00–12:00 | 14:00–19:00',
        domingo: 'Fechado'
    }
};

// ===== DADOS DO CARDÁPIO =====
const menuItems = [
    { id: 1, name: 'Bolinha de queijo', desc: '25 unidades', lactose: 'Contém Lactose', price: '17,00', category: 'salgados', emoji: '🧀' },
    { id: 2, name: 'Mix Le\'gust', desc: '25 unidades variadas', lactose: 'Contém Lactose', price: '17,00', category: 'salgados', emoji: '🎯' },
    { id: 3, name: 'Bolinho de carne seca', desc: '25 unidades', lactose: 'Contém Lactose', price: '17,00', category: 'salgados', emoji: '🥩' },
    { id: 4, name: 'Travesseiro de presunto e queijo', desc: '25 unidades', lactose: 'Contém Lactose', price: '17,00', category: 'salgados', emoji: '🧈' },
    { id: 5, name: 'Enroladinho de salsicha', desc: '25 unidades', lactose: 'Contém Lactose', price: '17,00', category: 'salgados', emoji: '🌭' },
    { id: 6, name: 'Pastel de carne moída', desc: '25 unidades', lactose: 'Sem lactose', price: '17,00', category: 'salgados', emoji: '🥟' },
    { id: 7, name: 'Mini churros de doce de leite', desc: '25 unidades', lactose: 'Contém Lactose', price: '17,00', category: 'salgados', emoji: '🥨' },
    { id: 8, name: 'Quibe com queijo e catupiry', desc: '25 unidades', lactose: 'Contém Lactose', price: '17,00', category: 'salgados', emoji: '🧆' },
    { id: 9, name: 'Cigarrete de calabresa', desc: '25 unidades', lactose: 'Contém Lactose', price: '17,00', category: 'salgados', emoji: '🌶️' },
    { id: 10, name: 'Bolinho de carne moída', desc: '25 unidades', lactose: 'Contém Lactose', price: '17,00', category: 'salgados', emoji: '🍖' },
    { id: 11, name: 'Coxinha de frango', desc: '25 unidades', lactose: 'Contém Lactose', price: '17,00', category: 'salgados', emoji: '🍗' },
    { id: 12, name: 'Pão de queijo congelado', desc: '50 unidades', lactose: 'Contém Lactose', price: '30,00', category: 'congelados', emoji: '🧊' },
    { id: 13, name: 'Coca-Cola tradicional', desc: '2 Litros', lactose: '', price: '13,00', category: 'bebidas', emoji: '🥤' },
    { id: 14, name: 'Coca-Cola Zero', desc: '2 Litros', lactose: '', price: '13,00', category: 'bebidas', emoji: '🥤' },
    { id: 15, name: 'Guaraná Antarctica', desc: '2 litros', lactose: '', price: '11,00', category: 'bebidas', emoji: '🥤' },
    { id: 16, name: 'Guaraná Antarctica', desc: '1 litro', lactose: '', price: '8,00', category: 'bebidas', emoji: '🥤' },
    { id: 17, name: 'Coca-Cola tradicional', desc: '1 litro', lactose: '', price: '9,00', category: 'bebidas', emoji: '🥤' },
    { id: 18, name: 'Coca-Cola Zero', desc: '1 litro', lactose: '', price: '9,00', category: 'bebidas', emoji: '🥤' }
];

// ===== FUNÇÕES WHATSAPP =====
function openWhatsApp(message = '') {
    const text = message || 'Olá! Vim pelo site da Le Gust Salgaderia.';
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

// ===== TOAST =====
function mostrarToast(message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = message;
    document.body.appendChild(toast);

    toast.offsetHeight;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// ===== RENDERIZAR CARDÁPIO =====
function renderCardapio(filter = 'todos') {
    const grid = document.getElementById('cardapioGrid');
    if (!grid) return;

    const filtered = filter === 'todos'
        ? menuItems
        : menuItems.filter(item => item.category === filter);

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:40px 0; color:var(--muted);">
                <span style="font-size:3rem; display:block; margin-bottom:16px;">🍽️</span>
                <p>Nenhum produto encontrado nesta categoria.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(item => `
        <div class="menu-card">
            <div class="menu-card-body">
                <h3>${item.emoji || '🍽️'} ${item.name}</h3>
                <p class="desc">${item.desc}</p>
                ${item.lactose ? `<p class="lactose ${item.lactose === 'Sem lactose' ? 'sem' : ''}">${item.lactose}</p>` : ''}
                <div class="menu-card-footer">
                    <span class="menu-card-price">R$ ${item.price}</span>
                    <a href="delivery.html" class="menu-card-btn">PEDIR</a>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Le Gust Salgaderia carregada!');

    // ===== NAVBAR MOBILE =====
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('navMenu');
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('open');
            toggle.classList.toggle('open');
        });
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('open');
                toggle.classList.remove('open');
            });
        });
    }

    // ===== WHATSAPP LINKS =====
    const whatsappBtns = [
        'heroAtendimento', 
        'ajudaAtendimento', 
        'ctaAtendimento',
        'contatoWhatsapp', 
        'contatoWhatsapp2',
        'footerWhatsapp',
        'whatsappFloat'
    ];
    whatsappBtns.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openWhatsApp();
            });
        }
    });

    // ===== ENCOMENDAS =====
    document.querySelectorAll('#encomendaBtn, #encomendaBtn2, #encomendaBtn3').forEach(btn => {
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openWhatsApp('Olá! Vim pelo site da Le Gust Salgaderia e gostaria de fazer uma encomenda.');
            });
        }
    });

    // ===== AVALIAÇÃO GOOGLE =====
    const googleBtn = document.getElementById('googleReviewBtn');
    if (googleBtn) {
        googleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(CONFIG.googleReviewUrl, '_blank');
        });
    }

    // ===== WHATSAPP FLOAT (mobile) =====
    const whatsappFloat = document.getElementById('whatsappFloat');
    if (whatsappFloat && window.innerWidth <= 768) {
        whatsappFloat.style.display = 'flex';
        whatsappFloat.addEventListener('click', (e) => {
            e.preventDefault();
            openWhatsApp();
        });
    }

    // ===== RENDERIZAR CARDÁPIO =====
    renderCardapio('todos');

    // ===== FILTROS CARDÁPIO =====
    const filters = document.querySelectorAll('#cardapioFilters .filter-btn');
    filters.forEach(btn => {
        btn.addEventListener('click', function() {
            filters.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderCardapio(this.getAttribute('data-filter'));
        });
    });

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== HERO ANIMATION =====
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }
});