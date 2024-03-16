const horas1 = document.getElementById('horas1');
const minutos1 = document.getElementById('minutos1');
const beer1 = document.getElementById('beer');
const books1 = document.getElementById('books');
const musics1 = document.getElementById('musics');

// codigo para as frases

const dataAlvo = new Date('2024-12-31').getTime();

const interval = setInterval(function() {
    // Consts. sobre as categorias de cada texto
    const agora = new Date().getTime();
    const diferenca = dataAlvo - agora;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor(diferenca / (1000 * 60 * 60));
    const minutos = Math.floor(diferenca / (1000 * 60));
    const beer = Math.floor(96*(dias));
    const meses = Math.floor((dataAlvo - agora) / (1000 * 60 * 60 * 24 * 30.44));
    const books = Math.floor((meses)*2);
    const musics = Math.floor(dias*480);

    // frases do index.html
    document.getElementById('countdown').innerHTML = `${dias} days until the end <br> of 2024...`;
    document.getElementById('countdown-h').innerHTML = `${horas} hours until <br> the end of 2024...`;
    document.getElementById('countdown-m').innerHTML = `${minutos} minutes until <br> the end of 2024...`;
    document.getElementById('beer').innerHTML = `${beer} beers until the end <br> of 2024... 🍺`;
    document.getElementById('books').innerHTML = `${books} books read until the end <br> of 2024... 📖`;
    document.getElementById('musics').innerHTML = `${musics} musics heard until <br> the end of 2024...🎵`;
    
    // caso acabe o tempo
    if (diferenca < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = 'Times up!';
    }
}, 1000);   

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener('scroll', function() {
    // consts
    const horas1 = document.getElementById('countdown-h')
    const minutos1 = document.getElementById('countdown-m')
    var scrollTop = window.scrollY || window.pageYOffset; 
    var windowHeight = window.innerHeight; 
    var opacity = scrollTop / (windowHeight * 0.6); 
  
    // controlo opacidade
    opacity = Math.min(1, Math.max(0, opacity));

    async function opacityIns() {
    await sleep(100)
    horas1.style.opacity = opacity;
    await sleep(500);
    minutos1.style.opacity = opacity;
    await sleep(500);
    beer1.style.opacity = opacity;
    await sleep(500);
    books1.style.opacity = opacity;
    await sleep(500);
    musics1.style.opacity = opacity; 
    }

    opacityIns();
  });

// codigo para o tamanho da tela

function windowResize() {
    // consts.
    const screenWidth = window.innerWidth; 

/* acabar*/
}
// chamar a função ao abrir a tela

window.onload = windowResize;
window.onresize = windowResize;

