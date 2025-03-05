// Función para mostrar errores
function mostrarError(id, mensaje) {
    let elementoError = document.getElementById(id);
    if (elementoError) {
        elementoError.textContent = mensaje;
        elementoError.style.display = "block";
    }
}

// Función para limpiar errores
function limpiarErrores() {
    let errores = document.querySelectorAll(".mensaje-error");
    errores.forEach(function (error) {
        error.textContent = "";
        error.style.display = "none";
    });
    let mensajeErrorGeneral = document.getElementById("mensajeErrorGeneral");
    if (mensajeErrorGeneral) {
        mensajeErrorGeneral.textContent = "";
        mensajeErrorGeneral.style.display = "none";
    }
}

// Validaciones para el formulario de registro (form1.html)
if (document.getElementById("formularioRegistro")) {
    document.getElementById("formularioRegistro").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        // Limpiar mensajes de error anteriores
        limpiarErrores();

        // Obtener valores de los campos
        let nombreFallecido = document.getElementById("nombreFallecido").value.trim();
        let fechaDefuncion = document.getElementById("fechaDefuncion").value.trim();
        let causaMuerte = document.getElementById("causaMuerte").value.trim();
        let nombreMedico = document.getElementById("nombreMedico").value.trim();
        let observaciones = document.getElementById("observaciones").value.trim();

        let valido = true;
        let mensajeErrorGeneral = "";

        // Validar nombre del fallecido (solo letras)
        if (!nombreFallecido) {
            mostrarError("errorNombre", "El nombre del fallecido es requerido.");
            valido = false;
            mensajeErrorGeneral = "Por favor, completa el nombre del fallecido.";
        } else if (!/^[A-Za-zÁáÉéÍíÓóÚúÜü\s]+$/.test(nombreFallecido)) {
            mostrarError("errorNombre", "El nombre solo debe contener letras.");
            valido = false;
            mensajeErrorGeneral = "El nombre del fallecido solo debe contener letras.";
        }

        // Validar fecha y hora de defunción (no puede ser una fecha futura)
        if (!fechaDefuncion) {
            mostrarError("errorFecha", "La fecha y hora de defunción son requeridas.");
            valido = false;
            mensajeErrorGeneral = "Por favor, ingresa la fecha y hora de defunción.";
        } else {
            let fechaIngresada = new Date(fechaDefuncion);
            let fechaActual = new Date();

            if (fechaIngresada > fechaActual) {
                mostrarError("errorFecha", "La fecha de defunción no puede ser futura.");
                valido = false;
                mensajeErrorGeneral = "La fecha de defunción no puede ser futura.";
            }
        }

        // Validar causa de muerte
        if (!causaMuerte) {
            mostrarError("errorCausa", "La causa de muerte es requerida.");
            valido = false;
            mensajeErrorGeneral = "Por favor, ingresa la causa de muerte.";
        }

        // Validar nombre del médico (solo letras)
        if (!nombreMedico) {
            mostrarError("errorMedico", "El nombre del médico es requerido.");
            valido = false;
            mensajeErrorGeneral = "Por favor, completa el nombre del médico.";
        } else if (!/^[A-Za-zÁáÉéÍíÓóÚúÜü\s]+$/.test(nombreMedico)) {
            mostrarError("errorMedico", "El nombre del médico solo debe contener letras.");
            valido = false;
            mensajeErrorGeneral = "El nombre del médico solo debe contener letras.";
        }

        // Validar observaciones (longitud mínima de 10 caracteres)
        if (!observaciones) {
            mostrarError("errorObservaciones", "Las observaciones son requeridas.");
            valido = false;
            mensajeErrorGeneral = "Por favor, ingresa las observaciones.";
        } else if (observaciones.length < 10) {
            mostrarError("errorObservaciones", "Las observaciones deben tener al menos 10 caracteres.");
            valido = false;
            mensajeErrorGeneral = "Las observaciones deben tener al menos 10 caracteres.";
        }

        // Mostrar mensaje de error general si hay errores
        if (!valido) {
            document.getElementById("mensajeErrorGeneral").textContent = mensajeErrorGeneral;
            document.getElementById("mensajeErrorGeneral").style.display = "block";
        } else {
            // Si todo es válido, mostrar mensaje de éxito y limpiar el formulario
            alert("Registro exitoso.");
            document.getElementById("formularioRegistro").reset(); // Limpia el formulario
        }
    });
}

