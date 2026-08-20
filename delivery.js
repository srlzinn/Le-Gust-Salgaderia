// ============================================================
// LE' GUST SALGADERIA - DELIVERY.JS
// ============================================================

// ============================================================
// CONFIGURAÇÃO
// ============================================================

const CONFIG_ENV = window.CONFIG || {
    whatsapp: "558681532377",
    endereco: "R. São Benedito, 475 - Planalto, Parnaíba - PI"
};


// ============================================================
// CARDÁPIO COM IMAGENS
// ============================================================

const produtos = [

    // ========================================================
    // SALGADOS
    // ========================================================

    {
        id: 1,
        nome: "Bolinha de queijo",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "20,00",
        categoria: "salgados",
        emoji: "🧀",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/202210262020_MD5K_i"
    },

    {
        id: 2,
        nome: "Mix Le' Gust",
        descricao: "25 unidades com sabores aleatórios. Não é possível escolher os sabores.",
        lactose: "",
        preco: "20,00",
        categoria: "salgados",
        emoji: "🥟",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/202403141725_M3ey_",
        observacao: "Geralmente inclui coxinha de frango, bolinho de carne moída, cigarrete de calabresa, bolinha de queijo e travesseiro de presunto e queijo. Pode variar conforme a disponibilidade do estoque. Não inclui pastel, quibe e mini churros, pois são salgados que precisam ser fritos separadamente."
    },

    {
        id: 3,
        nome: "Bolinho de carne seca",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "20,00",
        categoria: "salgados",
        emoji: "🥩",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/202210262022_NS85_i"
    },

    {
        id: 4,
        nome: "Travesseiro de presunto e queijo",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "20,00",
        categoria: "salgados",
        emoji: "🧀",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719881713553blob"
    },

    {
        id: 5,
        nome: "Enroladinho de salsicha",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "20,00",
        categoria: "salgados",
        emoji: "🌭",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719881761237blob.webp"
    },

    {
        id: 6,
        nome: "Pastel de carne moída",
        descricao: "25 unidades",
        lactose: "Sem lactose",
        preco: "20,00",
        categoria: "salgados",
        emoji: "🥟",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719881803675blob"
    },

    {
        id: 7,
        nome: "Mini churros de doce de leite",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "20,00",
        categoria: "salgados",
        emoji: "🍩",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719881838990blob"
    },

    {
        id: 8,
        nome: "Quibe com queijo e catupiry",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "20,00",
        categoria: "salgados",
        emoji: "🧆",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719881886913blob"
    },

    {
        id: 9,
        nome: "Cigarrete de calabresa",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "20,00",
        categoria: "salgados",
        emoji: "",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719881919131blob"
    },

    {
        id: 10,
        nome: "Bolinho de carne moída",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "20,00",
        categoria: "salgados",
        emoji: "🥩",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719881960383blob"
    },

    {
        id: 11,
        nome: "Coxinha de frango",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "20,00",
        categoria: "salgados",
        emoji: "🍗",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719881994976blob"
    },

    // ========================================================
    // CONGELADOS (mantidos os já existentes)
    // ========================================================

    {
        id: 12,
        nome: "Pão de Queijo Tradicional",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "20,00",
        categoria: "congelados",
        emoji: "🧀",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719926000761blob",
        observacao: "Produto congelado. NÃO é assado. O cliente deve assar em casa. A Le' Gust não envia o pão de queijo assado."
    },
    {
        id: 13,
        nome: "Pão de Queijo Tradicional",
        descricao: "50 unidades",
        lactose: "Contém lactose",
        preco: "35,00",
        categoria: "congelados",
        emoji: "🧀",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719926000761blob",
        observacao: "Produto congelado. NÃO é assado. O cliente deve assar em casa. A Le' Gust não envia o pão de queijo assado."
    },

    {
        id: 14,
        nome: "Pão de Queijo Recheado de Calabresa",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "20,00",
        categoria: "congelados",
        emoji: "🧀",
        imagem: "./pao-queijo-calabresa.jpeg",
        observacao: "Produto congelado. NÃO é assado. O cliente deve assar em casa. A Le' Gust não envia o pão de queijo assado."
    },

    // ========================================================
    // NOVOS PRODUTOS CONGELADOS (R$ 16,00 cada - 25 unidades)
    // ========================================================

    {
        id: 21,
        nome: "Coxinha de frango (Congelado)",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "16,00",
        categoria: "congelados",
        emoji: "🍗",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719881994976blob",
        observacao: "❄️ Produto congelado. Deve ser frito ou assado em casa."
    },
    {
        id: 22,
        nome: "Quibe com catupiry (Congelado)",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "16,00",
        categoria: "congelados",
        emoji: "🧆",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719881886913blob",
        observacao: "❄️ Produto congelado. Deve ser frito ou assado em casa."
    },
    {
        id: 23,
        nome: "Travesseiro de presunto e queijo (Congelado)",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "16,00",
        categoria: "congelados",
        emoji: "🧀",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719881713553blob",
        observacao: "❄️ Produto congelado. Deve ser frito ou assado em casa."
    },
    {
        id: 24,
        nome: "Enroladinho de salsicha (Congelado)",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "16,00",
        categoria: "congelados",
        emoji: "🌭",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719881761237blob.webp",
        observacao: "❄️ Produto congelado. Deve ser frito ou assado em casa."
    },
    {
        id: 25,
        nome: "Bolinho de carne moída (Congelado)",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "16,00",
        categoria: "congelados",
        emoji: "🥩",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719881960383blob",
        observacao: "❄️ Produto congelado. Deve ser frito ou assado em casa."
    },
    {
        id: 26,
        nome: "Cigarrete de calabresa (Congelado)",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "16,00",
        categoria: "congelados",
        emoji: "🌶️",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719881919131blob",
        observacao: "❄️ Produto congelado. Deve ser frito ou assado em casa."
    },
    {
        id: 27,
        nome: "Bolinha de queijo (Congelado)",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "16,00",
        categoria: "congelados",
        emoji: "🧀",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/202210262020_MD5K_i",
        observacao: "❄️ Produto congelado. Deve ser frito ou assado em casa."
    },
    {
        id: 28,
        nome: "Mini churros de doce de leite (Congelado)",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "16,00",
        categoria: "congelados",
        emoji: "🍩",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719881838990blob",
        observacao: "❄️ Produto congelado. Deve ser frito ou assado em casa."
    },
    {
        id: 29,
        nome: "Bolinha de carne seca (Congelado)",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "16,00",
        categoria: "congelados",
        emoji: "🥩",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/202210262022_NS85_i",
        observacao: "❄️ Produto congelado. Deve ser frito ou assado em casa."
    },

    // ========================================================
    // BEBIDAS
    // ========================================================

    {
        id: 15,
        nome: "Coca-Cola tradicional",
        descricao: "2 litros",
        lactose: "",
        preco: "13,00",
        categoria: "bebidas",
        emoji: "🥤",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1757985789602blob"
    },

    {
        id: 16,
        nome: "Coca-Cola Zero",
        descricao: "2 litros",
        lactose: "",
        preco: "13,00",
        categoria: "bebidas",
        emoji: "🥤",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1757985938602blob"
    },

    {
        id: 17,
        nome: "Guaraná Antarctica",
        descricao: "2 litros",
        lactose: "",
        preco: "11,00",
        categoria: "bebidas",
        emoji: "🥤",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1757986011082blob"
    },

    {
        id: 18,
        nome: "Guaraná Antarctica",
        descricao: "1 litro",
        lactose: "",
        preco: "8,00",
        categoria: "bebidas",
        emoji: "🥤",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1757986046166blob"
    },

    {
        id: 19,
        nome: "Coca-Cola tradicional",
        descricao: "1 litro",
        lactose: "",
        preco: "9,00",
        categoria: "bebidas",
        emoji: "🥤",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1757986115705blob"
    },

    {
        id: 20,
        nome: "Coca-Cola Zero",
        descricao: "1 litro",
        lactose: "",
        preco: "9,00",
        categoria: "bebidas",
        emoji: "🥤",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1757986244596blob"
    }
];


