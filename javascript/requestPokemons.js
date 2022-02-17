const containerCardPokemon = document.querySelector('[data-pokemon-card="pokemon-card"]')

const getUrlPokemons = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const convertJsonInHtml = pokemons => {
    

    pokemons.map(informationsPokemon => {

        const urlImagesPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${informationsPokemon.id}.png`

        containerCardPokemon.innerHTML += `

            <div class="card-pokemon">
                <div class="container-image">
                    <img src="${urlImagesPokemon}" alt="image-of-pokemon">
                </div>
                <span class="topics-informations-pokemon">Name: ${informationsPokemon.name}</span>
                <span class="topics-informations-pokemon"> Base_Experience: ${informationsPokemon.base_experience}</span>
                <span class="topics-informations-pokemon">Weight: ${informationsPokemon.weight}</span>
            </div>
        `
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