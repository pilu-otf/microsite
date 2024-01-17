import data from "./data.json" assert { type: "json" };

export const loadDetailView = (card) => {

    const container = document.querySelector('.detail_view')
    const main = document.querySelector('.main')
    console.log(card);
    const currentId = card.id;

    const detailHTML = `
    <div class="detail_container">
        <header class="detail_header">
            <div class="header_right">
                <div class="header_logo">
                    <img src="./assets/images/LogoESDblack-text.svg" alt="logo">
                </div>
                <div class="header_link">
                    <a href="#" class="banner_icon"><h3 class="link_text">Home</h3></a>
                </div>
            </div>


            <div class="header_left">
                <button id="header_download_button" class="button_secondary">
                    <h4>Descargar</h4>
                </button>
                <h2 class="header_title">Poster#</h2>
            </div>
        </header>

        <div class="detail_main" id=${currentId}>

            <div class="detail_main_header">

                <a href="#" class="detail_nav" id="detail_prev">
                    <span class="icon"><img src="./assets/icons/arrowleft-icon.svg" alt="arrowleft"></span>
                    <h4 class="link_text">Anterior</h4>
                </a>

                <a href="#" class="detail_nav" id="detail_next">
                    <h4 class="link_text">Siguiente</h4>
                    <span class="icon"><img src="./assets/icons/arrowright-icon.svg" alt="arrowright"></span>
                </a>

                <div class="detail_title">

                    <h3>${card.categoria}</h3>
                    <h1>${card.titulo}</h1>
                    <div class="title_data">
                        <h3 class="regular">${card.nombre_estudiante}</h3>
                        <span>•</span>
                        <h3 class="regular">${card.especialidad}</h3>
                    </div>

                </div>
            </div>


            <div class="detail_data_container">

                <div class="detail_data">
                    <div class="data_item">
                        <span class="icon"><img src="./assets/icons/arrowright-icon.svg" alt="arrowright"></span>
                        <span class="text">
                            <h4 class="bold">${card.linea_investigacion}</h4>    
                            <h4 class="">${card.palabras_clave}</h4>
                        </span>

                    </div>
                    <div class="data_item">
                        <span class="icon"><img src="./assets/icons/arrowright-icon.svg" alt="arrowright"></span>
                        <span class="text">
                            <h4 class="bold">${card.categoria}</h4>    
                        </span>

                    </div>
                </div>

                <div class="detail_data">
                    <div class="data_item">
                        <span class="icon"><img src="./assets/icons/arrowright-icon.svg" alt="arrowright"></span>
                        <h4 class="bold">${card.especialidad_completo}</h4>    
                    </div>
                    <div class="data_item">
                        <span class="icon"><img src="./assets/icons/arrowright-icon.svg" alt="arrowright"></span>
                        <h4><span class="bold">Tutor/a: </span>${card.nombre_docente}</h4>    
                    </div>
                </div>

            </div>

            <div class="detail_content">
                <div class="detail_picture">
                    <img src="${card.imagenes.img1.url}" alt="${card.imagenes.img1.desc}">
                </div>

                <div class="detail_description">
                    <p ${card.descripcion.length >= 500 ? "class='responsive_p'" : "style='max-width: 70ch'"}">
                        ${card.descripcion} 
                    </p>
                </div>
            </div>


            <div class=""></div>
    
        </div>
    </div>
    `
    container.innerHTML = detailHTML
    container.classList.remove('hidden')
    main.classList.add('hidden')
    console.log(currentId);

    closeDetail()
    detailNav(currentId)
}


const closeDetail = () => {
    console.log('close enabled');
    const headerLink = document.querySelector('.detail_header .header_link')
    const detailPage = document.querySelector('.detail_view')
    const main = document.querySelector('.main')

    headerLink.addEventListener('click', (ev) => {
        console.log(headerLink);
        main.classList.remove('hidden')
        detailPage.classList.add('hidden')

    })


}

// const detailNav = (currentId) => {
//     const nexProject = Number(currentId) + 1
//     const prevProject = Number(currentId)  - 1
//     console.log(nexProject, prevProject);


//     const next = document.getElementById('detail_next')
//     next.addEventListener('click', (ev) => {
//         console.log('next');
//         console.log(data);
//         loadDetailView(data[nexProject])
//     })

//     const prev = document.getElementById('detail_prev')
//     prev.addEventListener('click', (ev) => {
//         console.log('prev');
//         console.log(data[prevProject]);

//         loadDetailView(data[prevProject])
//     })
// }


const detailNav = (currentId) => {
    const currentIndex = data.findIndex(item => item.id === currentId);
    const nextProject = (currentIndex + 1) % data.length;  // Circula al principio si alcanza el final
    const prevProject = (currentIndex - 1 + data.length) % data.length;  // Circula al final si alcanza el principio

    console.log(nextProject, prevProject);

    const next = document.getElementById('detail_next');
    next.addEventListener('click', (ev) => {
        console.log('next');
        loadDetailView(data[nextProject]);
    });

    const prev = document.getElementById('detail_prev');
    prev.addEventListener('click', (ev) => {
        console.log('prev');
        loadDetailView(data[prevProject]);
    });
}