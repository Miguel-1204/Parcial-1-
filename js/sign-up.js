document.getElementById("register-btn").addEventListener("click", function() {
    let nombres = document.getElementById("nombres").value;
    let apellidos = document.getElementById("apellidos").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let estrato = document.getElementById("estrato").value;
    let fecha = document.getElementById("fecha").value;
    let grupo = document.getElementById("grupo-sanguineo").value;
    let genero = document.querySelector('input[name="genero"]:checked')?.value;
    
    let actividades = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
        actividades.push(checkbox.value);
    });

    if (!nombres || !apellidos || !email || !telefono || !estrato || !fecha || !grupo || !genero) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    let mensaje = `Registro exitoso:
    - Nombres: ${nombres}
    - Apellidos: ${apellidos}
    - Email: ${email}
    - Teléfono: ${telefono}
    - Estrato: ${estrato}
    - Fecha de Nacimiento: ${fecha}
    - Grupo Sanguíneo: ${grupo}
    - Género: ${genero}
    - Actividades Favoritas: ${actividades.join(", ") || "Ninguna"}`;

    alert(mensaje);
});

document.getElementById("cancel-btn").addEventListener("click", function() {
    window.location.href = "admin.html"; // Redirige al menú de Admin
});
