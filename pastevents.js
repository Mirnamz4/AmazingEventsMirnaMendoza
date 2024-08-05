import { pintarC, pintarCategorias, arregloPast, filtroChecks, filtroDeTexto, obtenerInfo } from "./Modules/funcionesPages.js";

obtenerInfo(arregloPast)
 
// Filtros

    document.getElementById("busqueda").addEventListener('keyup', e => {
        let filtradosTexto = filtroDeTexto(arregloPast)
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
        let arregloConChecks = filtroChecks(arregloPast)
        if (arregloConChecks.length == 0) {
            let nuevoFiltro = filtroDeTexto(arregloPast)
            pintarC(nuevoFiltro)
        } else {
            let filtradosTexto = filtroDeTexto(arregloConChecks)
            pintarC(filtradosTexto)
        }
    })