// ============================================================
// BAIRROS COM TAXA FIXA
// ============================================================

const BAIRROS_TAXA_FIXA = [
    "planalto",
    "raul bacelar",
    "conselheiro alberto silva",
    "casas carmem",
    "reis veloso",
    "frei higino",
    "piauí",
    "piaui",
    "betânia",
    "betania",
    "floriopolis",
    "floriópolis",
    "joão xxiii",
    "joao xxiii",
    "pedro",
    "colina do alvorada",
    "catanduvas",
    "são benedito",
    "sao benedito",
    "pindorama",
    "rodoviária",
    "rodoviaria",
    "ceará",
    "ceara",
    "são francisco da guarita",
    "sao francisco da guarita",
    "sabiazal",
    "dom rufino",
    "joaz souza",
    "primavera",
    "broder ville",
    "dunas",
    "dirceu arcoverde",
    "santa luzia",
    "alto santa maria",
    "bebedouro",
    "são vicente de paula",
    "sao vicente de paula",
    "são josé",
    "sao jose",
    "centro",
    "nossa senhora de fátima",
    "nossa senhora de fatima",
    "nossa senhora do carmo",
    "campos",
    "nova parnaíba",
    "nova parnaiba",
    "beira rio"
];


// ============================================================
// ESTADO
// ============================================================

let carrinho = [];
let categoriaAtiva = "todos";
let pedidoAtual = {
    tipo: null,
    endereco: {},
    pagamento: null,
    agendamento: null
};


// ============================================================
// FUNÇÃO PARA CALCULAR TAXA DE ENTREGA
// ============================================================

function calcularTaxaEntrega(tipo, endereco) {
    // Para retirada, taxa é sempre 0
    if (tipo === "retirada") {
        return { taxa: 0, texto: "R$ 0,00", calculado: true };
    }
    
    // Para entrega, verifica o bairro
    if (tipo === "entrega") {
        if (!endereco || !endereco.bairro) {
            return { taxa: 0, texto: "A calcular", calculado: false };
        }
        
        const bairroFormatado = endereco.bairro.toLowerCase().trim();
        const possuiTaxaFixa = BAIRROS_TAXA_FIXA.includes(bairroFormatado);
        
        if (possuiTaxaFixa) {
            return { taxa: 10, texto: "R$ 10,00", calculado: true };
        } else {
            return { taxa: 0, texto: "A calcular", calculado: false };
        }
    }
    
    return { taxa: 0, texto: "R$ 0,00", calculado: true };
}


// ============================================================
// FUNÇÃO PARA MOSTRAR/ESCONDER CAMPOS CONDICIONAIS DO AGENDAMENTO
// ============================================================

function toggleCamposAgendamento() {
    const tipoEntregaRadio = document.querySelector('input[name="tipoAgendamento"]:checked');
    const tipoAgendamento = tipoEntregaRadio ? tipoEntregaRadio.value : null;
    
    const camposEntrega = document.getElementById("camposEntrega");
    const camposRetirada = document.getElementById("camposRetirada");
    const enderecoError = document.getElementById("enderecoError");
    
    // Oculta todos
    if (camposEntrega) camposEntrega.style.display = "none";
    if (camposRetirada) camposRetirada.style.display = "none";
    if (enderecoError) enderecoError.style.display = "none";
    
    // Mostra o campo correspondente
    if (tipoAgendamento === "entrega") {
        if (camposEntrega) camposEntrega.style.display = "block";
        // Torna os campos obrigatórios
        const enderecoInput = document.getElementById("encomendaEndereco");
        const numeroInput = document.getElementById("encomendaNumero");
        const bairroInput = document.getElementById("encomendaBairro");
        if (enderecoInput) enderecoInput.required = true;
        if (numeroInput) numeroInput.required = true;
        if (bairroInput) bairroInput.required = true;
    } else if (tipoAgendamento === "retirada") {
        if (camposRetirada) camposRetirada.style.display = "block";
        // Remove a obrigatoriedade dos campos de endereço
        const enderecoInput = document.getElementById("encomendaEndereco");
        const numeroInput = document.getElementById("encomendaNumero");
        const bairroInput = document.getElementById("encomendaBairro");
        if (enderecoInput) enderecoInput.required = false;
        if (numeroInput) numeroInput.required = false;
        if (bairroInput) bairroInput.required = false;
    }
}


