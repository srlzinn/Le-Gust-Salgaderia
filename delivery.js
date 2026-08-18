// ============================================================
// LE' GUST SALGADERIA - DELIVERY.JS
// ============================================================

// ============================================================
// CONFIGURAÇÃO
// ============================================================

const CONFIG_ENV = window.CONFIG || {
    whatsapp: "5586999999999",
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
        observacao: "Geralmente inclui coxinha de frango, bolinho de carne moída, cigarette de calabresa, bolinha de queijo e travesseiro de presunto e queijo. Pode variar conforme a disponibilidade do estoque. Não inclui pastel, quibe e mini churros, pois são salgados que precisam ser fritos separadamente."
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
        nome: "Cigarette de calabresa",
        descricao: "25 unidades",
        lactose: "Contém lactose",
        preco: "20,00",
        categoria: "salgados",
        emoji: "🌶️",
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
        nome: "Pão de queijo congelado",
        descricao: "50 unidades",
        lactose: "Contém lactose",
        preco: "30,00",
        categoria: "congelados",
        emoji: "🧀",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1719926000761blob",
        observacao: "Produto congelado. NÃO é assado. O cliente deve assar em casa. A Le' Gust não envia o pão de queijo assado."
    },

    // ========================================================
    // BEBIDAS
    // ========================================================

    {
        id: 13,
        nome: "Coca-Cola tradicional",
        descricao: "2 litros",
        lactose: "",
        preco: "13,00",
        categoria: "bebidas",
        emoji: "🥤",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1757985789602blob"
    },

    {
        id: 14,
        nome: "Coca-Cola Zero",
        descricao: "2 litros",
        lactose: "",
        preco: "13,00",
        categoria: "bebidas",
        emoji: "🥤",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1757985938602blob"
    },

    {
        id: 15,
        nome: "Guaraná Antarctica",
        descricao: "2 litros",
        lactose: "",
        preco: "11,00",
        categoria: "bebidas",
        emoji: "🥤",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1757986011082blob"
    },

    {
        id: 16,
        nome: "Guaraná Antarctica",
        descricao: "1 litro",
        lactose: "",
        preco: "8,00",
        categoria: "bebidas",
        emoji: "🥤",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1757986046166blob"
    },

    {
        id: 17,
        nome: "Coca-Cola tradicional",
        descricao: "1 litro",
        lactose: "",
        preco: "9,00",
        categoria: "bebidas",
        emoji: "🥤",
        imagem: "https://client-assets.anota.ai/produtos/6683175d91ea320019458b0a/-1757986115705blob"
    },

    {
        id: 18,
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
    pagamento: null
};


// ============================================================
// INICIALIZAÇÃO
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    renderizarProdutos();
    initFiltroCategorias();
    initNavbar();
    initCarrinho();
    initModal();
    initAjuda();
    atualizarCarrinhoUI();
});


// ============================================================
// PRODUTOS - RENDERIZAÇÃO COM IMAGENS
// ============================================================

function renderizarProdutos(categoria = "todos") {

    const lista = document.getElementById("produtosLista");
    if (!lista) return;

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
    const ids = ["modalStep1", "modalStep3", "modalStep4", "modalStepResumo", "modalStepEvento"];
    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.style.display = "none";
    });
}


// ============================================================
// INICIALIZAÇÃO DO MODAL
// ============================================================

function initModal() {
    const modalOverlay = document.getElementById("modalOverlay");
    const modalClose = document.getElementById("modalClose");

    if (modalClose) modalClose.addEventListener("click", fecharModal);
    if (modalOverlay) {
        modalOverlay.addEventListener("click", function (e) {
            if (e.target === this) fecharModal();
        });
    }

    // ========================================================
    // ENTREGA / RETIRADA / AGENDAMENTO
    // ========================================================

    document.querySelectorAll(".delivery-option").forEach(btn => {
        btn.addEventListener("click", function () {
            const tipo = this.dataset.tipo;
            pedidoAtual.tipo = tipo;
            ocultarTodosStepsModal();

            if (tipo === "retirada") {
                const step4 = document.getElementById("modalStep4");
                if (step4) step4.style.display = "block";
            } else if (tipo === "entrega") {
                const step3 = document.getElementById("modalStep3");
                if (step3) step3.style.display = "block";
            } else if (tipo === "agendado") {
                exibirFormularioEvento();
            }
        });
    });

    // ========================================================
    // CONFIRMAR NOME
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
    // CONFIRMAR ENDEREÇO
    // ========================================================

    const btnEndereco = document.getElementById("modalEnderecoConfirmar");
    if (btnEndereco) {
        btnEndereco.addEventListener("click", confirmarEndereco);
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
            mostrarResumoPedido();
        });
    }
}


