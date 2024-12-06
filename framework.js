
// add static css for simple functions
// Tworzenie nowego elementu <link>
const link = document.createElement('link');

// Ustawianie atrybutów dla elementu <link>
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'main.css'; // Ścieżka do pliku CSS

// Dodanie elementu <link> do <head>
document.head.appendChild(link);


function fs() {
    // Znajdź wszystkie elementy z klasami zaczynającymi się od 'fs-'
    const elements = document.querySelectorAll('[class*="fs-"]');

    elements.forEach(element => {
        // Pobierz wszystkie klasy elementu
        const classes = element.classList;

        // Iteruj po każdej klasie
        classes.forEach(className => {
            // Sprawdź, czy klasa zaczyna się od 'fs-'
            if (className.startsWith('fs-')) {
                // Wyodrębnij liczbę z nazwy klasy
                const fontSize = className.replace('fs-', '');

                // Ustaw wartość marginesu dolnego w stylu elementu
                element.style.fontSize = fontSize + 'px';

                // Usuń oryginalną klasę
                classes.remove(className);
            }
        });
    });
}

// Wywołaj funkcję po załadowaniu strony (opcjonalnie)
window.onload = fs;
