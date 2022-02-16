const containerCardPokemon = document.querySelector('[data-pokemon-card="pokemon-card"]')

const requestPokemonAPI = () => {

    const getUrlPokemons = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const getImagesPokemons = index => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`

    const pokemonImageArrayPromises = []

    const pokemonArrayPromises = []

    for(let i = 1; i <= 150; i++){

        pokemonArrayPromises.push(fetch(getUrlPokemons(i))
            .then(response => response.json()))
        
    }

    for(let i = 1; i <=150; i++){
        pokemonImageArrayPromises.push(fetch(getImagesPokemons(i)
            .then(response => response.json())))
    }

    

    Promise.all(pokemonArrayPromises)
        .then((pokemons) => {
            console.log(pokemons)

            pokemons.map(informationsPokemon => {

                containerCardPokemon.innerHTML += `

                    <div class="card-pokemon">
                        <div class="container-image">
                            <img src="" alt="image-of-pokemon">
                        </div>
                        <span class="topics-informations-pokemon">${informationsPokemon.name}</span>
                        <span class="topics-informations-pokemon">${informationsPokemon.base_experience}</span>
                        <span class="topics-informations-pokemon">${informationsPokemon.weight}</span>
                    
                    </div>

                
                `
            })
        })

}

requestPokemonAPI()