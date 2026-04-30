// ======================================================
// TRANSMISIÓN COMBINADA
// Paso 1: Relación de velocidad
// Etapa 1: Polea-correa
// Etapa 2: Piñón-cadena
// ======================================================


// ======================================================
// MOTORES COMERCIALES
// ======================================================

const motoresComercialesCombinada = [
    0.5, 0.75, 1, 1.5, 2, 3, 5, 7.5, 10, 15, 20, 25, 30, 40, 50, 60,
    75, 100, 125, 150, 200, 250, 300
];

const textosCargaCadenaCombinada = {
    uniforme: "Uniforme",
    fluctuante: "Fluctuante",
    muyFluctuante: "Muy fluctuante"
};

const textosFuenteCadenaCombinada = {
    combustionConvertidor: "Motor de combustión interna con convertidor hidráulico",
    electricoTurbina: "Motor eléctrico o turbina",
    combustionEmbrague: "Motor de combustión interna con embrague o caja mecánica"
};

const factoresSeguridadCadenaCombinada = {
    uniforme: {
        combustionConvertidor: 1.0,
        electricoTurbina: 1.0,
        combustionEmbrague: 1.2
    },
    fluctuante: {
        combustionConvertidor: 1.2,
        electricoTurbina: 1.3,
        combustionEmbrague: 1.4
    },
    muyFluctuante: {
        combustionConvertidor: 1.4,
        electricoTurbina: 1.5,
        combustionEmbrague: 1.7
    }
};


// ======================================================
// UTILIDADES GENERALES
// ======================================================

function obtenerValorNumericoCombinada(id) {
    const elemento = document.getElementById(id);

    if (!elemento) {
        return NaN;
    }

    const valor = parseFloat(elemento.value);

    return Number.isFinite(valor) ? valor : NaN;
}


function colocarTextoCombinada(id, texto) {
    const elemento = document.getElementById(id);

    if (elemento) {
        elemento.textContent = texto;
    }
}


function formatearNumeroCombinada(valor, decimales = 2) {
    if (!Number.isFinite(valor)) {
        return "-";
    }

    return valor.toLocaleString("es-CO", {
        minimumFractionDigits: decimales,
        maximumFractionDigits: decimales
    });
}


function buscarMotorComercialCombinada(valor) {
    if (!Number.isFinite(valor) || valor <= 0) {
        return 0;
    }

    const motor = motoresComercialesCombinada.find(m => m >= valor);

    return motor || valor;
}


function asignarValorCampo(id, valor) {
    const elemento = document.getElementById(id);

    if (!elemento) return;

    elemento.value = valor;
}


function obtenerValorNumericoDesdeTextoCombinada(id) {
    const elemento = document.getElementById(id);

    if (!elemento) return NaN;

    const texto = String(elemento.textContent || "")
        .replace(",", ".")
        .replace(/[^\d.-]/g, "");

    const valor = Number(texto);

    return Number.isFinite(valor) ? valor : NaN;
}


// ======================================================
// PASO 1 - CÁLCULO DE RELACIÓN DE VELOCIDAD
// ======================================================

