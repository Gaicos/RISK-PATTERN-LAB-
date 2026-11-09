/**
 * RISK PATTERN LAB - Retro OS Edition v1.0
 * Baseado no Guia Operacional & Treinamento de Risco (Jun/2025)
 * Funcionalidades: Desktop interativo com seleção azul, ícones arrastáveis, janela maximizável e sem minimizar.
 */

// ==========================================
// BASE DE DADOS DOS CASOS (DO POWERPOINT)
// ==========================================
const CASES_DATA = [
  {
    id: 1,
    title: "O Padrão do Bônus",
    badge: "CASO 01",
    evidences: [
      "Diversas contas relacionadas apresentam comportamento semelhante.",
      "As contas reivindicam repetidamente benefícios destinados a novos jogadores.",
      "Nomes/identidades diferentes aparecem na exploração recorrente das promoções."
    ],
    options: [
      { id: "A", label: "Lavagem de Dinheiro" },
      { id: "B", label: "Abuso de Bônus" },
      { id: "C", label: "Roubo de Identidade" },
      { id: "D", label: "Conluio" }
    ],
    correctOption: "B",
    correctTitle: "B) ABUSO DE BÔNUS",
    reasoning: "O conjunto aponta para multi-conta orientada à exploração repetida de benefícios promocionais.",
    guideQuote: "Pág. 21: o guia descreve abuso de multi-conta como a criação de várias contas para reivindicar repetidamente bônus destinados a novos jogadores.",
    reflectionFeedback: "A evidência determinante é a busca recorrente e estruturada por benefícios de boas-vindas com múltiplas identidades."
  },
  {
    id: 2,
    title: "Conta Sob Controle?",
    badge: "CASO 02",
    evidences: [
      "Uma conta existente passa a apresentar padrões incomuns de acesso.",
      "Após o novo padrão de acesso, dados da conta são modificados.",
      "Uma pessoa não autorizada obteve acesso usando as credenciais do jogador legítimo."
    ],
    options: [
      { id: "A", label: "Abuso de Bônus" },
      { id: "B", label: "Roubo de Identidade" },
      { id: "C", label: "Invasão de Conta" },
      { id: "D", label: "Fraude de Pagamento" }
    ],
    correctOption: "C",
    correctTitle: "C) INVASÃO DE CONTA",
    reasoning: "A evidência determinante é o controle não autorizado de uma conta legítima já existente por meio das credenciais do jogador.",
    guideQuote: "Pág. 37: o guia caracteriza invasão de conta como a tomada de controle da conta de um jogador por roubo ou descoberta das credenciais de acesso.",
    reflectionFeedback: "Atenção ao ponto-chave: a conta já existia e era legítima; não foi uma conta falsa aberta com documentos roubados."
  },
  {
    id: 3,
    title: "Pouco Jogo, Saque Rápido",
    badge: "CASO 03",
    evidences: [
      "O cliente realiza um depósito relevante.",
      "Há pouca atividade de jogo, concentrada em comportamentos de baixo risco.",
      "Pouco tempo depois, o cliente solicita saque do saldo restante."
    ],
    options: [
      { id: "A", label: "Lavagem de Dinheiro" },
      { id: "B", label: "Abuso de Bônus" },
      { id: "C", label: "ARB" },
      { id: "D", label: "Jogabilidade Abusiva" }
    ],
    correctOption: "A",
    correctTitle: "A) LAVAGEM DE DINHEIRO",
    reasoning: "Depósito + pouca jogabilidade + padrão de baixo risco + saque rápido formam um conjunto de red flags que exige aprofundamento da hipótese.",
    guideQuote: "Págs. 18–19: o guia lista depósitos grandes com pouca jogabilidade, padrões de apostas de baixo risco e saque rápido após pouca atividade entre os sinais associados a lavagem de dinheiro.",
    reflectionFeedback: "O infrator não busca o entretenimento da aposta, mas a justificativa de circulação do recurso financeiro."
  },
  {
    id: 4,
    title: "Read the Bet",
    badge: "CASO 04",
    evidences: [
      "O cliente apresenta comportamento sistemático em eventos disponíveis em diferentes operadores.",
      "São identificadas discrepâncias nas odds oferecidas.",
      "As apostas cobrem resultados diferentes em operadores distintos buscando retorno independentemente do desfecho."
    ],
    options: [
      { id: "A", label: "Abuso de Bônus" },
      { id: "B", label: "ARB" },
      { id: "C", label: "Lavagem de Dinheiro" },
      { id: "D", label: "Fraude de Pagamento" }
    ],
    correctOption: "B",
    correctTitle: "B) ARB",
    reasoning: "A característica central é explorar discrepâncias de odds entre operadores, distribuindo apostas entre possíveis resultados.",
    guideQuote: "Págs. 23–24: o guia descreve arbitragem como apostar nos possíveis resultados de um evento em diferentes casas para buscar lucro independentemente do resultado, aproveitando discrepâncias nas odds.",
    reflectionFeedback: "A arbitragem explora matematicamente margens divergentes entre casas de aposta para anular o risco esportivo."
  },
  {
    id: 5,
    title: "Quem é o Verdadeiro Jogador?",
    badge: "CASO 05",
    evidences: [
      "Uma nova conta é criada no ambiente de jogos.",
      "Surgem inconsistências de identidade, dados registrados e sinais de dispositivo/IP.",
      "Documentos pertencentes a outra pessoa foram utilizados na abertura da conta."
    ],
    options: [
      { id: "A", label: "Invasão de Conta" },
      { id: "B", label: "Roubo de Identidade" },
      { id: "C", label: "Abuso de Bônus" },
      { id: "D", label: "Payment Fraud" }
    ],
    correctOption: "B",
    correctTitle: "B) ROUBO DE IDENTIDADE",
    reasoning: "Os documentos de outra pessoa foram usados para criar a conta. Não houve apenas tomada de controle de uma conta legítima existente.",
    guideQuote: "Págs. 35–36: o guia aborda o uso de informações pessoais de terceiros e a criação de conta falsa com documentos de identidade roubados.",
    reflectionFeedback: "A evidência 03 é conclusiva: a identidade documental pertence a terceiros no momento do cadastro inicial."
  },
  {
    id: 6,
    title: "Pagamento Sob Suspeita",
    badge: "CASO 06",
    evidences: [
      "A conta recebe um depósito utilizando um método de pagamento.",
      "Posteriormente, a transação é contestada.",
      "O titular informa que não reconhece a transação realizada na plataforma."
    ],
    options: [
      { id: "A", label: "ARB" },
      { id: "B", label: "Abuso de Bônus" },
      { id: "C", label: "Fraude de Pagamento" },
      { id: "D", label: "Account Takeover" }
    ],
    correctOption: "C",
    correctTitle: "C) FRAUDE NO MÉTODO DE PAGAMENTO",
    reasoning: "A contestação de uma transação não reconhecida direciona a investigação para possível uso não autorizado do método de pagamento.",
    guideQuote: "Págs. 3–6: o guia aborda uso de método de pagamento roubado/não autorizado e estornos relacionados a transações não reconhecidas, além de 3DS, ECI e AVS como elementos de apoio.",
    reflectionFeedback: "A alegação de não reconhecimento do titular do instrumento financeiro caracteriza a fraude transacional."
  },
  {
    id: 7,
    title: "A Roleta Não Conta Toda a História",
    badge: "CASO 07",
    evidences: [
      "O jogador cobre repetidamente vermelho + preto ou par + ímpar.",
      "O comportamento reduz a exposição ao risco.",
      "A estratégia é usada para avançar requisitos de apostas associados a um bônus."
    ],
    options: [
      { id: "A", label: "Jogabilidade Abusiva" },
      { id: "B", label: "Lavagem de Dinheiro" },
      { id: "C", label: "Abuso de Bônus" },
      { id: "D", label: "Sem evidência suficiente" }
    ],
    correctOption: "C",
    correctTitle: "C) ABUSO DE BÔNUS",
    reasoning: "O contexto promocional muda a leitura: a cobertura de resultados está sendo utilizada para cumprir requisitos do bônus com exposição reduzida.",
    guideQuote: "Págs. 21–22 e 26–27: o guia relaciona cobertura de resultados, como vermelho/preto, ao abuso de bônus quando usada para avançar requisitos com risco mínimo.",
    reflectionFeedback: "A evidência 03 muda tudo: sem o bônus, seria apenas jogo conservador; com o bônus, constitui abuso promocional."
  },
  {
    id: 8,
    title: "The Twist",
    badge: "CASO 08",
    evidences: [
      "Múltiplas contas aparecem vinculadas ao mesmo IP/dispositivo.",
      "Há depósitos e saques rápidos com pouca jogabilidade.",
      "As contas apresentam padrões semelhantes de comportamento e fontes de financiamento incomuns."
    ],
    options: [
      { id: "A", label: "Bonus Abuse" },
      { id: "B", label: "Lavagem de Dinheiro" },
      { id: "C", label: "Identity" },
      { id: "D", label: "Collusion" }
    ],
    correctOption: "B",
    correctTitle: "B) LAVAGEM DE DINHEIRO",
    reasoning: "A conclusão é sustentada pelo conjunto: múltiplas contas vinculadas, movimentação rápida, pouca jogabilidade e fonte de financiamento incomum.",
    guideQuote: "Pág. 18: o guia reúne fontes de financiamento incomuns, múltiplas contas vinculadas ao mesmo IP/dispositivo e depósitos/saques rápidos com pouca jogabilidade entre os sinais de alerta.",
    reflectionFeedback: "O 'twist': a primeira evidência sugeria bônus/multi-conta, mas as fontes atípicas e o fluxo de saques definem AML."
  }
];

