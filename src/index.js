import pokedex from '../data/pokedex.js';
import loadPokemon from './pokemon-component.js';
import loadPaging from './paging-component.js';
import pageArray from './page-array.js';
import loadSort from './sort-component.js';
import sortArray from './sort-array.js';

loadPaging(pokedex.length, pagingOptions => {
    const currentPage = pageArray(pokedex, pagingOptions);
    loadPokemon(currentPage);
});


loadSort(sortOptions => {
    sortArray(pokedex, sortOptions);
    loadPaging(pokedex.length, pagingOptions => {
        const currentPage = pageArray(pokedex, pagingOptions);
        loadPokemon(currentPage);
    });
});