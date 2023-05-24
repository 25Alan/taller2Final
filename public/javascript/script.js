import { search } from "./info.js";
import { transformInfo } from "./table.js";

const buttonPrev = document.querySelector('#buttonPrev');
const buttonNext = document.querySelector('#buttonNext');
const inputSearch = document.querySelector('#inputSearch');
const inputLimit = document.querySelector('#inputLimit');
const buttonLimit = document.querySelector('#buttonLimit');

let page = 1;
let size = 5;
let array_FixedAssets = [];
let array_Category = [];
let array_Mdepreciation = [];
let array_States = [];
let array_Responsible = [];
let array_Locations = [];

const fetchData = async (page = 1, size = 5) => {
    try {
        const urlFixed_Assets = `http://localhost:4000/fixed_assets?page=${page}&size=${size}`;
        const urlStates = 'http://localhost:4000/states';
        const urlCategory = 'http://localhost:4000/category';
        const urlMdepreciation = 'http://localhost:4000/method_depreciation';
        const urlResponsible = 'http://localhost:4000/responsible';
        const urlLocations = 'http://localhost:4000/locations';

        const response = await Promise.all([fetch(urlFixed_Assets), fetch(urlStates), fetch(urlCategory), fetch(urlMdepreciation), fetch(urlResponsible), fetch(urlLocations)]);
        const [data1, data2, data3, data4, data5, data6] = await Promise.all(response.map(res => res.json()));

        array_FixedAssets = data1
        array_States = data2;
        array_Category = data3;
        array_Mdepreciation = data4;
        array_Responsible = data5;
        array_Locations = data6;

        await transformInfo(
            array_FixedAssets,
            array_Locations,
            array_Category,
            array_Mdepreciation,
            array_States,
            array_Responsible
        );
    } catch (error) {
        console.error('Error:', error);
    }
};

window.onload = async () => {
    buttonLimit.addEventListener('click', async () => {
        document.querySelector('tbody').innerHTML = '';
        size = inputLimit.value;
        await fetchData(page, inputLimit.value);
    });

    inputSearch.addEventListener('input', () => {
        search();
    });

    buttonPrev.addEventListener('click', async () => {
        if (page > 1) {
            page--;
            document.querySelector('tbody').innerHTML = '';
            await fetchData(page, size);
        }
    });

    buttonNext.addEventListener('click', async () => {
        page++;
        document.querySelector('tbody').innerHTML = '';
        await fetchData(page, size);
    });

    await fetchData(page, size);
}