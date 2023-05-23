export function showInfo(fixed_assets, location, category, mdepreciation, states, responsible) {
    let tableInitial = [
        fixed_assets.code,
        fixed_assets.description,
        states.state,
        location.name,
        fixed_assets.observations,
        category.name,
        mdepreciation.name,
        responsible.name
    ];

    return tableInitial;
}

export function search() {
    const searchTerm = inputSearch.value.toLowerCase();
    const rows = document.querySelectorAll('.row_tbody');

    rows.forEach((row) => {
        const description = row.querySelector('.description').textContent.toLowerCase();
        const code = row.querySelector('.code').textContent.toLowerCase();

        if (description.includes(searchTerm) || code.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

