export const loading = () => {
    const loadingHTML = document.querySelector('.loading_screen')
    const app = document.querySelector('.app')

    loadingHTML.classList.add('hidden')
    app.classList.remove('h_block')
}
