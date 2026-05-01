const residuosBRA = [
  { cultivo: "Arroz", residuo: "Tamo", origen: "RAC", fr: 2.35, pci: 13023.0, ybas: 0.275, dr: 0.40 },
  { cultivo: "Arroz", residuo: "Cascarilla", origen: "RAI", fr: 0.20, pci: 15074.0, ybas: 0.961, dr: 1.00 },
  { cultivo: "Algodón", residuo: "Paja", origen: "RAC", fr: 1.40, pci: 14600.0, ybas: 0.860, dr: 0.40 },
  { cultivo: "Banano", residuo: "Raquis banano", origen: "RAC", fr: 1.59, pci: 7568.9, ybas: 0.057, dr: 0.50 },
  { cultivo: "Banano", residuo: "Vástago banano", origen: "RAC", fr: 7.95, pci: 8501.9, ybas: 0.066, dr: 0.50 },
  { cultivo: "Banano", residuo: "Banano rechazo", origen: "RAI", fr: 0.24, pci: 10409.8, ybas: 0.169, dr: 1.00 },
  { cultivo: "Plátano", residuo: "Raquis plátano", origen: "RAC", fr: 1.00, pci: 7564.7, ybas: 0.057, dr: 0.50 },
  { cultivo: "Plátano", residuo: "Vástago plátano", origen: "RAC", fr: 5.00, pci: 8501.9, ybas: 0.066, dr: 0.50 },
  { cultivo: "Plátano", residuo: "Plátano rechazo", origen: "RAI", fr: 0.15, pci: 9405.6, ybas: 0.187, dr: 1.00 },
  { cultivo: "Caña azúcar", residuo: "Hojas cogollo", origen: "RAC", fr: 3.26, pci: 15413.9, ybas: 0.317, dr: 0.65 },
  { cultivo: "Caña azúcar", residuo: "Bagazo", origen: "RAI", fr: 2.68, pci: 18643.9, ybas: 0.588, dr: 1.00 },
  { cultivo: "Caña panelera", residuo: "Bagazo", origen: "RAI", fr: 3.75, pci: 18643.9, ybas: 0.588, dr: 1.00 },
  { cultivo: "Caña panelera", residuo: "Hojas cogollo", origen: "RAC", fr: 2.53, pci: 16765.3, ybas: 0.292, dr: 0.65 },
  { cultivo: "Café", residuo: "Pulpa", origen: "RAI", fr: 2.13, pci: 17819.7, ybas: 0.201, dr: 1.00 },
  { cultivo: "Café", residuo: "Cisco", origen: "RAI", fr: 0.21, pci: 18535.1, ybas: 0.931, dr: 1.00 },
  { cultivo: "Café", residuo: "Tallos", origen: "RAC", fr: 3.02, pci: 18342.7, ybas: 0.738, dr: 0.50 },
  { cultivo: "Coco", residuo: "Cáscara", origen: "RAI", fr: 0.84, pci: 21500.0, ybas: 0.919, dr: 1.00 },
  { cultivo: "Coco", residuo: "Concha", origen: "RAI", fr: 0.42, pci: 20090.0, ybas: 0.860, dr: 1.00 },
  { cultivo: "Frijol", residuo: "Tallos y hojas", origen: "RAC", fr: 1.31, pci: 14165.0, ybas: 0.910, dr: 0.40 },
  { cultivo: "Maíz", residuo: "Rastrojo", origen: "RAC", fr: 0.93, pci: 14346.9, ybas: 0.685, dr: 0.40 },
  { cultivo: "Maíz", residuo: "Tusa", origen: "RAC", fr: 0.27, pci: 14183.8, ybas: 0.734, dr: 0.40 },
  { cultivo: "Maíz", residuo: "Capacho", origen: "RAC", fr: 0.21, pci: 16213.0, ybas: 0.936, dr: 0.40 },
  { cultivo: "Maní", residuo: "Paja", origen: "RAI", fr: 2.52, pci: 20100.0, ybas: 0.860, dr: 1.00 },
  { cultivo: "Palma de aceite", residuo: "Cuesco", origen: "RAI", fr: 0.22, pci: 16685.8, ybas: 0.833, dr: 1.00 },
  { cultivo: "Palma de aceite", residuo: "Fibra", origen: "RAI", fr: 0.63, pci: 17882.4, ybas: 0.694, dr: 1.00 },
  { cultivo: "Palma de aceite", residuo: "Raquis palma", origen: "RAI", fr: 1.06, pci: 16823.9, ybas: 0.425, dr: 1.00 },
  { cultivo: "Soya", residuo: "Paja", origen: "RAC", fr: 2.16, pci: 17345.0, ybas: 0.860, dr: 0.30 },
  { cultivo: "Trigo", residuo: "Paja", origen: "RAC", fr: 2.22, pci: 15970.0, ybas: 0.890, dr: 0.40 },
  { cultivo: "Yuca", residuo: "Cáscaras y puntas", origen: "RAC", fr: 0.88, pci: 18045.0, ybas: 0.860, dr: 0.40 }
];

