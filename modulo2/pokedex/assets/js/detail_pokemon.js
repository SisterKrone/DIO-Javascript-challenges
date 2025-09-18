(function main() {

    const pokemonList = document.getElementById('pokemonList');
    //const showDetailButton = document.querySelector('pokemon')
    const limit = 5;
    let offset = 0;
    const pokemonDataMap = new Map();


    function loadPokemonItens(offset, limit) {
        pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
            const newHtml = pokemons.map((pokemon) => {
                pokemonDataMap.set(pokemon.number, pokemon);

                return `
                    <li type="button" class="pokemon ${pokemon.type}" data-number="${pokemon.number}">
                        <span class="number">#${pokemon.number}</span>
                        <span class="name">${pokemon.name}</span>
                        
                        <div class="detail">
                            <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
                            <img src="${pokemon.photo}"
                                alt="${pokemon.name}">
                        </div>
                    </li>
        
                `
            }).join('');
            pokemonList.innerHTML += newHtml

        });
    }


    loadPokemonItens(offset, limit);

    function showPokemonDetail(pokemon) {
        const detailContainer = document.getElementById('pokemonDetail');
        const listPokemonContainer = document.getElementById('pokemonList');

        // esconde lista
        listPokemonContainer.style.display = 'none';

        // mostra card
        detailContainer.style.display = 'grid';
        detailContainer.innerHTML = `
            <li class="pokemon ${pokemon.type}">
                <span class="number_detail">#${pokemon.number}</span>
                <span class="name_detail">${pokemon.name}</span>

                <div class="detail_detail">
                <img src="${pokemon.photo}"
                alt="${pokemon.name}">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        <li>Skills:</li>
                        ${pokemon.abilities.map((ability) => `<li class="stats skills">${ability}</li>`).join('')}
                        <li>Stats:</li>
                        <li class="stats hp">HP: ${pokemon.hp}</li>
                        <li class="stats">Attack: ${pokemon.attack}</li>
                        <li class="stats">Defense: ${pokemon.defense}</li>
                        <li class="stats">Height: ${pokemon.height.toFixed(1)} Cm</li>
                        <li class="stats">Weight: ${pokemon.weight} Kg</li>
                        <li class="stats">Base Exp: ${pokemon.base_experience}</li>
                    </ol>
                </div>

                <div class="backButton"> 
                    <button id="backButton" type="button">
                        Back
                    </button>
                </div> 
            </li> 
                    
    `;

        // botão de voltar
        document.getElementById('backButton').addEventListener('click', () => {
            detailContainer.style.display = 'none';
            listPokemonContainer.style.display = 'block';
        });
    }


    pokemonList.addEventListener('click', (event) => {
        const clickedPokemon = event.target.closest('.pokemon');
        if (clickedPokemon) {
            const number = clickedPokemon.dataset.number;
            const pokemonObj = pokemonDataMap.get(Number(number));

            showPokemonDetail(pokemonObj);
        }
    });

})();