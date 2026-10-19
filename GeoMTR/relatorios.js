const dadosRelatorios = [
  {
    codigo: "REL-001",
    titulo: "Avaliação geológica",
    setor: "ST-01",
    responsavel: "Samuel Oliveira",
    data: "2026-10-15",
    status: "Concluído",
  },
  {
    codigo: "REL-002",
    titulo: "Inspeção de área",
    setor: "ST-02",
    responsavel: "Carlos Mendes",
    data: "2026-10-14",
    status: "Em análise",
  },
  {
    codigo: "REL-003",
    titulo: "Análise mineral",
    setor: "ST-03",
    responsavel: "Samuel Oliveira",
    data: "2026-10-12",
    status: "Em análise",
  },
  {
    codigo: "REL-004",
    titulo: "Monitoramento de extração",
    setor: "ST-04",
    responsavel: "Fernanda Lima",
    data: "2026-10-10",
    status: "Concluído",
  },
  {
    codigo: "REL-005",
    titulo: "Levantamento de terreno",
    setor: "ST-05",
    responsavel: "Mariana Costa",
    data: "2026-10-08",
    status: "Rascunho",
  },
  {
    codigo: "REL-006",
    titulo: "Avaliação ambiental",
    setor: "ST-02",
    responsavel: "Samuel Oliveira",
    data: "2026-10-05",
    status: "Concluído",
  },
];

const perfilAtual = document.body.dataset.perfil;
const ehAdmin = perfilAtual === "admin";

const busca = document.getElementById("buscaRelatorio");
const filtroStatus = document.getElementById("filtroStatus");
const filtroResponsavel = document.getElementById("filtroResponsavel");
const lista = document.getElementById("listaRelatorios");

function obterRelatoriosVisiveis() {
  let dados = ehAdmin
    ? [...dadosRelatorios]
    : dadosRelatorios.filter(
        (relatorio) => relatorio.responsavel === "Samuel Oliveira",
      );

  const termo = busca.value.trim().toLowerCase();
  const status = filtroStatus.value;
  const responsavel = filtroResponsavel ? filtroResponsavel.value : "";

  return dados.filter((relatorio) => {
    const correspondeBusca = [
      relatorio.codigo,
      relatorio.titulo,
      relatorio.setor,
      relatorio.responsavel,
    ].some((valor) => valor.toLowerCase().includes(termo));

    const correspondeStatus = !status || relatorio.status === status;

    const correspondeResponsavel =
      !responsavel || relatorio.responsavel === responsavel;

    return correspondeBusca && correspondeStatus && correspondeResponsavel;
  });
}

function classeStatus(status) {
  if (status === "Concluído") return "concluido";
  if (status === "Em análise") return "analise";
  return "rascunho";
}

function formatarData(data) {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

function renderizarRelatorios() {
  const relatorios = obterRelatoriosVisiveis();

  lista.innerHTML = "";

  if (relatorios.length === 0) {
    const colunas = ehAdmin ? 7 : 6;

    lista.innerHTML = `
            <tr>
                <td colspan="${colunas}" class="relatorio-vazio">
                    Nenhum relatório encontrado com esses filtros.
                </td>
            </tr>
        `;
  } else {
    relatorios.forEach((relatorio) => {
      const linha = document.createElement("tr");

      const colunasAdmin = `
                <td>${relatorio.responsavel}</td>
            `;

      linha.innerHTML = `
                <td class="relatorio-codigo">${relatorio.codigo}</td>
                <td>${relatorio.titulo}</td>
                <td>${relatorio.setor}</td>
                ${ehAdmin ? colunasAdmin : ""}
                <td>${formatarData(relatorio.data)}</td>
                <td>
                    <span class="relatorio-status ${classeStatus(relatorio.status)}">
                        ${relatorio.status}
                    </span>
                </td>
                <td>
                    <div class="relatorio-acoes">
                        <button type="button"
                            onclick="verRelatorio('${relatorio.codigo}')">
                            Ver
                        </button>
                    </div>
                </td>
            `;

      lista.appendChild(linha);
    });
  }

  document.getElementById("contadorRelatorios").textContent =
    `Exibindo ${relatorios.length} de ${obterBaseRelatorios().length} relatório(s).`;
}

function obterBaseRelatorios() {
  return ehAdmin
    ? dadosRelatorios
    : dadosRelatorios.filter(
        (relatorio) => relatorio.responsavel === "Samuel Oliveira",
      );
}

function atualizarIndicadores() {
  const dados = obterBaseRelatorios();

  document.getElementById("totalRelatorios").textContent = dados.length;

  document.getElementById("totalConcluidos").textContent = dados.filter(
    (r) => r.status === "Concluído",
  ).length;

  document.getElementById("totalAnalise").textContent = dados.filter(
    (r) => r.status === "Em análise",
  ).length;

  document.getElementById("totalRascunhos").textContent = dados.filter(
    (r) => r.status === "Rascunho",
  ).length;
}

function verRelatorio(codigo) {
  const relatorio = obterBaseRelatorios().find(
    (item) => item.codigo === codigo,
  );

  if (!relatorio) return;

  alert(
    `Relatório: ${relatorio.codigo}\n` +
      `Título: ${relatorio.titulo}\n` +
      `Setor: ${relatorio.setor}\n` +
      `Responsável: ${relatorio.responsavel}\n` +
      `Data: ${formatarData(relatorio.data)}\n` +
      `Status: ${relatorio.status}`,
  );
}

function exportarRelatorios() {
  if (!ehAdmin) return;

  const dados = obterRelatoriosVisiveis();

  const cabecalho = [
    "Código",
    "Relatório",
    "Setor",
    "Responsável",
    "Data",
    "Status",
  ];

  const linhas = dados.map((r) => [
    r.codigo,
    r.titulo,
    r.setor,
    r.responsavel,
    formatarData(r.data),
    r.status,
  ]);

  const csv = [cabecalho, ...linhas]
    .map((linha) =>
      linha.map((valor) => `"${String(valor).replace(/"/g, '""')}"`).join(";"),
    )
    .join("\r\n");

  const arquivo = new Blob(["\uFEFF" + csv], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(arquivo);
  const link = document.createElement("a");

  link.href = url;
  link.download = "relatorios-gerais.csv";
  link.click();

  URL.revokeObjectURL(url);
}

busca.addEventListener("input", renderizarRelatorios);
filtroStatus.addEventListener("change", renderizarRelatorios);

if (filtroResponsavel) {
  filtroResponsavel.addEventListener("change", renderizarRelatorios);
}

atualizarIndicadores();
renderizarRelatorios();
