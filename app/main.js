import { printCards } from "./render-gallery.js";
import { intersectionHeader } from "./header-style.js";
import { loading } from "./loading.js";

intersectionHeader();

window.addEventListener('DOMContentLoaded', (ev) => {
    printCards()
})

window.addEventListener('load', (ev) => {
    loading()
})


