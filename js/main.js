    
    $(document).ready(function(){
    $('.slideShow').slick({
        dots: true,
        autoplay: true,
    });
  });

  let products=[
    {
        "modelo":"A01 versión M",
        "marca":"Samsung",
        "descripcion":"Modulo para Samsung A01 A015M.",
        "calidad":"Original - Sin marco",
        "precio":"12.99",
        "imagen":"https://d3ugyf2ht6aenh.cloudfront.net/stores/288/942/products/4828-modulo-samsung-a01-a015m-negro-original-11-a4fd867d98781d67d116210907082254-640-0.jpg"
    },

    {
        "modelo":"Redmi Note 7",
        "marca":"Xiaomi",
        "descripcion":"Módulo para Xiaomi Redmi Note 7 * Note 7 Pro.",
        "calidad":"Original - Sin marco",
        "precio":"12.99",
        "imagen":"https://d3ugyf2ht6aenh.cloudfront.net/stores/288/942/products/4038-modulo-xiaomi-redmi-note-7_negro1-06f84daf7e537dd87415931927587544-640-0.jpg"
    },
    {
        "modelo":"Redmi Note 8",
        "marca":"Xiaomi",
        "descripcion":"Módulo para Xiaomi Redmi Note 8",
        "calidad":"Original - Sin marco",
        "precio":"12.99",
        "imagen":"https://d3ugyf2ht6aenh.cloudfront.net/stores/288/942/products/4336-modulo-xiaomi-redmi-note-8-negro1-23afc03e97f25633b816167819813484-640-0.jpg"
    },
    {
        "modelo":"Redmi Note 8 Pro",
        "marca":"Xiaomi",
        "descripcion":"Módulo para Xiaomi Redmi Note 8 Pro",
        "calidad":"Original - Sin marco",
        "precio":"12.99",
        "imagen":"https://d3ugyf2ht6aenh.cloudfront.net/stores/288/942/products/5104-modulo-xiaomi-redmi-note-8-pro-negro-11-83e05a3d0b93eced1016343315828012-640-0.jpg"
    }
]

let getData=async () => {
    let productsContainer=document.getElementById("destacadosSection");
    products.map((data)=>{
    let card=document.createElement("div")
    card.classList.add("card")
    card.classList.add("p-1")
    card.classList.add("cardStyles")
    card.innerHTML=`
        <div class=" card-body d-flex flex-column align-items-center justify-content-center ">
        <div class="ContenedorImagen">
        <img class="img-fluid" style="height: 250px; width: 250px;" src="${data.imagen}">
        </div>
            <h2 class="card-title bold mt-3 ">${data.modelo}</h2>
            <h6 class="card-text align-self-start">${data.marca}</h6>
            <p class="card-text text-justify regular">${data.descripcion}</p>
            <p class="card-text text-center regular">${data.precio}$</p>
        </div>
    `
    productsContainer.appendChild(card)
    })
}

  getData(products)