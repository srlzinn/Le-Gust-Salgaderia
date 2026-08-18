// ===== CONFIGURAÇÃO DE AMBIENTE / FALLBACKS =====
const CONFIG_ENV = window.CONFIG || {
    whatsapp: "5586999999999",
    endereco: "R. São Benedito, 475 - Planalto, Parnaíba - PI"
};

// ===== DADOS DOS PRODUTOS =====
const produtos = [
    { id: 1, nome: 'Pão de queijo com carne', descricao: 'Pacote com 25 unidades', lactose: 'Contém Lactose', preco: '20,00', categoria: 'salgados', emoji: '🧀' },
    { id: 2, nome: 'Pão de queijo congelado', descricao: 'Pacote com 25 unidades', lactose: 'Contém Lactose', preco: '20,00', categoria: 'congelados', emoji: '🧊' },
    { id: 3, nome: 'Porção Mix Le\'Gust', descricao: '25 unidades com sabores variados', lactose: 'Contém Lactose', preco: '20,00', categoria: 'salgados', emoji: '🎯' },
    { id: 4, nome: 'Pastel de carne moída', descricao: '25 unidades', lactose: 'Sem lactose', preco: '20,00', categoria: 'salgados', emoji: '🥟' },
    { id: 5, nome: 'Presunto e queijo', descricao: '25 unidades', lactose: 'Contém Lactose', preco: '20,00', categoria: 'salgados', emoji: '🧈' },
    { id: 6, nome: 'Salsicha', descricao: '25 unidades', lactose: 'Contém Lactose', preco: '20,00', categoria: 'salgados', emoji: '🌭' },
    { id: 7, nome: 'Mini churros com doce de leite', descricao: '25 unidades', lactose: 'Contém Lactose', preco: '20,00', categoria: 'salgados', emoji: '🥨' },
    { id: 8, nome: 'Queijo', descricao: '25 unidades', lactose: 'Contém Lactose', preco: '20,00', categoria: 'salgados', emoji: '🧀' },
    { id: 9, nome: 'Calabresa', descricao: '25 unidades', lactose: 'Contém Lactose', preco: '20,00', categoria: 'salgados', emoji: '🌶️' },
    { id: 10, nome: 'Carne moída', descricao: '25 unidades', lactose: 'Contém Lactose', preco: '20,00', categoria: 'salgados', emoji: '🍖' },
    { id: 11, nome: 'Coxinha de frango', descricao: '25 unidades', lactose: 'Contém Lactose', preco: '20,00', categoria: 'salgados', emoji: '🍗' },
    { id: 12, nome: 'Quibe com queijo e carne', descricao: '25 unidades', lactose: 'Contém Lactose', preco: '20,00', categoria: 'salgados', emoji: '🧆' },
    { id: 13, nome: 'Carne de sol', descricao: '25 unidades', lactose: 'Contém Lactose', preco: '20,00', categoria: 'salgados', emoji: '🥩' },
    { id: 14, nome: 'Pão de queijo congelado', descricao: '25 unidades', lactose: 'Contém Lactose', preco: '20,00', categoria: 'congelados', emoji: '🧊' },
    { id: 15, nome: 'Pão de queijo congelado', descricao: '50 unidades', lactose: 'Contém Lactose', preco: '35,00', categoria: 'congelados', emoji: '🧊' },
    { id: 16, nome: 'Guaraná Antarctica tradicional', descricao: '1 litro', lactose: '', preco: '8,00', categoria: 'bebidas', emoji: '🥤' },
    { id: 17, nome: 'Coca-Cola tradicional', descricao: '1 litro', lactose: '', preco: '9,00', categoria: 'bebidas', emoji: '🥤' },
    { id: 18, nome: 'Coca-Cola Zero', descricao: '1 litro', lactose: '', preco: '9,00', categoria: 'bebidas', emoji: '🥤' },
    { id: 19, nome: 'Guaraná Antarctica tradicional', descricao: '2 litros', lactose: '', preco: '11,00', categoria: 'bebidas', emoji: '🥤' },
    { id: 20, nome: 'Coca-Cola tradicional', descricao: '2 litros', lactose: '', preco: '13,00', categoria: 'bebidas', emoji: '🥤' },
    { id: 21, nome: 'Coca-Cola Zero', descricao: '2 litros', lactose: '', preco: '13,00', categoria: 'bebidas', emoji: '🥤' }
];

