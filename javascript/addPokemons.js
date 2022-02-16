const containerAddPokemon = document.querySelector('[data-container-form="form"]')
const buttonOpenForm = document.querySelector('[data-add-pokemon="pokemon"]')
console.log(containerAddPokemon)

const form = document.querySelector('[data-form="form"]')

const openFormClick = () => {

    containerAddPokemon.classList.toggle('active-form')
}

buttonOpenForm.addEventListener('click', () => openFormClick())