// ==========================================
// ESTADO DA SESSÃO
// ==========================================
const sessionState = {
  currentCaseIndex: 0,
  score: 0,
  correctAnswersCount: 0,
  selectedOption: null,
  selectedDeterminant: null,
  revealedEvidences: [1],
  history: [],
  soundEnabled: true,
  isMaximized: false
};

// ==========================================
// ÁUDIO RETRÔ (Web Audio API)
// ==========================================
class RetroAudio {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  beep(freq = 440, type = 'square', duration = 0.08, gainVal = 0.04) {
    if (!sessionState.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  click() {
    this.beep(800, 'triangle', 0.03, 0.03);
  }

  reveal() {
    this.beep(600, 'square', 0.05, 0.03);
    setTimeout(() => this.beep(900, 'square', 0.07, 0.03), 60);
  }

  success() {
    this.beep(523.25, 'triangle', 0.08, 0.06);
    setTimeout(() => this.beep(659.25, 'triangle', 0.09, 0.06), 90);
    setTimeout(() => this.beep(783.99, 'triangle', 0.16, 0.06), 180);
  }

  divergent() {
    this.beep(300, 'sawtooth', 0.12, 0.05);
    setTimeout(() => this.beep(220, 'sawtooth', 0.2, 0.05), 110);
  }
}

const audio = new RetroAudio();

// ==========================================
// ELEMENTOS DO DOM
// ==========================================
const mainWindow = document.getElementById("mainWindow");
const windowTitlebar = document.getElementById("windowTitlebar");
const btnWinMax = document.getElementById("btnWinMax");
const btnWinClose = document.getElementById("btnWinClose");
const btnWinHelp = document.getElementById("btnWinHelp");

const paneIntro = document.getElementById("paneIntro");
const paneInvestigation = document.getElementById("paneInvestigation");
const paneDebrief = document.getElementById("paneDebrief");

const btnStartGame = document.getElementById("btnStartGame");
const btnRestartGame = document.getElementById("btnRestartGame");

// Barra de Status e Cabeçalho do Caso
const caseBadgeEl = document.getElementById("caseBadge");
const caseTitleEl = document.getElementById("caseTitle");
const caseCounterBadge = document.getElementById("caseCounterBadge");
const scoreBadge = document.getElementById("scoreBadge");
const statusCaseInfo = document.getElementById("statusCaseInfo");
const progressFill = document.getElementById("progressFill");

// Fichas de Evidência
const textEv1 = document.getElementById("textEv1");
const textEv2 = document.getElementById("textEv2");
const textEv3 = document.getElementById("textEv3");
const evRow1 = document.getElementById("evRow1");
const evRow2 = document.getElementById("evRow2");
const evRow3 = document.getElementById("evRow3");
const lockPlaceholder2 = document.getElementById("lockPlaceholder2");
const lockPlaceholder3 = document.getElementById("lockPlaceholder3");
const stampEv2 = document.getElementById("stampEv2");
const stampEv3 = document.getElementById("stampEv3");
const btnRevealEv2 = document.getElementById("btnRevealEv2");
const btnRevealEv3 = document.getElementById("btnRevealEv3");

// Opções e Decisão
const optionsGrid = document.getElementById("optionsGrid");
const discussionBox = document.getElementById("discussionBox");
const btnSubmitDecision = document.getElementById("btnSubmitDecision");

// Dialog de Validação
const dialogBackdrop = document.getElementById("dialogBackdrop");
const dialogResultBanner = document.getElementById("dialogResultBanner");
const dialogResultIcon = document.getElementById("dialogResultIcon");
const dialogResultStatus = document.getElementById("dialogResultStatus");
const dialogCorrectAnswer = document.getElementById("dialogCorrectAnswer");
const dialogReasoningText = document.getElementById("dialogReasoningText");
const dialogGuideQuote = document.getElementById("dialogGuideQuote");
const dialogDiscussionFeedback = document.getElementById("dialogDiscussionFeedback");
const btnDialogNext = document.getElementById("btnDialogNext");
const btnDialogNextText = document.getElementById("btnDialogNextText");
const btnDialogClose = document.getElementById("btnDialogClose");

// Glossário
const glossaryBackdrop = document.getElementById("glossaryBackdrop");
const btnCloseGlossary = document.getElementById("btnCloseGlossary");
const btnOkGlossary = document.getElementById("btnOkGlossary");

// Relatório de Auditoria
const reportBackdrop = document.getElementById("reportBackdrop");
const btnOpenReport = document.getElementById("btnOpenReport");
const shortcutReport = document.getElementById("shortcutReport");
const btnCloseReport = document.getElementById("btnCloseReport");
const btnDismissReport = document.getElementById("btnDismissReport");
const btnPrintReport = document.getElementById("btnPrintReport");
const repCases = document.getElementById("repCases");
const repScore = document.getElementById("repScore");
const repRank = document.getElementById("repRank");

// Debrief Elements
const finalCorrectVal = document.getElementById("finalCorrectVal");
const finalPointsVal = document.getElementById("finalPointsVal");
const finalRankVal = document.getElementById("finalRankVal");
const casesSummaryList = document.getElementById("casesSummaryList");

// Relógios
const statusClock = document.getElementById("statusClock");
const taskbarClock = document.getElementById("taskbarClock");

// Controles de Som
const shortcutSound = document.getElementById("shortcutSound");
const traySoundBtn = document.getElementById("traySoundBtn");
const desktopSoundIcon = document.getElementById("desktopSoundIcon");

// ==========================================
// ATUALIZAÇÃO DO RELÓGIO RETRÔ
// ==========================================
function updateClocks() {
  const now = new Date();
  const hrs = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  const timeStr = `${hrs}:${mins}`;
  if (statusClock) statusClock.textContent = timeStr;
  if (taskbarClock) taskbarClock.textContent = timeStr;
}
setInterval(updateClocks, 1000);
updateClocks();

// ==========================================
// MAXIMIZAR / RESTAURAR JANELA PRINCIPAL
// ==========================================
function toggleMaximizeWindow() {
  audio.click();
  sessionState.isMaximized = !sessionState.isMaximized;

  if (sessionState.isMaximized) {
    mainWindow.classList.add("maximized");
    btnWinMax.textContent = "❐";
    btnWinMax.title = "Restaurar Janela";
  } else {
    mainWindow.classList.remove("maximized");
    mainWindow.style.top = "50%";
    mainWindow.style.left = "50%";
    mainWindow.style.transform = "translate(-50%, -50%)";
    btnWinMax.textContent = "□";
    btnWinMax.title = "Maximizar Janela";
  }
}
btnWinMax.addEventListener("click", toggleMaximizeWindow);

// Duplo clique na barra de título também maximiza/restaura
windowTitlebar.addEventListener("dblclick", (e) => {
  if (e.target.tagName !== "BUTTON") {
    toggleMaximizeWindow();
  }
});

// ==========================================
// ARRASTAR A JANELA PRINCIPAL (WINDOW DRAG)
// ==========================================
let isDraggingWindow = false;
let winStartX = 0;
let winStartY = 0;
let winInitLeft = 0;
let winInitTop = 0;

windowTitlebar.addEventListener("mousedown", (e) => {
  if (sessionState.isMaximized || e.target.tagName === "BUTTON") return;
  isDraggingWindow = true;
  winStartX = e.clientX;
  winStartY = e.clientY;

  const rect = mainWindow.getBoundingClientRect();
  winInitLeft = rect.left;
  winInitTop = rect.top;

  // Cancela a translação central para mover com left e top absolutos
  mainWindow.style.transform = "none";
  mainWindow.style.left = `${winInitLeft}px`;
  mainWindow.style.top = `${winInitTop}px`;
});

window.addEventListener("mousemove", (e) => {
  if (!isDraggingWindow) return;
  const deltaX = e.clientX - winStartX;
  const deltaY = e.clientY - winStartY;

  let newLeft = winInitLeft + deltaX;
  let newTop = winInitTop + deltaY;

  // Limites da tela
  newLeft = Math.max(0, Math.min(window.innerWidth - 100, newLeft));
  newTop = Math.max(0, Math.min(window.innerHeight - 80, newTop));

  mainWindow.style.left = `${newLeft}px`;
  mainWindow.style.top = `${newTop}px`;
});

window.addEventListener("mouseup", () => {
  isDraggingWindow = false;
});

// ==========================================
// SELEÇÃO AZUL NA ÁREA DE TRABALHO (MARQUEE)
// ==========================================
const desktopArea = document.getElementById("desktopArea");
const selectionBox = document.getElementById("selectionBox");
let isMarquee = false;
let selStartX = 0;
let selStartY = 0;

desktopArea.addEventListener("mousedown", (e) => {
  // Dispara apenas se o clique for na área de trabalho livre (fora da janela e dos modais)
  if (
    e.target.closest(".main-window") || 
    e.target.closest(".dialog-backdrop") || 
    e.target.closest(".retro-taskbar") ||
    e.target.closest(".desktop-icon")
  ) {
    return;
  }

  isMarquee = true;
  selStartX = e.clientX;
  selStartY = e.clientY;

  selectionBox.style.left = `${selStartX}px`;
  selectionBox.style.top = `${selStartY}px`;
  selectionBox.style.width = "0px";
  selectionBox.style.height = "0px";
  selectionBox.style.display = "block";

  // Desmarca ícones
  document.querySelectorAll(".desktop-icon").forEach(ic => ic.classList.remove("selected"));
});

window.addEventListener("mousemove", (e) => {
  if (!isMarquee) return;

  const currentX = e.clientX;
  const currentY = e.clientY;

  const left = Math.min(selStartX, currentX);
  const top = Math.min(selStartY, currentY);
  const width = Math.abs(currentX - selStartX);
  const height = Math.abs(currentY - selStartY);

  selectionBox.style.left = `${left}px`;
  selectionBox.style.top = `${top}px`;
  selectionBox.style.width = `${width}px`;
  selectionBox.style.height = `${height}px`;

  // Seleciona os ícones que tocam na caixa azul
  const selRect = { left, top, right: left + width, bottom: top + height };
  document.querySelectorAll(".desktop-icon").forEach(ic => {
    const r = ic.getBoundingClientRect();
    const overlaps = !(
      r.right < selRect.left ||
      r.left > selRect.right ||
      r.bottom < selRect.top ||
      r.top > selRect.bottom
    );
    if (overlaps) {
      ic.classList.add("selected");
    } else {
      ic.classList.remove("selected");
    }
  });
});

window.addEventListener("mouseup", () => {
  if (isMarquee) {
    isMarquee = false;
    selectionBox.style.display = "none";
  }
});

// ==========================================
// ARRASTAR ÍCONES DA ÁREA DE TRABALHO (DESKTOP ICONS DRAG)
// ==========================================
let draggedIcon = null;
let iconOffsetX = 0;
let iconOffsetY = 0;

document.querySelectorAll(".desktop-icon").forEach(icon => {
  icon.addEventListener("mousedown", (e) => {
    audio.click();
    document.querySelectorAll(".desktop-icon").forEach(ic => ic.classList.remove("selected"));
    icon.classList.add("selected");

    draggedIcon = icon;
    const rect = icon.getBoundingClientRect();
    iconOffsetX = e.clientX - rect.left;
    iconOffsetY = e.clientY - rect.top;
    e.stopPropagation();
  });
});

window.addEventListener("mousemove", (e) => {
  if (!draggedIcon) return;
  let newLeft = e.clientX - iconOffsetX;
  let newTop = e.clientY - iconOffsetY;

  newLeft = Math.max(10, Math.min(window.innerWidth - 85, newLeft));
  newTop = Math.max(10, Math.min(window.innerHeight - 100, newTop));

  draggedIcon.style.left = `${newLeft}px`;
  draggedIcon.style.top = `${newTop}px`;
});

window.addEventListener("mouseup", () => {
  draggedIcon = null;
});

// ==========================================
// NAVEGAÇÃO DE TELAS (PANE SWITCHER)
// ==========================================
function switchPane(activePane) {
  [paneIntro, paneInvestigation, paneDebrief].forEach(p => p.classList.remove("active"));
  activePane.classList.add("active");
  const winContent = document.getElementById("windowContentArea");
  if (winContent) winContent.scrollTop = 0;
}

// ==========================================
// CARREGAR CASO DE INVESTIGAÇÃO
// ==========================================
function loadCase(index) {
  const caseData = CASES_DATA[index];
  sessionState.selectedOption = null;
  sessionState.selectedDeterminant = null;
  sessionState.revealedEvidences = [1];

  // Atualizar cabeçalhos e badges
  caseBadgeEl.textContent = `INVESTIGATION CASE • ${caseData.badge}`;
  caseTitleEl.textContent = caseData.title;
  caseCounterBadge.textContent = `CASO ${index + 1} DE ${CASES_DATA.length}`;
  scoreBadge.textContent = `${sessionState.score} PTS`;
  statusCaseInfo.textContent = `Caso ${index + 1} de ${CASES_DATA.length}: ${caseData.title}`;

  // Barra de progresso dos casos
  const progressPercent = ((index) / CASES_DATA.length) * 100;
  progressFill.style.width = `${Math.max(progressPercent, 12.5)}%`;

  // Evidência 1
  textEv1.textContent = caseData.evidences[0];
  evRow1.className = "evidence-row revealed";

  // Evidência 2
  textEv2.textContent = caseData.evidences[1];
  textEv2.classList.add("hidden");
  lockPlaceholder2.style.display = "flex";
  evRow2.className = "evidence-row locked";
  stampEv2.textContent = "🔒 PENDENTE";
  btnRevealEv2.disabled = false;

  // Evidência 3
  textEv3.textContent = caseData.evidences[2];
  textEv3.classList.add("hidden");
  lockPlaceholder3.style.display = "flex";
  evRow3.className = "evidence-row locked";
  stampEv3.textContent = "🔒 PENDENTE";
  btnRevealEv3.disabled = true;

  // Renderizar opções A, B, C, D
  optionsGrid.innerHTML = "";
  caseData.options.forEach(opt => {
    const card = document.createElement("div");
    card.className = "retro-option-card";
    card.dataset.id = opt.id;
    card.innerHTML = `
      <div class="opt-letter-box">${opt.id}</div>
      <div class="opt-text">${opt.label}</div>
    `;
    card.addEventListener("click", () => selectOption(opt.id));
    optionsGrid.appendChild(card);
  });

  // Reset da discussão reflexiva
  discussionBox.style.display = "none";
  document.querySelectorAll(".chip-btn").forEach(c => c.classList.remove("active"));
  btnSubmitDecision.disabled = true;

  // Fechar dialog
  dialogBackdrop.style.display = "none";
}

function selectOption(optId) {
  audio.click();
  sessionState.selectedOption = optId;

  document.querySelectorAll(".retro-option-card").forEach(c => {
    if (c.dataset.id === optId) {
      c.classList.add("selected");
    } else {
      c.classList.remove("selected");
    }
  });

  discussionBox.style.display = "block";
  btnSubmitDecision.disabled = false;
}

function revealEvidence(num) {
  audio.reveal();
  if (num === 2) {
    sessionState.revealedEvidences.push(2);
    lockPlaceholder2.style.display = "none";
    textEv2.classList.remove("hidden");
    evRow2.className = "evidence-row revealed";
    stampEv2.textContent = "✓ IDENTIFICADA";
    btnRevealEv3.disabled = false;
  } else if (num === 3) {
    sessionState.revealedEvidences.push(3);
    lockPlaceholder3.style.display = "none";
    textEv3.classList.remove("hidden");
    evRow3.className = "evidence-row revealed";
    stampEv3.textContent = "✓ IDENTIFICADA";
  }
}

// ==========================================
// SUBMETER DECISÃO & MOSTRAR VALIDAÇÃO PELO GUIA
// ==========================================
function submitDecision() {
  if (!sessionState.selectedOption) return;

  const currentCase = CASES_DATA[sessionState.currentCaseIndex];
  const isCorrect = sessionState.selectedOption === currentCase.correctOption;

  // Bônus pela Regra Principal: "Não classifique pela 1ª evidência"
  const gatheredAll = sessionState.revealedEvidences.length === 3;
  let points = 0;

  if (isCorrect) {
    audio.success();
    points = 100;
    if (gatheredAll) points += 25; // Recompensa a prudência analítica do guia
    sessionState.score += points;
    sessionState.correctAnswersCount++;
  } else {
    audio.divergent();
  }

  // Registrar histórico
  sessionState.history.push({
    caseId: currentCase.id,
    title: currentCase.title,
    userOption: sessionState.selectedOption,
    correctOption: currentCase.correctOption,
    isCorrect: isCorrect,
    gatheredAll: gatheredAll,
    points: points
  });

  // Montar conteúdo do Dialog Retrô
  if (isCorrect) {
    dialogResultBanner.className = "dialog-header-banner correct";
    dialogResultIcon.textContent = "✓";
    dialogResultStatus.textContent = gatheredAll 
      ? `PARECER CORRETO (+${points} PTS • CRITÉRIO COMPLETO)` 
      : `PARECER CORRETO (+${points} PTS)`;
    dialogCorrectAnswer.textContent = `✓ ${currentCase.correctTitle}`;
  } else {
    dialogResultBanner.className = "dialog-header-banner incorrect";
    dialogResultIcon.textContent = "✕";
    dialogResultStatus.textContent = "PARECER DIVERGENTE DO GUIA";
    dialogCorrectAnswer.textContent = `Gabarito Oficial: ${currentCase.correctTitle}`;
  }

  dialogReasoningText.textContent = currentCase.reasoning;
  dialogGuideQuote.textContent = currentCase.guideQuote;

  // Reflexão determinante
  let reflectionText = currentCase.reflectionFeedback;
  if (sessionState.selectedDeterminant) {
    const detMap = {
      "1": "Evidência 01",
      "2": "Evidência 02",
      "3": "Evidência 03",
      "all": "O conjunto integrado de sinais"
    };
    reflectionText += ` [Sua escolha determinante: ${detMap[sessionState.selectedDeterminant]}].`;
  }
  dialogDiscussionFeedback.textContent = reflectionText;

  // Texto do botão de próximo
  const isLast = sessionState.currentCaseIndex === CASES_DATA.length - 1;
  btnDialogNextText.textContent = isLast ? "Concluir e Ver Debrief ➔" : "Avançar para o Próximo Caso ➔";

  scoreBadge.textContent = `${sessionState.score} PTS`;
  dialogBackdrop.style.display = "flex";
}

function handleDialogNext() {
  audio.click();
  dialogBackdrop.style.display = "none";
  if (sessionState.currentCaseIndex < CASES_DATA.length - 1) {
    sessionState.currentCaseIndex++;
    loadCase(sessionState.currentCaseIndex);
  } else {
    showDebrief();
  }
}

// ==========================================
// TELA FINAL DE DEBRIEF
// ==========================================
function showDebrief() {
  switchPane(paneDebrief);
  progressFill.style.width = "100%";
  statusCaseInfo.textContent = "Laboratório Concluído";

  finalCorrectVal.textContent = `${sessionState.correctAnswersCount} / ${CASES_DATA.length}`;
  finalPointsVal.textContent = `${sessionState.score} pts`;

  let rank = "Analista de Risco (Trainee)";
  if (sessionState.correctAnswersCount === 8) {
    rank = "Especialista Master de Risco";
  } else if (sessionState.correctAnswersCount >= 6) {
    rank = "Analista Sênior de Risco";
  } else if (sessionState.correctAnswersCount >= 4) {
    rank = "Analista Pleno de Risco";
  }
  finalRankVal.textContent = rank;

  // Renderizar histórico dos 8 casos
  casesSummaryList.innerHTML = "";
  sessionState.history.forEach((h) => {
    const item = document.createElement("div");
    item.className = `case-summary-item ${h.isCorrect ? 'passed' : 'failed'}`;
    item.innerHTML = `
      <span><strong>CASO 0${h.caseId}:</strong> ${h.title}</span>
      <span>${h.isCorrect ? `✓ ${h.points} pts` : `✕ (Gabarito: ${h.correctOption})`}</span>
    `;
    casesSummaryList.appendChild(item);
  });
}

function restartGame() {
  audio.click();
  sessionState.currentCaseIndex = 0;
  sessionState.score = 0;
  sessionState.correctAnswersCount = 0;
  sessionState.selectedOption = null;
  sessionState.selectedDeterminant = null;
  sessionState.revealedEvidences = [1];
  sessionState.history = [];

  switchPane(paneInvestigation);
  loadCase(0);
}

// ==========================================
// CONTROLES DE ÁUDIO
// ==========================================
function toggleSound() {
  sessionState.soundEnabled = !sessionState.soundEnabled;
  const icon = sessionState.soundEnabled ? "🔊" : "🔇";
  if (desktopSoundIcon) desktopSoundIcon.textContent = icon;
  if (traySoundBtn) traySoundBtn.textContent = icon;
  if (sessionState.soundEnabled) audio.beep(600, 'triangle', 0.05);
}

// ==========================================
// RELATÓRIO DE AUDITORIA RETRÔ
// ==========================================
function openReport() {
  audio.click();
  const rank = finalRankVal ? finalRankVal.textContent : "Analista de Risco";
  repCases.textContent = `${sessionState.correctAnswersCount} / ${CASES_DATA.length}`;
  repScore.textContent = `${sessionState.score} PTS`;
  repRank.textContent = rank;

  const now = new Date();
  const dStr = now.toLocaleDateString("pt-BR");
  const hStr = now.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });
  const repDate = document.getElementById("repDate");
  const repHour = document.getElementById("repHour");
  if (repDate) repDate.textContent = dStr;
  if (repHour) repHour.textContent = hStr;

