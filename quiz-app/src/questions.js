const questions = [
    {
      questionText: "O que é educação financeira?",
      answers: [
        {
          answerText: "é o estudo que ensina a cuidar das tarefas de casa",
          correctAnswer: false,
          feedbackText: "Falso, porque é a área que te ensina a lidar melhor com suas finanças."
        },
        {
          answerText: "é a área que te ensina a lidar melhor com suas finanças.",
          correctAnswer: true,
		      feedbackText: "Verdadeiro."
        },
        {
          answerText: "te ensina a deperdiçar seu dinheiro.",
          correctAnswer: false,
		      feedbackText: "Falso, porque é a área que te ensina a lidar melhor com suas finanças."
        },
        {  
          answerText: "é a área de estudo sobre bancos.",
          correctAnswer: false,
		      feedbackText: "Falso, porque é a área que te ensina a lidar melhor com suas finanças."
        }
      ]
    },
    {
      questionText:
        `São estratégias para fazer com que o dinheiro renda mais:
        ( ) Não pensar antes de comprar.
        ( ) Fazer compras inteligentes.
        ( ) Eliminar pagamentos que acumulem juros.
        Assinale V(verdadeiro) ou F (falso) a alternativa que apresenta a sequência correta de cima para baixo:`,
      answers: [
        {
          answerText: "F, V, V",
          correctAnswer: true,
		      feedbackText: "Verdadeiro."
        },
        {
          answerText: "V, F, V",
          correctAnswer: false,
		      feedbackText: "Falso, pois somente ensina a fazer compras inteligentes e eliminar pagamentos que acumulem juros."
        },
        {
          answerText: "F, V, F",
          correctAnswer: false,
		      feedbackText: "Falso, pois somente ensina a fazer compras inteligentes e eliminar pagamentos que acumulem juros."
        },
        {  
          answerText: "F, F, V",
          correctAnswer: false,
		      feedbackText: "Falso, pois somente ensina a fazer compras inteligentes e eliminar pagamentos que acumulem juros."
        }
      ]
    },
    {
      questionText: `Dentro do Sistema Financeiro Nacional, qual órgão tem a função de emitir (colocar em circulação) o papel-moeda?`,
      answers: [
        {
          answerText: " CMN – Conselho Monetário Nacional",
          correctAnswer: false,
		      feedbackText: "Falso, pois somente o Banco Central emite o papel-moeda."
        },
        {
          answerText: "BACEN – Banco Central",
          correctAnswer: true,
		      feedbackText: "Verdadeiro."
        },
        {
          answerText: "CVM – Comissão de Valores Mobiliários",
          correctAnswer: false,
		      feedbackText: "Falso, pois somente o Banco Central emite o papel-moeda."
        },
        { 
          answerText: "BB – Banco do Brasil",
          correctAnswer: false,
		      feedbackText: "Falso, pois somente o Banco Central emite o papel-moeda."
        }
      ]
    },
    {
      questionText: `João tem um filho de 5 anos que se chama Caio. Ele está entregando a mesada ao filho.
					Conhecendo-se os conceitos de receitas, despesas, 
					lucro e prejuízo, assinale a alternativa correta.`,
      answers: [
        {
          answerText: "João (pai) está tendo uma Receita e Caio (filho) está tendo um Lucro.",
          correctAnswer: false,
		      feedbackText: "Falso, já que João está tendo uma despesa e Caio uma Receita"
        },
        {
          answerText: "João (pai) está tendo uma Despesa e Caio (filho) está tendo uma Receita.",
          correctAnswer: true,
		      feedbackText: "Verdadeiro."
        },
        {
          answerText: "João (pai) está tendo uma Despesa e Caio (filho) está tendo uma Despesa.",
          correctAnswer: false,
		      feedbackText: "Falso, já que João está tendo uma despesa e Caio uma Receita"
        },
        {
          answerText: "João (pai) está tendo uma Receita e Caio (filho) está tendo uma Receita.",
          correctAnswer: false,
		      feedbackText: "Falso, já que João está tendo uma despesa e Caio uma Receita"
        }
      ]
    },
    {
      questionText: `A mãe de Joana foi à feira para comprar 16 bananas. Chegando lá o vendedor de bananas só
		  tinha uma dúzia de bananas para vender cada banana custava R$1,30 e a mãe de Joana comprou
		  todas, quanto ela pagou?`,
      answers: [
        {
          answerText: "R$ 15,60",
          correctAnswer: true,
          feedbackText: "Verdadeiro"
        },
        {
          answerText: "R$ 20,80",
          correctAnswer: false,
          feedbackText: "Falso, já que o resultado da equação é R$ 15,60 (12 X 1,30)"
        },
        {
          answerText: "R$ 17,50",
          correctAnswer: false,
          feedbackText: "Falso, já que o resultado da equação é R$ 15,60 (12 X 1,30)"
        },
        {
          answerText: "R$ 11,30",
          correctAnswer: false,
          feedbackText: "Falso, já que o resultado da equação é R$ 15,60 (12 X 1,30)"
        }
      ]
    },

  ];

export default questions;