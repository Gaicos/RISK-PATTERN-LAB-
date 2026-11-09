# 🛡️ RISK PATTERN LAB
> **Simulador Interativo de Investigação de Risco, Antifraude & Compliance**  
> *Baseado no Guia Operacional de Risco v1.0 | Junho 2025*

---

## 🎯 Sobre o Projeto

O **RISK PATTERN LAB** é um laboratório investigativo gamificado com interface temática amigável inspirada nos sistemas operacionais clássicos (*Retro OS*) e paleta visual alinhada às apresentações executivas de treinamento corporativo.

O simulador exercita a tomada de decisão progressiva de analistas de risco, prevenção à fraude e compliance através da análise cautelosa de sinais comportamentais e transacionais.

---

## 🧠 Dinâmica dos 4 Passos

```
[ 01 | OBSERVE ] ➔ [ 02 | CONECTE ] ➔ [ 03 | CLASSIFIQUE ] ➔ [ 04 | DECIDA ]
```

1. **01 | OBSERVE:** O que foi identificado inicialmente no comportamento do cliente ou da conta?
2. **02 | CONECTE:** Quais sinais se relacionam e formam um padrão de risco?
3. **03 | CLASSIFIQUE:** Qual hipótese é mais aderente ao conjunto integrado dos fatos?
4. **04 | DECIDA:** Qual evidência é determinante para sustentar o parecer final?

> ⚠️ **REGRA PRINCIPAL DO ANALISTA:**  
> *"Não classifique pela primeira evidência. Mudar de hipótese diante de uma nova evidência faz parte de uma boa análise.*  
> **SINAL ≠ CONCLUSÃO**.*"

---

## 📂 Os 8 Casos de Investigação

O jogo reproduz integralmente os 8 casos do treinamento:

| Caso | Título | Categoria Real | Conceito Central |
|:---:|:---|:---:|:---|
| **01** | *O Padrão do Bônus* | **Abuso de Bônus** | Multi-contas criadas para reivindicação repetida de bônus de boas-vindas. |
| **02** | *Conta Sob Controle?* | **Invasão de Conta (ATO)** | Acesso não autorizado a conta legítima já existente com alteração de dados cadastrais. |
| **03** | *Pouco Jogo, Saque Rápido* | **Lavagem de Dinheiro (AML)** | Depósito relevante, apostas mínimas de baixo risco e solicitação rápida de retirada. |
| **04** | *Read the Bet* | **Arbitragem (ARB)** | Cobertura sistemática de todos os desfechos aproveitando divergências de odds entre casas. |
| **05** | *Quem é o Verdadeiro Jogador?* | **Roubo de Identidade** | Abertura de conta falsa utilizando dados e documentos pessoais pertencentes a terceiros. |
| **06** | *Pagamento Sob Suspeita* | **Fraude de Pagamento** | Contestação de transação não reconhecida pelo titular do método de pagamento (Chargeback). |
| **07** | *A Roleta Não Conta Toda a História* | **Abuso de Bônus** | Cobertura oposta (vermelho/preto) com finalidade deliberada de cumprir rollover promocional. |
| **08** | *The Twist* | **Lavagem de Dinheiro (AML)** | Múltiplas contas interligadas, fluxo rápido e fontes de financiamento incomuns. |

---

## 🎮 Funcionalidades do Jogo

- 🔍 **Dossiê com Revelação Progressiva:** O analista começa com a Evidência 01 liberada e aprofunda para desbloquear as Evidências 02 e 03.
- 💡 **Recompensa por Prudência Analítica:** Bônus de pontuação para o analista que cruza todas as evidências antes do veredito final.
- 💬 **Discussão Reflexiva:** Pergunta reflexiva obrigatória antes do envio para registrar qual evidência foi determinante.
- 📖 **Feedback pelo Guia Operacional:** Diálogo pós-decisão exibindo a página do manual e a explicação técnica detalhada.
- 🖥️ **Interface Retro OS Amigável:** Barra de título, menubar, botões chanfrados 3D com relevo tátil, relógio em tempo real e barra de tarefas.
- 🔊 **Efeitos Sonoros Retrô Sintéticos:** Beeps vintage via *Web Audio API* nativa (sem necessidade de arquivos MP3 externos).
- 📜 **Debriefing & Auditoria:** Resumo completo de aproveitamento com atribuição de nível de senioridade (*Analista Trainee*, *Pleno*, *Sênior* ou *Especialista Master*).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**
- **CSS3 Puro** (Design System Retro OS, Glassmorphism, 3D Bevel)
- **JavaScript Moderno (ES6+)**
- **Web Audio API**

---

## 🚀 Como Executar

Não requer instalação de Node.js, banco de dados ou servidor web.

1. Clone o repositório ou baixe o arquivo zip:
   ```bash
   git clone https://github.com/SEU-USUARIO/RISK-PATTERN-LAB.git
   ```
2. Abra a pasta do projeto e dê um **duplo clique no arquivo `index.html`** no seu navegador (Google Chrome, Edge, Firefox, Safari).

---

*Treinamento baseado no Guia Operacional • v1.0 | Junho 2025*
