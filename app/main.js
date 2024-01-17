import { printCards } from "./render-gallery.js";
import { intersectionHeader } from "./header-style.js";
import { loading } from "./loading.js";
import { customCursor } from "./cursor.js";


window.addEventListener('DOMContentLoaded', (ev) => {
    intersectionHeader();
    customCursor()
    printCards()
})

window.addEventListener('load', (ev) => {
    loading()
})

