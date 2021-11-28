var cardObject = [
    {
        title: 'HTML',
        image: './img/html.png',
        describe: "Linguagem de marcação utilizada na construção de páginas na Web."
    },
    {
        title: 'CSS',
        image: './img/css3.png',
        describe: "Linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou em XML."
    },
    {
        title: 'JavaScript',
        image: './img/js.png',
        describe: "Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
    },
    {
        title: 'Jquery',
        image: './img/jquery.png',
        describe: "Biblioteca de funções em JavaScript que interage com o HTML, desenvolvida para simplificar os scripts interpretados no navegador do usuário (client-side)."
    },
    {
        title: 'Bootstrap',
        image: './img/boostrap.png',
        describe: "Biblioteca front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples."
    },
    {
        title: 'React.js',
        image: './img/react.png',
        describe: "Biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
    },
    {
        title: 'Vue.js',
        image: './img/vue.png',
        describe: "Framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única."
    },
    {
        title: 'TypeScript',
        image: './img/ts.png',
        describe: "Superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem."
    },
    {
        title: 'Angular',
        image: './img/angular.png',
        describe: "Framework JavaScript que simplifica não apenas a construção da interface de usuário, mas também o desenvolvimento de aplicações client-side diferenciadas, sejam elas para a web, mobile ou desktop."
    },
]

var card = document.getElementById("cards");

// CARDS
for (var i = 0; i <= cardObject.length; i++) {
    card.innerHTML += 
    `<div class="card mx-auto mt-5 cardStyle" style="width: 18rem; ">
    <img src="${cardObject[i].image}" class="mt-3 card-img-top" alt="..." />
        <div class="card-body">
        <h3 class="card-title"> ${cardObject[i].title} </h3>
        <p class="card-text"> ${cardObject[i].describe}</p>
        </div>
    </div>
`};