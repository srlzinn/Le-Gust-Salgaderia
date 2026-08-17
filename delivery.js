// ===== DADOS DOS PRODUTOS (ordem igual ao Anota.ai) =====
const produtos = [
    { id: 1, nome: 'Bolinha de queijo 25 unidades', descricao: '25 unidades de salgados variados não disponibiliza escolha de sabores...', lactose: 'Contém Lactose', preco: '17,00', categoria: 'salgados' },
    { id: 2, nome: 'Bolinha de carne seca 25 unidades', descricao: '25 unidades de carne seca variadas.', lactose: 'Contém Lactose', preco: '17,00', categoria: 'salgados' },
    { id: 3, nome: 'Enroladinho de salsicha 25 unidades', descricao: '', lactose: 'Contém Lactose', preco: '17,00', categoria: 'salgados' },
    { id: 4, nome: 'Mini churros de doce de leite 25 unidades', descricao: '', lactose: 'Contém Lactose', preco: '17,00', categoria: 'salgados' },
    { id: 5, nome: 'Cigarrate de calabresa 25 unidades', descricao: '', lactose: 'Contém Lactose', preco: '17,00', categoria: 'salgados' },
    { id: 6, nome: 'Coxinha de frango 25 unidades', descricao: '', lactose: 'Contém Lactose', preco: '17,00', categoria: 'salgados' },
    { id: 7, nome: 'Mix Le\'gust 25 unidades', descricao: '25 unidades de salgados variados não disponibiliza escolha de sabores...', lactose: 'Contém Lactose', preco: '17,00', categoria: 'salgados' },
    { id: 8, nome: 'Travesseiro de presunto e queijo 25 unidades', descricao: '', lactose: 'Contém Lactose', preco: '17,00', categoria: 'salgados' },
    { id: 9, nome: 'Pastel de carne moída 25 unidades', descricao: '', lactose: 'Sem lactose', preco: '17,00', categoria: 'salgados' },
    { id: 10, nome: 'Quibe com queijo e catapiry 25 unidades', descricao: '', lactose: 'Contém Lactose', preco: '17,00', categoria: 'salgados' },
    { id: 11, nome: 'Bolinho de carne moída 25 unidades', descricao: '', lactose: 'Contém Lactose', preco: '17,00', categoria: 'salgados' },
    { id: 12, nome: 'Pacote de pão de queijo congelado com 50 unidades', descricao: '', lactose: 'Contém Lactose', preco: '30,00', categoria: 'congelados' }
];

// ===== ESTADO =====
let carrinho = [];
let pedidoAtual = {
    tipo: null,
    endereco: {},
    pagamento: null
};

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    renderizarProdutos();
    initNavbar();
    initCarrinho();
    initModal();
    initAjuda();
});

