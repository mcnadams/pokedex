import pokedex from '../data/pokedex.js';
import loadPokemon from './pokemon-component.js';
import loadPaging from './paging-component.js';
import pageArray from './page-array.js';

//loadPokemon(pokedex);

loadPaging(pokedex.length, pagingOptions => {
    const currentPage = pageArray(pokedex, pagingOptions);
    loadPokemon(currentPage);
});