// ============================================================
// INICIALIZAÇÃO
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Inicializando delivery...");
    renderizarProdutos();
    initFiltroCategorias();
    initNavbar();
    initCarrinho();
    initModal();
    initAjuda();
    initAgendamentoRadios();
    atualizarCarrinhoUI();
    console.log("✅ Delivery inicializado!");
});


// ============================================================
// INICIALIZAÇÃO DOS RADIO BUTTONS DO AGENDAMENTO
// ============================================================

function initAgendamentoRadios() {
    document.querySelectorAll('input[name="tipoAgendamento"]').forEach(radio => {
        radio.addEventListener("change", function() {
            toggleCamposAgendamento();
        });
    });
}


// ============================================================
// PRODUTOS - RENDERIZAÇÃO COM IMAGENS
// ============================================================

function renderizarProdutos(categoria = "todos") {

    const lista = document.getElementById("produtosLista");
    if (!lista) {
        console.error("❌ #produtosLista não encontrado!");
        return;
    }

    const produtosFiltrados = categoria === "todos"
        ? produtos
        : produtos.filter(produto => produto.categoria === categoria);

    if (produtosFiltrados.length === 0) {
        lista.innerHTML = `
            <p style="grid-column:1/-1; text-align:center; padding:30px;">
                Nenhum produto encontrado nesta categoria.
            </p>
        `;
        return;
    }

    lista.innerHTML = produtosFiltrados.map(produto => `

        <div class="produto-item" data-id="${produto.id}">

            <!-- ===== IMAGEM DO PRODUTO ===== -->
            <div class="produto-imagem">
                <img 
                    src="${produto.imagem || ''}" 
                    alt="${produto.nome}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                />
            </div>

            <!-- ===== INFORMAÇÕES DO PRODUTO ===== -->
            <div class="produto-info">

                <span class="nome">
                    ${produto.emoji || '🍽️'} ${produto.nome}
                </span>

                ${produto.descricao ? `
                    <span class="descricao">
                        ${produto.descricao}
                    </span>
                ` : ""}

                ${produto.lactose ? `
                    <span class="lactose ${produto.lactose.toLowerCase().includes("sem") ? "sem" : ""}">
                        ${produto.lactose}
                    </span>
                ` : ""}

                ${produto.observacao ? `
                    <div class="produto-observacao">
                        ${produto.observacao}
                    </div>
                ` : ""}

                <span class="preco">
                    R$ ${produto.preco}
                </span>

            </div>

            <!-- ===== CONTROLES ===== -->
            <div class="produto-actions">

                <div class="qtd-control">

                    <button type="button" class="qtd-btn" data-id="${produto.id}" data-delta="-1">
                        −
                    </button>

                    <span class="qtd-value" id="qtd-${produto.id}">
                        0
                    </span>

                    <button type="button" class="qtd-btn" data-id="${produto.id}" data-delta="1">
                        +
                    </button>

                </div>

                <button type="button" class="add-btn" data-id="${produto.id}">
                    Adicionar
                </button>

            </div>

        </div>

    `).join("");

    // ========================================================
    // BOTÕES DE QUANTIDADE
    // ========================================================

    lista.querySelectorAll(".qtd-btn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            const delta = parseInt(this.dataset.delta);
            const span = document.getElementById(`qtd-${id}`);
            if (!span) return;
            let qtd = parseInt(span.textContent) || 0;
            qtd = Math.max(0, qtd + delta);
            span.textContent = qtd;
        });
    });

    // ========================================================
    // ADICIONAR AO CARRINHO
    // ========================================================

    lista.querySelectorAll(".add-btn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            const span = document.getElementById(`qtd-${id}`);
            if (!span) return;
            const qtd = parseInt(span.textContent) || 0;
            if (qtd === 0) {
                mostrarToast("Selecione pelo menos 1 unidade.");
                return;
            }
            const produto = produtos.find(p => p.id === id);
            if (!produto) return;
            adicionarAoCarrinho(produto, qtd);
            span.textContent = "0";
            mostrarToast(`${produto.nome} adicionado!`);
        });
    });

}


// ============================================================
// CATEGORIAS
// ============================================================

function initFiltroCategorias() {
    document.querySelectorAll(".categoria-tab").forEach(tab => {
        tab.addEventListener("click", function () {
            document.querySelectorAll(".categoria-tab").forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            categoriaAtiva = this.dataset.categoria;
            renderizarProdutos(categoriaAtiva);
        });
    });
}


// ============================================================
// CARRINHO
// ============================================================

function adicionarAoCarrinho(produto, qtd) {
    const existente = carrinho.find(item => item.id === produto.id);
    if (existente) {
        existente.qtd += qtd;
    } else {
        carrinho.push({ ...produto, qtd });
    }
    atualizarCarrinhoUI();
}

function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    atualizarCarrinhoUI();
}

function atualizarQtdCarrinho(id, delta) {
    const item = carrinho.find(i => i.id === id);
    if (!item) return;
    item.qtd += delta;
    if (item.qtd <= 0) {
        removerDoCarrinho(id);
    } else {
        atualizarCarrinhoUI();
    }
}

function getTotalCarrinho() {
    return carrinho.reduce((total, item) => {
        const preco = parseFloat(String(item.preco).replace(",", "."));
        return total + preco * item.qtd;
    }, 0);
}

function limparCarrinho() {
    carrinho = [];
    atualizarCarrinhoUI();
}


// ============================================================
// INTERFACE DO CARRINHO
// ============================================================

function atualizarCarrinhoUI() {
    const body = document.getElementById("cartBody");
    const footer = document.getElementById("cartFooter");
    const total = document.getElementById("cartTotal");
    const badge = document.getElementById("cartBadge");

    if (!body) return;

    const totalItems = carrinho.reduce((sum, item) => sum + item.qtd, 0);

    if (badge) {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? "block" : "none";
    }

    if (carrinho.length === 0) {
        body.innerHTML = `
            <div class="cart-empty">
                <span style="font-size:3rem;">🛒</span>
                <p>Seu pedido está vazio</p>
                <span>Adicione seus salgados favoritos!</span>
            </div>
        `;
        if (footer) footer.style.display = "none";
        return;
    }

    if (footer) footer.style.display = "block";

    body.innerHTML = carrinho.map(item => `
        <div class="cart-item">
            <div class="cart-item-imagem">
                <img 
                    src="${item.imagem || ''}" 
                    alt="${item.nome}"
                    onerror="this.style.display='none'"
                />
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.nome}</div>
                <div class="cart-item-detail">${item.qtd}x R$ ${item.preco}</div>
            </div>
            <div class="cart-item-actions">
                <button type="button" class="cart-item-qty-btn" onclick="atualizarQtdCarrinho(${item.id}, -1)">−</button>
                <span class="cart-item-qty">${item.qtd}</span>
                <button type="button" class="cart-item-qty-btn" onclick="atualizarQtdCarrinho(${item.id}, 1)">+</button>
                <button type="button" class="cart-item-remove" onclick="removerDoCarrinho(${item.id})">✕</button>
            </div>
        </div>
    `).join("");

    if (total) {
        total.textContent = `R$ ${getTotalCarrinho().toFixed(2).replace(".", ",")}`;
    }
}


