document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("*");

    elements.forEach(element => {
        try {
            const classes = Array.from(element.classList); // Pobierz listę klas jako tablicę
            let fontSizeSet = false;
            let colorSet = false;
            let marginSet = false;
            let paddingSet = false;
            let widthSet = false;
            let heightSet = false;
            let backgroundColorSet = false;
            let flexSet = false;

            classes.forEach(cls => {
                if (cls.startsWith("fs-")) {
                    const size = parseInt(cls.split("-")[1], 10);
                    if (!isNaN(size) && !fontSizeSet) {
                        element.style.fontSize = `${size}px`;
                        fontSizeSet = true;
                    }
                }

                
                if (cls.startsWith("fx-")) {
                    const size = parseInt(cls.split("-")[1], 10);
                    if (!isNaN(size) && !flexSet) {
                        element.style.flex = `${size}`;
                        flexSet = true;
                    }
                }

               
                if (cls.startsWith("c-")) {
                    const color = cls.split("-")[1];
                    if (/^#[0-9A-Fa-f]{6}$|^#[0-9A-Fa-f]{3}$/.test(color) && !colorSet) {
                        element.style.color = color;
                        colorSet = true;
                    }
                }

             
                if (cls.startsWith("bc-")) {
                    const color = cls.split("-")[1];
                    if (/^#[0-9A-Fa-f]{6}$|^#[0-9A-Fa-f]{3}$/.test(color) && !backgroundColorSet) {
                        element.style.backgroundColor = color;
                        backgroundColorSet = true;
                    }
                }

               
                if (cls.startsWith("m-")) {
                    const marginValue = parseInt(cls.split("-")[1], 10);
                    if (!isNaN(marginValue)) {
                        if (cls === `m-${marginValue}` && !marginSet) {
                            element.style.margin = `${marginValue}px`;
                            marginSet = true;
                        } else if (cls.startsWith("ml-")) {
                            element.style.marginLeft = `${marginValue}px`;
                        } else if (cls.startsWith("mr-")) {
                            element.style.marginRight = `${marginValue}px`;
                        } else if (cls.startsWith("mt-")) {
                            element.style.marginTop = `${marginValue}px`;
                        } else if (cls.startsWith("mb-")) {
                            element.style.marginBottom = `${marginValue}px`;
                        }
                    }
                }

                
                if (cls.startsWith("p-")) {
                    const paddingValue = parseInt(cls.split("-")[1], 10);
                    if (!isNaN(paddingValue)) {
                        if (cls === `p-${paddingValue}` && !paddingSet) {
                            element.style.padding = `${paddingValue}px`;
                            paddingSet = true;
                        } else if (cls.startsWith("pl-")) {
                            element.style.paddingLeft = `${paddingValue}px`;
                        } else if (cls.startsWith("pr-")) {
                            element.style.paddingRight = `${paddingValue}px`;
                        } else if (cls.startsWith("pt-")) {
                            element.style.paddingTop = `${paddingValue}px`;
                        } else if (cls.startsWith("pb-")) {
                            element.style.paddingBottom = `${paddingValue}px`;
                        }
                    }
                }

             
                if (cls.startsWith("w-")) {
                    const widthValue = parseInt(cls.split("-")[1], 10);
                    if (!isNaN(widthValue) && !widthSet) {
                        element.style.width = `${widthValue}px`;
                        widthSet = true;
                    }
                }

               
                if (cls.startsWith("h-")) {
                    const heightValue = parseInt(cls.split("-")[1], 10);
                    if (!isNaN(heightValue) && !heightSet) {
                        element.style.height = `${heightValue}px`;
                        heightSet = true;
                    }
                }
            });
        } catch (error) {
            console.error("Błąd podczas przetwarzania elementu:", element, error);
        }
    });
});
