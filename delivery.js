// ===== CONFIGURAÇÃO DE AMBIENTE / FALLBACKS =====
const CONFIG_ENV = window.CONFIG || {
    whatsapp: "5586999999999", // Altere para o seu número de WhatsApp com DDD
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

// ===== LISTA DE BAIRROS COM TAXA FIXA (R$ 10,00) =====
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
    "nossa senhora do carmo", "campos", "nova parnaíba", "nova parnaiba", "beira rio"
];

// ===== ESTADO DA APLICAÇÃO =====
let carrinho = [];
let categoriaAtiva = 'todos';
let pedidoAtual = {
    tipo: null,
    endereco: {},
    pagamento: null
};

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    renderizarProdutos();
    initFiltroCategorias();
    initNavbar();
    initCarrinho();
    initModal();
    initAjuda();
});

// ===== RENDERIZAR PRODUTOS =====
function renderizarProdutos(categoria = 'todos') {
    const lista = document.getElementById('produtosLista');
    if (!lista) return;

    const produtosFiltrados = categoria === 'todos' 
        ? produtos 
        : produtos.filter(p => p.categoria === categoria);

    if (produtosFiltrados.length === 0) {
        lista.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-light);">Nenhum produto encontrado nesta categoria.</p>`;
        return;
    }

    lista.innerHTML = produtosFiltrados.map(produto => `
        <div class="produto-item" data-id="${produto.id}">
            <div class="produto-info">
                <span class="nome">${produto.nome}</span>
                ${produto.descricao ? `<span class="descricao">${produto.descricao}</span>` : ''}
                ${produto.lactose ? `<span class="lactose ${produto.lactose === 'Sem lactose' ? 'sem' : ''}">${produto.lactose}</span>` : ''}
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
    `).join('');

    // Eventos de quantidade
    lista.querySelectorAll('.qtd-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.getAttribute('data-id'));
            const delta = parseInt(this.getAttribute('data-delta'));
            const span = document.getElementById(`qtd-${id}`);
            let current = parseInt(span.textContent) || 0;
            current = Math.max(0, current + delta);
            span.textContent = current;
        });
    });

    // Eventos de adicionar
    lista.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.getAttribute('data-id'));
            const span = document.getElementById(`qtd-${id}`);
            const qtd = parseInt(span.textContent) || 0;
            
            if (qtd === 0) {
                mostrarToast('Selecione pelo menos 1 unidade.');
                return;
            }

            const produto = produtos.find(p => p.id === id);
            if (!produto) return;

            adicionarAoCarrinho(produto, qtd);
            span.textContent = 0;
            mostrarToast(`${produto.nome} adicionado!`);
        });
    });
}

// ===== FILTRO DE CATEGORIAS =====
function initFiltroCategorias() {
    document.querySelectorAll('.categoria-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.categoria-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            categoriaAtiva = this.getAttribute('data-categoria');
            renderizarProdutos(categoriaAtiva);
        });
    });
}

