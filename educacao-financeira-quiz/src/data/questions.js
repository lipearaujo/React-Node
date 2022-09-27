const questions = [
  /* {
    questionText: "O que é educação financeira?",
    answers: [
        "é o estudo que ensina a cuidar das tarefas de casa",
        "é a área que te ensina a lidar melhor com suas finanças.",
        "te ensina a deperdiçar seu dinheiro.",
        "é a área de estudo sobre bancos.",
      ],
    correctAnswer: "é a área que te ensina a lidar melhor com suas finanças.",
    feedbackText: "Falso, porque é a área que te ensina a lidar melhor com suas finanças."
  },

  {
    questionText:
      `São estratégias para fazer com que o dinheiro renda mais:
      ( ) Não pensar antes de comprar.
      ( ) Fazer compras inteligentes.
      ( ) Eliminar pagamentos que acumulem juros.
      Assinale V(verdadeiro) ou F (falso) a alternativa que apresenta a sequência correta de cima para baixo:`,
    answers: [
        "F, V, V",
        "V, F, V",
        "F, V, F",
        "F, F, V",  
    ],
    correctAnswer: "F, V, V",
    feedbackText: "Falso, pois somente ensina a fazer compras inteligentes e eliminar pagamentos que acumulem juros."
  },

  {
    questionText: `Dentro do Sistema Financeiro Nacional, qual órgão tem a função de emitir (colocar em circulação) o papel-moeda?`,
    answers: [
        "CMN – Conselho Monetário Nacional",
        "BACEN – Banco Central",
        "CVM – Comissão de Valores Mobiliários",
        "BB – Banco do Brasil",    
    ],
    correctAnswer: "BACEN – Banco Central",
    feedbackText: "Falso, pois somente o Banco Central emite o papel-moeda."
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
    correctAnswer: "João (pai) está tendo uma Despesa e Caio (filho) está tendo uma Receita.",
    feedbackText: "Falso, já que João está tendo uma despesa e Caio uma Receita"
  },

  {
    questionText: `A mãe de Joana foi à feira para comprar 16 bananas. Chegando lá o vendedor de bananas só
		tinha uma dúzia de bananas para vender cada banana custava R$1,30 e a mãe de Joana comprou
		todas, quanto ela pagou?`,
    answers: [
         "R$ 15,60",
         "R$ 20,80",
         "R$ 17,50",
         "R$ 11,30",
    ],
    correctAnswer: "R$ 15,60",
    feedbackText: "Falso, já que o resultado da equação é R$ 15,60 (12 X 1,30)"
  }, */

  {
    category: "A",
    arrayQuestions: [
      {
        questionText: "O que é educação financeira?",
        answers: [
          "é o estudo que ensina a cuidar das tarefas de casa",
          "é a área que te ensina a lidar melhor com suas finanças.",
          "te ensina a deperdiçar seu dinheiro.",
          "é a área de estudo sobre bancos.",
        ],
        correctAnswer:
          "é a área que te ensina a lidar melhor com suas finanças.",
        feedbackText:
          "Falso, porque é a área que te ensina a lidar melhor com suas finanças.",
      },
      /* {
        questionText: "Qual tag cria um parágrafo?",
        answers: ["<p>", "<h1>", "<text>", "<ul>"],
        correctAnswer: "<p>",
        feedbackText: "É uma tag de uma letra apenas",
      },
      {
        questionText: "Qual atributo adiciona um link para a tag a?",
        answers: ["alt", "href", "src", "link"],
        correctAnswer: "href",
        feedbackText: "Hyperlink Reference",
      },
      {
        questionText: "As listas não ordenadas tem a tag de:",
        answers: ["<ol>", "<ul>", "<li>", "<list>"],
        correctAnswer: "<ul>",
        feedbackText: "Hyperlink Reference",
      },
      {
        questionText: "Qual atributo deixa o input obrigatório?",
        answers: ["placeholder", "value", "required", "maxlength"],
        correctAnswer: "required",
        feedbackText: "Hyperlink Reference",
      },
      {
        questionText: "A tag semântica indicada para rodapés é a:",
        answers: ["div", "main", "section", "footer"],
        correctAnswer: "footer",
        feedbackText: "Hyperlink Reference",
      }, */
    ],
  },
  {
    category: "B",
    arrayQuestions: [
      {
        questionText: "Qual regra altera a cor de um elemento?",
        answers: ["color", "background-color", "font-size", "transition"],
        correctAnswer: "color",
        feedbackText: "Cor em inglês",
      },
      {
        questionText: "Para aumentar a fonte de um elemento utilizamos:",
        answers: ["font", "text-transform", "font-size", "hover"],
        correctAnswer: "font-size",
        feedbackText: "",
      },
      {
        questionText: "A posição que deixa um elemento fixo é a:",
        answers: ["static", "absolute", "fixed", "relative"],
        correctAnswer: "fixed",
        feedbackText: "",
      },
    ],
  },
  {
    category: "C",
    arrayQuestions: [
      {
        questionText: "O que é Vanilla JavaScript?",
        answers: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        correctAnswer: "JavaScript puro",
        feedbackText: "",
      },
      {
        questionText:
          "Com qual instrução declaramos uma constante em JavaScript?",
        answers: ["const", "let", "var", "define"],
        correctAnswer: "const",
        feedbackText: "",
      },
      {
        questionText:
          "Qual dos tipos de dado a seguir não existe em JavaScript?",
        answers: ["string", "number", "boolean", "float"],
        correctAnswer: "float",
        feedbackText: "",
      },
      {
        questionText: "Qual dos métodos a seguir seleciona um elemento?",
        answers: ["querySelector", "parseInt", "sort", "reduce"],
        correctAnswer: "querySelector",
        feedbackText: "",
      },
      {
        questionText:
          "Qual destas propriedades da a quantidade de elementos de um array?",
        answers: ["qty", "length", "items", "index"],
        correctAnswer: "length",
        feedbackText: "",
      },
    ],
  },
];

/* */
export default questions;
