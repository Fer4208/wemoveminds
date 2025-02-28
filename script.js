document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        
        if (name && email && message) {
            document.getElementById("formMessage").textContent = "¡Mensaje enviado con éxito!";
            document.getElementById("formMessage").style.color = "green";
        } else {
            document.getElementById("formMessage").textContent = "Por favor, completa todos los campos.";
            document.getElementById("formMessage").style.color = "red";
        }
    });
});