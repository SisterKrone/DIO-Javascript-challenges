function showPokemonDetail(pokemon) {
    const detailContainer = document.getElementById('pokemonDetail');
    const listPokemonContainer = document.getElementById('pokemonList');
    const loadMoreButton = document.getElementById('loadMoreButton');
    
    listPokemonContainer.style.display = 'none';
    loadMoreButton.style.display = 'none';

    
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

    
    document.getElementById('backButton').addEventListener('click', () => {
        detailContainer.style.display = 'none';
        listPokemonContainer.style.display = 'grid';
        loadMoreButton.style.display = 'block';
    });
}