// ===== CARRINHO =====
function adicionarAoCarrinho(produto, qtd) {
    const existing = carrinho.find(item => item.id === produto.id);
    if (existing) {
        existing.qtd += qtd;
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
    if (item) {
        item.qtd += delta;
        if (item.qtd <= 0) {
            removerDoCarrinho(id);
        } else {
            atualizarCarrinhoUI();
        }
    }
}

function getTotalCarrinho() {
    return carrinho.reduce((total, item) => {
        return total + (parseFloat(item.preco.replace(',', '.')) * item.qtd);
    }, 0);
}

function limparCarrinho() {
    carrinho = [];
    atualizarCarrinhoUI();
}

function atualizarCarrinhoUI() {
    const body = document.getElementById('cartBody');
    const footer = document.getElementById('cartFooter');
    const total = document.getElementById('cartTotal');
    const badge = document.getElementById('cartBadge');

    const totalItems = carrinho.reduce((sum, item) => sum + item.qtd, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'block' : 'none';

    if (carrinho.length === 0) {
        body.innerHTML = `
            <div class="cart-empty">
                <span style="font-size:3rem;">🛒</span>
                <p>Seu pedido está vazio</p>
                <span>Adicione seus salgados favoritos!</span>
            </div>
        `;
        footer.style.display = 'none';
        return;
    }

    footer.style.display = 'block';

    body.innerHTML = carrinho.map(item => `
        <div class="cart-item">
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
    `).join('');

    total.textContent = `R$ ${getTotalCarrinho().toFixed(2).replace('.', ',')}`;
}

// ===== CARRINHO - CONTROLES DE VISIBILIDADE =====
function abrirCarrinho() {
    document.getElementById('cartSidebar').classList.add('open');
}

function fecharCarrinho() {
    document.getElementById('cartSidebar').classList.remove('open');
}

function toggleCarrinho() {
    document.getElementById('cartSidebar').classList.toggle('open');
}

function initCarrinho() {
    document.getElementById('cartFloat').addEventListener('click', toggleCarrinho);
    document.getElementById('cartClose').addEventListener('click', fecharCarrinho);
    document.getElementById('cartCheckout').addEventListener('click', abrirModal);

    document.addEventListener('click', function(e) {
        const sidebar = document.getElementById('cartSidebar');
        const float = document.getElementById('cartFloat');
        if (sidebar && float && sidebar.classList.contains('open') && 
            !sidebar.contains(e.target) && !float.contains(e.target)) {
            fecharCarrinho();
        }
    });
}

// ===== MODAL E FLUXO DE CHECKOUT =====
function abrirModal() {
    if (carrinho.length === 0) {
        mostrarToast('Adicione itens ao carrinho primeiro!');
        return;
    }
    document.getElementById('modalOverlay').classList.add('active');
    ocultarTodosStepsModal();
    document.getElementById('modalStep1').style.display = 'block';
    fecharCarrinho();
}

function fecharModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

function ocultarTodosStepsModal() {
    document.getElementById('modalStep1').style.display = 'none';
    document.getElementById('modalStep3').style.display = 'none';
    document.getElementById('modalStep4').style.display = 'none';
    const stepEvento = document.getElementById('modalStepEvento');
    if (stepEvento) stepEvento.style.display = 'none';
}

function initModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');

    if (modalClose) modalClose.addEventListener('click', fecharModal);
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) fecharModal();
        });
    }

    // Seleção da Opção de Entrega (Step 1)
    document.querySelectorAll('.delivery-option').forEach(btn => {
        btn.addEventListener('click', function() {
            const tipo = this.getAttribute('data-tipo');
            pedidoAtual.tipo = tipo;

            ocultarTodosStepsModal();

            if (tipo === 'retirada') {
                document.getElementById('modalStep4').style.display = 'block';
            } else if (tipo === 'entrega') {
                document.getElementById('modalStep3').style.display = 'block';
            } else if (tipo === 'agendado') {
                exibirFormularioEvento();
            }
        });
    });

    // Confirmar Endereço
    const btnConfirmarEndereco = document.getElementById('modalEnderecoConfirmar');
    if (btnConfirmarEndereco) {
        btnConfirmarEndereco.addEventListener('click', confirmarEndereco);
    }

    // Seleção de Pagamento
    document.querySelectorAll('.pagamento-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.pagamento-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            pedidoAtual.pagamento = this.getAttribute('data-pagamento');
            
            const infoPag = document.getElementById('modalPagamentoSelecionado');
            if (infoPag) {
                infoPag.style.display = 'block';
                infoPag.textContent = `Forma de pagamento selecionada: ${pedidoAtual.pagamento}`;
            }
        });
    });

    // Enviar Pedido
    const btnEnviar = document.getElementById('modalEnviarPedido');
    if (btnEnviar) btnEnviar.addEventListener('click', enviarPedido);
}

