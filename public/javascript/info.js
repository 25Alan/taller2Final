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

export async function formModify(code) {
    const form = document.querySelector('#updateForm');
    form.innerHTML = `
    <label>Código: <input type="text" id="codeInput" required>${code}</label><br>
    <label>Descripción: <input type="text" id="descriptionInput" required></label><br>
    <label>Valor de adquisición: <input type="number" id="acquisitionValueInput" required></label><br>
    <label>Fecha de adquisición: <input type="date" id="dateAcquisitionInput" required></label><br>
    <label>Vida útil: <input type="number" id="usefulLifeInput" required></label><br>
    <label>Valor residual: <input type="number" id="residualValueInput" required></label><br>
    <label>Fecha de inicio de depreciación: <input type="date" id="depreciationStartDateInput" required></label><br>
    <label>Observaciones: <textarea id="observationsInput" required></textarea></label><br>
    <label>Estado: <input type="number" id="statusIdInput" required></label><br>
    <label>Categoría: <input type="number" id="categoryIdInput" required></label><br>
    <label>Método de depreciación: <input type="number" id="depreciationMethodIdInput" required></label><br>
    <label>Ubicación: <input type="number" id="locationIdInput" required></label><br>
    <label>Responsable: <input type="number" id="responsibleIdInput" required></label><br>
    <button type="submit">Actualizar</button>  
    `
    form.style.display = "block";

    const updateForm = document.getElementById('updateForm');

    updateForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const code = document.getElementById('codeInput').value;
        const description = document.getElementById('descriptionInput').value;
        const acquisitionValue = document.getElementById('acquisitionValueInput').value;
        const dateAcquisition = document.getElementById('dateAcquisitionInput').value;
        const usefulLife = document.getElementById('usefulLifeInput').value;
        const residualValue = document.getElementById('residualValueInput').value;
        const depreciationStartDate = document.getElementById('depreciationStartDateInput').value;
        const observations = document.getElementById('observationsInput').value;
        const statusId = document.getElementById('statusIdInput').value;
        const categoryId = document.getElementById('categoryIdInput').value;
        const depreciationMethodId = document.getElementById('depreciationMethodIdInput').value;
        const locationId = document.getElementById('locationIdInput').value;
        const responsibleId = document.getElementById('responsibleIdInput').value;

        const updateData = {
            code,
            description,
            acquisition_value: acquisitionValue,
            date_acquisition: dateAcquisition,
            useful_life: usefulLife,
            residual_value: residualValue,
            depreciation_start_date: depreciationStartDate,
            observations,
            id_status: statusId,
            id_category: categoryId,
            id_method_depreciation: depreciationMethodId,
            id_location: locationId,
            id_responsible: responsibleId
        };

        await fetch(`http://localhost:4000/fixed_assets/${updateData}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(async response => {
                if (response.ok) {
                    console.log('Asset updated successfully');
                    await fetchData();
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
        .then(response => {
            if (response.ok) {
                console.log('Solicitud DELETE exitosa');
            } else {
                throw new Error('Error en la solicitud DELETE');
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

export async function updateInfo() {
    const assetId = '123'; // ID del activo que deseas actualizar

    const updatedData = {
        code: 'Nuevo código',
        description: 'Nueva descripción',
        acquisition_value: 1000,
        date_acquisition: '2023-05-17',
        useful_life: 5,
        residual_value: 100,
        depreciation_start_date: '2023-01-01',
        observations: 'Nuevas observaciones',
        id_status: 1,
        id_category: 2,
        id_method_depreciation: 3,
        id_location: 4,
        id_responsible: 5
    };

    await fetch(`/api/assets/${assetId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error en la solicitud PUT');
            }
        })
        .then((updatedAsset) => {
            console.log('Activo actualizado:', updatedAsset);
            // Realiza las acciones necesarias con el activo actualizado
        })
        .catch((error) => {
            console.error(error);
        });
}



