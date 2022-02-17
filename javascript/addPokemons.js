const containerAddPokemon = document.querySelector('[data-container-form="form"]')
const buttonOpenForm = document.querySelector('[data-add-pokemon="pokemon"]')
const form = document.querySelector('[data-form="form"]')
const buttonOfForm = document.querySelector('[data-btn-form="btnForm"]')


const openFormClick = () => {

    containerAddPokemon.classList.toggle('active-form')
}

buttonOfForm.addEventListener('click', event => {
    event.preventDefault()
})

buttonOpenForm.addEventListener('click', () => openFormClick())


