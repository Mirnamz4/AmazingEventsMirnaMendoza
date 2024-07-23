const data = {
    currentDate: "2023-01-01",
    events: [
        {
            _id: "639c723b992482e5f2834be9",
            name: "Collectivities Party",
            image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
            date: "2022-12-12",
            description:
                "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            assistance: 42756,
            price: 5,
            __v: 0,
        },
        {
            _id: "639c723b992482e5f2834beb",
            name: "Korean style",
            image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
            date: "2023-08-12",
            description:
                "Enjoy the best Korean dishes, with international chefs and awesome events.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            price: 10,
            __v: 0,
            estimate: 42756,
        },
        {
            _id: "639c723c992482e5f2834bed",
            name: "Jurassic Park",
            image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
            date: "2022-11-02",
            description:
                "Let's go meet the biggest dinosaurs in the paleontology museum.",
            category: "Museum",
            place: "Field",
            capacity: 82000,
            price: 15,
            __v: 0,
            assistance: 65892,
        },
        {
            _id: "639c723c992482e5f2834bef",
            name: "Parisian Museum",
            image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
            date: "2023-11-02",
            description:
                "A unique tour in the city of lights, get to know one of the most iconic places.",
            category: "Museum",
            place: "Paris",
            capacity: 8200,
            estimate: 8200,
            price: 3500,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf1",
            name: "Comicon",
            image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
            date: "2022-02-12",
            description:
                "For comic lovers, all your favourite characters gathered in one place.",
            category: "Costume Party",
            place: "Room C",
            capacity: 120000,
            assistance: 110000,
            price: 54,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf3",
            name: "Halloween Night",
            image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
            date: "2023-02-12",
            description: "Come with your scariest costume and win incredible prizes.",
            category: "Costume Party",
            place: "Room C",
            capacity: 12000,
            estimate: 9000,
            price: 12,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf5",
            name: "Metallica in concert",
            image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
            date: "2023-01-22",
            description: "The only concert of the most emblematic band in the world.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            estimate: 138000,
            price: 150,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf7",
            name: "Electronic Fest",
            image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
            date: "2022-01-22",
            description:
                "The best national and international DJs gathered in one place.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            assistance: 110300,
            price: 250,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bf9",
            name: "10K for life",
            image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
            date: "2022-03-01",
            description: "Come and exercise, improve your health and lifestyle.",
            category: "Race",
            place: "Soccer field",
            capacity: 30000,
            assistance: 25698,
            price: 3,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bfb",
            name: "15K NY",
            image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
            date: "2023-03-01",
            description:
                "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            category: "Race",
            place: "New York",
            capacity: 3000000,
            price: 3,
            __v: 0,
            estimate: 2569800,
        },
        {
            _id: "639c723d992482e5f2834bfd",
            name: "School's book fair",
            image: "https://i.postimg.cc/Sst763n6/book1.jpg",
            date: "2023-10-15",
            description: "Bring your unused school book and take the one you need.",
            category: "Book Exchange",
            place: "Room D1",
            capacity: 150000,
            estimate: 123286,
            price: 1,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bff",
            name: "Just for your kitchen",
            image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
            date: "2022-11-09",
            description:
                "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            category: "Book Exchange",
            place: "Room D6",
            capacity: 130000,
            assistance: 90000,
            price: 100,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834c01",
            name: "Batman",
            image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
            date: "2022-03-11",
            description: "Come see Batman fight crime in Gotham City.",
            category: "Cinema",
            place: "Room D1",
            capacity: 11000,
            assistance: 9300,
            price: 225,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834c03",
            name: "Avengers",
            image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
            date: "2023-10-15",
            description:
                "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            category: "Cinema",
            place: "Room D1",
            capacity: 9000,
            estimate: 9000,
            price: 250,
            __v: 0,
        },
    ],
};
console.log(data.events);

// Generar nuevo array

let pastEvents = []