// ===== CONFIRMAR ENDEREÇO DE ENTREGA =====
function confirmarEndereco() {
    const rua = document.getElementById('modalEnderecoRua').value.trim();
    const numero = document.getElementById('modalEnderecoNumero').value.trim();
    const bairro = document.getElementById('modalEnderecoBairro').value.trim();

    if (!rua || !numero || !bairro) {
        alert('Por favor, preencha os campos obrigatórios: Rua, Número e Bairro.');
        return;
    }

    const bairroFormatado = bairro.toLowerCase().trim();
    const possuiTaxaFixa = BAIRROS_TAXA_FIXA.includes(bairroFormatado);

    pedidoAtual.endereco = {
        rua: rua,
        numero: numero,
        complemento: document.getElementById('modalEnderecoComplemento').value.trim(),
        bairro: bairro,
        cidade: 'Parnaíba - PI',
        referencia: document.getElementById('modalEnderecoReferencia').value.trim(),
        taxaFixa: possuiTaxaFixa,
        valorTaxa: possuiTaxaFixa ? 10.00 : 0.00
    };

    ocultarTodosStepsModal();
    document.getElementById('modalStep4').style.display = 'block';
}

// ===== ESTRUTURA PARA EVENTOS / ENCOMENDAS =====
function exibirFormularioEvento() {
    let containerEvento = document.getElementById('modalStepEvento');
    if (!containerEvento) {
        containerEvento = document.createElement('div');
        containerEvento.id = 'modalStepEvento';
        containerEvento.className = 'modal-step';
        containerEvento.innerHTML = `
            <h3>🎉 Agendamento de Evento</h3>
            <p style="color: var(--text-light); margin-bottom:12px; font-size: 0.9rem;">
                Preencha os dados do evento para enviarmos seu orçamento:
            </p>
            <div class="form-group" style="margin-bottom:10px;">
                <label style="display:block; font-weight:bold; margin-bottom:4px;">Tipo do Evento *</label>
                <input type="text" id="eventoTipo" placeholder="Ex: Aniversário, Casamento, Reunião" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;" required />
            </div>
            <div class="form-group" style="margin-bottom:10px;">
                <label style="display:block; font-weight:bold; margin-bottom:4px;">Quantidade total de salgados *</label>
                <input type="number" id="eventoQtdSalgados" placeholder="Ex: 200" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;" required />
            </div>
            <div class="form-group" style="margin-bottom:10px;">
                <label style="display:block; font-weight:bold; margin-bottom:4px;">Data e Horário *</label>
                <input type="datetime-local" id="eventoDataHora" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;" required />
            </div>
            <div class="form-group" style="margin-bottom:16px;">
                <label style="display:block; font-weight:bold; margin-bottom:4px;">Local / Bairro do Evento *</label>
                <input type="text" id="eventoLocal" placeholder="Ex: Salão de Festas - Bairro Centro" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;" required />
            </div>
            <button type="button" class="btn btn-primary btn-full" id="btnEnviarEvento">
                📲 SOLICITAR ORÇAMENTO NO WHATSAPP
            </button>
        `;
        document.querySelector('.modal-content').appendChild(containerEvento);
        document.getElementById('btnEnviarEvento').addEventListener('click', enviarPedidoEvento);
    }

    containerEvento.style.display = 'block';
}

function enviarPedidoEvento() {
    const tipo = document.getElementById('eventoTipo').value.trim();
    const qtd = document.getElementById('eventoQtdSalgados').value.trim();
    const dataHora = document.getElementById('eventoDataHora').value;
    const local = document.getElementById('eventoLocal').value.trim();

    if (!tipo || !qtd || !dataHora || !local) {
        alert('Por favor, preencha todos os campos do evento.');
        return;
    }

    const dataFormatada = new Date(dataHora).toLocaleString('pt-BR');

    let msg = `🎉 *ORÇAMENTO PARA EVENTO - LE GUST SALGADERIA*\n\n`;
    msg += `🎈 *Tipo do Evento:* ${tipo}\n`;
    msg += `🥟 *Quantidade desejada:* ${qtd} salgados\n`;
    msg += `📅 *Data e Horário:* ${dataFormatada}\n`;
    msg += `📍 *Local do Evento:* ${local}\n\n`;
    msg += `Aguardando confirmação de valores e disponibilidade!`;

    openWhatsApp(msg);
    fecharModal();
    mostrarToast('Solicitação de evento enviada! 🥳');
}

