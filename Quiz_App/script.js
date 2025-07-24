const allQuestions = {
   html: [
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language","Home Tool Markup Language","Hyperlink Text Mark Language","High Text Markup Language"], answer: "Hyper Text Markup Language" },
  { question: "Which tag is used for the largest heading?", options: ["<h1>","<h6>","<head>","<heading>"], answer: "<h1>" },
  { question: "How do you create a hyperlink?", options: ["<link>","<a href='url'>","<hyperlink>","<anchor>"], answer: "<a href='url'>" },
  { question: "Which attribute specifies an alternate text for an image?", options: ["alt","src","title","longdesc"], answer: "alt" },
  { question: "Which tag inserts a line break?", options: ["<break>","<br>","<lb>","<newline>"], answer: "<br>" },
  { question: "Which tag defines a paragraph?", options: ["<p>","<para>","<paragraph>","<text>"], answer: "<p>" },
  { question: "Which tag is used to define an unordered list?", options: ["<ol>","<ul>","<list>","<dl>"], answer: "<ul>" },
  { question: "Which tag defines a table row?", options: ["<td>","<tr>","<table>","<row>"], answer: "<tr>" },
  { question: "Which tag defines a table cell?", options: ["<cell>","<td>","<tr>","<th>"], answer: "<td>" },
  { question: "How do you mark text as bold?", options: ["<b>","<bold>","<strong>","Both A & C"], answer: "Both A & C" },
  { question: "Which tag is used for italic text?", options: ["<italic>","<em>","<i>","Both B & C"], answer: "Both B & C" },
  { question: "Which tag is used to define a section in a document?", options: ["<section>","<div>","<span>","<article>"], answer: "<section>" },
  { question: "Which attribute is used to uniquely identify an element?", options: ["class","id","name","type"], answer: "id" },
  { question: "Which tag is used to add a checkbox?", options: ["<checkbox>","<input type='checkbox'>","<check>","<input checkbox>"], answer: "<input type='checkbox'>" },
  { question: "What is the purpose of <!DOCTYPE html>?", options: ["Declare document type","Add comment","Link CSS file","None of these"], answer: "Declare document type" },
  { question: "Which tag is used to include a JavaScript file?", options: ["<js>","<script src='file.js'>","<javascript>","<link>"], answer: "<script src='file.js'>" },
  { question: "Which tag contains metadata about the document?", options: ["<meta>","<head>","<title>","All of these"], answer: "All of these" },
  { question: "Which tag defines a numbered list?", options: ["<ol>","<ul>","<nl>","<list>"], answer: "<ol>" },
  { question: "Which tag is used to define a dropdown list?", options: ["<dropdown>","<select>","<list>","<option>"], answer: "<select>" },
  { question: "Which attribute sets the default selected option?", options: ["selected","default","checked","value"], answer: "selected" },
  { question: "Which tag is used to define table headings?", options: ["<th>","<td>","<h1>","<header>"], answer: "<th>" },
  { question: "Which tag is used for footer content?", options: ["<footer>","<bottom>","<foot>","<section>"], answer: "<footer>" },
  { question: "Which tag is used for navigation links?", options: ["<nav>","<navigation>","<menu>","<links>"], answer: "<nav>" },
  { question: "Which tag is used to define an article?", options: ["<article>","<section>","<div>","<main>"], answer: "<article>" },
  { question: "Which tag is used for emphasized text?", options: ["<strong>","<em>","<i>","<b>"], answer: "<em>" },
  { question: "Which tag displays a video player?", options: ["<video>","<media>","<movie>","<film>"], answer: "<video>" },
  { question: "Which tag defines a text input field?", options: ["<input type='text'>","<textfield>","<text>","<input-text>"], answer: "<input type='text'>" },
  { question: "Which attribute specifies the URL of an image?", options: ["src","href","link","url"], answer: "src" },
  { question: "Which tag is used to define a caption for a <figure> element?", options: ["<caption>","<figcaption>","<legend>","<label>"], answer: "<figcaption>" },
  { question: "Which tag is used to define a container for SVG graphics?", options: ["<svg>","<vector>","<graphic>","<image>"], answer: "<svg>" }
],
    css: [
        { question: "What does CSS stand for?", options: ["Colorful Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Creative Style System"], answer: "Cascading Style Sheets" },
        { question: "Which property is used to change text color?", options: ["font-color", "text-color", "color", "fgcolor"], answer: "color" },
        { question: "Which CSS property controls the text size?", options: ["font-style", "font-weight", "font-size", "text-size"], answer: "font-size" },
        { question: "How do you make text bold?", options: ["font-weight: bold;", "text-style: bold;", "font-style: bold;", "text-weight: bold;"], answer: "font-weight: bold;" },
        { question: "Which property sets space between the element border and content?", options: ["margin", "padding", "spacing", "gap"], answer: "padding" },
        { question: "Which property sets the space outside the border?", options: ["margin", "padding", "border-space", "gap"], answer: "margin" },
        { question: "How do you change the background color?", options: ["bgcolor", "background-color", "color", "background"], answer: "background-color" },
        { question: "Which property is used to change the font?", options: ["font-family", "font-style", "font-weight", "text-font"], answer: "font-family" },
        { question: "How do you make all <p> elements blue?", options: ["p {color: blue;}", ".p {color: blue;}", "#p {color: blue;}", "*p {color: blue;}"], answer: "p {color: blue;}" },
        { question: "What is the correct CSS syntax?", options: ["{body:color=black;}", "body {color: black;}", "body:color=black;", "{body;color:black;}"], answer: "body {color: black;}" },
        { question: "Which property changes text alignment?", options: ["text-align", "align-text", "text-position", "align"], answer: "text-align" },
        { question: "Which property adds shadow to text?", options: ["text-shadow", "font-shadow", "shadow-text", "shadow"], answer: "text-shadow" },
        { question: "Which property is used for rounded corners?", options: ["border-radius", "corner-radius", "radius-corner", "corner"], answer: "border-radius" },
        { question: "Which property sets the width of an element?", options: ["width", "elem-width", "element-width", "w"], answer: "width" },
        { question: "Which property sets height of an element?", options: ["height", "elem-height", "h", "element-height"], answer: "height" },
        { question: "Which property is used to change an element’s opacity?", options: ["alpha", "opacity", "transparency", "filter"], answer: "opacity" },
        { question: "How do you display an element as a block?", options: ["display: block;", "display: inline;", "display: inline-block;", "display: flex;"], answer: "display: block;" },
        { question: "Which property moves an element from the normal flow?", options: ["position", "float", "clear", "z-index"], answer: "position" },
        { question: "How to center a block horizontally?", options: ["margin: 0 auto;", "text-align: center;", "align: center;", "justify-center"], answer: "margin: 0 auto;" },
        { question: "Which property is used to specify font style?", options: ["font-style", "text-style", "style-font", "font-weight"], answer: "font-style" },
        { question: "Which property is used to change the style of list bullet?", options: ["list-style-type", "list-style", "bullet-style", "list-type"], answer: "list-style-type" },
        { question: "Which property creates a flexible box layout?", options: ["display: flex;", "flexbox: on;", "box: flex;", "layout: flex;"], answer: "display: flex;" },
        { question: "Which property is used to change the cursor when hovering?", options: ["cursor", "mouse", "pointer", "hover"], answer: "cursor" },
        { question: "Which shorthand property sets margin?", options: ["margin", "margin-all", "shorthand-margin", "m"], answer: "margin" },
        { question: "Which units are relative in CSS?", options: ["px", "em", "pt", "cm"], answer: "em" },
        { question: "Which property is used to set background image?", options: ["background-image", "bg-image", "img-background", "image-src"], answer: "background-image" },
        { question: "Which property controls element stacking order?", options: ["order", "z-index", "stack-order", "layer"], answer: "z-index" },
        { question: "Which pseudo-class selects first child?", options: [":first-child", ":nth-child(1)", ":first", " :child:first"], answer: ":first-child" },
        { question: "Which property makes text uppercase?", options: ["text-transform: uppercase;", "text-case: upper;", "transform: uppercase;", "case: upper;"], answer: "text-transform: uppercase;" },
        { question: "Which media query is used for phones?", options: ["@media (max-width: 600px)", "@media (max-width: 400px)", "@media (max-width: 800px)", "@media (max-width: 1200px)"], answer: "@media (max-width: 600px)" }
    ],
    js: [
        { question: "What is JavaScript?", options: ["Programming Language", "Markup Language", "Styling Language", "Framework"], answer: "Programming Language" },
        { question: "Which keyword declares a variable?", options: ["var", "let", "const", "All of these"], answer: "All of these" },
        { question: "Which symbol is used for comments?", options: ["//", "/* */", "#", "<>"], answer: "//" },
        { question: "How do you create a function?", options: ["function myFunc()", "def myFunc()", "func myFunc()", "myFunc function()"], answer: "function myFunc()" },
        { question: "How do you log to console?", options: ["console.log()", "print()", "echo()", "log()"], answer: "console.log()" },
        { question: "Which method adds an element at the end of an array?", options: ["pop()", "push()", "shift()", "unshift()"], answer: "push()" },
        { question: "Which method removes the last element of an array?", options: ["pop()", "push()", "remove()", "cut()"], answer: "pop()" },
        { question: "How do you convert string to number?", options: ["parseInt()", "toNumber()", "Number()", "All of above"], answer: "All of above" },
        { question: "Which loop runs until condition is false?", options: ["for", "do-while", "while", "All three"], answer: "All three" },
        { question: "What’s the correct way to write an arrow function?", options: ["() => {}", "function() {}", "=> () {}", "func => {}"], answer: "() => {}" },
        { question: "How to compare value and type?", options: ["==", "=", "===", "is"], answer: "===" },
        { question: "How to convert array-like to array?", options: ["Array.from()", "[].slice.call()", "Both", "None"], answer: "Both" },
        { question: "Which object represents the document page?", options: ["window", "document", "page", "root"], answer: "document" },
        { question: "Which method changes HTML content?", options: ["innerHTML", "textContent", "html", "content"], answer: "innerHTML" },
        { question: "Which event fires when a page loads?", options: ["onclick", "onload", "onstart", "onopen"], answer: "onload" },
        { question: "How to stop a loop early?", options: ["stop", "break", "exit", "end"], answer: "break" },
        { question: "Which keyword skips current loop iteration?", options: ["stop", "continue", "skip", "next"], answer: "continue" },
        { question: "How to add event listener?", options: ["addEventListener", "attachEvent", "onEvent", "listen"], answer: "addEventListener" },
        { question: "How to convert number to string?", options: ["toString()", "String()", '"" + num', "All"], answer: "All" },
        { question: "Which global method parses JSON?", options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "stringifyJSON()"], answer: "JSON.parse()" },
        { question: "Which global method stringifies JSON?", options: ["JSON.parse()", "JSON.stringify()", "toJson()", "fromJson()"], answer: "JSON.stringify()" },
        { question: "How to check type of variable?", options: ["typeOf", "typeof", "TypeOf", "getType"], answer: "typeof" },
        { question: "What is NaN?", options: ["Not a Number", "Null and Null", "Number and Number", "None"], answer: "Not a Number" },
        { question: "Which keyword defines a constant?", options: ["const", "let", "var", "constant"], answer: "const" },
        { question: "Which operator is for strict inequality?", options: ["!==", "!=", "<>", "not"], answer: "!==" },
        { question: "Which function delays execution?", options: ["setTimeout", "delay", "wait", "sleep"], answer: "setTimeout" },
        { question: "Which function repeats execution?", options: ["setInterval", "setRepeat", "repeat", "loop"], answer: "setInterval" },
        { question: "Which array method filters items?", options: ["filter()", "map()", "reduce()", "select()"], answer: "filter()" },
        { question: "Which array method transforms items?", options: ["map()", "reduce()", "filter()", "foreach()"], answer: "map()" },
        { question: "Which method merges arrays?", options: ["concat()", "join()", "merge()", "append()"], answer: "concat()" }
    ]

};