// ===== BAIRROS COM TAXA FIXA =====
const BAIRROS_TAXA_FIXA = [
    "planalto", "raul bacelar", "conselheiro alberto silva", "casas carmem",
    "reis veloso", "frei higino", "piauí", "piaui", "betânia", "betania",
    "floriopolis", "floriópolis", "joão xxiii", "joao xxiii", "pedro",
    "colina do alvorada", "catanduvas", "são benedito", "sao benedito",
    "pindorama", "rodoviária", "rodoviaria", "ceará", "ceara",
    "são francisco da guarita", "sao francisco da guarita", "sabiazal",
    "dom rufino", "joaz souza", "primavera", "broder ville", "dunas",
    "dirceu arcoverde", "santa luzia", "alto santa maria", "bebedouro",
    "são vicente de paula", "sao vicente de paula", "são josé", "sao jose",
    "centro", "nossa senhora de fátima", "nossa senhora de fatima",
    "nossa senhora do carmo", "campos", "nova parnaíba", "nova parnaiba",
    "beira rio"
];

// ===== ESTADO =====
let carrinho = [];
let categoriaAtiva = 'todos';

let pedidoAtual = {
    tipo: null,
    endereco: {},
    pagamento: null
};

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function () {

    renderizarProdutos();
    initFiltroCategorias();
    initNavbar();
    initCarrinho();
    initModal();
    initAjuda();

    atualizarCarrinhoUI();
});

// =====================================================
// PRODUTOS
// =====================================================

function renderizarProdutos(categoria = 'todos') {

    const lista = document.getElementById('produtosLista');

    if (!lista) return;

    const produtosFiltrados =
        categoria === 'todos'
            ? produtos
            : produtos.filter(p => p.categoria === categoria);

    if (produtosFiltrados.length === 0) {

        lista.innerHTML = `
            <p style="grid-column:1/-1;text-align:center;">
                Nenhum produto encontrado nesta categoria.
            </p>
        `;

        return;
    }

    lista.innerHTML = produtosFiltrados.map(produto => `

        <div class="produto-item" data-id="${produto.id}">

            <div class="produto-info">

                <span class="nome">
                    ${produto.nome}
                </span>

                ${produto.descricao
                    ? `<span class="descricao">${produto.descricao}</span>`
                    : ''
                }

                ${produto.lactose
                    ? `
                        <span class="lactose ${produto.lactose === 'Sem lactose' ? 'sem' : ''}">
                            ${produto.lactose}
                        </span>
                    `
                    : ''
                }

                <span class="preco">
                    R$ ${produto.preco}
                </span>

            </div>

            <div class="produto-actions">

                <div class="qtd-control">

                    <button
                        type="button"
                        class="qtd-btn"
                        data-id="${produto.id}"
                        data-delta="-1">
                        −
                    </button>

                    <span
                        class="qtd-value"
                        id="qtd-${produto.id}">
                        0
                    </span>

                    <button
                        type="button"
                        class="qtd-btn"
                        data-id="${produto.id}"
                        data-delta="1">
                        +
                    </button>

                </div>

                <button
                    type="button"
                    class="add-btn"
                    data-id="${produto.id}">
                    Adicionar
                </button>

            </div>

        </div>

    `).join('');

    lista.querySelectorAll('.qtd-btn').forEach(btn => {

        btn.addEventListener('click', function (e) {

            e.stopPropagation();

            const id =
                parseInt(this.dataset.id);

            const delta =
                parseInt(this.dataset.delta);

            const span =
                document.getElementById(`qtd-${id}`);

            let qtd =
                parseInt(span.textContent) || 0;

            qtd = Math.max(0, qtd + delta);

            span.textContent = qtd;
        });
    });

    lista.querySelectorAll('.add-btn').forEach(btn => {

        btn.addEventListener('click', function (e) {

            e.stopPropagation();

            const id =
                parseInt(this.dataset.id);

            const span =
                document.getElementById(`qtd-${id}`);

            const qtd =
                parseInt(span.textContent) || 0;

            if (qtd === 0) {

                mostrarToast(
                    'Selecione pelo menos 1 unidade.'
                );

                return;
            }

            const produto =
                produtos.find(p => p.id === id);

            if (!produto) return;

            adicionarAoCarrinho(produto, qtd);

            span.textContent = 0;

            mostrarToast(
                `${produto.nome} adicionado!`
            );
        });
    });
}

// =====================================================
// CATEGORIAS
// =====================================================

