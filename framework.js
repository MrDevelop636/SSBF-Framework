// Author: ZLMTech | Version: BETA

// Dodanie linku do podstawowego pliku CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'main.css';
document.head.appendChild(link);

document.addEventListener('DOMContentLoaded', () => {
    /**
     * Tworzy nowy element <style> i dodaje go do <head>.
     * @returns {CSSStyleSheet} Arkusz stylów do modyfikacji.
     */
    const createStylesheet = () => {
        const styleElement = document.createElement('style');
        document.head.appendChild(styleElement);
        return styleElement.sheet;
    };

    const stylesheet = createStylesheet();

    /**
     * Generuje reguły CSS dla zadanej klasy i właściwości w podanym zakresie.
     * @param {string} classPrefix Prefiks klasy CSS.
     * @param {string} property Nazwa właściwości CSS.
     * @param {number} min Minimalna wartość dla właściwości.
     * @param {number} max Maksymalna wartość dla właściwości.
     */
    const generateDynamicCSS = (classPrefix, property, min, max) => {
        for (let i = min; i <= max; i++) {
            const className = `${classPrefix}-${i}`;
            const rule = `.${className} { ${property}: ${i}px; }`;

            try {
                stylesheet.insertRule(rule, stylesheet.cssRules.length);
            } catch (error) {
                console.error(`Błąd przy dodawaniu reguły CSS: ${rule}`, error);
            }
        }
    };

    // Lista reguł do wygenerowania
    const rules = [
        { prefix: 'm', property: 'margin' },
        { prefix: 'mb', property: 'margin-bottom' },
        { prefix: 'mt', property: 'margin-top' },
        { prefix: 'mr', property: 'margin-right' },
        { prefix: 'ml', property: 'margin-left' },
        { prefix: 'p', property: 'padding' },
        { prefix: 'pb', property: 'padding-bottom' },
        { prefix: 'pt', property: 'padding-top' },
        { prefix: 'pr', property: 'padding-right' },
        { prefix: 'pl', property: 'padding-left' },
        { prefix: 'w', property: 'width' },
        { prefix: 'h', property: 'height' },
        { prefix: 'fs', property: 'font-size' }
    ];

    // Generowanie reguł CSS na podstawie listy
    rules.forEach(rule => generateDynamicCSS(rule.prefix, rule.property, 0, 1000));

    console.log('Dynamiczne reguły CSS zostały wygenerowane.');
});