data.events.forEach((elemento) => {
    if (data.currentDate > elemento.date) {
        pastEvents.push(elemento)
    }
})

// Array de categorías

let arrayCategorias = []

pastEvents.forEach((elemento) => {
    if (!arrayCategorias.includes(elemento.category)) {
        arrayCategorias.push(elemento.category);
    }
})

// Pintando categorías

let categoriasPast = document.getElementById("categoriasPast")

for (let i = 0; i < pastEvents.length; i++) {

    let cat = document.createElement('div')
    cat.className = "form-check"
    cat.innerHTML = `
        <input class="form-check-input fs-6 border-success" onclick="categorias(${i})" type="checkbox" id="checkbx${[i]}" value="option${[i]}">
        <label class="form-check-label  fw-medium fs-6" for="checkbx${i}">${arrayCategorias[i]} </label>`
    categoriasPast.appendChild(cat)
}

let contenedorPastEvents = document.getElementById("contenedorPast")
pintarC(pastEvents)

// Array de categorías para filtrar

let busca = document.getElementById("buscadorPast")
let checar = []

function categorias(x) {

    let checkPalomita = document.getElementById("checkbx" + x)

    if (checkPalomita.checked == true) {
        checar.push(arrayCategorias[x])
    }
    else {
        let buscador = checar.findIndex(not => not == arrayCategorias[x])
        checar.splice(buscador, 1)
    }
    filterC(checar)
}

// Filter 

let filtradas = []
function filterC(arreglo) {

    filtradas = []

    if (arreglo.length == 0) {
        if (busca.value == "") {
            pintarC(pastEvents)
        }
        else {
            pintarC(filtrado)
        }
    }
    else {

        for (let i = 0; i < arreglo.length; i++) {
            pastEvents.forEach(nom => {
                if (nom.category == arreglo[i]) {
                    filtradas.push(nom)
                }
            })
        }

        if (busca.value == "") {
            pintarC(filtradas)
        }
        else {
            buscar2(filtradas)
        }
        console.log(filtradas);
    }
}

// Buscador de palabras

let filtrado = []
busca.addEventListener("keyup", () => {


    filtrado = []
    filtrado = pastEvents.filter(nota =>
        nota.name.toLowerCase().includes(busca.value.toLowerCase())
        || nota.description.toLowerCase().includes(busca.value.toLowerCase())
    )
    if (checar.length == 0) {
        pintarC(filtrado);
    }
    else {
        filtrar(filtrado)
    }

})

// Uniendo búsqueda de palabras y categorías

let news = []
function filtrar(arreglo) {
    news = []

    for (let i = 0; i < arreglo.length; i++) {
        filtradas.forEach(nom => {
            if (nom.category == arreglo[i].category) {
                news.push(nom)
            }
        })
    }
    pintarC(news)
}

function buscar2(arraay) {
    let filt1 = arraay.filter(nota =>
        nota.name.toLowerCase().includes(busca.value.toLowerCase())
        || nota.description.toLowerCase().includes(busca.value.toLowerCase())
    )
    console.log(arraay);
    pintarC(filt1)
}

// Pintar notas

function pintarC(arreglo) {

    if (arreglo.length == 0) {

        contenedorPastEvents.innerHTML = ""
        let notFound = document.createElement('div')
        notFound.className = "card tarjetaTamaño col-md-4"

        notFound.innerHTML = `

        <img src="./RECS/notfound.png" class="card-img-top h-50 p-2">

        <div class="card-body text-center d-flex row">
            <h5 class="card-title fw-bold"> No se han encontrado resultados.</h5>
            <p class="card-text">Prueba realizando otra búsqueda.</p>
            
        </div> `
        contenedorPastEvents.appendChild(notFound)
    }
    else {
        contenedorPastEvents.innerHTML = ""

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
                    <a href="./details.html?id=${arreglo[i]._id}" class="btn btn-primary">Details</a>
                </div>
            </div> `
            contenedorPastEvents.appendChild(tarjeta)
        }
    }
}