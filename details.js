import { arregloEventos } from "./Modules/funcionesPages.js";


const urlS = new URLSearchParams(window.location.search);
let idArreglo = urlS.get('id')
arregloEventos.forEach(element => {
    if (element._id == idArreglo) {
        pintarTarjeta(element)
    }
})

function pintarTarjeta(objeto) {
    let contenedorDinamico = document.getElementById("tarjetaDinamica")
    contenedorDinamico.innerHTML = `
    
                 <div class="container-fluid contenedorImagen">
                        <img src="${objeto.image}"   alt="...">
                        </div>
          <div class="container text-center textoTarjeta" >
              <h1 class="card-title pb-3 pb-md-0 fw-bold text-success">${objeto.name}</h1>
              <p class="card-text fw-medium fs-5">${objeto.description}</p>
              <p class="card-text  fw-medium fs-4">Date: ${objeto.date}</p>
              <p class="card-text fw-medium fs-4">Price: $${objeto.price}</p>
              <p class="card-text fw-medium fs-4">Place: ${objeto.place}</p>
              <p class="card-text fw-medium fs-4">Category: ${objeto.category}</p>
              <p class="card-text fw-medium pb-3 fs-6 text-secondary">Capacity: ${objeto.capacity}</p>
          
        </div> `
}