function initFiltroCategorias() {

    document
        .querySelectorAll('.categoria-tab')
        .forEach(tab => {

            tab.addEventListener('click', function () {

                document
                    .querySelectorAll('.categoria-tab')
                    .forEach(t =>
                        t.classList.remove('active')
                    );

                this.classList.add('active');

                categoriaAtiva =
                    this.dataset.categoria;

                renderizarProdutos(
                    categoriaAtiva
                );
            });
        });
}

// =====================================================
// CARRINHO
// =====================================================

function adicionarAoCarrinho(produto, qtd) {

    const existente =
        carrinho.find(item => item.id === produto.id);

    if (existente) {

        existente.qtd += qtd;

    } else {

        carrinho.push({
            ...produto,
            qtd
        });
    }

    atualizarCarrinhoUI();
}

function removerDoCarrinho(id) {

    carrinho =
        carrinho.filter(item => item.id !== id);

    atualizarCarrinhoUI();
}

function atualizarQtdCarrinho(id, delta) {

    const item =
        carrinho.find(i => i.id === id);

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

        return total +
            parseFloat(item.preco.replace(',', '.')) *
            item.qtd;

    }, 0);
}

function limparCarrinho() {

    carrinho = [];

    atualizarCarrinhoUI();
}

function atualizarCarrinhoUI() {

    const body =
        document.getElementById('cartBody');

    const footer =
        document.getElementById('cartFooter');

    const total =
        document.getElementById('cartTotal');

    const badge =
        document.getElementById('cartBadge');

    if (!body) return;

    const totalItems =
        carrinho.reduce(
            (sum, item) => sum + item.qtd,
            0
        );

    if (badge) {

        badge.textContent = totalItems;

        badge.style.display =
            totalItems > 0
                ? 'block'
                : 'none';
    }

    if (carrinho.length === 0) {

        body.innerHTML = `
            <div class="cart-empty">

                <span style="font-size:3rem;">
                    🛒
                </span>

                <p>
                    Seu pedido está vazio
                </p>

                <span>
                    Adicione seus salgados favoritos!
                </span>

            </div>
        `;

        if (footer) {
            footer.style.display = 'none';
        }

        return;
    }

    if (footer) {
        footer.style.display = 'block';
    }

    body.innerHTML = carrinho.map(item => `

        <div class="cart-item">

            <div class="cart-item-info">

                <div class="cart-item-name">
                    ${item.nome}
                </div>

                <div class="cart-item-detail">
                    ${item.qtd}x R$ ${item.preco}
                </div>

            </div>

            <div class="cart-item-actions">

                <button
                    type="button"
                    class="cart-item-qty-btn"
                    onclick="atualizarQtdCarrinho(${item.id}, -1)">
                    −
                </button>

                <span class="cart-item-qty">
                    ${item.qtd}
                </span>

                <button
                    type="button"
                    class="cart-item-qty-btn"
                    onclick="atualizarQtdCarrinho(${item.id}, 1)">
                    +
                </button>

                <button
                    type="button"
                    class="cart-item-remove"
                    onclick="removerDoCarrinho(${item.id})">
                    ✕
                </button>

            </div>

        </div>

    `).join('');

    if (total) {

        total.textContent =
            `R$ ${getTotalCarrinho()
                .toFixed(2)
                .replace('.', ',')}`;
    }
}

// =====================================================
// CARRINHO VISIBILIDADE
// =====================================================

function abrirCarrinho() {

    const cart =
        document.getElementById('cartSidebar');

    if (cart) {
        cart.classList.add('open');
    }
}

function fecharCarrinho() {

    const cart =
        document.getElementById('cartSidebar');

    if (cart) {
        cart.classList.remove('open');
    }
}

function toggleCarrinho() {

    const cart =
        document.getElementById('cartSidebar');

    if (cart) {
        cart.classList.toggle('open');
    }
}

function initCarrinho() {

    const float =
        document.getElementById('cartFloat');

    const close =
        document.getElementById('cartClose');

    const checkout =
        document.getElementById('cartCheckout');

    if (float) {
        float.addEventListener(
            'click',
            toggleCarrinho
        );
    }

    if (close) {
        close.addEventListener(
            'click',
            fecharCarrinho
        );
    }

    if (checkout) {
        checkout.addEventListener(
            'click',
            abrirModal
        );
    }

    document.addEventListener(
        'click',
        function (e) {

            const sidebar =
                document.getElementById('cartSidebar');

            const floatBtn =
                document.getElementById('cartFloat');

            if (
                sidebar &&
                floatBtn &&
                sidebar.classList.contains('open') &&
                !sidebar.contains(e.target) &&
                !floatBtn.contains(e.target)
            ) {

                fecharCarrinho();
            }
        }
    );
}

