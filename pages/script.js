const dataAlvo = new Date('2024-12-31').getTime();

const interval = setInterval(function() {
    const agora = new Date().getTime();
    const diferenca = dataAlvo - agora;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    
    document.getElementById('countdown').innerHTML = `${dias} days until the end <br> of 2024...`;
    
    if (diferenca < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = 'Times up!';
    }
}, 1000);

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
} // para verificar se há algum elemento não visivel

function checkVisibility() {
    if (isElementInViewport(countdown)) {
        countdown.style.opacity = '1';
        window.removeEventListener('scroll', checkVisibility);
    }
}

window.addEventListener('scroll', checkVisibility);

document.addEventListener('DOMContentLoaded', checkVisibility);