// Validaciones para el formulario de entrega (form2.html)
if (document.getElementById("formularioEntrega")) {
    document.getElementById("formularioEntrega").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        // Limpiar mensajes de error anteriores
        limpiarErrores();

        // Obtener valores de los campos
        let nombreFallecidoEntrega = document.getElementById("nombreFallecidoEntrega").value.trim();
        let nombreFamiliar = document.getElementById("nombreFamiliar").value.trim();
        let tipoDocumento = document.getElementById("tipoDocumento").value;
        let numeroDocumento = document.getElementById("numeroDocumento").value.trim();
        let nombreFuneraria = document.getElementById("nombreFuneraria").value.trim();
        let fechaRetiro = document.getElementById("fechaRetiro").value.trim();

        let valido = true;
        let mensajeErrorGeneral = "";

        // Validar nombre del fallecido (solo letras)
        if (!nombreFallecidoEntrega) {
            mostrarError("errorNombreFallecidoEntrega", "El nombre del fallecido es requerido.");
            valido = false;
            mensajeErrorGeneral = "Por favor, completa el nombre del fallecido.";
        } else if (!/^[A-Za-zÁáÉéÍíÓóÚúÜü\s]+$/.test(nombreFallecidoEntrega)) {
            mostrarError("errorNombreFallecidoEntrega", "El nombre solo debe contener letras.");
            valido = false;
            mensajeErrorGeneral = "El nombre del fallecido solo debe contener letras.";
        }

        // Validar nombre del familiar (solo letras)
        if (!nombreFamiliar) {
            mostrarError("errorNombreFamiliar", "El nombre del familiar o representante es requerido.");
            valido = false;
            mensajeErrorGeneral = "Por favor, completa el nombre del familiar o representante.";
        } else if (!/^[A-Za-zÁáÉéÍíÓóÚúÜü\s]+$/.test(nombreFamiliar)) {
            mostrarError("errorNombreFamiliar", "El nombre solo debe contener letras.");
            valido = false;
            mensajeErrorGeneral = "El nombre del familiar solo debe contener letras.";
        }

        // Validar número de documento (según el tipo de documento)
        // Validar número de documento (según el tipo de documento)
        if (!numeroDocumento) {
            mostrarError("errorNumeroDocumento", "El número de documento es requerido.");
            valido = false;
            mensajeErrorGeneral = "Por favor, ingresa el número de documento.";
        } else {
            if (tipoDocumento === "DNI" && !/^\d{9}$/.test(numeroDocumento)) {
                mostrarError("errorNumeroDocumento", "El DNI debe tener 9 dígitos.");
                valido = false;
                mensajeErrorGeneral = "El DNI debe tener 9 dígitos.";
            } else if (tipoDocumento === "Pasaporte" && !/^[A-Za-z0-9]{6,12}$/.test(numeroDocumento)) {
                mostrarError("errorNumeroDocumento", "El pasaporte debe tener entre 6 y 12 caracteres alfanuméricos.");
                valido = false;
                mensajeErrorGeneral = "El pasaporte debe tener entre 6 y 12 caracteres alfanuméricos.";
            }
        }

        // Validar fecha de retiro (debe ser posterior a la fecha actual)
        if (!fechaRetiro) {
            mostrarError("errorFechaRetiro", "La fecha y hora de retiro son requeridas.");
            valido = false;
            mensajeErrorGeneral = "Por favor, ingresa la fecha y hora de retiro.";
        } else {
            let fechaRetiroIngresada = new Date(fechaRetiro);
            let fechaActual = new Date();

            if (fechaRetiroIngresada <= fechaActual) {
                mostrarError("errorFechaRetiro", "La fecha de retiro debe ser posterior a la fecha actual.");
                valido = false;
                mensajeErrorGeneral = "La fecha de retiro debe ser posterior a la fecha actual.";
            }
        }

        // Mostrar mensaje de error general si hay errores
        if (!valido) {
            document.getElementById("mensajeErrorGeneral").textContent = mensajeErrorGeneral;
            document.getElementById("mensajeErrorGeneral").style.display = "block";
        } else {
            // Si todo es válido, mostrar mensaje de éxito y limpiar el formulario
            alert("Entrega registrada exitosamente.");
            document.getElementById("formularioEntrega").reset(); // Limpia el formulario
        }
    });
}

