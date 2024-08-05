import { arregloEventos, pintarEventoFirst, arregloComing, arregloPast, pintarSecond, revenuesE, porcentajeE } from "./Modules/funcionesPages.js";
pintarEventoFirst(arregloPast, arregloEventos, "first");
pintarSecond(arregloComing)

let bodyTable = document.getElementById("bodyTable");
let past = document.createElement("tr")
past.innerHTML = `<th scope="row" class="table-danger" colspan="3">Past events statistics by category</th>`
bodyTable.appendChild(past)

let row2 = document.createElement("tr")
row2.innerHTML = `
                        <td class="text-body-secondary">Categories</td>
                        <td class="text-body-secondary">Revenues</td>
                        <td class="text-body-secondary">Percentage of assistance</td>
                    `
bodyTable.appendChild(row2)

pintarSecond(arregloPast)
