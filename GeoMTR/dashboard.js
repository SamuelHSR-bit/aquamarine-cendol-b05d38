//
// MENU LATERAL
//

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const conteudo = document.querySelector(".conteudo");
  const overlay = document.getElementById("sidebarOverlay");

  if (window.innerWidth > 760) {
    sidebar.classList.toggle("aberta");
    conteudo.classList.toggle("sidebar-aberta");
  } else {
    sidebar.classList.toggle("aberta");
    overlay.classList.toggle("aberto");
  }
}

//
// MENU DO PERFIL
//

function togglePerfil() {
  const menu = document.getElementById("perfilMenu");

  menu.classList.toggle("aberto");
}

// Fecha o perfil clicando fora dele

document.addEventListener("click", function (event) {
  const menu = document.getElementById("perfilMenu");
  const botao = document.querySelector(".perfil-btn");

  if (!menu.contains(event.target) && !botao.contains(event.target)) {
    menu.classList.remove("aberto");
  }
});

//
// DATA
//

function atualizarData() {
  const elemento = document.getElementById("dataAtual");

  if (!elemento) return;

  const agora = new Date();

  elemento.textContent = agora.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

atualizarData();

//
// MODAL
//

function abrirModal(titulo, texto) {
  const modal = document.getElementById("modalOverlay");

  document.getElementById("modalTitulo").textContent = titulo;

  document.getElementById("modalConteudo").innerHTML = `<p>${texto}</p>`;

  modal.classList.add("aberto");
}

function fecharModal() {
  document.getElementById("modalOverlay").classList.remove("aberto");
}

function fecharModalFundo(event) {
  if (event.target.id === "modalOverlay") {
    fecharModal();
  }
}

//
// DETALHES DO SETOR
//

function abrirSetor(codigo, nome, status, percentual, area, responsavel) {
  const modal = document.getElementById("modalOverlay");

  document.getElementById("modalTitulo").textContent = `${codigo} — ${nome}`;

  document.getElementById("modalConteudo").innerHTML = `

        <div class="detalhe-setor">

            <div>
                <small>Status</small>
                <strong>${status}</strong>
            </div>

            <div>
                <small>Explorado</small>
                <strong>${percentual}</strong>
            </div>

            <div>
                <small>Área total</small>
                <strong>${area}</strong>
            </div>

            <div>
                <small>Último responsável</small>
                <strong>${responsavel}</strong>
            </div>

        </div>

        <br>

        <p>
            Neste espaço futuramente aparecerão
            o histórico completo, avaliações,
            operações realizadas, minerais de
            interesse e documentos associados
            ao setor.
        </p>

    `;

  modal.classList.add("aberto");
}

//
// EXPANDIR MAPA
//

function expandirMapa() {
  const mapa = document.getElementById("mapaPainel");

  mapa.classList.toggle("expandido");
}

//
// NOVA AVALIAÇÃO
//

function novaAvaliacao() {
  const modal = document.getElementById("modalOverlay");

  document.getElementById("modalTitulo").textContent = "Nova Avaliação Técnica";

  document.getElementById("modalConteudo").innerHTML = `

        <p>
            Futuramente este botão abrirá
            o formulário utilizado pelo geólogo
            para registrar uma nova avaliação
            de campo.
        </p>

        <br>

        <div class="detalhe-setor">

            <div>
                <small>Etapa 1</small>
                <strong>Selecionar área</strong>
            </div>

            <div>
                <small>Etapa 2</small>
                <strong>Selecionar setor</strong>
            </div>

            <div>
                <small>Etapa 3</small>
                <strong>Registrar dados</strong>
            </div>

            <div>
                <small>Etapa 4</small>
                <strong>Salvar avaliação</strong>
            </div>

        </div>

    `;

  modal.classList.add("aberto");
}

// suporte //

function abrirSuporte() {
  abrirModal(
    "Suporte GeoMTR",
    "Para suporte técnico, entre em contato com o administrador do sistema pelo ramal interno 204 ou pelo e-mail suporte@geomtr.local.",
  );
}

//  ESC fecha janelas //

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    fecharModal();

    document.getElementById("perfilMenu").classList.remove("aberto");

    document.getElementById("mapaPainel").classList.remove("expandido");
  }
});

// sair do sistema ir a tela de login

function sairSistema() {
  window.location.href = "./index.html";
}