function calcularRelacionVelocidadCombinada() {
    const potenciaMotor = obtenerValorNumericoCombinada("potenciaMotorCombinada");
    const rpmMotor = obtenerValorNumericoCombinada("rpmMotorCombinada");
    const rpmSalidaRequerida = obtenerValorNumericoCombinada("rpmSalidaRequeridaCombinada");
    const relacionPolea = obtenerValorNumericoCombinada("relacionPoleaCombinada");
    const valorDivisionPinon = obtenerValorNumericoCombinada("valorDivisionPinonCombinada");

    if (!Number.isFinite(potenciaMotor) || potenciaMotor <= 0) {
        mostrarErrorCombinada("Ingrese una potencia de motor válida.");
        actualizarConfiguracionPoleaCombinada();
        actualizarConfiguracionCadenaCombinada();
        return;
    }

    if (!Number.isFinite(rpmMotor) || rpmMotor <= 0) {
        mostrarErrorCombinada("Ingrese las RPM del motor correctamente.");
        actualizarConfiguracionPoleaCombinada();
        actualizarConfiguracionCadenaCombinada();
        return;
    }

    if (!Number.isFinite(rpmSalidaRequerida) || rpmSalidaRequerida <= 0) {
        mostrarErrorCombinada("Ingrese las RPM finales requeridas correctamente.");
        actualizarConfiguracionPoleaCombinada();
        actualizarConfiguracionCadenaCombinada();
        return;
    }

    if (rpmSalidaRequerida >= rpmMotor) {
        mostrarErrorCombinada(
            "La RPM final requerida debe ser menor que la RPM del motor para que exista reducción."
        );
        actualizarConfiguracionPoleaCombinada();
        actualizarConfiguracionCadenaCombinada();
        return;
    }

    if (!Number.isFinite(relacionPolea) || relacionPolea <= 1) {
        mostrarErrorCombinada(
            "Ingrese una relación válida para la etapa de polea-correa. Debe ser mayor que 1."
        );
        actualizarConfiguracionPoleaCombinada();
        actualizarConfiguracionCadenaCombinada();
        return;
    }

    if (!Number.isFinite(valorDivisionPinon) || valorDivisionPinon <= 1) {
        mostrarErrorCombinada(
            "Ingrese un valor válido para calcular la relación de piñón-cadena. Debe ser mayor que 1."
        );
        actualizarConfiguracionPoleaCombinada();
        actualizarConfiguracionCadenaCombinada();
        return;
    }

    const relacionTotalRequerida = rpmMotor / rpmSalidaRequerida;
    const relacionPinonCadena = relacionTotalRequerida / valorDivisionPinon;
    const rpmSalidaPolea = rpmMotor / relacionPolea;

    const relacionTotalUsada = relacionPolea * relacionPinonCadena;
    const rpmSalidaGeneral = rpmMotor / relacionTotalUsada;

    colocarTextoCombinada(
        "relacionTotalCombinada",
        `${formatearNumeroCombinada(relacionTotalRequerida, 2)} : 1`
    );

    colocarTextoCombinada(
        "detalleRelacionTotalCombinada",
        `Rv total requerida = ${formatearNumeroCombinada(rpmMotor, 0)} / ${formatearNumeroCombinada(rpmSalidaRequerida, 0)} = ${formatearNumeroCombinada(relacionTotalRequerida, 3)}`
    );

    colocarTextoCombinada(
        "relacionPinonCadenaCombinada",
        `${formatearNumeroCombinada(relacionPinonCadena, 2)} : 1`
    );

    colocarTextoCombinada(
        "detalleRelacionPinonCadenaCombinada",
        `Rv piñón-cadena = ${formatearNumeroCombinada(relacionTotalRequerida, 3)} / ${formatearNumeroCombinada(valorDivisionPinon, 2)} = ${formatearNumeroCombinada(relacionPinonCadena, 3)}`
    );

    colocarTextoCombinada(
        "rpmIntermediaCombinada",
        `${formatearNumeroCombinada(rpmSalidaPolea, 2)} rpm`
    );

    colocarTextoCombinada(
        "detalleRpmIntermediaCombinada",
        `RPM salida polea = ${formatearNumeroCombinada(rpmMotor, 0)} / ${formatearNumeroCombinada(relacionPolea, 2)} = ${formatearNumeroCombinada(rpmSalidaPolea, 2)} rpm`
    );

    colocarTextoCombinada(
        "rpmFinalObtenidaCombinada",
        `${formatearNumeroCombinada(rpmSalidaGeneral, 2)} rpm`
    );

    colocarTextoCombinada(
        "detalleRpmFinalObtenidaCombinada",
        `RPM salida general = ${formatearNumeroCombinada(rpmMotor, 0)} / (${formatearNumeroCombinada(relacionPolea, 2)} × ${formatearNumeroCombinada(relacionPinonCadena, 3)}) = ${formatearNumeroCombinada(rpmSalidaGeneral, 2)} rpm`
    );

    actualizarConfiguracionPoleaCombinada();
    actualizarConfiguracionCadenaCombinada();
}


// ======================================================
// ETAPA 1 - CONFIGURACIÓN PARA POLEA-CORREA
// ======================================================

