// Author: ZLMTech Version: Beta 

document.addEventListener("DOMContentLoaded", () => {
    // Pobierz wszystkie elementy, które mają klasy zaczynające się od "fs-", "c-", "m-", "p-", "w-", "h-" i "bc-"
    const elements = document.querySelectorAll("[class^='fs-'], [class^='c-'], [class^='m-'], [class^='p-'], [class^='w-'], [class^='h-'], [class^='bc-'], [class^='fx-']");

    elements.forEach(element => {
        try {
            const classes = element.classList;
            let fontSizeSet = false; // Flaga, by upewnić się, że rozmiar czcionki został ustawiony
            let colorSet = false; // Flaga, by upewnić się, że kolor został ustawiony
            let marginSet = false; // Flaga, by upewnić się, że margines został ustawiony
            let paddingSet = false; // Flaga, by upewnić się, że padding został ustawiony
            let widthSet = false; // Flaga, by upewnić się, że szerokość została ustawiona
            let heightSet = false; // Flaga, by upewnić się, że wysokość została ustawiona
            let backgroundColorSet = false; // Flaga, by upewnić się, że kolor tła został ustawiony
            let flexSet = false;

            classes.forEach(cls => {
                // Jeśli klasa zaczyna się od "fs-" (dynamiczny rozmiar czcionki)
                if (cls.startsWith("fs-")) {
                    const size = parseInt(cls.split("-")[1], 10);
                    if (!isNaN(size)) {
                        // Ustaw rozmiar czcionki tylko raz
                        if (!fontSizeSet) {
                            element.style.fontSize = `${size}px`;
                            fontSizeSet = true;
                        }
                    }
                }

                                // Jeśli klasa zaczyna się od "fs-" (dynamiczny rozmiar czcionki)
                                if (cls.startsWith("fx-")) {
                                    const size = parseInt(cls.split("-")[1], 10);
                                    if (!isNaN(size)) {
                                        // Ustaw rozmiar czcionki tylko raz
                                        if (!flexSet) {
                                            element.style.flex = `${size}`;
                                            flexSet = true;
                                        }
                                    }
                                }

                // Jeśli klasa zaczyna się od "c-" (dynamiczny kolor)
                if (cls.startsWith("c-")) {
                    const color = cls.split("-")[1];
                    // Sprawdź, czy wartość jest prawidłowym kolorem hex
                    if (/^#[0-9A-Fa-f]{6}$|^#[0-9A-Fa-f]{3}$/.test(color)) {
                        // Ustaw kolor tekstu tylko raz
                        if (!colorSet) {
                            element.style.color = color;
                            colorSet = true;
                        }
                    } else {
                        console.error(`Błąd: Klasa ${cls} nie zawiera prawidłowego koloru hex.`);
                    }
                }

                // Jeśli klasa zaczyna się od "bc-" (dynamiczny kolor tła)
                if (cls.startsWith("bc-")) {
                    const color = cls.split("-")[1];
                    // Sprawdź, czy wartość jest prawidłowym kolorem hex
                    if (/^#[0-9A-Fa-f]{6}$|^#[0-9A-Fa-f]{3}$/.test(color)) {
                        // Ustaw kolor tła tylko raz
                        if (!backgroundColorSet) {
                            element.style.backgroundColor = color;
                            backgroundColorSet = true;
                        } else {
                            console.log(`Błąd: Element ${element} już ma ustawiony kolor tła. Kolor ${color} zostanie zignorowany.`);
                        }
                    } else {
                        console.error(`Błąd: Klasa ${cls} nie zawiera prawidłowego koloru hex.`);
                    }
                }

                // Jeśli klasa zaczyna się od "m-" (dynamiczne marginesy)
                if (cls.startsWith("m-")) {
                    const marginValue = parseInt(cls.split("-")[1], 10);
                    if (!isNaN(marginValue)) {
                        // Ustaw margines ogólny, jeśli klasa to m-<value>
                        if (cls === `m-${marginValue}` && !marginSet) {
                            element.style.margin = `${marginValue}px`;
                            marginSet = true;
                        }
                        // Ustaw margines po lewej, jeśli klasa to ml-<value>
                        if (cls.startsWith("ml-")) {
                            element.style.marginLeft = `${marginValue}px`;
                        }
                        // Ustaw margines po prawej, jeśli klasa to mr-<value>
                        if (cls.startsWith("mr-")) {
                            element.style.marginRight = `${marginValue}px`;
                        }
                        // Ustaw margines u góry, jeśli klasa to mt-<value>
                        if (cls.startsWith("mt-")) {
                            element.style.marginTop = `${marginValue}px`;
                        }
                        // Ustaw margines u dołu, jeśli klasa to mb-<value>
                        if (cls.startsWith("mb-")) {
                            element.style.marginBottom = `${marginValue}px`;
                        }
                    }
                }

                // Jeśli klasa zaczyna się od "p-" (dynamiczne paddingi)
                if (cls.startsWith("p-")) {
                    const paddingValue = parseInt(cls.split("-")[1], 10);
                    if (!isNaN(paddingValue)) {
                        // Ustaw padding ogólny, jeśli klasa to p-<value>
                        if (cls === `p-${paddingValue}` && !paddingSet) {
                            element.style.padding = `${paddingValue}px`;
                            paddingSet = true;
                        }
                        // Ustaw padding po lewej, jeśli klasa to pl-<value>
                        if (cls.startsWith("pl-")) {
                            element.style.paddingLeft = `${paddingValue}px`;
                        }
                        // Ustaw padding po prawej, jeśli klasa to pr-<value>
                        if (cls.startsWith("pr-")) {
                            element.style.paddingRight = `${paddingValue}px`;
                        }
                        // Ustaw padding u góry, jeśli klasa to pt-<value>
                        if (cls.startsWith("pt-")) {
                            element.style.paddingTop = `${paddingValue}px`;
                        }
                        // Ustaw padding u dołu, jeśli klasa to pb-<value>
                        if (cls.startsWith("pb-")) {
                            element.style.paddingBottom = `${paddingValue}px`;
                        }
                    }
                }

                // Jeśli klasa zaczyna się od "w-" (dynamiczna szerokość)
                if (cls.startsWith("w-")) {
                    const widthValue = parseInt(cls.split("-")[1], 10);
                    if (!isNaN(widthValue)) {
                        // Ustaw szerokość tylko raz
                        if (!widthSet) {
                            element.style.width = `${widthValue}px`;
                            widthSet = true;
                        }
                    }
                }

                // Jeśli klasa zaczyna się od "h-" (dynamiczna wysokość)
                if (cls.startsWith("h-")) {
                    const heightValue = parseInt(cls.split("-")[1], 10);
                    if (!isNaN(heightValue)) {
                        // Ustaw wysokość tylko raz
                        if (!heightSet) {
                            element.style.height = `${heightValue}px`;
                            heightSet = true;
                        }
                    }
                }
            });
        } catch (error) {
            // Logowanie błędów w przypadku problemu z elementem
            console.error("Błąd podczas przetwarzania elementu:", element, error);
        }
    });
});