// ============================================================
// CONFIRMAR ENDEREÇO
// ============================================================

function confirmarEndereco() {
    const rua = document.getElementById("modalEnderecoRua")?.value.trim();
    const numero = document.getElementById("modalEnderecoNumero")?.value.trim();
    const bairro = document.getElementById("modalEnderecoBairro")?.value.trim();

    if (!rua || !numero || !bairro) {
        alert("Por favor, preencha Rua, Número e Bairro.");
        return;
    }

    const bairroFormatado = bairro.toLowerCase().trim();
    const possuiTaxaFixa = BAIRROS_TAXA_FIXA.includes(bairroFormatado);

    pedidoAtual.endereco = {
        rua,
        numero,
        complemento: document.getElementById("modalEnderecoComplemento")?.value.trim() || "",
        bairro,
        cidade: "Parnaíba - PI",
        referencia: document.getElementById("modalEnderecoReferencia")?.value.trim() || "",
        taxaFixa: possuiTaxaFixa,
        valorTaxa: possuiTaxaFixa ? 10 : 0
    };

    ocultarTodosStepsModal();
    const step4 = document.getElementById("modalStep4");
    if (step4) step4.style.display = "block";
    if (pedidoAtual.pagamento) criarBotaoFinalizar();
}


// ============================================================
// RESUMO DO PEDIDO
// ============================================================

