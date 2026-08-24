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
    // CONGELADOS
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
    tipo: null,           // 'entrega' ou 'retirada'
    quando: null,         // 'agora' ou 'agendado'
    endereco: {},
    pagamento: null,
    agendamento: null     // { data, horario, dataFormatada }
};


// ============================================================
// FUNÇÃO PARA CALCULAR TAXA DE ENTREGA
// ============================================================

function calcularTaxaEntrega(tipo, endereco) {
    if (tipo === "retirada") {
        return { taxa: 0, texto: "R$ 0,00", calculado: true };
    }
    
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
    initHorarioSelects();
    atualizarCarrinhoUI();
    console.log("✅ Delivery inicializado!");
});


// ============================================================
// INICIALIZAÇÃO DOS SELECTS DE HORÁRIO
// ============================================================

function initHorarioSelects() {
    const selectManha = document.getElementById("agendamentoHorario");
    const selectTarde = document.getElementById("agendamentoHorarioTarde");
    const dateInput = document.getElementById("agendamentoData");
    
    // Validação de domingo no input de data
    if (dateInput) {
        dateInput.removeEventListener("change", handleDateChange);
        dateInput.addEventListener("change", handleDateChange);
    }
    
    if (selectManha) {
        selectManha.removeEventListener("change", handleHorarioChange);
        selectManha.addEventListener("change", handleHorarioChange);
        selectManha.disabled = false;
        selectManha.style.pointerEvents = "auto";
        selectManha.style.opacity = "1";
    }
    
    if (selectTarde) {
        selectTarde.removeEventListener("change", handleHorarioChange);
        selectTarde.addEventListener("change", handleHorarioChange);
        selectTarde.disabled = false;
        selectTarde.style.pointerEvents = "auto";
        selectTarde.style.opacity = "1";
    }
}

// ============================================================
// HANDLER PARA MUDANÇA DE DATA
// ============================================================

function handleDateChange(e) {
    const input = e.target;
    const dataSelecionada = new Date(input.value + 'T00:00:00');
    const diaSemana = dataSelecionada.getDay();
    
    if (diaSemana === 0) {
        alert("⚠️ A Le' Gust Salgaderia não funciona aos domingos. Por favor, selecione outro dia.");
        input.value = "";
        // Limpa também os horários selecionados
        const selectManha = document.getElementById("agendamentoHorario");
        const selectTarde = document.getElementById("agendamentoHorarioTarde");
        if (selectManha) {
            selectManha.value = "";
            selectManha.style.borderColor = "";
        }
        if (selectTarde) {
            selectTarde.value = "";
            selectTarde.style.borderColor = "";
        }
    }
}

// ============================================================
// HANDLER PARA MUDANÇA DE HORÁRIO
// ============================================================

