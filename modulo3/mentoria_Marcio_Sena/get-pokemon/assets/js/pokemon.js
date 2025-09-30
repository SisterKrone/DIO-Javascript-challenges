class Pokemon {
  constructor({name, abilities, height, base_experience, sprites}) {
    this._name = name
    this._abilities = abilities
    this._height = height
    this._base_experience = base_experience
    this._sprites = sprites
  }

  get name() {
    return this._capitalize(this._name)
  }
  get abilities() {
    return this._abilitiesFormat(this._abilities)
  }
  get height() {
    return `${(this._height*100)/10} cm`
  }
  get base_experience() {
    return this._base_experience
  }
  get image() {
    return this._sprites.front_shiny
  }

  _abilitiesFormat(abilities){
    return abilities.map((item)=> this._capitalize(item.ability.name)).join(', ')
  }
  _capitalize(value){
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
  }


}