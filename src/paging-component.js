const previousButton = document.getElementById('previous-page');
const currentPageDisplay = document.getElementById('current-page');
const totalPagesDisplay = document.getElementById('total-pages');
const nextButton = document.getElementById('next-page');

const PER_PAGE = 20;

export default function loadPaging(totalPokemon, callback) {
    let currentPage = 1;
    const totalPages = Math.ceil(totalPokemon / PER_PAGE);

    updatePage();

    nextButton.addEventListener('click', () => {
        currentPage++;
        updatePage();
    });

    previousButton.addEventListener('click', () => {
        currentPage--;
        updatePage();
    });

    function updatePage() {
        currentPageDisplay.textContent = currentPage;
        totalPagesDisplay.textContent = totalPages;
        nextButton.disabled = currentPage === totalPages;
        previousButton.disabled = currentPage === 1;
        const pagingOptions = {
            page: currentPage,
            perPage: PER_PAGE
        };
        callback(pagingOptions);
    }
}