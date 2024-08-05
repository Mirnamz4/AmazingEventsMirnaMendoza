import { pintarC, pintarCategorias, filtroChecks, filtroDeTexto, arregloEventos, obtenerInfo } from "./Modules/funcionesPages.js";

obtenerInfo(arregloEventos)

// Buscador de palabras

document.getElementById("busqueda").addEventListener('keyup', e => {
    let filtradosTexto = filtroDeTexto(arregloEventos)
    let checksConPalomita = [...document.querySelectorAll('input[type = checkbox]:checked')];
    checksConPalomita = checksConPalomita.map(e => e.value)

    if (checksConPalomita == 0) {
        pintarC(filtradosTexto)
    }
    else {
        let arregloConChecks = filtroChecks(filtradosTexto)
        pintarC(arregloConChecks)
    }

})

// Categorías filtradas

document.getElementById("makeCategories").addEventListener('change', e => {
    let arregloConChecks = filtroChecks(arregloEventos)
    if (arregloConChecks.length == 0) {
        let nuevoFiltro = filtroDeTexto(arregloEventos)
        pintarC(nuevoFiltro)
    } else {
        let filtradosTexto = filtroDeTexto(arregloConChecks)
        pintarC(filtradosTexto)
    }
})
