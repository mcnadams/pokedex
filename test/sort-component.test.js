
const test = QUnit.test;

QUnit.module("sort component");

function sortArray(array, sortChoice) {
    const sortBy = sortChoice.property;
    return array.sort((a, b) => {
        if(a[sortBy] === b[sortBy]) {
            return 0;
        }
        if(a[sortBy] > b[sortBy]) {
            return 1;
        }
        return -1;
    });
}

const testData = [
    {
        name: "Barry",
        age: 15,
        location: "Window"
    },
    {
        name: "Leland",
        age: 8,
        location: "Trackers"
    },
    {
        name: "Magnolia",
        age: 5,
        location: "Preschool"
    },
    {
        name: "Bonnie",
        age: 33,
        location: "Alchemy"
    }
];

test('returns array sorted by name', assert => {
    const expected = [
        {
            name: "Barry",
            age: 15,
            location: "Window"
        },
        {
            name: "Bonnie",
            age: 33,
            location: "Alchemy"
        },
        {
            name: "Leland",
            age: 8,
            location: "Trackers"
        },
        {
            name: "Magnolia",
            age: 5,
            location: "Preschool"
        }
    ];
    const sortOptions = {
        property: "name"
    };

    const result = sortArray(testData, sortOptions);

    assert.deepEqual(result, expected);
});

test('returns array sorted by age', assert => {
    const expected = [
        {
            name: "Magnolia",
            age: 5,
            location: "Preschool"
        },
        {
            name: "Leland",
            age: 8,
            location: "Trackers"
        },
        {
            name: "Barry",
            age: 15,
            location: "Window"
        },
        {
            name: "Bonnie",
            age: 33,
            location: "Alchemy"
        }
    ];
    const sortOptions = {
        property: "age"
    };

    const result = sortArray(testData, sortOptions);

    assert.deepEqual(result, expected);
});

test('returns array sorted by location', assert => {
    const expected = [
        {
            name: "Bonnie",
            age: 33,
            location: "Alchemy"
        },
        {
            name: "Magnolia",
            age: 5,
            location: "Preschool"
        },
        {
            name: "Leland",
            age: 8,
            location: "Trackers"
        },
        {
            name: "Barry",
            age: 15,
            location: "Window"
        }
    ];
    const sortOptions = {
        property: "location"
    };

    const result = sortArray(testData, sortOptions);

    assert.deepEqual(result, expected);
});