// ============================================================
// CARRINHO - ABRIR / FECHAR
// ============================================================

function abrirCarrinho() {
    const cart = document.getElementById("cartSidebar");
    if (cart) cart.classList.add("open");
}

function fecharCarrinho() {
    const cart = document.getElementById("cartSidebar");
    if (cart) cart.classList.remove("open");
}

function toggleCarrinho() {
    const cart = document.getElementById("cartSidebar");
    if (cart) cart.classList.toggle("open");
}


// ============================================================
// INICIALIZAÇÃO DO CARRINHO
// ============================================================

function initCarrinho() {
    const float = document.getElementById("cartFloat");
    const close = document.getElementById("cartClose");
    const checkout = document.getElementById("cartCheckout");

    if (float) float.addEventListener("click", toggleCarrinho);
    if (close) close.addEventListener("click", fecharCarrinho);
    if (checkout) checkout.addEventListener("click", abrirModal);

    document.addEventListener("click", function (e) {
        const sidebar = document.getElementById("cartSidebar");
        const floatBtn = document.getElementById("cartFloat");
        if (sidebar && floatBtn && sidebar.classList.contains("open") &&
            !sidebar.contains(e.target) && !floatBtn.contains(e.target)) {
            fecharCarrinho();
        }
    });
}


// ============================================================
// MODAL
// ============================================================

function abrirModal() {
    if (carrinho.length === 0) {
        mostrarToast("Adicione itens ao carrinho primeiro!");
        return;
    }
    const modal = document.getElementById("modalOverlay");
    if (!modal) return;
    modal.classList.add("active");
    ocultarTodosStepsModal();
    const step1 = document.getElementById("modalStep1");
    if (step1) step1.style.display = "block";
    fecharCarrinho();
}

function fecharModal() {
    const modal = document.getElementById("modalOverlay");
    if (modal) modal.classList.remove("active");
}

function ocultarTodosStepsModal() {
    const ids = ["modalStep1", "modalStep3", "modalStep4", "modalStepNome", "modalStepEncomenda", "modalStepResumo"];
    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.style.display = "none";
    });
}


// ============================================================
// INICIALIZAÇÃO DO MODAL
// ============================================================

function initModal() {
    console.log("🔄 Inicializando modal...");
    
    const modalOverlay = document.getElementById("modalOverlay");
    const modalClose = document.getElementById("modalClose");

    if (modalClose) modalClose.addEventListener("click", fecharModal);
    if (modalOverlay) {
        modalOverlay.addEventListener("click", function (e) {
            if (e.target === this) fecharModal();
        });
    }

    // ========================================================
    // ENTREGA / RETIRADA / ENCOMENDA (AGENDAMENTO)
    // ========================================================

    document.querySelectorAll(".delivery-option").forEach(btn => {
        btn.addEventListener("click", function () {
            const tipo = this.dataset.tipo;
            console.log("📦 Tipo selecionado:", tipo);
            pedidoAtual.tipo = tipo;
            ocultarTodosStepsModal();

            if (tipo === "retirada") {
                const stepNome = document.getElementById("modalStepNome");
                if (stepNome) stepNome.style.display = "block";
            } else if (tipo === "entrega") {
                const step3 = document.getElementById("modalStep3");
                if (step3) step3.style.display = "block";
            } else if (tipo === "encomenda") {
                const stepEncomenda = document.getElementById("modalStepEncomenda");
                if (stepEncomenda) {
                    console.log("📅 Mostrando formulário de agendamento");
                    stepEncomenda.style.display = "block";
                    // Garante que os campos condicionais estejam no estado inicial
                    toggleCamposAgendamento();
                } else {
                    console.error("❌ modalStepEncomenda não encontrado!");
                }
            }
        });
    });

    // ========================================================
    // CONFIRMAR NOME (Retirada e Entrega)
    // ========================================================

    const btnNome = document.getElementById("modalNomeConfirmar");
    if (btnNome) {
        btnNome.addEventListener("click", function() {
            const nome = document.getElementById("clienteNome")?.value.trim();
            if (!nome) {
                alert("Por favor, informe seu nome.");
                return;
            }
            ocultarTodosStepsModal();
            const step4 = document.getElementById("modalStep4");
            if (step4) step4.style.display = "block";
            if (pedidoAtual.pagamento) criarBotaoFinalizar();
        });
    }

    // ========================================================
    // CONFIRMAR ENDEREÇO (Entrega)
    // ========================================================

    const btnEndereco = document.getElementById("modalEnderecoConfirmar");
    if (btnEndereco) {
        btnEndereco.addEventListener("click", confirmarEndereco);
    }

    // ========================================================
    // CONFIRMAR ENCOMENDA (Agendamento)
    // ========================================================

    const btnEncomenda = document.getElementById("btnConfirmarEncomenda");
    if (btnEncomenda) {
        console.log("✅ Botão btnConfirmarEncomenda encontrado!");
        btnEncomenda.addEventListener("click", function() {
            console.log("🔄 Clicou em CONFIRMAR AGENDAMENTO");
            confirmarEncomenda();
        });
    } else {
        console.error("❌ btnConfirmarEncomenda não encontrado!");
    }

    // ========================================================
    // PAGAMENTO
    // ========================================================

    document.querySelectorAll(".pagamento-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".pagamento-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            pedidoAtual.pagamento = this.dataset.pagamento;
            const info = document.getElementById("modalPagamentoSelecionado");
            if (info) {
                info.style.display = "block";
                info.textContent = `Forma de pagamento selecionada: ${pedidoAtual.pagamento}`;
            }
            criarBotaoFinalizar();
        });
    });

    // ========================================================
    // BOTÃO ENVIAR PEDIDO
    // ========================================================

    const btnEnviar = document.getElementById("modalEnviarPedido");
    if (btnEnviar) {
        btnEnviar.addEventListener("click", function (e) {
            e.preventDefault();
            mostrarResumoPedido();
        });
    }
}


