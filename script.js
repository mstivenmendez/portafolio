// Lógica del Menú Hamburguesa
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

function setMenu(open) {
    navLinks.classList.toggle('active', open);
    hamburger.classList.toggle('toggle', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}

hamburger.addEventListener('click', () => {
    setMenu(!navLinks.classList.contains('active'));
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
});

// Cerrar menú con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
});

// Lógica de Escritura Infinita
const nameEl = document.getElementById('dyn-name');
const roleEl = document.getElementById('dyn-role');
const nameStr = "HOLA, SOY MAICOLL MÉNDEZ";
const roleStr = "Desarrollador Junior Full Stack";

let charIndex = 0;
let isDeleting = false;
let step = 0;

function typeLoop() {
    const currentStr = step === 0 ? nameStr : roleStr;
    const currentEl = step === 0 ? nameEl : roleEl;

    if (!isDeleting && charIndex <= currentStr.length) {
        currentEl.textContent = currentStr.substring(0, charIndex);
        charIndex++;
        setTimeout(typeLoop, 100);
    } else if (isDeleting && charIndex >= 0) {
        currentEl.textContent = currentStr.substring(0, charIndex);
        charIndex--;
        setTimeout(typeLoop, 50);
    } else if (!isDeleting) {
        if (step === 0) { step = 1; charIndex = 0; setTimeout(typeLoop, 500); }
        else { setTimeout(() => { isDeleting = true; typeLoop(); }, 2000); }
    } else {
        if (step === 1) { roleEl.textContent = ""; step = 0; isDeleting = true; charIndex = nameStr.length; typeLoop(); }
        else { isDeleting = false; charIndex = 0; setTimeout(typeLoop, 500); }
    }
}
window.onload = typeLoop;