function handleHorarioChange(e) {
    const select = e.target;
    const selectId = select.id;
    const valor = select.value;
    
    if (valor) {
        if (selectId === "agendamentoHorario") {
            const selectTarde = document.getElementById("agendamentoHorarioTarde");
            if (selectTarde) {
                selectTarde.value = "";
                selectTarde.style.borderColor = "";
            }
            select.style.borderColor = "#28a745";
        } else if (selectId === "agendamentoHorarioTarde") {
            const selectManha = document.getElementById("agendamentoHorario");
            if (selectManha) {
                selectManha.value = "";
                selectManha.style.borderColor = "";
            }
            select.style.borderColor = "#28a745";
        }
    } else {
        select.style.borderColor = "";
    }
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
            <div class="produto-imagem">
                <img 
                    src="${produto.imagem || ''}" 
                    alt="${produto.nome}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                />
            </div>
            <div class="produto-info">
                <span class="nome">
                    ${produto.emoji || '🍽️'} ${produto.nome}
                </span>
                ${produto.descricao ? `<span class="descricao">${produto.descricao}</span>` : ""}
                ${produto.lactose ? `<span class="lactose ${produto.lactose.toLowerCase().includes("sem") ? "sem" : ""}">${produto.lactose}</span>` : ""}
                ${produto.observacao ? `<div class="produto-observacao">${produto.observacao}</div>` : ""}
                <span class="preco">R$ ${produto.preco}</span>
            </div>
            <div class="produto-actions">
                <div class="qtd-control">
                    <button type="button" class="qtd-btn" data-id="${produto.id}" data-delta="-1">−</button>
                    <span class="qtd-value" id="qtd-${produto.id}">0</span>
                    <button type="button" class="qtd-btn" data-id="${produto.id}" data-delta="1">+</button>
                </div>
                <button type="button" class="add-btn" data-id="${produto.id}">Adicionar</button>
            </div>
        </div>
    `).join("");

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
                <img src="${item.imagem || ''}" alt="${item.nome}" onerror="this.style.display='none'" />
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
    document.getElementById("modalStep1").style.display = "block";
    fecharCarrinho();
}

function fecharModal() {
    const modal = document.getElementById("modalOverlay");
    if (modal) modal.classList.remove("active");
    // Reset do estado quando fechar
    pedidoAtual = {
        tipo: null,
        quando: null,
        endereco: {},
        pagamento: null,
        agendamento: null
    };
}

function ocultarTodosStepsModal() {
    const ids = ["modalStep1", "modalStepQuando", "modalStepEndereco", "modalStepAgendamento", "modalStepNome", "modalStepPagamento", "modalStepResumo"];
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
    // STEP 1: Forma de recebimento
    // ========================================================

    document.querySelectorAll(".delivery-option").forEach(btn => {
        btn.addEventListener("click", function () {
            const tipo = this.dataset.tipo;
            console.log("📦 Forma de recebimento selecionada:", tipo);
            pedidoAtual.tipo = tipo;
            
            // Avança para o step "Quando você precisa?"
            ocultarTodosStepsModal();
            document.getElementById("modalStepQuando").style.display = "block";
        });
    });

    // ========================================================
    // STEP 2: Quando você precisa?
    // ========================================================

    document.querySelectorAll(".quando-option").forEach(btn => {
        btn.addEventListener("click", function () {
            const quando = this.dataset.quando;
            console.log("⏰ Quando selecionado:", quando);
            pedidoAtual.quando = quando;
            document.getElementById("quandoError").style.display = "none";
            
            // Avança para o próximo step baseado no tipo
            ocultarTodosStepsModal();
            
            if (pedidoAtual.tipo === "entrega") {
                // Se for entrega, precisa de endereço
                document.getElementById("modalStepEndereco").style.display = "block";
            } else if (pedidoAtual.tipo === "retirada") {
                // Se for retirada, vai direto para o agendamento ou nome
                if (quando === "agendado") {
                    document.getElementById("modalStepAgendamento").style.display = "block";
                    // Mostra a info de retirada
                    document.getElementById("agendamentoRetiradaInfo").style.display = "block";
                    // Define data mínima - PERMITE HOJE
                    const dateInput = document.getElementById("agendamentoData");
                    if (dateInput) {
                        const today = new Date();
                        const todayStr = today.toISOString().split('T')[0];
                        dateInput.min = todayStr;
                    }
                } else {
                    // Para agora - vai direto para o nome
                    document.getElementById("modalStepNome").style.display = "block";
                }
            }
        });
    });

    // ========================================================
    // STEP 3: Endereço (Entrega)
    // ========================================================

    const btnEndereco = document.getElementById("modalEnderecoConfirmar");
    if (btnEndereco) {
        btnEndereco.addEventListener("click", confirmarEndereco);
    }

    // ========================================================
    // STEP 4: Agendamento (Data e Horário)
    // ========================================================

    const btnAgendamento = document.getElementById("btnConfirmarAgendamento");
    if (btnAgendamento) {
        btnAgendamento.addEventListener("click", function() {
            confirmarAgendamento();
        });
    }

    // ========================================================
    // STEP: Nome
    // ========================================================

    const btnNome = document.getElementById("modalNomeConfirmar");
    if (btnNome) {
        btnNome.addEventListener("click", function() {
            const nome = document.getElementById("clienteNome")?.value.trim();
            if (!nome) {
                alert("Por favor, informe seu nome.");
                return;
            }
            // Salva o nome no pedido
            pedidoAtual.nome = nome;
            ocultarTodosStepsModal();
            document.getElementById("modalStepPagamento").style.display = "block";
            if (pedidoAtual.pagamento) criarBotaoFinalizar();
        });
    }

    // ========================================================
    // STEP: Pagamento
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

    // Se for "agendado", vai para agendamento, senão vai para nome
    ocultarTodosStepsModal();
    if (pedidoAtual.quando === "agendado") {
        document.getElementById("modalStepAgendamento").style.display = "block";
        // Define data mínima - PERMITE HOJE
        const dateInput = document.getElementById("agendamentoData");
        if (dateInput) {
            const today = new Date();
            const todayStr = today.toISOString().split('T')[0];
            dateInput.min = todayStr;
        }
    } else {
        document.getElementById("modalStepNome").style.display = "block";
    }
}


// ============================================================
// CONFIRMAR AGENDAMENTO
// ============================================================

function confirmarAgendamento() {
    console.log("📝 Validando agendamento...");
    
    const data = document.getElementById("agendamentoData")?.value;
    const horarioManha = document.getElementById("agendamentoHorario")?.value;
    const horarioTarde = document.getElementById("agendamentoHorarioTarde")?.value;
    
    // Validação: apenas um horário
    let horario = "";
    let erroHorario = false;
    
    if (horarioManha && horarioTarde) {
        alert("⚠️ Por favor, selecione APENAS um horário (Manhã OU Tarde).");
        erroHorario = true;
    } else if (!horarioManha && !horarioTarde) {
        alert("⚠️ Por favor, selecione um horário (Manhã ou Tarde).");
        erroHorario = true;
    } else {
        horario = horarioManha || horarioTarde;
    }
    
    if (erroHorario) {
        const selectManha = document.getElementById("agendamentoHorario");
        const selectTarde = document.getElementById("agendamentoHorarioTarde");
        if (selectManha) selectManha.style.borderColor = "#dc3545";
        if (selectTarde) selectTarde.style.borderColor = "#dc3545";
        return;
    }
    
    // Reseta bordas
    const selectManha = document.getElementById("agendamentoHorario");
    const selectTarde = document.getElementById("agendamentoHorarioTarde");
    if (selectManha) selectManha.style.borderColor = "";
    if (selectTarde) selectTarde.style.borderColor = "";
    
    if (!data) {
        alert("⚠️ Por favor, selecione a data do agendamento.");
        return;
    }

    // VALIDAÇÃO: BLOQUEAR DOMINGOS
    const dataObj = new Date(data + 'T' + horario);
    const diaSemana = dataObj.getDay(); // 0 = domingo
    
    if (diaSemana === 0) {
        alert("⚠️ A Le' Gust Salgaderia não funciona aos domingos. Por favor, selecione outro dia.");
        return;
    }

    // VALIDAÇÃO: HORÁRIOS PASSADOS (apenas para hoje)
    const hoje = new Date();
    const dataSelecionada = new Date(data + 'T' + horario);
    const agora = new Date();
    
    // Se for hoje, verifica se o horário já passou
    if (dataSelecionada.toDateString() === hoje.toDateString()) {
        const horaSelecionada = dataSelecionada.getHours();
        const minutoSelecionado = dataSelecionada.getMinutes();
        const horaAtual = agora.getHours();
        const minutoAtual = agora.getMinutes();
        
        if (horaSelecionada < horaAtual || (horaSelecionada === horaAtual && minutoSelecionado < minutoAtual)) {
            alert("⚠️ Este horário já passou. Por favor, selecione um horário futuro.");
            return;
        }
    }
    
    // Formata a data
    const dataFormatada = new Date(data + 'T' + horario).toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    pedidoAtual.agendamento = {
        data: data,
        horario: horario,
        dataFormatada: dataFormatada
    };
    
    console.log("📅 Agendamento salvo:", pedidoAtual.agendamento);
    
    // Avança para o nome
    ocultarTodosStepsModal();
    document.getElementById("modalStepNome").style.display = "block";
}


// ============================================================
// BOTÃO FINALIZAR PEDIDO
// ============================================================

function criarBotaoFinalizar() {
    const stepPagamento = document.getElementById("modalStepPagamento");
    if (!stepPagamento) return;

    let container = document.getElementById("containerFinalizarPedido");
    if (!container) {
        container = document.createElement("div");
        container.id = "containerFinalizarPedido";
        container.style.marginTop = "20px";
        stepPagamento.appendChild(container);
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
// RESUMO DO PEDIDO
// ============================================================

function mostrarResumoPedido() {
    console.log("📋 Gerando resumo do pedido...");
    
    // Verifica se tem nome
    if (!pedidoAtual.nome) {
        alert("Por favor, informe seu nome.");
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
    let taxaCalculada = true;
    let tipoEntregaTexto = "";
    let quandoTexto = "";

    // Determina o tipo de entrega
    if (pedidoAtual.tipo === "entrega") {
        tipoEntregaTexto = "🛵 Entrega em casa";
        if (pedidoAtual.endereco && pedidoAtual.endereco.taxa !== undefined) {
            taxa = pedidoAtual.endereco.taxa || 0;
            textoTaxa = pedidoAtual.endereco.textoTaxa || "R$ 0,00";
            taxaCalculada = pedidoAtual.endereco.taxaCalculada !== false;
        }
    } else if (pedidoAtual.tipo === "retirada") {
        tipoEntregaTexto = "🏪 Retirada na loja";
        taxa = 0;
        textoTaxa = "R$ 0,00";
        taxaCalculada = true;
    }

    // Determina quando
    if (pedidoAtual.quando === "agora") {
        quandoTexto = "⚡ AGORA";
    } else if (pedidoAtual.quando === "agendado") {
        quandoTexto = `📅 ${pedidoAtual.agendamento?.dataFormatada || "Agendado"}`;
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

    // Determina a classe de destaque para o pedido
    const isAgendado = pedidoAtual.quando === "agendado";
    const destaqueClass = isAgendado ? 'agendado' : 'imediato';

    step.innerHTML = `
        <h3>📋 Finalizar Pedido</h3>
        <p style="color:var(--text-light); margin-bottom:18px;">Confira os dados do seu pedido antes de enviar.</p>

        <!-- STATUS DO PEDIDO (DESTAQUE) -->
        <div style="margin-bottom:15px; padding:15px; border-radius:8px; text-align:center; ${isAgendado ? 'background:#fff3cd; border:2px solid #ffc107;' : 'background:#d4edda; border:2px solid #28a745;'}">
            <strong style="font-size:1.1rem; ${isAgendado ? 'color:#856404;' : 'color:#155724;'}">
                ${isAgendado ? '📅 PEDIDO AGENDADO' : '⚡ PEDIDO IMEDIATO'}
            </strong>
            <p style="margin:5px 0 0; ${isAgendado ? 'color:#856404;' : 'color:#155724;'}">
                ${isAgendado ? `Entrega: ${pedidoAtual.agendamento?.dataFormatada || ''}` : 'Entrega: AGORA'}
            </p>
        </div>

        <!-- NOME -->
        <div style="margin-bottom:15px; padding:12px; border-radius:8px; background:#f8f8f8;">
            <strong>👤 Cliente</strong>
            <p style="margin:5px 0 0;">${pedidoAtual.nome}</p>
        </div>

        <!-- TIPO DE ENTREGA -->
        <div style="margin-bottom:15px; padding:12px; border-radius:8px; background:#f8f8f8;">
            <strong>📦 Recebimento</strong>
            <p style="margin:5px 0 0;">${tipoEntregaTexto}</p>
        </div>

        <!-- QUANDO -->
        <div style="margin-bottom:15px; padding:12px; border-radius:8px; background:#f8f8f8;">
            <strong>⏰ Quando</strong>
            <p style="margin:5px 0 0;">${quandoTexto}</p>
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

        <!-- VALORES -->
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
                <strong>🏪 Retirada na loja</strong>
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
            document.getElementById("modalStepPagamento").style.display = "block";
            criarBotaoFinalizar();
        });
    }

    // WHATSAPP
    const btnWhatsApp = document.getElementById("btnConfirmarWhatsApp");
    if (btnWhatsApp) {
        btnWhatsApp.addEventListener("click", confirmarEEnviarPedido);
    }
}