let selectedCategory = "";
let currentQuiz = [];
let currentIndex = 0;
let score = 0;

function startQuiz() {
    selectedCategory = document.getElementById("category").value;
    const questions = [...allQuestions[selectedCategory]];
    currentQuiz = questions.sort(() => 0.5 - Math.random()).slice(0, 5);
    currentIndex = 0;
    score = 0;

    document.getElementById("home").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    loadQuestion();
}

function loadQuestion() {
    const q = currentQuiz[currentIndex];
    document.getElementById("questionBox").innerHTML = `Q${currentIndex + 1}. ${q.question}`;

    const optionsBox = document.getElementById("optionsBox");
    optionsBox.innerHTML = "";
    q.options.forEach(opt => {
        const div = document.createElement("div");
        div.className = "option";
        div.innerText = opt;
        div.onclick = () => selectOption(div, opt, q.answer);
        optionsBox.appendChild(div);
    });

    document.getElementById("nextBtn").disabled = true;
}

function selectOption(element, selected, correct) {
    const allOptions = document.querySelectorAll(".option");
    allOptions.forEach(opt => opt.classList.remove("selected"));
    element.classList.add("selected");

    if (selected === correct) score++;
    document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < currentQuiz.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("scoreBox").innerText = `You scored ${score} out of ${currentQuiz.length}`;
    }
}

function restartQuiz() {
    document.getElementById("result").style.display = "none";
    document.getElementById("home").style.display = "block";
}

function goBack() {
  // Show home, hide quiz
  document.getElementById("quiz").style.display = "none";
  document.getElementById("home").style.display = "block";

  // Optional: Reset quiz state
  currentQuiz = [];
  currentIndex = 0;
  score = 0;
}
