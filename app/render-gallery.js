import data from "./data.json" assert { type: "json" };
import { loadDetailView } from "./detail-layout.js";

export const printCards = () => {
    const cardsGallery = document.querySelector('.gallery_cards')

    let html = ''

    data.forEach((card) => {
        const shortenDescription = card.descripcion.length > 250 ? 
            `${card.descripcion.slice(0, 200)}...` : card.descripcion;

        html += `
        <div class="card" id="card_${card.id}">
            <div class="card">
                <div class="card_picture">
                    <img src="${card.imagenes.img1.url}" alt="${card.imagenes.img1.desc}">
                </div>
                <div class="card_content">
                    <div class="card_content_header">
                        <div class="tag">${card.especialidad}</div>
                        <a href="#">ver proyecto
                            <span class="icon"><img src="./assets/icons/arrowright-icon.svg" alt=""></span>
                        </a>
                    </div>
                    <div class="card_content_title">
                        <h3>${card.titulo}</h3>
                        <h4>${card.nombre_estudiante}</h4>
                    </div>
                    <div class="card_content_description">
                        <p>${shortenDescription}</p>
                    </div>
                </div>
            </div>

        </div>
        `
    })

    cardsGallery.innerHTML = html

    // detail layout
    data.forEach((card) => {
        const cardContainer = document.getElementById(`card_${card.id}`);
        // console.log(cardContainer);s
        cardContainer.addEventListener('click', (ev) => {
            loadDetailView(cardContainer, card);
            window.scrollTo({top: 0});
        });
    });
};