function actualizarConfiguracionPoleaCombinada() {
    const potenciaMotor = obtenerValorNumericoCombinada("potenciaMotorCombinada");
    const rpmMotor = obtenerValorNumericoCombinada("rpmMotorCombinada");
    const relacionPolea = obtenerValorNumericoCombinada("relacionPoleaCombinada");

    const baseMaquina = obtenerValorNumericoCombinada("tipoMaquinaPoleaCombinada");
    const factorServicioDiario = obtenerValorNumericoCombinada("tipoServicioPoleaCombinada");

    if (!Number.isFinite(baseMaquina) || !Number.isFinite(factorServicioDiario)) {
        colocarTextoCombinada("fsSugeridoPoleaCombinada", "-");
        colocarTextoCombinada("detalleFsPoleaCombinada", "Seleccione tipo de máquina y horas de servicio.");
        colocarTextoCombinada("fsFinalPoleaCombinada", "-");
    } else {
        const fsSugerido = baseMaquina + factorServicioDiario;

        colocarTextoCombinada(
            "fsSugeridoPoleaCombinada",
            formatearNumeroCombinada(fsSugerido, 1)
        );

        colocarTextoCombinada(
            "detalleFsPoleaCombinada",
            `FS = ${formatearNumeroCombinada(baseMaquina, 1)} + ${formatearNumeroCombinada(factorServicioDiario, 1)} = ${formatearNumeroCombinada(fsSugerido, 1)}`
        );

        colocarTextoCombinada(
            "fsFinalPoleaCombinada",
            formatearNumeroCombinada(fsSugerido, 1)
        );
    }

    if (!Number.isFinite(potenciaMotor) || potenciaMotor <= 0) {
        colocarTextoCombinada("potenciaPoleaCombinada", "-");
        colocarTextoCombinada("potenciaNdPoleaCombinada", "N/A");
        colocarTextoCombinada("pdPoleaCombinada", "-");
        colocarTextoCombinada("datoPoleaPotencia", "-");
        colocarTextoCombinada("datoPoleaRpmEntrada", "-");
        colocarTextoCombinada("datoPoleaRpmSalida", "-");
        colocarTextoCombinada("detalleDatosPoleaCombinada", "Ingrese la potencia y las RPM para generar los datos de la etapa polea-correa.");
        return;
    }

    const usarND = document.getElementById("usarNDPoleaCombinada")?.checked;
    const valorND = obtenerValorNumericoCombinada("valorNDPoleaCombinada");

    let potenciaParaDiseno = potenciaMotor;

    colocarTextoCombinada(
        "potenciaPoleaCombinada",
        `${formatearNumeroCombinada(potenciaMotor, 3)} HP`
    );

    if (usarND) {
        const ndAplicado = Number.isFinite(valorND) && valorND > 0 ? valorND : 1;
        const potenciaConNd = potenciaMotor * ndAplicado;
        const motorComercial = buscarMotorComercialCombinada(potenciaConNd);

        potenciaParaDiseno = motorComercial;

        colocarTextoCombinada(
            "potenciaNdPoleaCombinada",
            `${formatearNumeroCombinada(potenciaConNd, 3)} HP → Motor: ${formatearNumeroCombinada(motorComercial, 2)} HP`
        );
    } else {
        colocarTextoCombinada("potenciaNdPoleaCombinada", "N/A");
    }

    if (Number.isFinite(baseMaquina) && Number.isFinite(factorServicioDiario)) {
        const fsSugerido = baseMaquina + factorServicioDiario;
        const pdFinal = potenciaParaDiseno * fsSugerido;

        colocarTextoCombinada(
            "pdPoleaCombinada",
            `${formatearNumeroCombinada(pdFinal, 3)} HP`
        );
    } else {
        colocarTextoCombinada("pdPoleaCombinada", "-");
    }

    colocarTextoCombinada(
        "datoPoleaPotencia",
        `${formatearNumeroCombinada(potenciaMotor, 3)} HP`
    );

    if (Number.isFinite(rpmMotor) && rpmMotor > 0) {
        colocarTextoCombinada(
            "datoPoleaRpmEntrada",
            `${formatearNumeroCombinada(rpmMotor, 0)} rpm`
        );
    } else {
        colocarTextoCombinada("datoPoleaRpmEntrada", "-");
    }

    if (
        Number.isFinite(rpmMotor) &&
        rpmMotor > 0 &&
        Number.isFinite(relacionPolea) &&
        relacionPolea > 1
    ) {
        const rpmSalidaPolea = rpmMotor / relacionPolea;

        colocarTextoCombinada(
            "datoPoleaRpmSalida",
            `${formatearNumeroCombinada(rpmSalidaPolea, 2)} rpm`
        );

        colocarTextoCombinada(
            "detalleDatosPoleaCombinada",
            `Enviar a polea-correa: potencia = ${formatearNumeroCombinada(potenciaMotor, 3)} HP, RPM entrada = ${formatearNumeroCombinada(rpmMotor, 0)} rpm, RPM salida = ${formatearNumeroCombinada(rpmSalidaPolea, 2)} rpm.`
        );
    } else {
        colocarTextoCombinada("datoPoleaRpmSalida", "-");
        colocarTextoCombinada("detalleDatosPoleaCombinada", "Complete RPM motor y relación de polea-correa para calcular la RPM de salida de la primera etapa.");
    }
}