  reportBackdrop.style.display = "flex";
}

function closeReport() {
  reportBackdrop.style.display = "none";
}

if (btnOpenReport) btnOpenReport.addEventListener("click", openReport);
if (shortcutReport) shortcutReport.addEventListener("click", openReport);
if (btnCloseReport) btnCloseReport.addEventListener("click", closeReport);
if (btnDismissReport) btnDismissReport.addEventListener("click", closeReport);
if (btnPrintReport) {
  btnPrintReport.addEventListener("click", () => {
    window.print();
  });
}

// ==========================================
// EVENT LISTENERS DO JOGO
// ==========================================
btnStartGame.addEventListener("click", () => {
  audio.click();
  switchPane(paneInvestigation);
  loadCase(0);
});

btnRevealEv2.addEventListener("click", () => revealEvidence(2));
btnRevealEv3.addEventListener("click", () => revealEvidence(3));

btnSubmitDecision.addEventListener("click", submitDecision);
btnDialogNext.addEventListener("click", handleDialogNext);
btnDialogClose.addEventListener("click", () => {
  dialogBackdrop.style.display = "none";
});

btnRestartGame.addEventListener("click", restartGame);

// Discussão reflexiva (Chips de Evidência Determinante)
discussionBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("chip-btn")) {
    audio.click();
    document.querySelectorAll(".chip-btn").forEach(c => c.classList.remove("active"));
    e.target.classList.add("active");
    sessionState.selectedDeterminant = e.target.dataset.ev;
  }
});

// Glossário / Guia Modal
function openGlossary() {
  audio.click();
  glossaryBackdrop.style.display = "flex";
}
function closeGlossary() {
  glossaryBackdrop.style.display = "none";
}
document.getElementById("menuGuia").addEventListener("click", openGlossary);
document.getElementById("shortcutGuide").addEventListener("click", openGlossary);
btnCloseGlossary.addEventListener("click", closeGlossary);
btnOkGlossary.addEventListener("click", closeGlossary);

// Atalhos e Menubar
document.getElementById("shortcutIntro").addEventListener("click", () => {
  audio.click();
  switchPane(paneIntro);
});
document.getElementById("menuArquivo").addEventListener("click", () => {
  audio.click();
  switchPane(paneIntro);
});
document.getElementById("menuCasos").addEventListener("click", () => {
  audio.click();
  switchPane(paneInvestigation);
});
document.getElementById("menuAjuda").addEventListener("click", openGlossary);
btnWinHelp.addEventListener("click", openGlossary);
btnWinClose.addEventListener("click", () => {
  audio.click();
  switchPane(paneIntro);
});

// Som
if (shortcutSound) shortcutSound.addEventListener("click", toggleSound);
if (traySoundBtn) traySoundBtn.addEventListener("click", toggleSound);
