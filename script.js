// codigo para a frase

const phrase = document.getElementById("phrase");
const circle = document.getElementById("circle");

phrase.addEventListener('click', () => {
    circle.style.width = "10000px";
    circle.style.height = "10000px";
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changePage() {
    await sleep(300);  
    window.location.href = './pages/index.html';
}

// codigo para a janela 

function windowResize() {
    // consts.
    const screenWidth = window.innerWidth; 
    const phrase = document.getElementById('phrase');
    // if-else ´
    
    if (screenWidth < 768) {
        phrase.style.fontSize = '30px';
        phrase.innerHTML = `How much time <br> left in 2024?`;
    } 
    else {return 0;}
}
// chamar a função ao abrir a tela

window.onload = windowResize;
window.onresize = windowResize;
