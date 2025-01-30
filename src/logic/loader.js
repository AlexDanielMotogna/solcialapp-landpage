document.addEventListener("DOMContentLoaded", function () {
    console.log("Landing Page Loaded!");

    // Ejemplo: Mostrar un mensaje al hacer clic en un botón
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            alert("Button clicked!");
        });
    });
});