// =====================================================
// MODAL
// =====================================================

function abrirModal() {

    if (carrinho.length === 0) {

        mostrarToast(
            'Adicione itens ao carrinho primeiro!'
        );

        return;
    }

    const modal =
        document.getElementById('modalOverlay');

    if (!modal) return;

    modal.classList.add('active');

    ocultarTodosStepsModal();

    const step1 =
        document.getElementById('modalStep1');

    if (step1) {
        step1.style.display = 'block';
    }

    fecharCarrinho();
}

function fecharModal() {

    const modal =
        document.getElementById('modalOverlay');

    if (modal) {
        modal.classList.remove('active');
    }
}

function ocultarTodosStepsModal() {

    const ids = [
        'modalStep1',
        'modalStep3',
        'modalStep4',
        'modalStepResumo',
        'modalStepEvento'
    ];

    ids.forEach(id => {

        const element =
            document.getElementById(id);

        if (element) {
            element.style.display = 'none';
        }
    });
}

// =====================================================
// INICIALIZAÇÃO DO MODAL
// =====================================================

function initModal() {

    const modalOverlay =
        document.getElementById('modalOverlay');

    const modalClose =
        document.getElementById('modalClose');

    if (modalClose) {

        modalClose.addEventListener(
            'click',
            fecharModal
        );
    }

    if (modalOverlay) {

        modalOverlay.addEventListener(
            'click',
            function (e) {

                if (e.target === this) {
                    fecharModal();
                }
            }
        );
    }

    // ===== ENTREGA / RETIRADA / AGENDADO =====

    document
        .querySelectorAll('.delivery-option')
        .forEach(btn => {

            btn.addEventListener(
                'click',
                function () {

                    const tipo =
                        this.dataset.tipo;

                    pedidoAtual.tipo = tipo;

                    ocultarTodosStepsModal();

                    if (tipo === 'retirada') {

                        document
                            .getElementById('modalStep4')
                            .style.display = 'block';

                    } else if (tipo === 'entrega') {

                        document
                            .getElementById('modalStep3')
                            .style.display = 'block';

                    } else if (tipo === 'agendado') {

                        exibirFormularioEvento();
                    }
                }
            );
        });

    // ===== CONFIRMAR ENDEREÇO =====

    const btnEndereco =
        document.getElementById(
            'modalEnderecoConfirmar'
        );

    if (btnEndereco) {

        btnEndereco.addEventListener(
            'click',
            confirmarEndereco
        );
    }

    // ===== PAGAMENTO =====

    document
        .querySelectorAll('.pagamento-btn')
        .forEach(btn => {

            btn.addEventListener(
                'click',
                function () {

                    document
                        .querySelectorAll('.pagamento-btn')
                        .forEach(b =>
                            b.classList.remove('active')
                        );

                    this.classList.add('active');

                    pedidoAtual.pagamento =
                        this.dataset.pagamento;

                    const info =
                        document.getElementById(
                            'modalPagamentoSelecionado'
                        );

                    if (info) {

                        info.style.display = 'block';

                        info.textContent =
                            `Forma de pagamento selecionada: ${pedidoAtual.pagamento}`;
                    }

                    // IMPORTANTE:
                    // cria o botão de finalizar
                    criarBotaoFinalizar();
                }
            );
        });

    // Caso o HTML já tenha o botão
    const btnEnviar =
        document.getElementById(
            'modalEnviarPedido'
        );

    if (btnEnviar) {

        btnEnviar.addEventListener(
            'click',
            function (e) {

                e.preventDefault();

                mostrarResumoPedido();
            }
        );
    }
}

// =====================================================
// BOTÃO FINALIZAR PEDIDO
// =====================================================

