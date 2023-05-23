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


