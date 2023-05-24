import { showInfo } from "./info.js";

const tbody = document.querySelector('tbody');

export async function transformInfo(array_FixedAssets, array_Locations, array_Category, array_Mdepreciation, array_States, array_Responsible) {
    for (let i = 0; i < array_FixedAssets.length; i++) {
        let indexStatus = array_FixedAssets[i].id_status;
        let indexResponsible = array_FixedAssets[i].id_responsible;
        let indexMdepreciation = array_FixedAssets[i].id_method_depreciation;

        let result = showInfo(
            array_FixedAssets[i],
            array_Locations[i],
            array_Category[i],
            array_Mdepreciation[indexMdepreciation - 1],
            array_States[indexStatus - 1],
            array_Responsible[indexResponsible - 1]
        );
        updateTable(result);
    };
}

function updateTable(newInfo) {
    newRow(
        newInfo[0],
        newInfo[1],
        newInfo[2],
        newInfo[3],
        newInfo[4],
        newInfo[5],
        newInfo[6],
        newInfo[7]
    );
}

export function newRow(code, description, state, location, observations, category, mdepreciation, responsible) {
    const newTr = document.createElement('tr');
    newTr.classList.add('row_tbody');
    newTr.innerHTML = `
    <th class="product">
        <img src="./assets/computer.png" alt="Icon" class="icon">
        <div class="code-description">
            <div class="description">${description}</div>
            <div class="code">${code}</div>
        </div>
    </th>
    <th class="status">
        <div class="active">${state}</div>
    </th>
    <th class="location">${location}</th>
    <th class="observations">${observations}</th>
    <th class="category">${category}</th>
    <th class="mdepreciation">${mdepreciation}</th>
    <th class="responsible">${responsible}</th>
    <th class="action">
        <div class="action-button">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </th>`;
    tbody.appendChild(newTr);
}
