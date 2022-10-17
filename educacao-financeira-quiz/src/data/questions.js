const questions = [
  {
    category: "Fácil",
    arrayQuestions: [
      {
        questionText: "O que é educação financeira?",
        answers: [
          "É o estudo que ensina a cuidar das tarefas de casa",
          "É a área que te ensina a lidar melhor com suas finanças.",
          "Te ensina a deperdiçar seu dinheiro.",
          "É a área de estudo sobre bancos.",
        ],
        correctAnswer:
          "É a área que te ensina a lidar melhor com suas finanças.",
        feedbackText:
          "Falso, porque é a área que te ensina a lidar melhor com suas finanças.",
      },
      {
        questionText:
          "Dentro do Sistema Financeiro Nacional, qual órgão tem a função de emitir (colocar em circulação) o papel-moeda?",
        answers: [
          "CMN – Conselho Monetário Nacional",
          "BACEN – Banco Central",
          "CVM – Comissão de Valores Mobiliários",
          "BB – Banco do Brasil",
        ],
        correctAnswer: "BACEN – Banco Central",
        feedbackText:
          "Falso, pois somente o Banco Central emite o papel-moeda.",
      },
      {
        questionText: "O que é Taxa Selic?",
        answers: [
          "A taxa Selic é a taxa básica de juros da economia. É o principal instrumento de política monetária utilizado pelo Banco Central do Brasil para controle da inflação.",
          "É a taxa de inflação do Brasil",
          "É um banco de financiamento para negativados.",
          "É a taxa que diz o quanto você esta endividado, baseado nos seus gastos.",
        ],
        correctAnswer:
          "A taxa Selic é a taxa básica de juros da economia. É o principal instrumento de política monetária utilizado pelo Banco Central do Brasil para controle da inflação.",
        feedbackText:
          "Falso, pois a taxa Selic é a taxa básica de juros da economia. É o principal instrumento de política monetária utilizado pelo Banco Central do Brasil para controle da inflação.",
      },
      {
        questionText: "Qual é a melhor maneira de investir?",
        answers: [
          "Manter-se focado nos objetivos de longo prazo é a chave do sucesso no que diz respeito a investimentos.",
          "Pensar somente no curto prazo e para investimentos arriscados.",
          "Deixar seu dinheiro parado, é a melhor maneira de deixar seu dinheiro seguro.",
          "Alocar todo seu dinheiro em um único investimento.",
        ],
        correctAnswer:
          "Manter-se focado nos objetivos de longo prazo é a chave do sucesso no que diz respeito a investimentos.",
        feedbackText: "O longo prazo é o mais importante nos investimentos.",
      },
      {
        questionText: "Qual a remuneração cobrada pelo empréstimo de dinheiro?",
        answers: ["Crédito.", "Juros.", "Poupança.", "Riqueza."],
        correctAnswer: "Juros.",
        feedbackText:
          "Juros é o rendimento que se obtém quando se empresta dinheiro por um determinado período.",
      },
      {
        questionText: "Tudo que recebemos ou ganhamos é chamado de?",
        answers: ["Despesa.", "Receita.", "Presente.", "Doação."],
        correctAnswer: "Receita.",
        feedbackText: "Receita é um valor que é recebido.",
      },
      {
        questionText: "O que é lucro?",
        answers: [
          "Quando as receitas são maiores que as despesas.",
          "Quando as receitas são iguais às despesas.",
          "Quando as receitas são menores que as despesas.",
        ],
        correctAnswer: "Quando as receitas são maiores que as despesas.",
        feedbackText: "Quando as receitas são maiores que as despesas.",
      },
    ],
  },
  {
    category: "Médio",
    arrayQuestions: [
      {
        questionText: `Por que devo montar uma reserva de emergência?`,
        answers: [
          "A reserva de emergência tem o propósito de diminuir os danos caso algo aconteça e você precise de determinado valor com urgência.",
          "Deve-se montar reserva de emergência somente quem tem dinheiro.",
          "A reserva de emergência é para quem tem dinheiro sobrando.",
          "Não se deve montar uma reserva de emergência.",
        ],
        correctAnswer:
          "A reserva de emergência tem o propósito de diminuir os danos caso algo aconteça e você precise de determinado valor com urgência.",
        feedbackText:
          "Todos devem ter uma reserva de emergência, pois ela tem o propósito de diminuir os danos caso algo aconteça e você precise de determinado valor com urgência.",
      },
      {
        questionText: `O que são Fundos de Investimentos?`,
        answers: [
          "Fundos são uma espécie de “condomínio” de investidores. Eles reúnem os recursos de diversas pessoas, para que sejam aplicados em conjunto no mercado financeiro e de capitais.",
          "É uma maneira ilegal de ganhar dinheiro.",
          "É uma pirâmide financeira.",
          "Fundos são uma espécie de Cassino, onde ganha quem tem mais sorte.",
        ],
        correctAnswer:
          "Fundos são uma espécie de “condomínio” de investidores. Eles reúnem os recursos de diversas pessoas, para que sejam aplicados em conjunto no mercado financeiro e de capitais.",
        feedbackText:
          "Falso, os fundos de investimento é uma forma de investimento que reúne diversos investidores e seus recursos para a participação de ganhos em conjunto na proporção do valor aplicado.",
      },
      {
        questionText: "Quais destes são investimentos?",
        answers: [
          "Ações, Tesouro Direto, Jogo do Bixo.",
          "Fundos Imobiliários, Ações e Tesouro Direto.",
          "Apostas Esportivas, Cassino e Ações.",
          "Debêntures, Fundos de investimento e Jogo do Bixo.",
        ],
        correctAnswer: "Fundos Imobiliários, Ações e Tesouro Direto.",
        feedbackText:
          "Falso. Os investimentos são eles: Fundos Imobiliários, Ações e Tesouro Direto.",
      },
      {
        questionText: "O que é o FGC?",
        answers: [
          "Fundo Garantidor de Créditos.",
          "Fundo Gerador de Créditos.",
          "Fundo Garantidor de Carros.",
          "Fundação Garantidora de Créditos.",
        ],
        correctAnswer: "Fundo Garantidor de Créditos.",
        feedbackText: "Falso, É o Fundo Garantidor de Créditos.",
      },
      {
        questionText: `São estratégias para fazer com que o dinheiro renda mais:
				( ) Não pensar antes de comprar.
				( ) Fazer compras inteligentes.
				( ) Eliminar pagamentos que acumulem juros.
				Assinale V(verdadeiro) ou F (falso) a alternativa que apresenta a sequência correta de cima para baixo:`,
        answers: ["F, V, V", "V, F, V", "F, V, F", "F, F, V"],
        correctAnswer: "F, V, V",
        feedbackText:
          "Falso, pois somente ensina a fazer compras inteligentes e eliminar pagamentos que acumulem juros.",
      },
      {
        questionText: `João tem um filho de 5 anos que se chama Caio. Ele está entregando a mesada ao filho.
					Conhecendo-se os conceitos de receitas, despesas, 
					lucro e prejuízo, assinale a alternativa correta.`,
        answers: [
          "João (pai) está tendo uma Receita e Caio (filho) está tendo um Lucro.",
          "João (pai) está tendo uma Despesa e Caio (filho) está tendo uma Receita.",
          "João (pai) está tendo uma Despesa e Caio (filho) está tendo uma Despesa.",
          "João (pai) está tendo uma Receita e Caio (filho) está tendo uma Receita.",
        ],
        correctAnswer:
          "João (pai) está tendo uma Despesa e Caio (filho) está tendo uma Receita.",
        feedbackText:
          "Falso, já que João está tendo uma despesa e Caio uma Receita",
      },
      {
        questionText: `A mãe de Joana foi à feira para comprar 16 bananas. Chegando lá o vendedor de bananas só
				tinha uma dúzia de bananas para vender cada banana custava R$1,30 e a mãe de Joana comprou
				todas, quanto ela pagou?`,
        answers: ["R$ 15,60", "R$ 20,80", "R$ 17,50", "R$ 11,30"],
        correctAnswer: "R$ 15,60",
        feedbackText:
          "Falso, já que o resultado da equação é R$ 15,60 (12 X 1,30)",
      },
    ],
  },
  {
    category: "Difícil",
    arrayQuestions: [
      {
        questionText: "Quais riscos corro ao investir?",
        answers: [
          "Não se corre riscos ao investir.",
          "O ideal para não correr risco é ter uma carteira diversificada, com investimentos em diferentes fontes.",
          "Para não correr riscos ao investir, deve-se concentrar todo seu patrimônio em um só investimento.",
          "Só é arriscado pra quem investe muito dinheiro.",
        ],
        correctAnswer:
          "O ideal para não correr risco é ter uma carteira diversificada, com investimentos em diferentes fontes.",
        feedbackText:
          "Falso. O ideal para não correr risco é ter uma carteira diversificada, com investimentos em diferentes fontes. Muitas pessoas deixam todo dinheiro em uma única aplicação como cautela, pois, acreditam que essa estratégia não oferece riscos.",
      },
      {
        questionText: "O que são títulos de alto rendimento?",
        answers: [
          "São títulos de renda fixa que oferecem aos investidores retornos mais altos que a média do mercado.",
          "São títulos que apresentam menor risco de crédito",
          "Um framework JavaScript",
          "são títulos de renda variável que oferecem aos investidores retornos mais baixos que a média do mercado.",
        ],
        correctAnswer:
          "São títulos de renda fixa que oferecem aos investidores retornos mais altos que a média do mercado.",
        feedbackText:
          "Falso, pois os títulos de alto rendimento oferecem aos investidores retornos mais altos que a média do mercado.",
      },
      {
        questionText: "Para que serve o FGC?",
        answers: [
          "O Fundo Garantidor de Créditos te ajuda a ganhar mais dinheiro.",
          "Para te ajudar a comprar uma casa, sem um emprego e patrimônio.",
          "Para financiar um carro mesmo que não tenha dinheiro.",
          "O Fundo Garantidor de Créditos protege o patrimônio de clientes que investem em até R$250 mil caso o banco ou instituição financeira quebre.",
        ],
        correctAnswer:
          "O Fundo Garantidor de Créditos protege o patrimônio de clientes que investem em até R$250 mil caso o banco ou instituição financeira quebre.",
        feedbackText:
          "Falso, O Fundo Garantidor de Créditos protege o patrimônio de clientes que investem em até R$250 mil caso o banco ou instituição financeira quebre.",
      },
      
    ],
  },
];

/* */
export default questions;