// ============================================================
// ENVIAR PEDIDO PARA WHATSAPP
// ============================================================

function confirmarEEnviarPedido() {
    console.log("📤 Enviando pedido para WhatsApp...");
    
    if (!pedidoAtual.nome) {
        alert("Por favor, informe seu nome.");
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

    // Determina o status do pedido
    const isAgendado = pedidoAtual.quando === "agendado";
    const statusTexto = isAgendado ? "AGENDADO" : "IMEDIATO";
    const quandoTexto = isAgendado 
        ? `📅 ${pedidoAtual.agendamento?.dataFormatada || "Agendado"}`
        : "⚡ AGORA";

    let message = " *NOVO PEDIDO - LE GUST SALGADERIA*\n\n";
    message += ` *STATUS:* ${statusTexto}\n`;
    message += ` *QUANDO:* ${quandoTexto}\n\n`;
    message += ` *CLIENTE:* ${pedidoAtual.nome}\n\n`;
    message += " *ITENS DO PEDIDO:*\n";

    let subtotalProdutos = 0;
    carrinho.forEach(item => {
        const preco = parseFloat(String(item.preco).replace(",", "."));
        const subtotal = preco * item.qtd;
        subtotalProdutos += subtotal;
        message += `• ${item.qtd}x ${item.nome} = R$ ${subtotal.toFixed(2).replace(".", ",")}\n`;
    });

    // Calcula a taxa
    let taxa = 0;
    let textoTaxa = "R$ 0,00";
    let taxaCalculada = true;

    if (pedidoAtual.tipo === "entrega") {
        if (pedidoAtual.endereco && pedidoAtual.endereco.taxa !== undefined) {
            taxa = pedidoAtual.endereco.taxa || 0;
            textoTaxa = pedidoAtual.endereco.textoTaxa || "R$ 0,00";
            taxaCalculada = pedidoAtual.endereco.taxaCalculada !== false;
        }
    }

    const totalFinal = subtotalProdutos + taxa;

    message += `\n *SUBTOTAL:* R$ ${subtotalProdutos.toFixed(2).replace(".", ",")}\n`;
    message += ` *TAXA DE ENTREGA:* ${textoTaxa}\n`;
    message += ` *TOTAL:* R$ ${totalFinal.toFixed(2).replace(".", ",")}\n\n`;

    // INFORMAÇÕES DO PEDIDO
    message += ` *RECEBIMENTO:* ${pedidoAtual.tipo === "entrega" ? "ENTREGA EM CASA" : "RETIRADA NA LOJA"}\n`;

    if (pedidoAtual.tipo === "entrega") {
        const end = pedidoAtual.endereco;
        message += "\n📍 *ENDEREÇO DE ENTREGA:*\n";
        message += `Rua: ${end.rua}, Nº ${end.numero}\n`;
        if (end.complemento) message += `Complemento: ${end.complemento}\n`;
        message += `Bairro: ${end.bairro}\n`;
        message += `Cidade: ${end.cidade}\n`;
        if (end.referencia) message += `Referência: ${end.referencia}\n`;
        
        if (!taxaCalculada) {
            message += "\n *OBS:* A taxa de entrega será confirmada pelo atendimento.\n";
        }
    } else {
        message += `\n🏪 *ENDEREÇO DA LOJA:*\n${CONFIG_ENV.endereco}\n`;
    }

    message += `\n *FORMA DE PAGAMENTO:* ${pedidoAtual.pagamento}\n`;
    message += "\n━━━━━━━━━━━━━━━━━━\n";
    message += " *PEDIDO REALIZADO PELO SITE*\n";
    message += "Aguardando confirmação da Le Gust.";

    console.log("📨 Mensagem do WhatsApp:", message);

    openWhatsApp(message);
    limparCarrinho();
    pedidoAtual = { tipo: null, quando: null, endereco: {}, pagamento: null, agendamento: null };
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