// ===== ENVIAR PEDIDO VIA WHATSAPP =====
function enviarPedido() {
    if (!pedidoAtual.pagamento) {
        alert('Selecione a forma de pagamento.');
        return;
    }

    let message = '🍽️ *NOVO PEDIDO - LE GUST SALGADERIA*\n\n';
    message += `📋 *ITENS DO PEDIDO:*\n`;

    let subtotalProdutos = 0;
    carrinho.forEach(item => {
        const subtotal = parseFloat(item.preco.replace(',', '.')) * item.qtd;
        subtotalProdutos += subtotal;
        message += `• ${item.qtd}x ${item.nome} = R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    });

    message += `\n💵 *Subtotal dos Produtos:* R$ ${subtotalProdutos.toFixed(2).replace('.', ',')}\n`;

    if (pedidoAtual.tipo === 'retirada') {
        message += `📦 *OPÇÃO:* RETIRADA NA LOJA\n`;
        message += `📍 *Endereço para Retirada:* ${CONFIG_ENV.endereco}\n`;
        message += `💰 *TOTAL A PAGAR:* R$ ${subtotalProdutos.toFixed(2).replace('.', ',')}\n`;
        message += `💳 *FORMA DE PAGAMENTO:* ${pedidoAtual.pagamento}\n`;
    } 
    else if (pedidoAtual.tipo === 'entrega') {
        const end = pedidoAtual.endereco;
        message += `🛵 *OPÇÃO:* ENTREGA EM CASA\n\n`;
        message += `📍 *ENDEREÇO DE ENTREGA:*\n`;
        message += `Rua: ${end.rua}, Nº ${end.numero}\n`;
        if (end.complemento) message += `Complemento: ${end.complemento}\n`;
        message += `Bairro: ${end.bairro}\n`;
        message += `Cidade: ${end.cidade}\n`;
        if (end.referencia) message += `Referência: ${end.referencia}\n\n`;

        if (end.taxaFixa) {
            const totalComTaxa = subtotalProdutos + end.valorTaxa;
            message += `🛵 *Taxa de Entrega:* R$ 10,00\n`;
            message += `💰 *TOTAL FINAL:* R$ ${totalComTaxa.toFixed(2).replace('.', ',')}\n`;
        } else {
            message += `🛵 *Taxa de Entrega:* A calcular\n`;
            message += `⚠️ por favor aguardar a confirmaçao para local de entrega\n`;
            message += `💰 *TOTAL PARCIAL (SEM TAXA):* R$ ${subtotalProdutos.toFixed(2).replace('.', ',')}\n`;
        }

        message += `💳 *FORMA DE PAGAMENTO:* ${pedidoAtual.pagamento}\n`;
    }

    message += `\n✅ *Aguardando confirmação do pedido.*`;

    openWhatsApp(message);
    limparCarrinho();
    fecharModal();
    mostrarToast('Pedido enviado com sucesso! 🎉');
}

// ===== NAVEGAÇÃO E AUXILIARES =====
function initAjuda() {
    const btnAjuda = document.getElementById('ajudaDelivery');
    if (btnAjuda) {
        btnAjuda.addEventListener('click', () => {
            openWhatsApp('Olá! Vim pelo site da Le Gust Salgaderia e preciso de ajuda com meu pedido.');
        });
    }
}

function initNavbar() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('navMenu');
    if (toggle && menu) {
        toggle.addEventListener('click', () => menu.classList.toggle('open'));
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => menu.classList.remove('open'));
        });
    }
}

function openWhatsApp(message) {
    const url = `https://wa.me/${CONFIG_ENV.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function mostrarToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✅</span> ${message}`;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}