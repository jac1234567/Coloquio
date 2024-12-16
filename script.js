class Bar {
    constructor() {
        this.cantidadDeClientes = 0;
        this.intensidadLuces = 50;
        this.temperatura = 24;
    }

    ingresarClientes(cantidad) {
        if (this.cantidadDeClientes + cantidad > 75) {
            alert("No se puede superar el máximo de 75 personas.");
        } else {
            this.cantidadDeClientes += cantidad;
            alert(`Ingresaron ${cantidad} clientes con éxito.`);
        }
    }

    cambiarIntensidad(nuevaIntensidad) {
        if (nuevaIntensidad >= 0 && nuevaIntensidad <= 100) {
            this.intensidadLuces = nuevaIntensidad;
            alert(`Intensidad de luces ajustada a ${nuevaIntensidad}%.`);
        } else {
            alert("La intensidad debe estar entre 0 y 100.");
        }
    }

    cambiarTemperatura(nuevaTemperatura) {
        if (nuevaTemperatura >= 16 && nuevaTemperatura <= 30) {
            this.temperatura = nuevaTemperatura;
            alert(`Temperatura ajustada a ${nuevaTemperatura}°C.`);
        } else {
            alert("La temperatura debe estar entre 16 y 30°C.");
        }
    }

    mostrarInfo() {
        const infoDiv = document.getElementById("infoClase");
        infoDiv.innerHTML = `
            <p>Cantidad de clientes: ${this.cantidadDeClientes}</p>
            <p>Intensidad de luces: ${this.intensidadLuces}%</p>
            <p>Temperatura: ${this.temperatura}°C</p>
        `;
    }
}

// Instancia de la clase
const bar = new Bar();

// Funciones conectadas a botones
function ingresarClientes() {
    const cantidad = parseInt(document.getElementById("nuevaCantidad").value);
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingrese un número válido.");
    } else {
        bar.ingresarClientes(cantidad);
    }
}

function bajarIntensidad() {
    const nuevaIntensidad = bar.intensidadLuces - 10;
    bar.cambiarIntensidad(nuevaIntensidad);
}

function subirIntensidad() {
    const nuevaIntensidad = bar.intensidadLuces + 10;
    bar.cambiarIntensidad(nuevaIntensidad);
}

function bajarTemperatura() {
    const nuevaTemperatura = bar.temperatura - 1;
    bar.cambiarTemperatura(nuevaTemperatura);
}

function subirTemperatura() {
    const nuevaTemperatura = bar.temperatura + 1;
    bar.cambiarTemperatura(nuevaTemperatura);
}

function mostrarInfo() {
    bar.mostrarInfo();
}