function criarBotaoFinalizar() {

    const step4 =
        document.getElementById('modalStep4');

    if (!step4) return;

    let container =
        document.getElementById(
            'containerFinalizarPedido'
        );

    if (!container) {

        container =
            document.createElement('div');

        container.id =
            'containerFinalizarPedido';

        container.style.marginTop =
            '20px';

        step4.appendChild(container);
    }

    container.innerHTML = `

        <button
            type="button"
            id="btnFinalizarPedido"
            class="btn btn-primary btn-full"
            style="
                width:100%;
                margin-top:15px;
                padding:14px;
                font-size:16px;
                cursor:pointer;
            ">

            ✅ FINALIZAR PEDIDO

        </button>
    `;

    const btn =
        document.getElementById(
            'btnFinalizarPedido'
        );

    btn.addEventListener(
        'click',
        function () {

            if (!pedidoAtual.pagamento) {

                alert(
                    'Selecione uma forma de pagamento.'
                );

                return;
            }

            mostrarResumoPedido();
        }
    );
}

// =====================================================
// CONFIRMAR ENDEREÇO
// =====================================================

function confirmarEndereco() {

    const rua =
        document.getElementById(
            'modalEnderecoRua'
        )?.value.trim();

    const numero =
        document.getElementById(
            'modalEnderecoNumero'
        )?.value.trim();

    const bairro =
        document.getElementById(
            'modalEnderecoBairro'
        )?.value.trim();

    if (!rua || !numero || !bairro) {

        alert(
            'Por favor, preencha Rua, Número e Bairro.'
        );

        return;
    }

    const bairroFormatado =
        bairro.toLowerCase().trim();

    const possuiTaxaFixa =
        BAIRROS_TAXA_FIXA.includes(
            bairroFormatado
        );

    pedidoAtual.endereco = {

        rua,

        numero,

        complemento:
            document.getElementById(
                'modalEnderecoComplemento'
            )?.value.trim() || '',

        bairro,

        cidade:
            'Parnaíba - PI',

        referencia:
            document.getElementById(
                'modalEnderecoReferencia'
            )?.value.trim() || '',

        taxaFixa:
            possuiTaxaFixa,

        valorTaxa:
            possuiTaxaFixa
                ? 10
                : 0
    };

    ocultarTodosStepsModal();

    const step4 =
        document.getElementById(
            'modalStep4'
        );

    if (step4) {

        step4.style.display =
            'block';
    }

    // Se o pagamento já estiver selecionado,
    // garante que o botão apareça
    if (pedidoAtual.pagamento) {
        criarBotaoFinalizar();
    }
}

// =====================================================
// RESUMO / RECIBO
// =====================================================

