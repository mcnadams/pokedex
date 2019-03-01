export function makeHtmlTemplate(pokemon) {
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