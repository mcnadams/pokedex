const sortChoice = document.getElementById('sort-select');

export default function loadSort(callback) {
    sortChoice.addEventListener('change', () => {
        const sortOption = {
            property: sortChoice.value
        };
        callback(sortOption);
    });
}