function toggleNDPoleaCombinada() {
    const check = document.getElementById("usarNDPoleaCombinada");
    const input = document.getElementById("valorNDPoleaCombinada");

    if (!check || !input) return;

    input.disabled = !check.checked;

    if (!check.checked) {
        input.value = "";
    }

    actualizarConfiguracionPoleaCombinada();
}


// ======================================================
// CALCULAR ETAPA POLEA-CORREA USANDO JS ORIGINAL
// ======================================================

function calcularEtapaPoleaCorreaCombinada() {
    calcularRelacionVelocidadCombinada();

    const potenciaMotor = obtenerValorNumericoCombinada("potenciaMotorCombinada");
    const rpmMotor = obtenerValorNumericoCombinada("rpmMotorCombinada");
    const relacionPolea = obtenerValorNumericoCombinada("relacionPoleaCombinada");

    const fsFinal = obtenerValorNumericoDesdeTextoCombinada("fsFinalPoleaCombinada");
    const tecnologia = document.getElementById("tecnologiaBandaPoleaCombinada")?.value || "";
    const ranura = document.getElementById("tipoRanuraPoleaCombinada")?.value || "";

    if (
        !Number.isFinite(potenciaMotor) ||
        potenciaMotor <= 0 ||
        !Number.isFinite(rpmMotor) ||
        rpmMotor <= 0 ||
        !Number.isFinite(relacionPolea) ||
        relacionPolea <= 1 ||
        !Number.isFinite(fsFinal) ||
        fsFinal <= 0 ||
        !tecnologia ||
        !ranura
    ) {
        alert("Faltan datos para calcular la etapa polea-correa. Verifique potencia, RPM, relación de polea, factor de servicio, tecnología de banda y tipo de ranura.");
        return;
    }

    const rpmSalidaPolea = rpmMotor / relacionPolea;

    sincronizarCamposOcultosPoleaCorrea(
        potenciaMotor,
        rpmMotor,
        rpmSalidaPolea,
        fsFinal
    );

    if (typeof calcularPasosParciales === "function") {
        calcularPasosParciales();
    }

    if (typeof calcularDiseno === "function") {
        calcularDiseno();
    } else {
        alert("No se encontró la función calcularDiseno() de la calculadora de polea-correa.");
        return;
    }

    const seccionResultados = document.querySelector(".seccion-resultados-polea-combinada");

    if (seccionResultados) {
        seccionResultados.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


function sincronizarCamposOcultosPoleaCorrea(
    potenciaMotor,
    rpmMotor,
    rpmSalidaPolea,
    fsFinal
) {
    const tipoMaquinaOrigen = document.getElementById("tipoMaquinaPoleaCombinada");
    const tipoServicioOrigen = document.getElementById("tipoServicioPoleaCombinada");
    const tecnologiaOrigen = document.getElementById("tecnologiaBandaPoleaCombinada");
    const ranuraOrigen = document.getElementById("tipoRanuraPoleaCombinada");

    asignarValorCampo("tipoMaquina", tipoMaquinaOrigen?.value || "1.0");
    asignarValorCampo("tipoServicio", tipoServicioOrigen?.value || "0");
    asignarValorCampo("potenciaPrincipal", potenciaMotor);
    asignarValorCampo("fsManual", fsFinal);
    asignarValorCampo("rpmEntrada", rpmMotor);
    asignarValorCampo("rpmSalida", rpmSalidaPolea);
    asignarValorCampo("tecnologiaBanda", tecnologiaOrigen?.value || "convencional");
    asignarValorCampo("tipoRanuraPolea", ranuraOrigen?.value || "estandar");

    const usarNDOrigen = document.getElementById("usarNDPoleaCombinada");
    const valorNDOrigen = document.getElementById("valorNDPoleaCombinada");

    const usarNDOculto = document.getElementById("usarND");
    const valorNDOculto = document.getElementById("valorND");

    if (usarNDOculto) {
        usarNDOculto.checked = Boolean(usarNDOrigen?.checked);
    }

    if (valorNDOculto) {
        valorNDOculto.disabled = !Boolean(usarNDOrigen?.checked);
        valorNDOculto.value = usarNDOrigen?.checked ? (valorNDOrigen?.value || "") : "";
    }

    if (typeof actualizarFS === "function") {
        actualizarFS();
    }
}


// ======================================================
// ETAPA 2 - CONFIGURACIÓN PARA PIÑÓN-CADENA
// ======================================================

function actualizarConfiguracionCadenaCombinada() {
    const potenciaMotor = obtenerValorNumericoCombinada("potenciaMotorCombinada");
    const rpmMotor = obtenerValorNumericoCombinada("rpmMotorCombinada");
    const rpmSalidaRequerida = obtenerValorNumericoCombinada("rpmSalidaRequeridaCombinada");
    const relacionPolea = obtenerValorNumericoCombinada("relacionPoleaCombinada");

    if (
        !Number.isFinite(potenciaMotor) ||
        potenciaMotor <= 0 ||
        !Number.isFinite(rpmMotor) ||
        rpmMotor <= 0 ||
        !Number.isFinite(rpmSalidaRequerida) ||
        rpmSalidaRequerida <= 0 ||
        !Number.isFinite(relacionPolea) ||
        relacionPolea <= 1
    ) {
        colocarTextoCombinada("datoCadenaPotencia", "-");
        colocarTextoCombinada("datoCadenaRpmConductor", "-");
        colocarTextoCombinada("datoCadenaRpmConducido", "-");
        colocarTextoCombinada("datoCadenaRelacion", "-");
        colocarTextoCombinada("detalleDatosCadenaCombinada", "Complete potencia, RPM y relación de polea-correa para generar los datos de cadena.");
        actualizarFactorSeguridadVisualCadenaCombinada();
        return;
    }

    const rpmConductorCadena = rpmMotor / relacionPolea;
    const rpmConducidoCadena = rpmSalidaRequerida;
    const relacionCadena = rpmConductorCadena / rpmConducidoCadena;

    colocarTextoCombinada(
        "datoCadenaPotencia",
        `${formatearNumeroCombinada(potenciaMotor, 3)} HP`
    );

    colocarTextoCombinada(
        "datoCadenaRpmConductor",
        `${formatearNumeroCombinada(rpmConductorCadena, 2)} rpm`
    );

    colocarTextoCombinada(
        "datoCadenaRpmConducido",
        `${formatearNumeroCombinada(rpmConducidoCadena, 2)} rpm`
    );

    colocarTextoCombinada(
        "datoCadenaRelacion",
        `${formatearNumeroCombinada(relacionCadena, 3)} : 1`
    );

    colocarTextoCombinada(
        "detalleDatosCadenaCombinada",
        `Enviar a piñón-cadena: potencia = ${formatearNumeroCombinada(potenciaMotor, 3)} HP, RPM conductor = ${formatearNumeroCombinada(rpmConductorCadena, 2)} rpm, RPM conducido = ${formatearNumeroCombinada(rpmConducidoCadena, 2)} rpm.`
    );

    actualizarFactorSeguridadVisualCadenaCombinada();
}


function actualizarFactorSeguridadVisualCadenaCombinada() {
    const tipoCarga = document.getElementById("tipoCargaCadenaCombinada")?.value || "";
    const fuente = document.getElementById("fuentePotenciaCadenaCombinada")?.value || "";

    const factor = factoresSeguridadCadenaCombinada?.[tipoCarga]?.[fuente];

    if (!Number.isFinite(factor)) {
        colocarTextoCombinada("fsCadenaCombinada", "-");
        colocarTextoCombinada("detalleFsCadenaCombinada", "Seleccione tipo de carga y fuente de potencia.");
        return;
    }

    colocarTextoCombinada(
        "fsCadenaCombinada",
        formatearNumeroCombinada(factor, 2)
    );

    colocarTextoCombinada(
        "detalleFsCadenaCombinada",
        `Tipo de carga: ${textosCargaCadenaCombinada[tipoCarga] || "-"} | Fuente: ${textosFuenteCadenaCombinada[fuente] || "-"}`
    );
}


// ======================================================
// CALCULAR ETAPA PIÑÓN-CADENA USANDO JS ORIGINAL
// ======================================================

function calcularEtapaPinonCadenaCombinada() {
    calcularRelacionVelocidadCombinada();
    actualizarConfiguracionCadenaCombinada();

    const potenciaMotor = obtenerValorNumericoCombinada("potenciaMotorCombinada");
    const rpmMotor = obtenerValorNumericoCombinada("rpmMotorCombinada");
    const rpmSalidaRequerida = obtenerValorNumericoCombinada("rpmSalidaRequeridaCombinada");
    const relacionPolea = obtenerValorNumericoCombinada("relacionPoleaCombinada");

    const tipoCarga = document.getElementById("tipoCargaCadenaCombinada")?.value || "";
    const fuente = document.getElementById("fuentePotenciaCadenaCombinada")?.value || "";
    const numeroHileras = document.getElementById("numeroHilerasCadenaCombinada")?.value || "";
    const criterio = document.getElementById("criterioSeleccionPinonCombinada")?.value || "";
    const porcentaje = obtenerValorNumericoCombinada("porcentajeSobredimensionCadenaCombinada");

    if (
        !Number.isFinite(potenciaMotor) ||
        potenciaMotor <= 0 ||
        !Number.isFinite(rpmMotor) ||
        rpmMotor <= 0 ||
        !Number.isFinite(rpmSalidaRequerida) ||
        rpmSalidaRequerida <= 0 ||
        !Number.isFinite(relacionPolea) ||
        relacionPolea <= 1
    ) {
        alert("Faltan datos para calcular la etapa piñón-cadena. Verifique potencia, RPM y relación de polea-correa.");
        return;
    }

    if (!tipoCarga || !fuente || !numeroHileras || !criterio || !Number.isFinite(porcentaje)) {
        alert("Complete tipo de carga, fuente de potencia, número de hileras, criterio de selección y sobredimensionamiento.");
        return;
    }

    const rpmConductorCadena = rpmMotor / relacionPolea;
    const rpmConducidoCadena = rpmSalidaRequerida;

    sincronizarCamposOcultosPinonCadena(
        potenciaMotor,
        rpmConductorCadena,
        rpmConducidoCadena
    );

    if (typeof calcularTodosLosPasosCadena === "function") {
        calcularTodosLosPasosCadena();
    } else {
        alert("No se encontró la función calcularTodosLosPasosCadena() de la calculadora de piñón-cadena.");
        return;
    }

    const seccionResultados = document.querySelector(".seccion-resultados-cadena-combinada");

    if (seccionResultados) {
        seccionResultados.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


function sincronizarCamposOcultosPinonCadena(
    potenciaMotor,
    rpmConductorCadena,
    rpmConducidoCadena
) {
    const tipoCarga = document.getElementById("tipoCargaCadenaCombinada")?.value || "";
    const fuente = document.getElementById("fuentePotenciaCadenaCombinada")?.value || "";
    const numeroHileras = document.getElementById("numeroHilerasCadenaCombinada")?.value || "";
    const criterio = document.getElementById("criterioSeleccionPinonCombinada")?.value || "normal";
    const porcentaje = document.getElementById("porcentajeSobredimensionCadenaCombinada")?.value || "10";
    const mostrarTodas = document.getElementById("mostrarTodasOpcionesCadenaCombinada")?.checked || false;

    asignarValorCampo("potenciaMotorCadena", potenciaMotor);
    asignarValorCampo("rpmConductorCadena", rpmConductorCadena);
    asignarValorCampo("rpmConducidoCadena", rpmConducidoCadena);
    asignarValorCampo("tipoCargaCadena", tipoCarga);
    asignarValorCampo("fuentePotenciaCadena", fuente);
    asignarValorCampo("numeroHilerasCadena", numeroHileras);
    asignarValorCampo("criterioSeleccionPinon", criterio);
    asignarValorCampo("porcentajeSobredimensionCadena", porcentaje);

    const checkMostrarTodas = document.getElementById("mostrarTodasOpcionesCadena");

    if (checkMostrarTodas) {
        checkMostrarTodas.checked = mostrarTodas;
    }
}


// ======================================================
// MANEJO DE ERRORES
// ======================================================

function mostrarErrorCombinada(mensaje) {
    colocarTextoCombinada("relacionTotalCombinada", "-");
    colocarTextoCombinada("relacionPinonCadenaCombinada", "-");
    colocarTextoCombinada("rpmIntermediaCombinada", "-");
    colocarTextoCombinada("rpmFinalObtenidaCombinada", "-");

    colocarTextoCombinada("detalleRelacionTotalCombinada", mensaje);
    colocarTextoCombinada("detalleRelacionPinonCadenaCombinada", "No se puede calcular todavía.");
    colocarTextoCombinada("detalleRpmIntermediaCombinada", "Corrija los datos ingresados.");
    colocarTextoCombinada("detalleRpmFinalObtenidaCombinada", "No se puede verificar todavía.");
}


// ======================================================
// LIMPIAR FORMULARIO
// ======================================================

function limpiarTransmisionCombinada() {
    const campos = [
        "potenciaMotorCombinada",
        "rpmMotorCombinada",
        "rpmSalidaRequeridaCombinada",
        "relacionPoleaCombinada",
        "valorDivisionPinonCombinada",
        "valorNDPoleaCombinada",
    ];

    campos.forEach((id) => {
        const elemento = document.getElementById(id);

        if (elemento) {
            elemento.value = "";
        }
    });

    const selects = [
        "tipoMaquinaPoleaCombinada",
        "tipoServicioPoleaCombinada",
        "tecnologiaBandaPoleaCombinada",
        "tipoRanuraPoleaCombinada",
        "tipoCargaCadenaCombinada",
        "fuentePotenciaCadenaCombinada",
        "numeroHilerasCadenaCombinada",
        "criterioSeleccionPinonCombinada"
    ];

    selects.forEach((id) => {
        const elemento = document.getElementById(id);

        if (elemento) {
            elemento.value = "";
        }
    });

    const usarND = document.getElementById("usarNDPoleaCombinada");
    const valorND = document.getElementById("valorNDPoleaCombinada");
    const mostrarTodas = document.getElementById("mostrarTodasOpcionesCadenaCombinada");
    const resultadoPolea = document.getElementById("resultado");

    if (usarND) {
        usarND.checked = false;
    }

    if (valorND) {
        valorND.value = "";
        valorND.disabled = true;
    }

    if (mostrarTodas) {
        mostrarTodas.checked = false;
    }

    const porcentajeSobredimension = document.getElementById("porcentajeSobredimensionCadenaCombinada");

if (porcentajeSobredimension) {
    porcentajeSobredimension.value = "10";
}

    colocarTextoCombinada("relacionTotalCombinada", "-");
    colocarTextoCombinada("detalleRelacionTotalCombinada", "Ingrese las RPM del motor y la salida requerida.");

    colocarTextoCombinada("relacionPinonCadenaCombinada", "-");
    colocarTextoCombinada("detalleRelacionPinonCadenaCombinada", "Aquí se mostrará el resultado de dividir la relación total entre el valor ingresado.");

    colocarTextoCombinada("rpmIntermediaCombinada", "-");
    colocarTextoCombinada("detalleRpmIntermediaCombinada", "Aquí se mostrará la velocidad después de la primera etapa.");

    colocarTextoCombinada("rpmFinalObtenidaCombinada", "-");
    colocarTextoCombinada("detalleRpmFinalObtenidaCombinada", "Aquí se mostrará la velocidad final del sistema.");

    if (resultadoPolea) {
        resultadoPolea.innerHTML = "";
        resultadoPolea.style.display = "none";
    }

    if (typeof limpiarFormularioCadena === "function") {
        limpiarFormularioCadena();
    }

    actualizarConfiguracionPoleaCombinada();
    actualizarConfiguracionCadenaCombinada();
}


// ======================================================
// INICIALIZACIÓN
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
    actualizarConfiguracionPoleaCombinada();
    actualizarConfiguracionCadenaCombinada();
});