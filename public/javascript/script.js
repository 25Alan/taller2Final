import { transformInfo } from "./table.js";

let array_FixedAssets = [];
let array_Category = [];
let array_Mdepreciation = [];
let array_States = [];
let array_Responsible = [];
let array_Locations = [];

const fetchData = async () => {
    try {
        const urlFixed_Assets = 'http://localhost:4000/fixed_assets';
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
    } catch (error) {
        console.error('Error:', error);
    }
};

window.onload = async () => {
    await fetchData();

    await transformInfo(
        array_FixedAssets,
        array_Locations,
        array_Category,
        array_Mdepreciation,
        array_States,
        array_Responsible
    );
}