// ============================================================
// BOTÃO FINALIZAR PEDIDO
// ============================================================

function criarBotaoFinalizar() {
    const step4 = document.getElementById("modalStep4");
    if (!step4) return;

    let container = document.getElementById("containerFinalizarPedido");
    if (!container) {
        container = document.createElement("div");
        container.id = "containerFinalizarPedido";
        container.style.marginTop = "20px";
        step4.appendChild(container);
    }

    container.innerHTML = `
        <button type="button" id="btnFinalizarPedido" class="btn btn-primary btn-full" style="width:100%; margin-top:15px; padding:14px; font-size:16px; cursor:pointer;">
            FINALIZAR PEDIDO
        </button>
    `;

    const btn = document.getElementById("btnFinalizarPedido");
    if (btn) {
        btn.addEventListener("click", function () {
            if (!pedidoAtual.pagamento) {
                alert("Selecione uma forma de pagamento.");
                return;
            }
            const subtotal = getTotalCarrinho();
            if (subtotal < 16.00) {
                alert("Pedido mínimo de R$ 16,00.");
                return;
            }
            mostrarResumoPedido();
        });
    }
}


// ============================================================
// CONFIRMAR ENDEREÇO (Entrega)
// ============================================================

function confirmarEndereco() {
    const rua = document.getElementById("modalEnderecoRua")?.value.trim();
    const numero = document.getElementById("modalEnderecoNumero")?.value.trim();
    const bairro = document.getElementById("modalEnderecoBairro")?.value.trim();

    if (!rua || !numero || !bairro) {
        alert("Por favor, preencha Rua, Número e Bairro.");
        return;
    }

    // Salva o endereço
    pedidoAtual.endereco = {
        rua,
        numero,
        complemento: document.getElementById("modalEnderecoComplemento")?.value.trim() || "",
        bairro,
        cidade: "Parnaíba - PI",
        referencia: document.getElementById("modalEnderecoReferencia")?.value.trim() || ""
    };

    // Calcula a taxa de entrega
    const resultadoTaxa = calcularTaxaEntrega("entrega", pedidoAtual.endereco);
    pedidoAtual.endereco.taxa = resultadoTaxa.taxa;
    pedidoAtual.endereco.textoTaxa = resultadoTaxa.texto;
    pedidoAtual.endereco.taxaCalculada = resultadoTaxa.calculado;

    ocultarTodosStepsModal();
    const stepNome = document.getElementById("modalStepNome");
    if (stepNome) stepNome.style.display = "block";
}


// ============================================================
// CONFIRMAR ENCOMENDA (Agendamento) - COM ENTREGA OU RETIRADA
// ============================================================

function confirmarEncomenda() {
    console.log("📝 Validando formulário de agendamento...");
    
    // Coleta os dados básicos
    const nome = document.getElementById("encomendaNome")?.value.trim();
    const data = document.getElementById("encomendaData")?.value;
    const horarioManha = document.getElementById("encomendaHorario")?.value;
    const horarioTarde = document.getElementById("encomendaHorarioTarde")?.value;
    const horario = horarioManha || horarioTarde;
    
    // Captura o tipo de agendamento (radio button)
    const tipoEntregaRadio = document.querySelector('input[name="tipoAgendamento"]:checked');
    const tipoAgendamento = tipoEntregaRadio ? tipoEntregaRadio.value : null;
    
    console.log("📋 Dados coletados:", { nome, data, horario, tipoAgendamento });

    // ========================================================
    // VALIDAÇÕES
    // ========================================================

    // 1. Valida nome
    if (!nome) {
        alert("Por favor, informe seu nome.");
        document.getElementById("encomendaNome")?.focus();
        return;
    }

    // 2. Valida data
    if (!data) {
        alert("Por favor, selecione a data do agendamento.");
        document.getElementById("encomendaData")?.focus();
        return;
    }

    // 3. Valida horário
    if (!horario) {
        alert("Por favor, selecione o horário do agendamento.");
        return;
    }

    // 4. Valida tipo de agendamento (entrega ou retirada)
    if (!tipoAgendamento) {
        document.getElementById("tipoAgendamentoError").style.display = "block";
        alert("Por favor, selecione se deseja Entrega ou Retirada.");
        return;
    } else {
        document.getElementById("tipoAgendamentoError").style.display = "none";
    }

    // ========================================================
    // VALIDAÇÃO PARA ENTREGA
    // ========================================================

    let endereco = "";
    let numero = "";
    let bairro = "";
    let referencia = "";

    if (tipoAgendamento === "entrega") {
        endereco = document.getElementById("encomendaEndereco")?.value.trim();
        numero = document.getElementById("encomendaNumero")?.value.trim();
        bairro = document.getElementById("encomendaBairro")?.value.trim();
        referencia = document.getElementById("encomendaReferencia")?.value.trim();

        if (!endereco) {
            document.getElementById("enderecoError").style.display = "block";
            alert("Por favor, informe a rua.");
            document.getElementById("encomendaEndereco")?.focus();
            return;
        }
        if (!numero) {
            document.getElementById("enderecoError").style.display = "block";
            alert("Por favor, informe o número da casa.");
            document.getElementById("encomendaNumero")?.focus();
            return;
        }
        if (!bairro) {
            document.getElementById("enderecoError").style.display = "block";
            alert("Por favor, informe o bairro.");
            document.getElementById("encomendaBairro")?.focus();
            return;
        }
        document.getElementById("enderecoError").style.display = "none";
    }

    // ========================================================
    // VALIDAÇÃO PEDIDO MÍNIMO
    // ========================================================

    const subtotal = getTotalCarrinho();
    if (subtotal < 16.00) {
        alert("Pedido mínimo de R$ 16,00.");
        return;
    }

    console.log("✅ Todos os campos validados!");

    // ========================================================
    // FORMATAÇÃO DOS DADOS
    // ========================================================

    // Formata a data para exibição
    const dataFormatada = new Date(data + 'T' + horario).toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    // Calcula a taxa se for entrega
    let taxa = 0;
    let textoTaxa = "R$ 0,00";
    let taxaCalculada = true;
    let enderecoObj = {};

    if (tipoAgendamento === "entrega") {
        enderecoObj = {
            bairro: bairro,
            rua: endereco,
            numero: numero,
            referencia: referencia || "",
            cidade: "Parnaíba - PI"
        };
        const resultado = calcularTaxaEntrega("entrega", enderecoObj);
        taxa = resultado.taxa;
        textoTaxa = resultado.texto;
        taxaCalculada = resultado.calculado;
        console.log("💰 Taxa calculada:", { taxa, textoTaxa, taxaCalculada });
    }

    // ========================================================
    // SALVA OS DADOS DO AGENDAMENTO
    // ========================================================

    pedidoAtual.agendamento = {
        nome,
        data,
        horario,
        endereco: endereco || "",
        numero: numero || "",
        bairro: bairro || "",
        referencia: referencia || "",
        cidade: "Parnaíba - PI",
        dataFormatada: dataFormatada,
        tipoAgendamento: tipoAgendamento, // 'entrega' ou 'retirada'
        taxa: taxa,
        textoTaxa: textoTaxa,
        taxaCalculada: taxaCalculada
    };

    console.log("📅 Agendamento salvo:", pedidoAtual.agendamento);

    // ========================================================
    // AVANÇA PARA O STEP DE PAGAMENTO
    // ========================================================

    ocultarTodosStepsModal();
    const step4 = document.getElementById("modalStep4");
    if (step4) {
        step4.style.display = "block";
        console.log("➡️ Avançando para step de pagamento");
    }
    if (pedidoAtual.pagamento) criarBotaoFinalizar();
}


