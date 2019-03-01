
const test = QUnit.test;

QUnit.module('page array');

function pageArray(pages, pagingOptions) {
    const startIndex = (pagingOptions.page - 1) * pagingOptions.perPage;
    const endIndex = startIndex + pagingOptions.perPage;
    return pages.slice(startIndex, endIndex);
}

const pages = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten'
];

test('page 1 of 4 per page', assert => {
    //arrange
    const expected = [
        'one',
        'two',
        'three',
        'four'
    ];
    const pagingOptions = {
        page: 1,
        perPage: 4
    };

    //act
    const result = pageArray(pages, pagingOptions);

    //assert
    assert.deepEqual(result, expected);

});

test('page 2 of 4 per page', assert => {
    //arrange
    const expected = [
        'five',
        'six',
        'seven',
        'eight'
    ];
    const pagingOptions = {
        page: 2,
        perPage: 4
    };

    //act
    const result = pageArray(pages, pagingOptions);

    //assert
    assert.deepEqual(result, expected);

});