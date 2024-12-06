// Author: ZLMTech | Version: BETA |
// add link to Basic css file
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'main.css'; 
document.head.appendChild(link);


document.addEventListener("DOMContentLoaded", () => {
    // Pobierz wszystkie elementy z klasą zaczynającą się od "s-"
    const elements = document.querySelectorAll('[class^="s-"]');

    elements.forEach(element => {
        // Pobierz wszystkie klasy elementu
        const classes = element.className.split(" ");
        classes.forEach(cls => {
            // Sprawdź, czy klasa zaczyna się od "s-"
            if (cls.startsWith("s-")) {
                // Wyodrębnij wartość po "s-"
                const fontSize = cls.substring(2);
                // Spróbuj przekonwertować na liczbę
                if (!isNaN(fontSize)) {
                    // Ustaw styl wielkości czcionki
                    element.style.fontSize = `${fontSize}px`;
                }
            }
        });
    });
});



