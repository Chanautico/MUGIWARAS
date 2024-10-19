const imagens = [
    './imagem/Neon.jpg',
    './imagem/reyna.png',
    './imagem/Breach.png',
    './imagem/Sage.png',
    './imagem/Cypher.png'
];

let stopImageChange = false;
let intervalId;

function preCarregarImagens() {
    imagens.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
}

function escolherImagemAleatoria() {
    return Math.floor(Math.random() * imagens.length);
}

function alterarFundo() {
    if (stopImageChange) {
        return;
    }

    const elementoImagem = document.getElementById('imagem');
    const indiceAleatorio = escolherImagemAleatoria();
    const novaImagem = imagens[indiceAleatorio];

    elementoImagem.style.opacity = 0;

    setTimeout(() => {
        document.body.style.backgroundImage = `url(${novaImagem})`;
        elementoImagem.style.backgroundImage = `url(${novaImagem})`;

        setTimeout(() => {
            elementoImagem.style.opacity = 1;
        }, 100);

    }, 150);
}

window.addEventListener('load', () => {
    preCarregarImagens();
    alterarFundo();
    iniciarTrocaDeImagens();
});

function iniciarTrocaDeImagens() {
    if (!intervalId) {
        intervalId = setInterval(alterarFundo, 20000);
    }
}

function pararTrocaDeImagens() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function alterarFundoEstático(imagem) {
    document.body.style.backgroundImage = `url(${imagem})`;

    const elementoImagem = document.getElementById('imagem');
    elementoImagem.style.backgroundImage = `url(${imagem})`;
}

const inputEmail = document.getElementById('user');

function verificarPalavra() {
    const palavra = inputEmail.value.trim().toLowerCase();

    if (palavrasImagens.hasOwnProperty(palavra)) {
        alterarFundoEstático(palavrasImagens[palavra]);
        stopImageChange = true;
        pararTrocaDeImagens();
    } else {
        stopImageChange = false;
        iniciarTrocaDeImagens();
    }
}

inputEmail.addEventListener('blur', verificarPalavra);

inputEmail.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        verificarPalavra();
    }
});

const palavrasImagens = {
    "chanautico": "./imagem/Neon.jpg",
    "rubinho": "./imagem/Breach.png",
    "pimenta": "./imagem/Cypher.png",
    "palavra4": "./imagem/caminho-da-imagem4.jpg",
    "palavra5": "./imagem/caminho-da-imagem5.jpg"
};
