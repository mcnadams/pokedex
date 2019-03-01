const test = QUnit.test;

QUnit.module('pokemon component');

function makeHtmlTemplate(pokemon) {
    const html = /* html */`
        <a href="${pokemon.pokedex}" class="pokemon-container">
            <div class="pokemon ${pokemon.type_1}" style="background-color: ${pokemon.color_1}">
                <div class="type_2" style="background-color: ${pokemon.color_2}"></div>
                <h3 id="pokemon-name">${pokemon.pokemon}</h3>
                <img src="${pokemon.url_image}" alt="pokemon image">
                <div class="stats">
                    <span id="attack">A: ${pokemon.attack}</span>
                    <span id="defense">D: ${pokemon.defense}</span>
                    <span id="hp">HP: ${pokemon.hp}</span>
                </div>
            </div>
        </a>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}


test('make html template for pokemon', assert => {

    const pokemon = {
        'pokemon': 'bulbasaur',
        'id': 1,
        'species_id': 1,
        'height': 7,
        'weight': 69,
        'base_experience': 64,
        'type_1': 'grass',
        'type_2': 'poison',
        'attack': 49,
        'defense': 49,
        'hp': 45,
        'special_attack': 65,
        'special_defense': 65,
        'speed': 45,
        'ability_1': 'overgrow',
        'ability_2': 'NA',
        'ability_hidden': 'chlorophyll',
        'color_1': '#78C850',
        'color_2': '#A040A0',
        'color_f': '#81A763',
        'egg_group_1': 'monster',
        'egg_group_2': 'plant',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id': 1,
        'evolves_from_species_id': 'NA',
        'evolution_chain_id': 1,
        'shape_id': 8,
        'shape': 'quadruped',
        'pokebase': 'bulbasaur',
        'pokedex': 'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    const expected = /* html */ `
        <a href="http://www.pokemon.com/us/pokedex/bulbasaur" class="pokemon-container">
            <div class="pokemon grass" style="background-color: #78C850">
                <div class="type_2" style="background-color: #A040A0"></div>
                <h3 id="pokemon-name">bulbasaur</h3>
                <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="pokemon image">
                <div class="stats">
                    <span id="attack">A: 49</span>
                    <span id="defense">D: 49</span>
                    <span id="hp">HP: 45</span>
                </div>
            </div>
        </a>
    `;

    const result = makeHtmlTemplate(pokemon);

    assert.htmlEqual(result, expected);

});