function mostrarResumoPedido() {

    if (carrinho.length === 0) {

        mostrarToast(
            'Seu pedido está vazio.'
        );

        return;
    }

    if (!pedidoAtual.pagamento) {

        alert(
            'Selecione uma forma de pagamento.'
        );

        return;
    }

    const subtotal =
        getTotalCarrinho();

    let taxa = 0;
    let textoTaxa = 'R$ 0,00';

    if (pedidoAtual.tipo === 'entrega') {

        if (pedidoAtual.endereco.taxaFixa) {

            taxa =
                pedidoAtual.endereco.valorTaxa;

            textoTaxa =
                `R$ ${taxa
                    .toFixed(2)
                    .replace('.', ',')}`;

        } else {

            textoTaxa =
                'A calcular';
        }
    }

    const total =
        subtotal + taxa;

    let step =
        document.getElementById(
            'modalStepResumo'
        );

    if (!step) {

        step =
            document.createElement('div');

        step.id =
            'modalStepResumo';

        step.className =
            'modal-step';

        document
            .querySelector('.modal-content')
            .appendChild(step);
    }

    step.innerHTML = `

        <h3>
            📋 Finalizar Pedido
        </h3>

        <p style="
            color:var(--text-light);
            margin-bottom:18px;
        ">
            Confira os dados do seu pedido antes de enviar.
        </p>

        <div class="resumo-pedido">

            <div class="resumo-section">

                <strong>🛒 Itens do pedido</strong>

                ${carrinho.map(item => {

                    const subtotalItem =
                        parseFloat(
                            item.preco.replace(',', '.')
                        ) * item.qtd;

                    return `

                        <div class="resumo-item"
                            style="
                                display:flex;
                                justify-content:space-between;
                                gap:10px;
                                padding:10px 0;
                                border-bottom:1px solid #eee;
                            ">

                            <div>

                                <strong>
                                    ${item.qtd}x ${item.nome}
                                </strong>

                                <small style="
                                    display:block;
                                    color:#777;
                                ">
                                    R$ ${item.preco} cada
                                </small>

                            </div>

                            <strong>
                                R$ ${subtotalItem
                                    .toFixed(2)
                                    .replace('.', ',')}
                            </strong>

                        </div>
                    `;

                }).join('')}

            </div>

            <div style="
                margin-top:15px;
                padding:15px;
                background:#f8f8f8;
                border-radius:10px;
            ">

                <div style="
                    display:flex;
                    justify-content:space-between;
                    margin-bottom:8px;
                ">
                    <span>Subtotal</span>
                    <strong>
                        R$ ${subtotal
                            .toFixed(2)
                            .replace('.', ',')}
                    </strong>
                </div>

                <div style="
                    display:flex;
                    justify-content:space-between;
                    margin-bottom:8px;
                ">

                    <span>Taxa de entrega</span>

                    <strong>
                        ${textoTaxa}
                    </strong>

                </div>

                <div style="
                    display:flex;
                    justify-content:space-between;
                    font-size:1.2rem;
                    padding-top:10px;
                    border-top:1px solid #ddd;
                ">

                    <strong>TOTAL</strong>

                    <strong>
                        R$ ${total
                            .toFixed(2)
                            .replace('.', ',')}
                    </strong>

                </div>

            </div>

            <div style="
                margin-top:15px;
                padding:12px;
                border-radius:8px;
                background:#f8f8f8;
            ">

                <strong>
                    💳 Forma de pagamento
                </strong>

                <p style="margin:5px 0 0;">
                    ${pedidoAtual.pagamento}
                </p>

            </div>

            ${
                pedidoAtual.tipo === 'retirada'
                    ? `
                        <div style="
                            margin-top:15px;
                            padding:12px;
                            background:#f8f8f8;
                            border-radius:8px;
                        ">

                            <strong>
                                📦 Retirada na loja
                            </strong>

                            <p>
                                ${CONFIG_ENV.endereco}
                            </p>

                        </div>
                    `
                    : ''
            }

            ${
                pedidoAtual.tipo === 'entrega'
                    ? `

                        <div style="
                            margin-top:15px;
                            padding:12px;
                            background:#f8f8f8;
                            border-radius:8px;
                        ">

                            <strong>
                                🛵 Endereço de entrega
                            </strong>

                            <p>
                                ${pedidoAtual.endereco.rua},
                                Nº ${pedidoAtual.endereco.numero}
                                ${
                                    pedidoAtual.endereco.complemento
                                        ? ` - ${pedidoAtual.endereco.complemento}`
                                        : ''
                                }
                            </p>

                            <p>
                                ${pedidoAtual.endereco.bairro}
                                -
                                ${pedidoAtual.endereco.cidade}
                            </p>

                            ${
                                pedidoAtual.endereco.referencia
                                    ? `
                                        <p>
                                            Referência:
                                            ${pedidoAtual.endereco.referencia}
                                        </p>
                                    `
                                    : ''
                            }

                        </div>

                    `
                    : ''
            }

            ${
                pedidoAtual.tipo === 'entrega' &&
                !pedidoAtual.endereco.taxaFixa
                    ? `
                        <div style="
                            margin-top:12px;
                            padding:12px;
                            background:#fff3cd;
                            border-radius:8px;
                            color:#856404;
                        ">
                            ⚠️ A taxa de entrega será
                            confirmada pelo atendimento.
                        </div>
                    `
                    : ''
            }

        </div>

        <div style="
            margin-top:20px;
            display:flex;
            flex-direction:column;
            gap:10px;
        ">

            <button
                type="button"
                id="btnVoltarResumo"
                class="btn btn-secondary btn-full">

                ← Voltar e editar

            </button>

            <button
                type="button"
                id="btnConfirmarWhatsApp"
                class="btn btn-primary btn-full"
                style="
                    padding:15px;
                    font-size:16px;
                ">

                📲 CONFIRMAR E ENVIAR PELO WHATSAPP

            </button>

        </div>
    `;

    ocultarTodosStepsModal();

    step.style.display =
        'block';

    // ===== VOLTAR =====

    document
        .getElementById('btnVoltarResumo')
        .addEventListener(
            'click',
            function () {

                ocultarTodosStepsModal();

                const step4 =
                    document.getElementById(
                        'modalStep4'
                    );

                if (step4) {

                    step4.style.display =
                        'block';
                }

                criarBotaoFinalizar();
            }
        );

    // ===== CONFIRMAR WHATSAPP =====

    document
        .getElementById('btnConfirmarWhatsApp')
        .addEventListener(
            'click',
            confirmarEEnviarPedido
        );
}

