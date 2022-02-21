const containerCardPokemon = document.querySelector('[data-pokemon-card="pokemon-card"]')
const inputSearchPokemon = document.querySelector('#input-search')


const getUrlPokemons = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const convertJsonInHtml = pokemons => {
    

    pokemons.map(informationsPokemon => {
    
        const urlImagesPokemon = `https://cdn.traction.one/pokedex/pokemon/${informationsPokemon.id}.png`

        const typesArrayPokemon = informationsPokemon.types.map(typePokemon => {
            return typePokemon.type.name

            console.log(typePokemon.type.name)
        })

        containerCardPokemon.innerHTML += `

            <div class="card-pokemon" data-card-pokemon="card">
                <div class="container-image">
                    <img src="${urlImagesPokemon}" alt="image-of-pokemon">
                </div>
                <span class="topics-informations-pokemon">Name: ${informationsPokemon.name}</span>
                <span class="topics-informations-pokemon"> Base_Experience: ${informationsPokemon.base_experience}</span>
                <span class="topics-informations-pokemon">Weight: ${informationsPokemon.weight}</span>
                <span class="topics-informations-pokemon">Type: ${typesArrayPokemon}</span>
            </div>
        `

        const containerPokemon = document.querySelector('.card-pokemon')
        console.log(Array.from(containerPokemon.children))

        inputSearchPokemon.addEventListener('input', event => {
            const inputValue = event.target.value.trim()
            console.log(inputValue)
            
        })
    })
}




const requestPokemonAPI = () => {

    const pokemonArrayPromises = []

    for(let i = 1; i <= 150; i++){

        pokemonArrayPromises.push(fetch(getUrlPokemons(i))
             .then(response => response.json()))
     }

    Promise.all(pokemonArrayPromises)
        .then(convertJsonInHtml)
}

requestPokemonAPI()



