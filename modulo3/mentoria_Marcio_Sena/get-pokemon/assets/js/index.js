const elSelect = document.getElementById('select-options');

function setValues(pokemon) {
  const elPokemonName = document.getElementById('pokemon-name')
  const elPokemonAbilities = document.getElementById('pokemon-abilities')
  const elPokemonHeight = document.getElementById('pokemon-height')
  const elPokemonBaseExperience = document.getElementById('pokemon-experience')
  const elPokemonImage = document.getElementById('pokemon-image')

  elPokemonName.innerHTML = pokemon ? pokemon.name : '-'
  elPokemonAbilities.innerHTML = pokemon ? pokemon.abilities : '-'
  elPokemonHeight.innerHTML = pokemon ? pokemon.height : '-'
  elPokemonBaseExperience.innerHTML = pokemon ? pokemon.base_experience : '-'
  elPokemonImage.setAttribute('src', pokemon ? pokemon.image : 'https://placehold.co/150x150/png')
}

function getValues(value) {
  const service = new PokemonService()
  service.getPokemon(value).then((response) => {
    const { name, abilities, height, base_experience, sprites } = response
    const pokemon = new Pokemon({ name, abilities, height, base_experience, sprites })

    setValues(pokemon)
  })
}

function loadOptions(){
  const service = new PokemonService()
  service.getPokemons().then(response => {
    const { results } = response
    setOptions(results)
  })
}

function setOptions(options) {
  options.map(option => {
    const pokemon = new Pokemon({name: option.name})
    elSelect.add(new Option(pokemon.name, option.name), null)
  })
}

elSelect.addEventListener('change', (event) => {
  const value = event.target.value
  value ? getValues(value) : setValues()
})

loadOptions()