// =====================================================
// ENVIAR PEDIDO PARA WHATSAPP
// =====================================================

function confirmarEEnviarPedido() {

    if (carrinho.length === 0) {

        mostrarToast(
            'Seu carrinho está vazio.'
        );

        return;
    }

    if (!pedidoAtual.pagamento) {

        alert(
            'Selecione a forma de pagamento.'
        );

        return;
    }

    let message =
        '🍽️ *NOVO PEDIDO - LE GUST SALGADERIA*\n\n';

    message +=
        '📋 *ITENS DO PEDIDO:*\n';

    let subtotalProdutos = 0;

    carrinho.forEach(item => {

        const preco =
            parseFloat(
                item.preco.replace(',', '.')
            );

        const subtotal =
            preco * item.qtd;

        subtotalProdutos +=
            subtotal;

        message +=
            `• ${item.qtd}x ${item.nome} = R$ ${
                subtotal
                    .toFixed(2)
                    .replace('.', ',')
            }\n`;
    });

    message +=
        `\n💵 *SUBTOTAL:* R$ ${
            subtotalProdutos
                .toFixed(2)
                .replace('.', ',')
        }\n`;

    // ===== RETIRADA =====

    if (pedidoAtual.tipo === 'retirada') {

        message +=
            '\n📦 *OPÇÃO:* RETIRADA NA LOJA\n';

        message +=
            `📍 *ENDEREÇO:* ${CONFIG_ENV.endereco}\n`;

        message +=
            `💰 *TOTAL:* R$ ${
                subtotalProdutos
                    .toFixed(2)
                    .replace('.', ',')
            }\n`;
    }

    // ===== ENTREGA =====

    if (pedidoAtual.tipo === 'entrega') {

        const end =
            pedidoAtual.endereco;

        message +=
            '\n🛵 *OPÇÃO:* ENTREGA EM CASA\n';

        message +=
            '\n📍 *ENDEREÇO DE ENTREGA:*\n';

        message +=
            `Rua: ${end.rua}, Nº ${end.numero}\n`;

        if (end.complemento) {

            message +=
                `Complemento: ${end.complemento}\n`;
        }

        message +=
            `Bairro: ${end.bairro}\n`;

        message +=
            `Cidade: ${end.cidade}\n`;

        if (end.referencia) {

            message +=
                `Referência: ${end.referencia}\n`;
        }

        if (end.taxaFixa) {

            const totalFinal =
                subtotalProdutos +
                end.valorTaxa;

            message +=
                `\n🛵 *TAXA DE ENTREGA:* R$ 10,00\n`;

            message +=
                `💰 *TOTAL FINAL:* R$ ${
                    totalFinal
                        .toFixed(2)
                        .replace('.', ',')
                }\n`;

        } else {

            message +=
                '\n🛵 *TAXA DE ENTREGA:* A CALCULAR\n';

            message +=
                '⚠️ A taxa será confirmada pelo atendimento.\n';

            message +=
                `💰 *TOTAL PARCIAL:* R$ ${
                    subtotalProdutos
                        .toFixed(2)
                        .replace('.', ',')
                }\n`;
        }
    }

    message +=
        `💳 *FORMA DE PAGAMENTO:* ${
            pedidoAtual.pagamento
        }\n`;

    message +=
        '\n━━━━━━━━━━━━━━━━━━\n';

    message +=
        '✅ *PEDIDO REALIZADO PELO SITE*\n';

    message +=
        'Aguardando confirmação da Le Gust.';

    // Abre WhatsApp
    openWhatsApp(message);

    // Limpa pedido
    limparCarrinho();

    pedidoAtual = {
        tipo: null,
        endereco: {},
        pagamento: null
    };

    fecharModal();

    mostrarToast(
        'Pedido enviado para o WhatsApp!'
    );
}

// =====================================================
// EVENTOS / ENCOMENDAS
// =====================================================