// Validaciones para el formulario de necropsia (form3.html)
if (document.getElementById("formularioNecropsia")) {
    document.getElementById("formularioNecropsia").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        // Limpiar mensajes de error anteriores
        limpiarErrores();

        // Obtener valores de los campos
        let nombreFallecidoNecropsia = document.getElementById("nombreFallecidoNecropsia").value.trim();
        let nombreSolicitante = document.getElementById("nombreSolicitante").value.trim();
        let relacionFallecido = document.getElementById("relacionFallecido").value;
        let motivoNecropsia = document.getElementById("motivoNecropsia").value.trim();
        let autorizacion = document.getElementById("autorizacion").checked;

        let valido = true;
        let mensajeErrorGeneral = "";

        // Validar nombre del fallecido (solo letras)
        if (!nombreFallecidoNecropsia) {
            mostrarError("errorNombreFallecidoNecropsia", "El nombre del fallecido es requerido.");
            valido = false;
            mensajeErrorGeneral = "Por favor, completa el nombre del fallecido.";
        } else if (!/^[A-Za-zÁáÉéÍíÓóÚúÜü\s]+$/.test(nombreFallecidoNecropsia)) {
            mostrarError("errorNombreFallecidoNecropsia", "El nombre solo debe contener letras.");
            valido = false;
            mensajeErrorGeneral = "El nombre del fallecido solo debe contener letras.";
        }

        // Validar nombre del solicitante (solo letras)
        if (!nombreSolicitante) {
            mostrarError("errorNombreSolicitante", "El nombre del solicitante es requerido.");
            valido = false;
            mensajeErrorGeneral = "Por favor, completa el nombre del solicitante.";
        } else if (!/^[A-Za-zÁáÉéÍíÓóÚúÜü\s]+$/.test(nombreSolicitante)) {
            mostrarError("errorNombreSolicitante", "El nombre solo debe contener letras.");
            valido = false;
            mensajeErrorGeneral = "El nombre del solicitante solo debe contener letras.";
        }

        // Validar relación con el fallecido (debe seleccionar una opción)
        if (!relacionFallecido) {
            mostrarError("errorRelacionFallecido", "La relación con el fallecido es requerida.");
            valido = false;
            mensajeErrorGeneral = "Por favor, selecciona la relación con el fallecido.";
        }

        // Validar motivo de la necropsia (mínimo 10 caracteres)
        if (!motivoNecropsia) {
            mostrarError("errorMotivoNecropsia", "El motivo de la necropsia es requerido.");
            valido = false;
            mensajeErrorGeneral = "Por favor, ingresa el motivo de la necropsia.";
        } else if (motivoNecropsia.length < 10) {
            mostrarError("errorMotivoNecropsia", "El motivo debe tener al menos 10 caracteres.");
            valido = false;
            mensajeErrorGeneral = "El motivo de la necropsia debe tener al menos 10 caracteres.";
        }

        // Validar autorización (checkbox obligatorio)
        if (!autorizacion) {
            mostrarError("errorAutorizacion", "Debes autorizar la necropsia.");
            valido = false;
            mensajeErrorGeneral = "Debes autorizar la necropsia para continuar.";
        }

        // Mostrar mensaje de error general si hay errores
        if (!valido) {
            document.getElementById("mensajeErrorGeneral").textContent = mensajeErrorGeneral;
            document.getElementById("mensajeErrorGeneral").style.display = "block";
        } else {
            // Si todo es válido, mostrar mensaje de éxito y limpiar el formulario
            alert("Autorización registrada exitosamente.");
            document.getElementById("formularioNecropsia").reset(); // Limpia el formulario
        }
    });
}
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (username && email && password) {
        const user = {
            username: username,
            email: email,
            password: password
        };
        localStorage.setItem(username, JSON.stringify(user));
        alert('Registro exitoso');
    } else {
        alert('Por favor, complete todos los campos');
    }
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = JSON.parse(localStorage.getItem(username));

    if (user && user.password === password) {
        alert('Inicio de sesión exitoso');
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});