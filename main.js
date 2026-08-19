document.addEventListener("DOMContentLoaded", () => {

    // =========================================================
    // CONFIGURAÇÃO DE CONTATO / WHATSAPP
    // =========================================================

    const WHATSAPP_PHONE = "5586981532377";

    const WHATSAPP_DEFAULT_MESSAGE = encodeURIComponent(
        "Olá! Gostaria de obter mais informações sobre os produtos da Le' Gust."
    );

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


    // =========================================================
    // MENU MOBILE
    // =========================================================

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


    // =========================================================
    // REDIRECIONAMENTO DOS BOTÕES "FAZER ENCOMENDA"
    // =========================================================

    const encomendaBtns = document.querySelectorAll('.encomenda-btn, .btn[href="#encomendas"]');
    encomendaBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector('#encomendas');
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    // =========================================================
    // CARDÁPIO OFICIAL LE' GUST
    // =========================================================

    const produtos = [

        // =====================================================
        // SALGADOS
        // =====================================================

        {
            id: 1,
            nome: "Bolinha de Queijo",
            categoria: "salgados",
            quantidade: "25 unidades",
            preco: "R$ 20,00",
            obs: "Contém lactose."
        },

        {
            id: 2,
            nome: "Mix Le' Gust",
            categoria: "salgados",
            quantidade: "25 unidades",
            preco: "R$ 20,00",
            obs: "Salgados variados, sem possibilidade de escolha dos sabores. Geralmente inclui coxinha de frango, bolinho de carne moída, cigarrete de calabresa, bolinha de queijo e travesseiro de presunto e queijo."
        },

        {
            id: 3,
            nome: "Bolinho de Carne Seca",
            categoria: "salgados",
            quantidade: "25 unidades",
            preco: "R$ 20,00",
            obs: "Contém lactose."
        },

        {
            id: 4,
            nome: "Travesseiro de Presunto e Queijo",
            categoria: "salgados",
            quantidade: "25 unidades",
            preco: "R$ 20,00",
            obs: "Contém lactose."
        },

        {
            id: 5,
            nome: "Enroladinho de Salsicha",
            categoria: "salgados",
            quantidade: "25 unidades",
            preco: "R$ 20,00",
            obs: "Contém lactose."
        },

        {
            id: 6,
            nome: "Pastel de Carne Moída",
            categoria: "salgados",
            quantidade: "25 unidades",
            preco: "R$ 20,00",
            obs: "Sem lactose."
        },

        {
            id: 7,
            nome: "Mini Churros de Doce de Leite",
            categoria: "salgados",
            quantidade: "25 unidades",
            preco: "R$ 20,00",
            obs: "Contém lactose."
        },

        {
            id: 8,
            nome: "Quibe com Queijo e Catupiry",
            categoria: "salgados",
            quantidade: "25 unidades",
            preco: "R$ 20,00",
            obs: "Contém lactose."
        },

        {
            id: 9,
            nome: "Cigarrete de Calabresa", // CORRIGIDO: ortografia
            categoria: "salgados",
            quantidade: "25 unidades",
            preco: "R$ 20,00",
            obs: "Contém lactose."
        },

        {
            id: 10,
            nome: "Bolinho de Carne Moída",
            categoria: "salgados",
            quantidade: "25 unidades",
            preco: "R$ 20,00",
            obs: "Contém lactose."
        },

        {
            id: 11,
            nome: "Coxinha de Frango",
            categoria: "salgados",
            quantidade: "25 unidades",
            preco: "R$ 20,00",
            obs: "Contém lactose."
        },


        // =====================================================
        // CONGELADOS
        // =====================================================

        {
            id: 12,
            nome: "Pão de Queijo Tradicional", // CORRIGIDO
            categoria: "congelados",
            quantidade: "25 unidades",
            preco: "R$ 20,00",
            obs: "Contém lactose. Produto congelado e não assado. O cliente deve assar em casa."
        },

        {
            id: 13,
            nome: "Pão de Queijo Tradicional", // CORRIGIDO
            categoria: "congelados",
            quantidade: "50 unidades",
            preco: "R$ 30,00",
            obs: "Contém lactose. Produto congelado e não assado. O cliente deve assar em casa."
        },

        {
            id: 14,
            nome: "Pão de Queijo Recheado de Calabresa", // CORRIGIDO (NOVO)
            categoria: "congelados",
            quantidade: "25 unidades",
            preco: "R$ 25,00",
            obs: "Contém lactose. Produto congelado e não assado. O cliente deve assar em casa."
        },


        // =====================================================
        // BEBIDAS
        // =====================================================

        {
            id: 15,
            nome: "Coca-Cola Tradicional",
            categoria: "bebidas",
            quantidade: "2 litros",
            preco: "R$ 13,00"
        },

        {
            id: 16,
            nome: "Coca-Cola Zero",
            categoria: "bebidas",
            quantidade: "2 litros",
            preco: "R$ 13,00"
        },

        {
            id: 17,
            nome: "Guaraná Antarctica",
            categoria: "bebidas",
            quantidade: "2 litros",
            preco: "R$ 11,00"
        },

        {
            id: 18,
            nome: "Guaraná Antarctica",
            categoria: "bebidas",
            quantidade: "1 litro",
            preco: "R$ 8,00"
        },

        {
            id: 19,
            nome: "Coca-Cola Tradicional",
            categoria: "bebidas",
            quantidade: "1 litro",
            preco: "R$ 9,00"
        },

        {
            id: 20,
            nome: "Coca-Cola Zero",
            categoria: "bebidas",
            quantidade: "1 litro",
            preco: "R$ 9,00"
        }

    ];


    // =========================================================
    // ELEMENTOS DO CARDÁPIO
    // =========================================================

    const cardapioGrid = document.getElementById("cardapioGrid");

    const filterBtns = document.querySelectorAll(
        "#cardapioFilters .filter-btn"
    );


    // =========================================================
    // RENDERIZAÇÃO DO CARDÁPIO
    // =========================================================

    function renderCardapio(filtro = "todos") {

        if (!cardapioGrid) return;

        const filtrados = filtro === "todos"
            ? produtos
            : produtos.filter(
                produto => produto.categoria === filtro
            );

        cardapioGrid.innerHTML = filtrados.map(item => `

            <div class="product-card">

                <div class="product-info">

                    <h3>${item.nome}</h3>

                    ${
                        item.quantidade
                            ? `
                                <p class="quantity">
                                    ${item.quantidade}
                                </p>
                              `
                            : ""
                    }

                    <p class="price">
                        ${item.preco}
                    </p>

                    ${
                        item.obs
                            ? `
                                <div class="product-observation">

                                    <strong>Informação</strong>

                                    <p>
                                        ${item.obs}
                                    </p>

                                </div>
                              `
                            : ""
                    }

                </div>

                <a
                    href="delivery.html"
                    class="btn btn-primary"
                >
                    PEDIR
                </a>

            </div>

        `).join("");
    }


    // =========================================================
    // FILTROS DO CARDÁPIO
    // =========================================================

    filterBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            filterBtns.forEach(b => {
                b.classList.remove("active");
            });

            btn.classList.add("active");

            renderCardapio(btn.dataset.filter);

        });

    });


    // =========================================================
    // GOOGLE REVIEW
    // =========================================================

    const googleReviewBtn = document.getElementById("googleReviewBtn");
    if (googleReviewBtn) {
        googleReviewBtn.addEventListener("click", function(e) {
            e.preventDefault();
            // URL da avaliação do Google para o negócio
            const url = "https://g.page/r/SEU_ID_DO_NEGOCIO/review";
            window.open(url, "_blank");
        });
    }


    // =========================================================
    // INICIALIZAÇÃO
    // =========================================================

    renderCardapio();

});