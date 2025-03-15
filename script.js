document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const welcomeMessage = document.getElementById("welcomeMessage");

    // Función para mostrar mensaje de bienvenida
    function mostrarMensajeBienvenida(userEmail) {
        welcomeMessage.textContent = `¡Bienvenido, ${userEmail}!`;
        welcomeMessage.style.display = "block";
        loginForm.style.display = "none"; // Oculta el formulario
        logoutBtn.style.display = "block"; // Muestra el botón de cerrar sesión
    }

    // Verificar si hay un usuario en localStorage al cargar la página
    const user = localStorage.getItem("user");
    if (user) {
        mostrarMensajeBienvenida(user);
    }

    // Manejar el inicio de sesión
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar recarga de la página

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Validación simple del correo y contraseña
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailValido) {
            alert("Ingrese un correo válido.");
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        // Simulación de autenticación con fetch() y setTimeout
        loginBtn.textContent = "Cargando...";
        loginBtn.disabled = true;

        setTimeout(() => {
            localStorage.setItem("user", email); // Guardar en localStorage
            mostrarMensajeBienvenida(email);

            loginBtn.textContent = "Iniciar Sesión";
            loginBtn.disabled = false;
        }, 2000);
    });

    // Manejar el cierre de sesión
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("user"); // Eliminar usuario de localStorage
        window.location.reload(); // Recargar la página para volver al login
    });
});
