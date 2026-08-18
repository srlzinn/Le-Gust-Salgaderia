document.addEventListener("DOMContentLoaded", () => {
    // ===== CONFIGURAÇÃO DE CONTATO =====
    const WHATSAPP_PHONE = "5586981532377";
    const WHATSAPP_DEFAULT_MESSAGE = encodeURIComponent("Olá! Gostaria de obter mais informações sobre os salgados.");

    // Configura todos os links de atendimento
    const whatsappButtons = [
        "heroAtendimento",
        "ajudaAtendimento",
        "contatoWhatsapp",
        "contatoWhatsapp2",
        "footerWhatsapp",
        "ctaAtendimento",
        "whatsappFloat"
    ];

    whatsappButtons.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
            element.href = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_DEFAULT_MESSAGE}`;
            element.target = "_blank";
            element.rel = "noopener noreferrer";
        }
    });

    // ===== MENU MOBILE =====
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        navMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }

    // ===== CARDÁPIO =====
    const produtos = [
        { id: 1, nome: "Coxinha de Frango", categoria: "salgados", preco: "R$ 5,00" },
        { id: 2, nome: "Enroladinho de Salsicha", categoria: "salgados", preco: "R$ 4,50" },
        { id: 3, nome: "Pastel de Carne", categoria: "salgados", preco: "R$ 5,00" },
        { id: 4, nome: "Cento de Mini Coxinha (Congelado)", categoria: "congelados", preco: "R$ 45,00" },
        { id: 5, nome: "Cento de Mini Risole (Congelado)", categoria: "congelados", preco: "R$ 45,00" },
        { id: 6, nome: "Refrigerante Lada 350ml", categoria: "bebidas", preco: "R$ 6,00" },
        { id: 7, nome: "Suco Natural 500ml", categoria: "bebidas", preco: "R$ 7,00" }
    ];

    const cardapioGrid = document.getElementById("cardapioGrid");
    const filterBtns = document.querySelectorAll("#cardapioFilters .filter-btn");

    function renderCardapio(filtro = "todos") {
        if (!cardapioGrid) return;
        
        const filtrados = filtro === "todos" 
            ? produtos 
            : produtos.filter(p => p.categoria === filtro);

        cardapioGrid.innerHTML = filtrados.map(item => `
            <div class="product-card">
                <div>
                    <h3>${item.nome}</h3>
                    <p class="price">${item.preco}</p>
                </div>
                <a href="delivery.html" class="btn btn-primary" style="margin-top: 16px;">PEDIR</a>
            </div>
        `).join("");
    }

    // Filtros do cardápio
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderCardapio(btn.dataset.filter);
        });
    });

    // Inicializa
    renderCardapio();
});