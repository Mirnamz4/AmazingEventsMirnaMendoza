import { pintarC, pintarCategorias, arregloComing, filtroChecks, filtroDeTexto, obtenerInfo } from "./Modules/funcionesPages.js";

obtenerInfo(arregloComing)

// Buscadores

    document.getElementById("busqueda").addEventListener('keyup', e => {
        let filtradosTexto = filtroDeTexto(arregloComing)
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

    document.getElementById("makeCategories").addEventListener('change', e => {
        let arregloConChecks = filtroChecks(arregloComing)
        if (arregloConChecks.length == 0) {
            let nuevoFiltro = filtroDeTexto(arregloComing)
            pintarC(nuevoFiltro)
        } else {
            let filtradosTexto = filtroDeTexto(arregloConChecks)
            pintarC(filtradosTexto)
        }
    })