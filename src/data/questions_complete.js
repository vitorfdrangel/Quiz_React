const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Qual tag cria um parágrafo?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "É uma tag de uma letra apenas",
      },
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "As listas não ordenadas tem a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "A tag semântica indicada para rodapés é a:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
      },
      {
        question: "Entre quais tags é escrito o corpo da página?",
        options: [
          "<body></body>",
          "<main></main>",
          "<footer></footer>",
          "<title></title>",
        ],
        answer: "<body></body>",
      },
      {
        question: "A tag para adição do estilo CSS fica entre que tags?",
        options: [
          "<body></body>",
          "<title></title>",
          "<head></head>",
          "<html></title>",
        ],
        answer: "<head></head>",
      },
      {
        question: "Atributo usado para abrir uma página em branco:",
        options: [
          "Required='true'",
          "Value='branco'",
          "Class='white'",
          "target='_blank'",
        ],
        answer: "target='_blank'",
      },
      {
        question: "HTML é uma linguagem de...",
        options: ["Criação", "Programação", "Formatação", "Informação"],
        answer: "Formatação",
      },
      {
        question: "Qual tag semântica usada para definir o conteudo principal?",
        options: ["<link>", "<main>", "<header>", "<aside>"],
        answer: "<main>",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual regra altera a cor de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Cor em inglês",
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "A posição que deixa um elemento fixo é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
      {
        question:
          "Qual instrução é responsável por gerar uma saída no console browser?",
        options: [
          "alert()",
          "console.log()",
          "document.write()",
          "createElement()",
        ],
        answer: "console.log()",
      },
      {
        question: "O valor null atribuído a uma variável indica que:",
        options: [
          "O valor não pode ser modificado",
          "Ausência intencional de um valor",
          "Valor indefinido",
          "Valor inteiro",
        ],
        answer: "Ausência intencional de um valor",
      },
      {
        question: "Como abrir uma linha de comentário?",
        options: ["~~", "<>", "/-", "//"],
        answer: "//",
      },
      {
        question: "Instrução para cancelar o envio padrão de formulário",
        options: [
          "preventDefault()",
          "eventListener()",
          "formCancel()",
          "querySelector()",
        ],
        answer: "preventDefault()",
      },
      {
        question: "Variável que permite ser modificada:",
        options: ["Define", "Let", "Const", "Mod"],
        answer: "Let",
      },
    ],
  },
];

export default data;
