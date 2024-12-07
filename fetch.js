

document.addEventListener("DOMContentLoaded", function () {
    // Tworzenie elementu <link> dla CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";  // Określenie, że jest to arkusz stylów
    link.href = "static.css";  // Ścieżka do pliku CSS (zastąp odpowiednią ścieżką)
    document.head.appendChild(link);
});

function include(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

include("lib.js");
