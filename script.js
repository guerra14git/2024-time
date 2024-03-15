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
    await sleep(400);  
    window.location.href = './pages/index.html';
}
