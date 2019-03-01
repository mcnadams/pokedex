export default function sortArray(array, sortChoice) {
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