function mostrarResumoPedido() {
    // NOME
    const campoNome = document.getElementById("clienteNome");
    const nomeCliente = campoNome ? campoNome.value.trim() : "";

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

    if (pedidoAtual.tipo === "entrega") {
        if (pedidoAtual.endereco.taxaFixa) {
            taxa = pedidoAtual.endereco.valorTaxa;
            textoTaxa = `R$ ${taxa.toFixed(2).replace(".", ",")}`;
        } else {
            textoTaxa = "A calcular";
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
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span>Taxa de entrega</span>
                <strong>${textoTaxa}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:1.2rem; padding-top:10px; border-top:1px solid #ddd;">
                <strong>TOTAL</strong>
                <strong>R$ ${total.toFixed(2).replace(".", ",")}</strong>
            </div>
        </div>

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

        ${pedidoAtual.tipo === "entrega" && !pedidoAtual.endereco.taxaFixa ? `
            <div style="margin-top:12px; padding:12px; background:#fff3cd; border-radius:8px; color:#856404;">
                ⚠️ A taxa de entrega será confirmada pelo atendimento.
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
            const step4 = document.getElementById("modalStep4");
            if (step4) step4.style.display = "block";
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
    const campoNome = document.getElementById("clienteNome");
    const nomeCliente = campoNome ? campoNome.value.trim() : "";

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

    message += `\n *SUBTOTAL:* R$ ${subtotalProdutos.toFixed(2).replace(".", ",")}\n`;

    if (pedidoAtual.tipo === "retirada") {
        message += "\n *OPÇÃO:* RETIRADA NA LOJA\n";
        message += ` *ENDEREÇO:* ${CONFIG_ENV.endereco}\n`;
        message += ` *TOTAL:* R$ ${subtotalProdutos.toFixed(2).replace(".", ",")}\n`;
    }

    if (pedidoAtual.tipo === "entrega") {
        const end = pedidoAtual.endereco;
        message += "\n🛵 *OPÇÃO:* ENTREGA EM CASA\n";
        message += "\n📍 *ENDEREÇO DE ENTREGA:*\n";
        message += `Rua: ${end.rua}, Nº ${end.numero}\n`;
        if (end.complemento) message += `Complemento: ${end.complemento}\n`;
        message += `Bairro: ${end.bairro}\n`;
        message += `Cidade: ${end.cidade}\n`;
        if (end.referencia) message += `Referência: ${end.referencia}\n`;

        if (end.taxaFixa) {
            const totalFinal = subtotalProdutos + end.valorTaxa;
            message += "\n *TAXA DE ENTREGA:* R$ 10,00\n";
            message += ` *TOTAL FINAL:* R$ ${totalFinal.toFixed(2).replace(".", ",")}\n`;
        } else {
            message += "\n *TAXA DE ENTREGA:* A CALCULAR\n";
            message += " A taxa será confirmada pelo atendimento.\n";
            message += ` *TOTAL PARCIAL:* R$ ${subtotalProdutos.toFixed(2).replace(".", ",")}\n`;
        }
    }

    message += ` *FORMA DE PAGAMENTO:* ${pedidoAtual.pagamento}\n`;
    message += "\n━━━━━━━━━━━━━━━━━━\n";
    message += " *PEDIDO REALIZADO PELO SITE*\n";
    message += "Aguardando confirmação da Le Gust.";

    openWhatsApp(message);
    limparCarrinho();
    pedidoAtual = { tipo: null, endereco: {}, pagamento: null };
    if (campoNome) campoNome.value = "";
    fecharModal();
    mostrarToast("Pedido enviado para o WhatsApp!");
}


// ============================================================
// EVENTOS / ENCOMENDAS
// ============================================================

function exibirFormularioEvento() {
    let containerEvento = document.getElementById("modalStepEvento");
    if (!containerEvento) {
        containerEvento = document.createElement("div");
        containerEvento.id = "modalStepEvento";
        containerEvento.className = "modal-step";
        containerEvento.innerHTML = `
            <h3>🎉 Agendamento de Evento</h3>
            <p style="color:var(--text-light); margin-bottom:12px;">Preencha os dados do evento para enviarmos seu orçamento.</p>
            <div class="form-group">
                <label>Tipo do Evento *</label>
                <input type="text" id="eventoTipo" placeholder="Ex: Aniversário, Casamento, Reunião" required />
            </div>
            <div class="form-group">
                <label>Quantidade total de salgados *</label>
                <input type="number" id="eventoQtdSalgados" placeholder="Ex: 200" required />
            </div>
            <div class="form-group">
                <label>Data e Horário *</label>
                <input type="datetime-local" id="eventoDataHora" required />
            </div>
            <div class="form-group">
                <label>Local / Bairro do Evento *</label>
                <input type="text" id="eventoLocal" placeholder="Ex: Salão de Festas - Centro" required />
            </div>
            <button type="button" class="btn btn-primary btn-full" id="btnEnviarEvento">📲 SOLICITAR ORÇAMENTO NO WHATSAPP</button>
        `;
        const modalContent = document.querySelector(".modal-content");
        if (modalContent) modalContent.appendChild(containerEvento);

        const btnEvento = document.getElementById("btnEnviarEvento");
        if (btnEvento) btnEvento.addEventListener("click", enviarPedidoEvento);
    }
    containerEvento.style.display = "block";
}


// ============================================================
// ENVIAR EVENTO
// ============================================================

function enviarPedidoEvento() {
    const tipo = document.getElementById("eventoTipo")?.value.trim();
    const qtd = document.getElementById("eventoQtdSalgados")?.value.trim();
    const dataHora = document.getElementById("eventoDataHora")?.value;
    const local = document.getElementById("eventoLocal")?.value.trim();

    if (!tipo || !qtd || !dataHora || !local) {
        alert("Por favor, preencha todos os campos do evento.");
        return;
    }

    const dataFormatada = new Date(dataHora).toLocaleString("pt-BR");
    let msg = " *ORÇAMENTO PARA EVENTO - LE GUST SALGADERIA*\n\n";
    msg += ` *Tipo do Evento:* ${tipo}\n`;
    msg += ` *Quantidade:* ${qtd} salgados\n`;
    msg += ` *Data e Horário:* ${dataFormatada}\n`;
    msg += ` *Local:* ${local}\n\n`;
    msg += "Aguardando confirmação de valores e disponibilidade!";

    openWhatsApp(msg);
    fecharModal();
    mostrarToast("Solicitação enviada!");
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