const datosBRP = [
  { especie: "Bovina", excreta: 8, ms: 16, mos: 13, cn: 25, biogas: 0.04 },
  { especie: "Bufalina", excreta: 12, ms: 14, mos: 12, cn: 20, biogas: 0.04 },
  { especie: "Porcina", excreta: 2, ms: 17, mos: 14, cn: 13, biogas: 0.07 },
  { especie: "Ovina", excreta: 1, ms: 30, mos: 20, cn: 30, biogas: 0.05 },
  { especie: "Caprina", excreta: 1, ms: 30, mos: 20, cn: 30, biogas: 0.05 },
  { especie: "Equina", excreta: 10, ms: 25, mos: 15, cn: 25, biogas: 0.04 },
  { especie: "Avícola", excreta: 0.08, ms: 25, mos: 16, cn: 5, biogas: 0.06 }
];

const datosRC = {
  "Arroz": { areaNacional: 455444, produccionNacional: 2463689 },
  "Plátano": { areaNacional: 393139, produccionNacional: 3319357 },
  "Caña panelera": { areaNacional: 240057, produccionNacional: 1514877 }
};

const tablaRetencion = [
  { temperatura: 10, dias: 90 },
  { temperatura: 15, dias: 60 },
  { temperatura: 20, dias: 45 },
  { temperatura: 25, dias: 37 },
  { temperatura: 30, dias: 32 },
  { temperatura: 35, dias: 28 }
];

function numero(id) {
  const value = parseFloat(document.getElementById(id).value);
  return Number.isFinite(value) ? value : 0;
}

function decimales() {
  const value = parseInt(document.getElementById("decimales").value, 10);
  return Number.isFinite(value) ? value : 2;
}

function fmt(value, d = decimales()) {
  if (!Number.isFinite(value)) return "0";
  return value.toLocaleString("es-CO", {
    minimumFractionDigits: d,
    maximumFractionDigits: d
  });
}

function cultivosDisponibles() {
  return [...new Set(residuosBRA.map(item => item.cultivo))].sort();
}

function especiesDisponibles() {
  return datosBRP.map(item => item.especie);
}

function options(lista, seleccionado) {
  return lista.map(item => `<option value="${item}" ${item === seleccionado ? "selected" : ""}>${item}</option>`).join("");
}

function agregarCultivoBRA(cultivo = "Arroz", areaLocal = 25) {
  const tbody = document.querySelector("#tablaEntradasBRA tbody");
  const tr = document.createElement("tr");
  const base = datosRC[cultivo] || { areaNacional: 0, produccionNacional: 0 };
  tr.innerHTML = `
    <td><select class="cultivoBra" onchange="actualizarFilaBRA(this)">${options(cultivosDisponibles(), cultivo)}</select></td>
    <td><input class="areaLocal" type="number" step="any" value="${areaLocal}"></td>
    <td><input class="areaNacional" type="number" step="any" value="${base.areaNacional}"></td>
    <td><input class="produccionNacional" type="number" step="any" value="${base.produccionNacional}"></td>
    <td class="rcCalculado">${fmt(calcularRC(base.areaNacional, base.produccionNacional), 5)}</td>
    <td><button class="danger" type="button" onclick="this.closest('tr').remove()">Eliminar</button></td>
  `;
  tbody.appendChild(tr);
}

function actualizarFilaBRA(select) {
  const tr = select.closest("tr");
  const base = datosRC[select.value] || { areaNacional: 0, produccionNacional: 0 };
  tr.querySelector(".areaNacional").value = base.areaNacional;
  tr.querySelector(".produccionNacional").value = base.produccionNacional;
  tr.querySelector(".rcCalculado").textContent = fmt(calcularRC(base.areaNacional, base.produccionNacional), 5);
}

function calcularRC(areaNacional, produccionNacional) {
  return areaNacional > 0 ? produccionNacional / areaNacional : 0;
}

