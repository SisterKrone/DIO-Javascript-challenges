(function main() {

    const pokemonList = document.getElementById('pokemonList');
    const loadMoreButton = document.getElementById('loadMoreButton');
    const limit = 5;
    let offset = 0;
    const pokemonDataMap = new Map();
    const maxRecords = 151;

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
    
    loadMoreButton.addEventListener('click', () => {
        offset += limit;

        const qtdRecordsNextPage = offset + limit;

        if (qtdRecordsNextPage >= maxRecords) {
            const newLimit = maxRecords - offset;
            loadPokemonItens(offset, newLimit);
            loadMoreButton.parentElement.removeChild(loadMoreButton);
        } else {
            loadPokemonItens(offset, limit);

        }

    });

    pokemonList.addEventListener('click', (event) => {
    const clickedPokemon = event.target.closest('.pokemon');
    if (clickedPokemon) {
        const number = clickedPokemon.dataset.number;
        const pokemonObj = pokemonDataMap.get(Number(number));

        showPokemonDetail(pokemonObj);
    }
});

})();