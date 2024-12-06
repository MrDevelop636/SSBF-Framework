// Author: ZLMTech | Version: BETA |
// add link to Basic css file
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'main.css'; 
document.head.appendChild(link);


document.querySelectorAll('[class^="s-"]').forEach(element => {
const sizeClass =      Array.from(element.classList).find(cls => cls.startsWith('s-'));
if (sizeClass) {
const size = sizeClass.replace('s-', '');
element.style.fontSize = `${size}px`;
    }
});
