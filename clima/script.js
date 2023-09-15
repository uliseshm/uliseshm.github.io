const apiKey = 'e869613fd16bf2fb71f944d5354f5e56';
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
const diferenciaKelvin = 273.15


let btnBuscar = document.getElementById('botonBuscar');

btnBuscar.addEventListener('click', () => {

    let ciudad = document.getElementById('ciudadEntrada').value

    if (ciudad) {
        fetchDatos(ciudad)
    }

})

function fetchDatos(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => mostrarDatosClima(data));
}

function mostrarDatosClima(data) {
    console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-diferenciaKelvin)}°C`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`
    iconoInfo.style.backgroundColor = "#ccc"
    iconoInfo.style.borderRadius = "50%"

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
}