// ===== RENDERIZAR PRODUTOS =====
function renderizarProdutos() {
    const lista = document.getElementById('produtosLista');
    if (!lista) return;

    lista.innerHTML = produtos.map(produto => `
        <div class="produto-item" data-id="${produto.id}">
            <div class="produto-info">
                <span class="nome">${produto.nome}</span>
                ${produto.descricao ? `<span class="descricao">${produto.descricao}</span>` : ''}
                ${produto.lactose ? `<span class="lactose ${produto.lactose === 'Sem lactose' ? 'sem' : ''}">${produto.lactose}</span>` : ''}
                <span class="preco">R$ ${produto.preco}</span>
            </div>
            <div class="produto-actions">
                <div class="qtd-control">
                    <button class="qtd-btn" data-id="${produto.id}" data-delta="-1">−</button>
                    <span class="qtd-value" id="qtd-${produto.id}">0</span>
                    <button class="qtd-btn" data-id="${produto.id}" data-delta="1">+</button>
                </div>
                <button class="add-btn" data-id="${produto.id}">Adicionar</button>
            </div>
        </div>
    `).join('');

    // Eventos de quantidade
    document.querySelectorAll('.qtd-btn').forEach(btn => {
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
    document.querySelectorAll('.add-btn').forEach(btn => {
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

    // Clique no item para adicionar automaticamente
    document.querySelectorAll('.produto-item').forEach(item => {
        item.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const span = document.getElementById(`qtd-${id}`);
            let current = parseInt(span.textContent) || 0;
            current += 1;
            span.textContent = current;
            
            // Disparar clique no botão adicionar
            const addBtn = this.querySelector('.add-btn');
            if (addBtn) addBtn.click();
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

    if (carrinho.length === 0) {
        body.innerHTML = `
            <div class="cart-empty">
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
                <div class="cart-item-detail">${item.qtd} unidades</div>
                <div class="cart-item-price">R$ ${item.preco}</div>
            </div>
            <div class="cart-item-actions">
                <button class="cart-item-qty-btn" onclick="atualizarQtdCarrinho(${item.id}, -1)">−</button>
                <span class="cart-item-qty">${item.qtd}</span>
                <button class="cart-item-qty-btn" onclick="atualizarQtdCarrinho(${item.id}, 1)">+</button>
                <button class="cart-item-remove" onclick="removerDoCarrinho(${item.id})">✕</button>
            </div>
        </div>
    `).join('');

    total.textContent = `R$ ${getTotalCarrinho().toFixed(2).replace('.', ',')}`;
}

// ===== CARRINHO - ABRIR/FECHAR =====
function abrirCarrinho() {
    document.getElementById('cartSidebar').classList.add('open');
}

function fecharCarrinho() {
    document.getElementById('cartSidebar').classList.remove('open');
}

function toggleCarrinho() {
    const sidebar = document.getElementById('cartSidebar');
    sidebar.classList.toggle('open');
}

// ===== INICIALIZAR CARRINHO =====
function initCarrinho() {
    document.getElementById('cartFloat').addEventListener('click', toggleCarrinho);
    document.getElementById('cartClose').addEventListener('click', fecharCarrinho);
    document.getElementById('cartCheckout').addEventListener('click', abrirModal);

    // Fechar carrinho clicando fora
    document.addEventListener('click', function(e) {
        const sidebar = document.getElementById('cartSidebar');
        const float = document.getElementById('cartFloat');
        if (sidebar.classList.contains('open') && 
            !sidebar.contains(e.target) && 
            !float.contains(e.target)) {
            fecharCarrinho();
        }
    });
}

// ===== MODAL =====
function abrirModal() {
    if (carrinho.length === 0) {
        mostrarToast('Adicione itens ao carrinho primeiro!');
        return;
    }
    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('modalStep1').style.display = 'block';
    document.getElementById('modalStep2').style.display = 'none';
    document.getElementById('modalStep3').style.display = 'none';
    document.getElementById('modalStep4').style.display = 'none';
    fecharCarrinho();
}

function fecharModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

function initModal() {
    document.getElementById('modalClose').addEventListener('click', fecharModal);
    document.getElementById('modalOverlay').addEventListener('click', function(e) {
        if (e.target === this) fecharModal();
    });

    // Opções de entrega
    document.querySelectorAll('.delivery-option').forEach(btn => {
        btn.addEventListener('click', function() {
            const tipo = this.getAttribute('data-tipo');
            pedidoAtual.tipo = tipo;

            if (tipo === 'entrega') {
                document.getElementById('modalStep1').style.display = 'none';
                document.getElementById('modalStep2').style.display = 'block';
            } else if (tipo === 'retirada') {
                document.getElementById('modalStep1').style.display = 'none';
                document.getElementById('modalStep3').style.display = 'block';
                document.getElementById('modalEnderecoCep').value = '64207-570';
                document.getElementById('modalEnderecoRua').value = 'R. São Benedito, 475';
                document.getElementById('modalEnderecoBairro').value = 'Planalto';
                document.getElementById('modalEnderecoCidade').value = 'Parnaíba - PI';
                document.getElementById('modalEnderecoNumero').focus();
            } else if (tipo === 'agendado') {
                document.getElementById('modalStep1').style.display = 'none';
                document.getElementById('modalStep3').style.display = 'block';
                // TODO: adicionar campos de data/hora
            }
        });
    });

    // Verificar CEP
    document.getElementById('modalCepVerificar').addEventListener('click', verificarCEP);
    document.getElementById('modalCep').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') verificarCEP();
    });

    // Confirmar endereço
    document.getElementById('modalEnderecoConfirmar').addEventListener('click', confirmarEndereco);

    // Pagamento
    document.querySelectorAll('.pagamento-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.pagamento-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            pedidoAtual.pagamento = this.getAttribute('data-pagamento');
            document.getElementById('modalPagamentoSelecionado').style.display = 'block';
            document.getElementById('modalPagamentoSelecionado').textContent = `Pagamento: ${pedidoAtual.pagamento}`;
        });
    });

    // Enviar pedido
    document.getElementById('modalEnviarPedido').addEventListener('click', enviarPedido);
}

// ===== VERIFICAR CEP =====
function verificarCEP() {
    const input = document.getElementById('modalCep');
    const cep = input.value.replace(/\D/g, '');
    const resultado = document.getElementById('modalCepResultado');

    if (cep.length !== 8) {
        resultado.style.display = 'block';
        resultado.className = 'error';
        resultado.innerHTML = 'Digite um CEP válido com 8 dígitos.';
        return;
    }

    const cepFormatado = cep.replace(/(\d{5})(\d{3})/, '$1-$2');
    const atendido = CONFIG.areasAtendidas.some(area => {
        if (area.includes('-')) return cepFormatado === area;
        return cep.startsWith(area);
    });

    if (atendido) {
        resultado.style.display = 'block';
        resultado.className = 'success';
        resultado.innerHTML = '✅ Entregamos no seu endereço!';
        document.getElementById('modalStep2').style.display = 'none';
        document.getElementById('modalStep3').style.display = 'block';
        buscarEnderecoPorCEP(cep);
    } else {
        resultado.style.display = 'block';
        resultado.className = 'error';
        resultado.innerHTML = `
            ❌ Ops! Ainda não entregamos nessa região.
            <br>
            <button class="btn btn-whatsapp" style="margin-top:12px; padding:8px 20px; font-size:0.9rem;" id="cepFalarAtendimento">
                FALAR COM ATENDIMENTO
            </button>
        `;
        document.getElementById('cepFalarAtendimento').addEventListener('click', () => {
            openWhatsApp('Olá! Vim pelo site da Le Gust Salgaderia. Meu CEP é ' + cepFormatado + ' e gostaria de saber sobre entrega.');
        });
    }
}

// ===== BUSCAR ENDEREÇO =====
function buscarEnderecoPorCEP(cep) {
    // Simulação - em produção usar ViaCEP
    const enderecos = {
        '64200-000': { rua: 'R. São Benedito', bairro: 'Planalto', cidade: 'Parnaíba' }
    };
    const end = enderecos[cep.replace(/(\d{5})(\d{3})/, '$1-$2')] || { rua: 'Rua Exemplo', bairro: 'Centro', cidade: 'Parnaíba' };

    document.getElementById('modalEnderecoCep').value = cep.replace(/(\d{5})(\d{3})/, '$1-$2');
    document.getElementById('modalEnderecoRua').value = end.rua;
    document.getElementById('modalEnderecoBairro').value = end.bairro;
    document.getElementById('modalEnderecoCidade').value = end.cidade;
    document.getElementById('modalEnderecoNumero').focus();
}

// ===== CONFIRMAR ENDEREÇO =====
function confirmarEndereco() {
    const numero = document.getElementById('modalEnderecoNumero').value.trim();
    if (!numero) {
        alert('Por favor, informe o número do endereço.');
        document.getElementById('modalEnderecoNumero').focus();
        return;
    }

    pedidoAtual.endereco = {
        cep: document.getElementById('modalEnderecoCep').value,
        rua: document.getElementById('modalEnderecoRua').value,
        numero: numero,
        complemento: document.getElementById('modalEnderecoComplemento').value,
        bairro: document.getElementById('modalEnderecoBairro').value,
        cidade: document.getElementById('modalEnderecoCidade').value,
        referencia: document.getElementById('modalEnderecoReferencia').value
    };

    document.getElementById('modalStep3').style.display = 'none';
    document.getElementById('modalStep4').style.display = 'block';
}

// ===== ENVIAR PEDIDO =====
function enviarPedido() {
    if (!pedidoAtual.pagamento) {
        alert('Selecione a forma de pagamento.');
        return;
    }

    let message = '🍽️ *NOVO PEDIDO - LE GUST SALGADERIA*\n\n';
    message += `👤 *Cliente:* _______________\n\n`;
    message += `📋 *PEDIDO:*\n`;

    let total = 0;
    carrinho.forEach(item => {
        const subtotal = parseFloat(item.preco.replace(',', '.')) * item.qtd;
        total += subtotal;
        message += `• ${item.qtd}x ${item.nome} = R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    });

    message += `\n💰 *TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;
    message += `📝 *PAGAMENTO:* ${pedidoAtual.pagamento}\n\n`;

    const tipoLabels = { 'entrega': 'Entrega em casa', 'retirada': 'Retirada na loja', 'agendado': 'Agendado' };
    message += `📦 *TIPO:* ${tipoLabels[pedidoAtual.tipo] || 'Não informado'}\n`;

    if (pedidoAtual.tipo === 'entrega' || pedidoAtual.tipo === 'agendado') {
        const end = pedidoAtual.endereco;
        message += `\n📍 *ENDEREÇO:*\n`;
        message += `${end.rua}, ${end.numero}\n`;
        if (end.complemento) message += `Complemento: ${end.complemento}\n`;
        message += `${end.bairro}\n${end.cidade} - PI\nCEP: ${end.cep}\n`;
        if (end.referencia) message += `Referência: ${end.referencia}\n`;

        const enderecoStr = `${end.rua}, ${end.numero} - ${end.bairro}, ${end.cidade}`;
        message += `\n📍 *LOCALIZAÇÃO:*\nhttps://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoStr)}`;
    }

    if (pedidoAtual.tipo === 'retirada') {
        message += `\n🏪 *RETIRADA NA LOJA:*\n${CONFIG.endereco}`;
    }

    message += `\n\n✅ *CONFIRMAR PEDIDO?*\nDigite "CONFIRMO" para prosseguir.`;

    openWhatsApp(message);
    limparCarrinho();
    fecharModal();
    mostrarToast('Pedido enviado com sucesso! 🎉');
}

// ===== AJUDA =====
function initAjuda() {
    document.getElementById('ajudaDelivery').addEventListener('click', () => {
        openWhatsApp('Olá! Vim pelo site da Le Gust Salgaderia e preciso de ajuda com meu pedido.');
    });
}

// ===== NAVBAR =====
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

// ===== WHATSAPP =====
function openWhatsApp(message) {
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// ===== TOAST =====
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