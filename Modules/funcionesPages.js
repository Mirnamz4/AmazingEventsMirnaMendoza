let url = "https://aulamindhub.github.io/amazing-api/events.json"

fetch(url)
    .then(response => response.json())
    .catch(e => console.log(e))


export let arregloCompleto = await fetch(url)
export let data = await arregloCompleto.json()
export let fecha = data.currentDate;

data.events.forEach(element => {
    element.porcentaje = element.hasOwnProperty("assistance") ?
        (element.assistance / element.capacity * 100).toFixed(1) : (element.estimate / element.capacity * 100).toFixed(1);
    element.revenues = element.hasOwnProperty("assistance") ?
        (element.assistance * element.price).toFixed(1) : (element.estimate * element.price).toFixed(1)
})
export let arregloEventos = data.events.sort((a, b) => {
    if (a.porcentaje < b.porcentaje) { return -1 } if (a.porcentaje > b.porcentaje) { return 1 } return 0;
})

export let arregloPast = arregloEventos.filter(evento => evento.date <= fecha)
export let arregloComing = arregloEventos.filter(evento => evento.date > fecha)

export function pintarCategorias(array) {
    let cats = document.getElementById("makeCategories")
    cats.innerHTML = ""

    for (let i = 0; i < array.length; i++) {

        let cat = document.createElement('div')
        cat.className = "form-check "
        cat.innerHTML = `
            <input class="form-check-input fs-6 border-success" type="checkbox" id="${array[i]}" value="${array[i]}">
            <label class="form-check-label fw-medium fs-6" for="${array[i]} ">${array[i]} </label>`
        cats.appendChild(cat)
    }
}

export function pintarEventoFirst(array, array2, x) {

    let bodyTable = document.getElementById("bodyTable")
    let first = document.createElement("tr")

    let arregloSorteado2 = array2.sort((a, b) => {
        if (a.capacity < b.capacity) { return -1 } if (a.capacity > b.capacity) { return 1 } return 0;
    })

    first.innerHTML = `
                        <td>${array[array.length - 1].name} (${array[array.length - 1].porcentaje}%) </td>
                        <td>${array[0].name} (${array[0].porcentaje}%)</td>
                        <td>${arregloSorteado2[arregloSorteado2.length - 1].name} (${arregloSorteado2[arregloSorteado2.length - 1].capacity})</td> 
                       `
    bodyTable.appendChild(first)

    let first2 = document.createElement("tr")
    first2.innerHTML = `
                <th scope="row" class="table-danger" colspan="3">Upcoming events statistics by category</th> `
    bodyTable.appendChild(first2)

    let first3 = document.createElement("tr")
    first3.innerHTML = `
    <td class="text-body-secondary">Categories</td>
    <td class="text-body-secondary">Revenues</td>
    <td class="text-body-secondary">Percentage of assistance</td>`
    bodyTable.appendChild(first3)

}

export function obtenerInfo(array) {

    let arrayCategoriasD = array.map(evento => evento.category)
    let arrayCategorias = [...new Set(arrayCategoriasD)]
    pintarCategorias(arrayCategorias)
    pintarC(array)
}

export function filtroDeTexto(a) {

    let buscadorHome = document.getElementById("busqueda").value.toLowerCase()
    let filtrado = a.filter(nota =>
        nota.name.toLowerCase().includes(buscadorHome)
        || nota.description.toLowerCase().includes(buscadorHome))
    return filtrado;
}

export function filtroChecks(array) {
    let checksConPalomita = [...document.querySelectorAll('input[type = checkbox]:checked')];
    checksConPalomita = checksConPalomita.map(e => e.value)
    let arregloFilter = array.filter(x => checksConPalomita.includes(x.category))
    return arregloFilter;
}
export function pintarC(arreglo) {
    let contenedorHome = document.getElementById("contenedorTarjetas")
    contenedorHome.innerHTML = ""

    if (arreglo.length == 0) {

        let notFound = document.createElement('div')
        notFound.className = "card tarjetaTamaño col-md-4"

        notFound.innerHTML = `

        <img src="./RECS/notfound.png" class="card-img-top h-50 p-2">

        <div class="card-body text-center d-flex row">
            <h5 class="card-title fw-bold"> No se han encontrado resultados.</h5>
            <p class="card-text">Prueba realizando otra búsqueda.</p>
            
        </div> `
        contenedorHome.appendChild(notFound)
    }

    else {

        for (let i = 0; i < arreglo.length; i++) {

            let tarjeta = document.createElement('div')
            tarjeta.className = "card tarjetaTamaño col-md-4"
            tarjeta.id = `tarjetaTrans`

            tarjeta.innerHTML = `
            <img src="${arreglo[i].image}" class="card-img-top h-50 p-2">

            <div class="card-body text-center d-flex row">
                <h5 class="card-title fw-bold"> ${arreglo[i].name} </h5>
                <p class="card-text fw-medium">${arreglo[i].description}</p>
                <div class="d-flex justify-content-between align-self-end">
                    <p class="text-success fw-medium">Price: $${arreglo[i].price} </p>
                    <a href="./details.html?id=${arreglo[i]._id}" class="btn btn-primary" id="detailsB">Details</a>
                </div>
            </div> `
            contenedorHome.appendChild(tarjeta)
        }
    }
}



export function pintarSecond(array) {
    let bodyTable = document.getElementById("bodyTable");
    let arrayCategoriasD = array.map(evento => evento.category)
    let arrayCategorias = [...new Set(arrayCategoriasD)]
    arrayCategorias.revenues = 0;

    for (let i = 0; i < arrayCategorias.length; i++) {

        let filtradoCategorias = array.filter(dato => dato.category == arrayCategorias[i])
        let revenuesCategory = revenuesE(filtradoCategorias)
        let porcentajeCategory = porcentajeE(filtradoCategorias)

        let row = document.createElement("tr")
        row.innerHTML = `
                                <td>${arrayCategorias[i]} </td>
                                <td>$ ${revenuesCategory}</td>
                                <td>${porcentajeCategory}%</td>`
        bodyTable.appendChild(row)
    }
}

export function revenuesE(arreglo) {
    let sumaTotal = 0;
    arreglo.forEach(evento => sumaTotal = sumaTotal + parseInt(evento.revenues));
    return (sumaTotal).toLocaleString('es-US');
}
export function porcentajeE(arreglo) {
    let sumaTotal = 0;
    arreglo.forEach(evento => sumaTotal = sumaTotal + parseInt(evento.porcentaje));
    return (sumaTotal / arreglo.length).toFixed(1);
}

