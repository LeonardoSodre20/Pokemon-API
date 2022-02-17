const containerAddPokemon = document.querySelector('[data-container-form="form"]')
const buttonOpenForm = document.querySelector('[data-add-pokemon="pokemon"]')
const form = document.querySelector('[data-form="form"]')
const buttonOfForm = document.querySelector('[data-btn-form="btnForm"]')
//inputs form

const buttonNamePokemon = document.querySelector('#name-of-pokemon')
const buttonBaseExperiencePokemon = document.querySelector('#base-experience')
const buttonWeightPokemon = document.querySelector('#input-weight-pokemon')

console.log('botões form : ', buttonNamePokemon, buttonBaseExperiencePokemon, buttonWeightPokemon)

const openFormClick = () => {

    containerAddPokemon.classList.toggle('active-form')
}

const addDataOfPokemonInHtml = () => {
    const containerAddPokemonInputs = document.querySelector('[data-pokemon-add="pokemon"]')

}

addDataOfPokemonInHtml()

buttonOfForm.addEventListener('click', event => {
    event.preventDefault()
})



buttonOpenForm.addEventListener('click', () => openFormClick())


