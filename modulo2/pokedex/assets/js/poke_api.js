const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();

    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type1] = types;

    pokemon.types = types;
    pokemon.type = type1;

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name);

    pokemon.abilities = abilities;
    pokemon.height = (pokeDetail.height / 10) * 100;
    pokemon.weight = pokeDetail.weight / 10;
    pokemon.base_experience = pokeDetail.base_experience;

    const stats = pokeDetail.stats.map((statsSlot) => statsSlot.base_stat);
    const [hp1] = stats;
    const attack = stats[1];
    const defense = stats[2];

    pokemon.hp = hp1;
    pokemon.attack = attack;
    pokemon.defense = defense;
    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}


