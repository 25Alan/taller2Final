import { fetchData } from "./script.js";

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

export function moreInfoReponsible(email) {
    const newTh = document.createElement('thead');
    const newTr = document.createElement('tr');
    const newTbody = document.createElement('tbody');
    const table = document.querySelector('#tableMoreInfo')
    table.innerHTML = ``;
    newTh.classList.add('thead');
    newTh.innerHTML = `<tr class="list_thead"><th>Email</th></tr>`
    newTr.classList.add('row_tbody');
    newTr.innerHTML = `<th>${email}</th>`
    newTbody.appendChild(newTr);
    table.appendChild(newTh);
    table.appendChild(newTbody);
    table.style.display = "block";
}

export async function formCreate() {
    const form = document.querySelector('#createForm');
    form.innerHTML = `
    <label>Código:<input type="text" id="codeInput" required></label><br>
    <label>Descripción: <input type="text" id="descriptionInput" required></label><br>
    <label>Valor de adquisición: <input type="number" id="acquisitionValueInput" required></label><br>
    <label>Fecha de adquisición: <input type="date" id="dateAcquisitionInput" required></label><br>
    <label>Vida útil: <input type="number" id="usefulLifeInput" required></label><br>
    <label>Valor residual: <input type="number" id="residualValueInput" required></label><br>
    <label>Fecha de inicio de depreciación: <input type="date" id="depreciationStartDateInput" required></label><br>
    <label>Observaciones: <textarea id="observationsInput" required></textarea></label><br>
    <select id="id_status">
        <option value="1">Activo</option>
        <option value="2">En reparación</option>
        <option value="3">Fuera de servicio</option>
    </select>
    <select name="" id="id_category">
        <option value="1">Maquinería</option>
        <option value="2">Vehiculo</option>
        <option value="3">Construcciones</option>
        <option value="4">Muebles</option>
        <option value="5">Tecnologia</option>
    </select>
    <select id="id_method_depreciation">
        <option value="1">Línea recta</option>
        <option value="2">Suma de digitos</option>
        <option value="3">Unidades producidas</option>
    </select>
    <select id="id_locations">
        <option value="1">México</option>
        <option value="2">España</option>
        <option value="3">China</option>
        <option value="4">Estados Unidos</option>
        <option value="5">Argentina</option>
    </select>
    <select name="" id="id_responsible">
        <option value="1">Juan Perez</option>
        <option value="2">Maria Rodriguez</option>
        <option value="3">Carlos Gonzales</option>
        <option value="4">Ana Martinez</option>
        <option value="5">Pedro Sanchez</option>
    </select>  
    <button type='submit'>Create</button>
    `
    form.style.display = "block";

    const createForm = document.querySelector('#createForm');

    createForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const code = document.querySelector('#codeInput').value;
        const description = document.querySelector('#descriptionInput').value;
        const acquisitionValue = document.querySelector('#acquisitionValueInput').value;
        const dateAcquisition = document.querySelector('#dateAcquisitionInput').value;
        const usefulLife = document.querySelector('#usefulLifeInput').value;
        const residualValue = document.querySelector('#residualValueInput').value;
        const depreciationStartDate = document.querySelector('#depreciationStartDateInput').value;
        const observations = document.querySelector('#observationsInput').value;
        const id_status = document.querySelector('#id_status').value;
        const id_category = document.querySelector('#id_category').value;
        const id_method_depreciation = document.querySelector('#id_method_depreciation').value;
        const id_locations = document.querySelector('#id_locations').value;
        const id_responsible = document.querySelector('#id_responsible').value;

        const updateData = {
            code: code,
            description: description,
            acquisition_value: acquisitionValue,
            date_acquisition: dateAcquisition,
            useful_life: usefulLife,
            residual_value: residualValue,
            depreciation_start_date: depreciationStartDate,
            observations: observations,
            id_status: id_status,
            id_category: id_category,
            id_method_depreciation: id_method_depreciation,
            id_location: id_locations,
            id_responsible: id_responsible
        };

        await fetch(`http://localhost:4000/fixed_assets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(async response => {
                if (response.ok) {
                    console.log('Asset create successfully');
                    await fetchData(1, 3);
                    form.style.display = "none";
                } else {
                    console.error('Error');
                }
            })
            .catch(error => {
                console.error('Error create asset:', error);
            });
    });
}

export async function formModify(codeI) {
    const form = document.querySelector('#updateForm');
    form.innerHTML = `
    <label>Código:<input type="text" id="codeInput" value="${codeI}" required></label><br>
    <label>Descripción: <input type="text" id="descriptionInput" required></label><br>
    <label>Valor de adquisición: <input type="number" id="acquisitionValueInput" required></label><br>
    <label>Fecha de adquisición: <input type="date" id="dateAcquisitionInput" required></label><br>
    <label>Vida útil: <input type="number" id="usefulLifeInput" required></label><br>
    <label>Valor residual: <input type="number" id="residualValueInput" required></label><br>
    <label>Fecha de inicio de depreciación: <input type="date" id="depreciationStartDateInput" required></label><br>
    <label>Observaciones: <textarea id="observationsInput" required></textarea></label><br>
    <select id="id_status">
        <option value="1">Activo</option>
        <option value="2">En reparación</option>
        <option value="3">Fuera de servicio</option>
    </select>
    <select name="" id="id_category">
        <option value="1">Maquinería</option>
        <option value="2">Vehiculo</option>
        <option value="3">Construcciones</option>
        <option value="4">Muebles</option>
        <option value="5">Tecnologia</option>
    </select>
    <select id="id_method_depreciation">
        <option value="1">Línea recta</option>
        <option value="2">Suma de digitos</option>
        <option value="3">Unidades producidas</option>
    </select>
    <select id="id_locations">
        <option value="1">México</option>
        <option value="2">España</option>
        <option value="3">China</option>
        <option value="4">Estados Unidos</option>
        <option value="5">Argentina</option>
    </select>
    <select name="" id="id_responsible">
        <option value="1">Juan Perez</option>
        <option value="2">Maria Rodriguez</option>
        <option value="3">Carlos Gonzales</option>
        <option value="4">Ana Martinez</option>
        <option value="5">Pedro Sanchez</option>
    </select>  
    <button type='submit'>Refresh</button>
    `
    form.style.display = "block";

    const updateForm = document.querySelector('#updateForm');

    updateForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const code = document.querySelector('#codeInput').value;
        const description = document.querySelector('#descriptionInput').value;
        const acquisitionValue = document.querySelector('#acquisitionValueInput').value;
        const dateAcquisition = document.querySelector('#dateAcquisitionInput').value;
        const usefulLife = document.querySelector('#usefulLifeInput').value;
        const residualValue = document.querySelector('#residualValueInput').value;
        const depreciationStartDate = document.querySelector('#depreciationStartDateInput').value;
        const observations = document.querySelector('#observationsInput').value;
        const id_status = document.querySelector('#id_status').value;
        const id_category = document.querySelector('#id_category').value;
        const id_method_depreciation = document.querySelector('#id_method_depreciation').value;
        const id_locations = document.querySelector('#id_locations').value;
        const id_responsible = document.querySelector('#id_responsible').value;

        const updateData = {
            code: code,
            description: description,
            acquisition_value: acquisitionValue,
            date_acquisition: dateAcquisition,
            useful_life: usefulLife,
            residual_value: residualValue,
            depreciation_start_date: depreciationStartDate,
            observations: observations,
            id_status: id_status,
            id_category: id_category,
            id_method_depreciation: id_method_depreciation,
            id_location: id_locations,
            id_responsible: id_responsible
        };

        await fetch(`http://localhost:4000/fixed_assets/${codeI}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(async response => {
                if (response.ok) {
                    console.log('Asset updated successfully');
                    await fetchData(1, 3);
                    form.style.display = "none";
                } else {
                    console.error('Error updating asset');
                }
            })
            .catch(error => {
                console.error('Error updating asset:', error);
            });
    });
}

export async function deleteInfo(selectDelete) {
    await fetch(`http://localhost:4000/fixed_assets/${selectDelete}`, {
        method: 'DELETE',
    })
        .then(async response => {
            if (response.ok) {
                console.log('Solicitud DELETE exitosa');
                await fetchData(1, 3);
            } else {
                throw new Error('Error en la solicitud DELETE');
            }
        })
        .catch((error) => {
            console.error(error);
        });
}