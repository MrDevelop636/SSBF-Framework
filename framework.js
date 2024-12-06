// Author: ZLMTech | Version: BETA |
// add link to Basic css file
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'main.css'; 
document.head.appendChild(link);



document.addEventListener('DOMContentLoaded', () => {
    const createStylesheet = () => {
        const styleElement = document.createElement('style'); 
        document.head.appendChild(styleElement); 
        return styleElement.sheet; 
    };

    const stylesheet = createStylesheet();

    // Funkcja generuje reguły CSS dla klas
    const generateDynamicCSS = (selectorPrefix, property, min, max) => {
        for (let i = min; i <= max; i++) {
            const selector = `${selectorPrefix}-${i}`;
            const rule = `${selector} { ${property}: ${i}px; }`;
            stylesheet.insertRule(rule, stylesheet.cssRules.length); 
        }
    };


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