function exibirFormularioEvento() {

    let containerEvento =
        document.getElementById(
            'modalStepEvento'
        );

    if (!containerEvento) {

        containerEvento =
            document.createElement('div');

        containerEvento.id =
            'modalStepEvento';

        containerEvento.className =
            'modal-step';

        containerEvento.innerHTML = `

            <h3>
                🎉 Agendamento de Evento
            </h3>

            <p style="
                color:var(--text-light);
                margin-bottom:12px;
            ">
                Preencha os dados do evento
                para enviarmos seu orçamento.
            </p>

            <div class="form-group">

                <label>
                    Tipo do Evento *
                </label>

                <input
                    type="text"
                    id="eventoTipo"
                    placeholder="Ex: Aniversário, Casamento, Reunião"
                    required
                />

            </div>

            <div class="form-group">

                <label>
                    Quantidade total de salgados *
                </label>

                <input
                    type="number"
                    id="eventoQtdSalgados"
                    placeholder="Ex: 200"
                    required
                />

            </div>

            <div class="form-group">

                <label>
                    Data e Horário *
                </label>

                <input
                    type="datetime-local"
                    id="eventoDataHora"
                    required
                />

            </div>

            <div class="form-group">

                <label>
                    Local / Bairro do Evento *
                </label>

                <input
                    type="text"
                    id="eventoLocal"
                    placeholder="Ex: Salão de Festas - Centro"
                    required
                />

            </div>

            <button
                type="button"
                class="btn btn-primary btn-full"
                id="btnEnviarEvento">

                📲 SOLICITAR ORÇAMENTO NO WHATSAPP

            </button>
        `;

        document
            .querySelector('.modal-content')
            .appendChild(containerEvento);

        document
            .getElementById('btnEnviarEvento')
            .addEventListener(
                'click',
                enviarPedidoEvento
            );
    }

    containerEvento.style.display =
        'block';
}

function enviarPedidoEvento() {

    const tipo =
        document
            .getElementById('eventoTipo')
            .value.trim();

    const qtd =
        document
            .getElementById('eventoQtdSalgados')
            .value.trim();

    const dataHora =
        document
            .getElementById('eventoDataHora')
            .value;

    const local =
        document
            .getElementById('eventoLocal')
            .value.trim();

    if (!tipo || !qtd || !dataHora || !local) {

        alert(
            'Por favor, preencha todos os campos do evento.'
        );

        return;
    }

    const dataFormatada =
        new Date(dataHora)
            .toLocaleString('pt-BR');

    let msg =
        '🎉 *ORÇAMENTO PARA EVENTO - LE GUST SALGADERIA*\n\n';

    msg +=
        `🎈 *Tipo do Evento:* ${tipo}\n`;

    msg +=
        `🥟 *Quantidade:* ${qtd} salgados\n`;

    msg +=
        `📅 *Data e Horário:* ${dataFormatada}\n`;

    msg +=
        `📍 *Local:* ${local}\n\n`;

    msg +=
        'Aguardando confirmação de valores e disponibilidade!';

    openWhatsApp(msg);

    fecharModal();

    mostrarToast(
        'Solicitação enviada!'
    );
}

// =====================================================
// AJUDA
// =====================================================

function initAjuda() {

    const btn =
        document.getElementById(
            'ajudaDelivery'
        );

    if (!btn) return;

    btn.addEventListener(
        'click',
        function () {

            openWhatsApp(
                'Olá! Vim pelo site da Le Gust Salgaderia e preciso de ajuda com meu pedido.'
            );
        }
    );
}

// =====================================================
// NAVBAR
// =====================================================

function initNavbar() {

    const toggle =
        document.getElementById(
            'menuToggle'
        );

    const menu =
        document.getElementById(
            'navMenu'
        );

    if (!toggle || !menu) return;

    toggle.addEventListener(
        'click',
        () =>
            menu.classList.toggle('open')
    );

    document
        .querySelectorAll('.nav-menu a')
        .forEach(link => {

            link.addEventListener(
                'click',
                () =>
                    menu.classList.remove('open')
            );
        });
}

// =====================================================
// WHATSAPP
// =====================================================

function openWhatsApp(message) {

    const numero =
        CONFIG_ENV.whatsapp;

    const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;

    window.open(
        url,
        '_blank'
    );
}

// =====================================================
// TOAST
// =====================================================

function mostrarToast(message) {

    const existing =
        document.querySelector('.toast');

    if (existing) {
        existing.remove();
    }

    const toast =
        document.createElement('div');

    toast.className =
        'toast';

    toast.innerHTML =
        `<span>✅</span> ${message}`;

    document.body.appendChild(toast);

    setTimeout(
        () =>
            toast.classList.add('show'),
        10
    );

    setTimeout(
        () => {

            toast.classList.remove('show');

            setTimeout(
                () => toast.remove(),
                400
            );

        },
        2500
    );
}