
// add static css for simple functions
// Tworzenie nowego elementu <link>
const link = document.createElement('link');

// Ustawianie atrybutów dla elementu <link>
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'main.css'; // Ścieżka do pliku CSS

// Dodanie elementu <link> do <head>
document.head.appendChild(link);


document.addEventListener('DOMContentLoaded', () => {
    // Funkcja tworzy arkusz stylów
    const createStylesheet = () => {
        const styleElement = document.createElement('style'); // Tworzy element <style>
        document.head.appendChild(styleElement); // Dodaje go do <head>
        return styleElement.sheet; // Zwraca arkusz stylów
    };

    const stylesheet = createStylesheet();

    // Funkcja generuje reguły CSS dla klas
    const generateDynamicCSS = (selectorPrefix, property, min, max) => {
        for (let i = min; i <= max; i++) {
            const selector = `${selectorPrefix}-${i}`;
            const rule = `${selector} { ${property}: ${i}px; }`;
            stylesheet.insertRule(rule, stylesheet.cssRules.length); // Dodaje regułę CSS
        }
    };

    // Generowanie CSS dla marginesów
    generateDynamicCSS('.m', 'margin', 0, 1000);
    generateDynamicCSS('.mb', 'margin-bottom', 0, 1000);
    generateDynamicCSS('.mt', 'margin-top', 0, 1000);
    generateDynamicCSS('.mr', 'margin-right', 0, 1000);
    generateDynamicCSS('.ml', 'margin-left', 0, 1000);
    generateDynamicCSS('.p', 'padding', 0, 1000);
    generateDynamicCSS('.pb', 'padding-bottom', 0, 1000);
    generateDynamicCSS('.pt', 'padding-top', 0, 1000);
    generateDynamicCSS('.pr', 'padding-right', 0, 1000);
    generateDynamicCSS('.pl', 'padding-left', 0, 1000);
    generateDynamicCSS('.w', 'width', 0, 1000);
    generateDynamicCSS('.h', 'height', 0, 1000);
    generateDynamicCSS('.fs', 'font-size', 0, 1000);
    console.log('Dynamic CSS generated successfully.');
});
