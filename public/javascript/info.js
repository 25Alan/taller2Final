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

export function moreInfo(acquisition_value, date_acquisition, useful_life, residual_value, depreciation_start_date) {
    const newTh = document.createElement('thead');
    const newTr = document.createElement('tr');
    const newTbody = document.createElement('tbody');
    const table = document.querySelector('#tableMoreInfo')
    table.innerHTML = ``;
    newTh.classList.add('thead');
    newTh.innerHTML = `
    <tr class="list_thead">
    <th>Acquisition value</th>
    <th>Date acquisition</th>
    <th>Useful life</th=>
    <th>Residual value</th>
    <th>Depreciation start date</th>
    </tr>`
    newTr.classList.add('row_tbody');
    newTr.innerHTML = `
        <th>${acquisition_value}</th>
        <th>${date_acquisition}</th>
        <th>${useful_life}</th>
        <th>${residual_value}</th>
        <th>${depreciation_start_date}</th>`

    newTbody.appendChild(newTr);
    table.appendChild(newTh);
    table.appendChild(newTbody);
    table.style.display = "block";
}