// ============================================================
// RESUMO DO PEDIDO - COM TAXA DE ENTREGA
// ============================================================

function mostrarResumoPedido() {
    console.log("📋 Gerando resumo do pedido...");
    
    // NOME
    let nomeCliente = "";

    const campoNome = document.getElementById("clienteNome");
    if (campoNome && campoNome.value.trim()) {
        nomeCliente = campoNome.value.trim();
    } else if (pedidoAtual.agendamento && pedidoAtual.agendamento.nome) {
        nomeCliente = pedidoAtual.agendamento.nome;
    }

    if (!nomeCliente) {
        alert("Por favor, informe seu nome antes de continuar.");
        if (campoNome) campoNome.focus();
        return;
    }

    if (carrinho.length === 0) {
        mostrarToast("Seu pedido está vazio.");
        return;
    }

    if (!pedidoAtual.pagamento) {
        alert("Selecione uma forma de pagamento.");
        return;
    }

    const subtotal = getTotalCarrinho();
    let taxa = 0;
    let textoTaxa = "R$ 0,00";
    let tipoEntrega = "";
    let taxaCalculada = true;

    // Calcula a taxa baseada no tipo de entrega
    if (pedidoAtual.tipo === "entrega") {
        tipoEntrega = "🛵 Entrega em casa";
        if (pedidoAtual.endereco && pedidoAtual.endereco.taxa !== undefined) {
            taxa = pedidoAtual.endereco.taxa || 0;
            textoTaxa = pedidoAtual.endereco.textoTaxa || "R$ 0,00";
            taxaCalculada = pedidoAtual.endereco.taxaCalculada !== false;
        } else {
            const resultado = calcularTaxaEntrega("entrega", pedidoAtual.endereco);
            taxa = resultado.taxa;
            textoTaxa = resultado.texto;
            taxaCalculada = resultado.calculado;
        }
    } else if (pedidoAtual.tipo === "retirada") {
        tipoEntrega = "🏪 Retirada na loja";
        taxa = 0;
        textoTaxa = "R$ 0,00";
        taxaCalculada = true;
    } else if (pedidoAtual.tipo === "encomenda") {
        // AGENDAMENTO - verifica se é entrega ou retirada
        if (pedidoAtual.agendamento && pedidoAtual.agendamento.tipoAgendamento === "entrega") {
            tipoEntrega = "📅 Agendamento com Entrega";
            taxa = pedidoAtual.agendamento.taxa || 0;
            textoTaxa = pedidoAtual.agendamento.textoTaxa || "R$ 0,00";
            taxaCalculada = pedidoAtual.agendamento.taxaCalculada !== false;
        } else {
            tipoEntrega = "📅 Agendamento com Retirada";
            taxa = 0;
            textoTaxa = "R$ 0,00";
            taxaCalculada = true;
        }
    }

    const total = subtotal + taxa;

    let step = document.getElementById("modalStepResumo");
    if (!step) {
        step = document.createElement("div");
        step.id = "modalStepResumo";
        step.className = "modal-step";
        const modalContent = document.querySelector(".modal-content");
        if (!modalContent) {
            alert("Erro ao abrir o resumo do pedido.");
            return;
        }
        modalContent.appendChild(step);
    }

    step.innerHTML = `
        <h3>📋 Finalizar Pedido</h3>
        <p style="color:var(--text-light); margin-bottom:18px;">Confira os dados do seu pedido antes de enviar.</p>

        <!-- NOME -->
        <div style="margin-bottom:15px; padding:12px; border-radius:8px; background:#f8f8f8;">
            <strong>👤 Cliente</strong>
            <p style="margin:5px 0 0;">${nomeCliente}</p>
        </div>

        <!-- TIPO DE ENTREGA -->
        <div style="margin-bottom:15px; padding:12px; border-radius:8px; background:#f8f8f8;">
            <strong>📦 Tipo</strong>
            <p style="margin:5px 0 0;">${tipoEntrega}</p>
        </div>

        <!-- ITENS -->
        <div class="resumo-section">
            <strong>🛒 Itens do pedido</strong>
            ${carrinho.map(item => {
                const preco = parseFloat(String(item.preco).replace(",", "."));
                const subtotalItem = preco * item.qtd;
                return `
                    <div style="display:flex; justify-content:space-between; gap:10px; padding:10px 0; border-bottom:1px solid #eee;">
                        <div>
                            <strong>${item.qtd}x ${item.nome}</strong>
                            <small style="display:block; color:#777;">R$ ${item.preco} cada</small>
                        </div>
                        <strong>R$ ${subtotalItem.toFixed(2).replace(".", ",")}</strong>
                    </div>
                `;
            }).join("")}
        </div>

        <!-- VALORES COM TAXA -->
        <div style="margin-top:15px; padding:15px; background:#f8f8f8; border-radius:10px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span>Subtotal</span>
                <strong>R$ ${subtotal.toFixed(2).replace(".", ",")}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px; ${!taxaCalculada ? 'color:#856404;' : ''}">
                <span>Taxa de entrega</span>
                <strong>${textoTaxa}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:1.2rem; padding-top:10px; border-top:1px solid #ddd;">
                <strong>TOTAL</strong>
                <strong>R$ ${total.toFixed(2).replace(".", ",")}</strong>
            </div>
        </div>

        ${!taxaCalculada ? `
            <div style="margin-top:12px; padding:12px; background:#fff3cd; border-radius:8px; color:#856404;">
                ⚠️ A taxa de entrega será confirmada pelo atendimento.
            </div>
        ` : ""}

        <!-- PAGAMENTO -->
        <div style="margin-top:15px; padding:12px; border-radius:8px; background:#f8f8f8;">
            <strong>💳 Forma de pagamento</strong>
            <p style="margin:5px 0 0;">${pedidoAtual.pagamento}</p>
        </div>

        ${pedidoAtual.tipo === "retirada" ? `
            <div style="margin-top:15px; padding:12px; background:#f8f8f8; border-radius:8px;">
                <strong>📦 Retirada na loja</strong>
                <p>${CONFIG_ENV.endereco}</p>
            </div>
        ` : ""}

        ${pedidoAtual.tipo === "entrega" ? `
            <div style="margin-top:15px; padding:12px; background:#f8f8f8; border-radius:8px;">
                <strong>🛵 Endereço de entrega</strong>
                <p>${pedidoAtual.endereco.rua}, Nº ${pedidoAtual.endereco.numero}${pedidoAtual.endereco.complemento ? ` - ${pedidoAtual.endereco.complemento}` : ""}</p>
                <p>${pedidoAtual.endereco.bairro} - ${pedidoAtual.endereco.cidade}</p>
                ${pedidoAtual.endereco.referencia ? `<p><strong>Referência:</strong> ${pedidoAtual.endereco.referencia}</p>` : ""}
            </div>
        ` : ""}

        ${pedidoAtual.tipo === "encomenda" ? `
            <div style="margin-top:15px; padding:12px; background:#f8f8f8; border-radius:8px;">
                <strong>📅 Agendamento</strong>
                <p><strong>Data/Horário:</strong> ${pedidoAtual.agendamento?.dataFormatada || "Não informado"}</p>
                <p><strong>Tipo:</strong> ${pedidoAtual.agendamento?.tipoAgendamento === "entrega" ? "Entrega" : "Retirada"}</p>
                ${pedidoAtual.agendamento?.tipoAgendamento === "entrega" ? `
                    <p><strong>Endereço:</strong> ${pedidoAtual.agendamento?.endereco || ""}, Nº ${pedidoAtual.agendamento?.numero || ""}</p>
                    <p><strong>Bairro:</strong> ${pedidoAtual.agendamento?.bairro || ""}</p>
                    ${pedidoAtual.agendamento?.referencia ? `<p><strong>Referência:</strong> ${pedidoAtual.agendamento.referencia}</p>` : ""}
                ` : `
                    <p><strong>Endereço da loja:</strong> ${CONFIG_ENV.endereco}</p>
                `}
            </div>
        ` : ""}

        <div style="margin-top:20px; display:flex; flex-direction:column; gap:10px;">
            <button type="button" id="btnVoltarResumo" class="btn btn-secondary btn-full">← Voltar e editar</button>
            <button type="button" id="btnConfirmarWhatsApp" class="btn btn-primary btn-full" style="padding:15px; font-size:16px;">📲 CONFIRMAR E ENVIAR PELO WHATSAPP</button>
        </div>
    `;

    ocultarTodosStepsModal();
    step.style.display = "block";

    // VOLTAR
    const btnVoltar = document.getElementById("btnVoltarResumo");
    if (btnVoltar) {
        btnVoltar.addEventListener("click", function () {
            ocultarTodosStepsModal();
            if (pedidoAtual.tipo === "encomenda") {
                const stepEncomenda = document.getElementById("modalStepEncomenda");
                if (stepEncomenda) stepEncomenda.style.display = "block";
                toggleCamposAgendamento();
            } else {
                const step4 = document.getElementById("modalStep4");
                if (step4) step4.style.display = "block";
                criarBotaoFinalizar();
            }
        });
    }

    // WHATSAPP
    const btnWhatsApp = document.getElementById("btnConfirmarWhatsApp");
    if (btnWhatsApp) {
        btnWhatsApp.addEventListener("click", confirmarEEnviarPedido);
    }
}