function calcularBRA() {
  const filasEntrada = [...document.querySelectorAll("#tablaEntradasBRA tbody tr")];
  const tbodyResultado = document.querySelector("#tablaResultadosBRA tbody");
  tbodyResultado.innerHTML = "";

  let totalGJ = 0;
  let totalMWh = 0;
  const totalesCultivo = {};

  filasEntrada.forEach(fila => {
    const cultivo = fila.querySelector(".cultivoBra").value;
    const areaLocal = parseFloat(fila.querySelector(".areaLocal").value) || 0;
    const areaNacional = parseFloat(fila.querySelector(".areaNacional").value) || 0;
    const produccionNacional = parseFloat(fila.querySelector(".produccionNacional").value) || 0;
    const rc = calcularRC(areaNacional, produccionNacional);
    fila.querySelector(".rcCalculado").textContent = fmt(rc, 5);

    residuosBRA.filter(r => r.cultivo === cultivo).forEach(r => {
      const peMJ = areaLocal * rc * r.fr * r.ybas * r.pci * r.dr;
      const peGJ = peMJ / 1000;
      const peMWh = peGJ / 3.6;
      totalGJ += peGJ;
      totalMWh += peMWh;
      totalesCultivo[cultivo] = (totalesCultivo[cultivo] || 0) + peGJ;

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${cultivo}</td>
        <td>${r.residuo}</td>
        <td>${r.origen}</td>
        <td>${fmt(areaLocal)}</td>
        <td>${fmt(rc, 5)}</td>
        <td>${fmt(r.fr)}</td>
        <td>${fmt(r.ybas, 3)}</td>
        <td>${fmt(r.pci, 1)}</td>
        <td>${fmt(r.dr, 2)}</td>
        <td>${fmt(peGJ)}</td>
        <td>${fmt(peMWh)}</td>
      `;
      tbodyResultado.appendChild(tr);
    });
  });

  const detalleCultivos = Object.entries(totalesCultivo)
    .map(([cultivo, gj]) => `${cultivo}: <strong>${fmt(gj)} GJ/año</strong> (${fmt(gj / 3.6)} MWh/año)`)
    .join("<br>");

  document.getElementById("resumenBRA").innerHTML = `
    <strong>Total BRA:</strong> ${fmt(totalGJ)} GJ/año = ${fmt(totalGJ / 1000, 5)} TJ/año = ${fmt(totalMWh)} MWh/año<br>
    ${detalleCultivos}
  `;
}

function agregarEspecieBRP(especie = "Bovina", animales = 130, dr = 0.5) {
  const tbody = document.querySelector("#tablaEntradasBRP tbody");
  const dato = datosBRP.find(e => e.especie === especie) || datosBRP[0];
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><select class="especieBrp" onchange="actualizarFilaBRP(this)">${options(especiesDisponibles(), especie)}</select></td>
    <td><input class="animales" type="number" step="any" value="${animales}"></td>
    <td><input class="drBrp" type="number" step="any" value="${dr}"></td>
    <td class="excretaDato">${fmt(dato.excreta, 3)}</td>
    <td class="biogasDato">${fmt(dato.biogas, 3)}</td>
    <td><button class="danger" type="button" onclick="this.closest('tr').remove()">Eliminar</button></td>
  `;
  tbody.appendChild(tr);
}

function actualizarFilaBRP(select) {
  const tr = select.closest("tr");
  const dato = datosBRP.find(e => e.especie === select.value) || datosBRP[0];
  tr.querySelector(".excretaDato").textContent = fmt(dato.excreta, 3);
  tr.querySelector(".biogasDato").textContent = fmt(dato.biogas, 3);
}

function calcularBRP() {
  const filas = [...document.querySelectorAll("#tablaEntradasBRP tbody tr")];
  const tbody = document.querySelector("#tablaResultadosBRP tbody");
  const tbodyBio = document.querySelector("#tablaBiodigestor tbody");
  tbody.innerHTML = "";
  tbodyBio.innerHTML = "";

  const pciBiogas = numero("pciBiogas");
  const temperatura = numero("temperatura");
  const trDias = interpolarRetencion(temperatura);
  const fraccionGas = numero("fraccionGas");
  const diametro = numero("diametroBolsa");
  const areaSeccion = Math.PI * Math.pow(diametro, 2) / 4;

  let totalGJ = 0;
  let totalMWh = 0;

  filas.forEach(fila => {
    const especie = fila.querySelector(".especieBrp").value;
    const animales = parseFloat(fila.querySelector(".animales").value) || 0;
    const dr = parseFloat(fila.querySelector(".drBrp").value) || 0;
    const dato = datosBRP.find(e => e.especie === especie) || datosBRP[0];
    const qbg = animales * dato.excreta * dr * dato.biogas;
    const peGJ = qbg * pciBiogas * 365 / 1000000;
    const peMWh = peGJ / 3.6;
    totalGJ += peGJ;
    totalMWh += peMWh;

    const trResultado = document.createElement("tr");
    trResultado.innerHTML = `
      <td>${especie}</td>
      <td>${fmt(animales, 0)}</td>
      <td>${fmt(dato.excreta, 3)}</td>
      <td>${fmt(dr, 2)}</td>
      <td>${fmt(dato.biogas, 3)}</td>
      <td>${fmt(qbg, 3)}</td>
      <td>${fmt(peGJ)}</td>
      <td>${fmt(peMWh)}</td>
    `;
    tbody.appendChild(trResultado);

    const vgas = qbg * trDias;
    const vbio = fraccionGas > 0 ? vgas / fraccionGas : 0;
    const longitud = areaSeccion > 0 ? vbio / areaSeccion : 0;
    const trBio = document.createElement("tr");
    trBio.innerHTML = `
      <td>${especie}</td>
      <td>${fmt(qbg, 3)}</td>
      <td>${fmt(trDias, 2)}</td>
      <td>${fmt(vgas)}</td>
      <td>${fmt(fraccionGas, 2)}</td>
      <td>${fmt(vbio)}</td>
      <td>${fmt(diametro, 2)}</td>
      <td>${fmt(areaSeccion, 4)}</td>
      <td>${fmt(longitud)}</td>
    `;
    tbodyBio.appendChild(trBio);
  });

  document.getElementById("resumenBRP").innerHTML = `
    <strong>Total BRP:</strong> ${fmt(totalGJ)} GJ/año = ${fmt(totalGJ / 1000, 5)} TJ/año = ${fmt(totalMWh)} MWh/año<br>
    <strong>PCI biogás usado:</strong> ${fmt(pciBiogas, 0)} kJ/Nm³
  `;

  document.getElementById("resumenBio").innerHTML = `
    <strong>Temperatura:</strong> ${fmt(temperatura, 1)} °C &nbsp; | &nbsp;
    <strong>Tiempo de retención interpolado:</strong> ${fmt(trDias, 2)} días &nbsp; | &nbsp;
    <strong>Área de sección de bolsa:</strong> ${fmt(areaSeccion, 4)} m²
  `;
}

function interpolarRetencion(temp) {
  const tabla = [...tablaRetencion].sort((a, b) => a.temperatura - b.temperatura);
  if (temp <= tabla[0].temperatura) return tabla[0].dias;
  if (temp >= tabla[tabla.length - 1].temperatura) return tabla[tabla.length - 1].dias;

  for (let i = 0; i < tabla.length - 1; i++) {
    const t1 = tabla[i];
    const t2 = tabla[i + 1];
    if (temp >= t1.temperatura && temp <= t2.temperatura) {
      return t1.dias + ((temp - t1.temperatura) * (t2.dias - t1.dias)) / (t2.temperatura - t1.temperatura);
    }
  }
  return 0;
}

function mostrarReferencia(tipo) {
  const contenedor = document.getElementById("tablaReferencia");
  if (tipo === "bra") {
    contenedor.innerHTML = tablaHTML(
      ["Cultivo", "Tipo residuo", "Origen", "FR", "PCI [kJ/kg]", "YBAs", "DR"],
      residuosBRA.map(r => [r.cultivo, r.residuo, r.origen, fmt(r.fr), fmt(r.pci, 1), fmt(r.ybas, 3), fmt(r.dr, 2)])
    );
  }
  if (tipo === "brp") {
    contenedor.innerHTML = tablaHTML(
      ["Especie", "Estiércol [kg/d]", "%MS", "%MOS", "C/N", "Biogás [Nm³/kg]"],
      datosBRP.map(e => [e.especie, fmt(e.excreta, 3), fmt(e.ms, 0), fmt(e.mos, 0), fmt(e.cn, 0), fmt(e.biogas, 3)])
    );
  }
  if (tipo === "rc") {
    contenedor.innerHTML = tablaHTML(
      ["Cultivo", "Área sembrada nacional [ha]", "Producción nacional [t/año]", "RC [t/ha]"],
      Object.entries(datosRC).map(([cultivo, d]) => [cultivo, fmt(d.areaNacional, 0), fmt(d.produccionNacional, 0), fmt(calcularRC(d.areaNacional, d.produccionNacional), 5)])
    );
  }
  if (tipo === "tr") {
    contenedor.innerHTML = tablaHTML(
      ["Temperatura [°C]", "Tiempo de retención [días]"],
      tablaRetencion.map(r => [fmt(r.temperatura, 0), fmt(r.dias, 0)])
    );
  }
}

function tablaHTML(headers, rows) {
  return `
    <table>
      <thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead>
      <tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  agregarCultivoBRA("Arroz", 25);
  agregarCultivoBRA("Plátano", 13);
  agregarCultivoBRA("Caña panelera", 8);
  agregarEspecieBRP("Bovina", 130, 0.5);
  agregarEspecieBRP("Porcina", 230, 1);
  agregarEspecieBRP("Avícola", 5000, 1);
  agregarEspecieBRP("Caprina", 85, 0.5);
  calcularBRA();
  calcularBRP();
  mostrarReferencia("bra");
});