// ============================================================
// ENVIAR PEDIDO PARA WHATSAPP - COM TAXA
// ============================================================

function confirmarEEnviarPedido() {
    console.log("📤 Enviando pedido para WhatsApp...");
    
    // Tenta pegar o nome de diferentes fontes
    let nomeCliente = "";
    const campoNome = document.getElementById("clienteNome");
    if (campoNome && campoNome.value.trim()) {
        nomeCliente = campoNome.value.trim();
    } else if (pedidoAtual.agendamento && pedidoAtual.agendamento.nome) {
        nomeCliente = pedidoAtual.agendamento.nome;
    }

    if (!nomeCliente) {
        alert("Por favor, informe seu nome antes de enviar o pedido.");
        if (campoNome) campoNome.focus();
        return;
    }

    if (carrinho.length === 0) {
        mostrarToast("Seu carrinho está vazio.");
        return;
    }

    if (!pedidoAtual.pagamento) {
        alert("Selecione uma forma de pagamento.");
        return;
    }

    let message = " *NOVO PEDIDO - LE GUST SALGADERIA*\n\n";
    message += ` *CLIENTE:* ${nomeCliente}\n\n`;
    message += " *ITENS DO PEDIDO:*\n";

    let subtotalProdutos = 0;
    carrinho.forEach(item => {
        const preco = parseFloat(String(item.preco).replace(",", "."));
        const subtotal = preco * item.qtd;
        subtotalProdutos += subtotal;
        message += `• ${item.qtd}x ${item.nome} = R$ ${subtotal.toFixed(2).replace(".", ",")}\n`;
    });

    // Calcula a taxa de entrega
    let taxa = 0;
    let textoTaxa = "R$ 0,00";
    let taxaCalculada = true;
    let tipoEntregaTexto = "";

    if (pedidoAtual.tipo === "entrega") {
        tipoEntregaTexto = "ENTREGA EM CASA";
        if (pedidoAtual.endereco && pedidoAtual.endereco.taxa !== undefined) {
            taxa = pedidoAtual.endereco.taxa || 0;
            textoTaxa = pedidoAtual.endereco.textoTaxa || "R$ 0,00";
            taxaCalculada = pedidoAtual.endereco.taxaCalculada !== false;
        } else {
            const resultado = calcularTaxaEntrega("entrega", pedidoAtual.endereco);
            taxa = resultado.taxa;
            textoTaxa = resultado.texto;
            taxaCalculada = resultado.calculado;
        }
    } else if (pedidoAtual.tipo === "retirada") {
        tipoEntregaTexto = "RETIRADA NA LOJA";
        taxa = 0;
        textoTaxa = "R$ 0,00";
        taxaCalculada = true;
    } else if (pedidoAtual.tipo === "encomenda") {
        if (pedidoAtual.agendamento && pedidoAtual.agendamento.tipoAgendamento === "entrega") {
            tipoEntregaTexto = "AGENDAMENTO COM ENTREGA";
            taxa = pedidoAtual.agendamento.taxa || 0;
            textoTaxa = pedidoAtual.agendamento.textoTaxa || "R$ 0,00";
            taxaCalculada = pedidoAtual.agendamento.taxaCalculada !== false;
        } else {
            tipoEntregaTexto = "AGENDAMENTO COM RETIRADA";
            taxa = 0;
            textoTaxa = "R$ 0,00";
            taxaCalculada = true;
        }
    }

    const totalFinal = subtotalProdutos + taxa;

    message += `\n *SUBTOTAL:* R$ ${subtotalProdutos.toFixed(2).replace(".", ",")}\n`;

    // INFORMAÇÕES DO PEDIDO
    message += `\n *OPÇÃO:* ${tipoEntregaTexto}\n`;

    // ENTREGA
    if (pedidoAtual.tipo === "entrega") {
        const end = pedidoAtual.endereco;
        message += "\n *ENDEREÇO DE ENTREGA:*\n";
        message += `Rua: ${end.rua}, Nº ${end.numero}\n`;
        if (end.complemento) message += `Complemento: ${end.complemento}\n`;
        message += `Bairro: ${end.bairro}\n`;
        message += `Cidade: ${end.cidade}\n`;
        if (end.referencia) message += `Referência: ${end.referencia}\n`;

        message += `\n *TAXA DE ENTREGA:* ${textoTaxa}\n`;
        message += ` *TOTAL FINAL:* R$ ${totalFinal.toFixed(2).replace(".", ",")}\n`;
        
        if (!taxaCalculada) {
            message += "\n *OBS:* A taxa de entrega será confirmada pelo atendimento.\n";
        }
    }

    // RETIRADA
    if (pedidoAtual.tipo === "retirada") {
        message += `\n *ENDEREÇO:* ${CONFIG_ENV.endereco}\n`;
        message += ` *TAXA DE ENTREGA:* R$ 0,00\n`;
        message += ` *TOTAL:* R$ ${subtotalProdutos.toFixed(2).replace(".", ",")}\n`;
    }

    // AGENDAMENTO
    if (pedidoAtual.tipo === "encomenda") {
        const ag = pedidoAtual.agendamento;
        message += `\n *DATA E HORÁRIO:* ${ag?.dataFormatada || "Não informado"}\n`;
        
        if (ag?.tipoAgendamento === "entrega") {
            message += "\n *ENDEREÇO DE ENTREGA:*\n";
            message += `${ag?.endereco || "Não informado"}, Nº ${ag?.numero || ""}\n`;
            message += `Bairro: ${ag?.bairro || "Não informado"}\n`;
            message += `Cidade: Parnaíba - PI\n`;
            if (ag?.referencia) message += `Referência: ${ag.referencia}\n`;
            message += `\n *TAXA DE ENTREGA:* ${textoTaxa}\n`;
            message += ` *TOTAL FINAL:* R$ ${totalFinal.toFixed(2).replace(".", ",")}\n`;
            if (!taxaCalculada) {
                message += "\n *OBS:* A taxa de entrega será confirmada pelo atendimento.\n";
            }
        } else {
            message += `\n *ENDEREÇO DA LOJA:* ${CONFIG_ENV.endereco}\n`;
            message += ` *TAXA DE ENTREGA:* R$ 0,00\n`;
            message += ` *TOTAL:* R$ ${subtotalProdutos.toFixed(2).replace(".", ",")}\n`;
        }
    }

    message += ` *FORMA DE PAGAMENTO:* ${pedidoAtual.pagamento}\n`;
    message += "\n━━━━━━━━━━━━━━━━━━\n";
    message += " *PEDIDO REALIZADO PELO SITE*\n";
    message += "Aguardando confirmação da Le Gust.";

    console.log("📨 Mensagem do WhatsApp:", message);

    openWhatsApp(message);
    limparCarrinho();
    pedidoAtual = { tipo: null, endereco: {}, pagamento: null, agendamento: null };
    if (campoNome) campoNome.value = "";
    fecharModal();
    mostrarToast("Pedido enviado para o WhatsApp!");
}


// ============================================================
// AJUDA
// ============================================================

function initAjuda() {
    const btn = document.getElementById("ajudaDelivery");
    if (!btn) return;
    btn.addEventListener("click", function () {
        openWhatsApp("Olá! Vim pelo site da Le Gust Salgaderia e preciso de ajuda com meu pedido.");
    });
}


// ============================================================
// NAVBAR
// ============================================================

function initNavbar() {
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", function () {
        menu.classList.toggle("open");
    });
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("open");
        });
    });
}


// ============================================================
// WHATSAPP
// ============================================================

function openWhatsApp(message) {
    const numero = CONFIG_ENV.whatsapp;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}


// ============================================================
// TOAST
// ============================================================

function mostrarToast(message) {
    const existing = document.querySelector(".toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>✅</span> ${message}`;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}