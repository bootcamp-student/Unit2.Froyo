const inputList = prompt("Enter your favorite flavors (e.g., coffee, strawberry, vanilla):");

if (inputList === null) {
    // Erro handing in case there isnt input
    document.write("You canceled. Refresh the page to try again.");
} else {
    const flavors = inputList.split(",").map(item => item.trim());

    const flavorTable = document.createElement("table");
    flavorTable.innerHTML = '<thead><tr><th>Flavors</th><th>Count</th></tr></thead><tbody></tbody>';
    document.querySelector(".container").appendChild(flavorTable);

    const flavorTBody = flavorTable.getElementsByTagName('tbody')[0];
    const flavorCounts = {};

    flavors.forEach(flavor => {
        if (flavor in flavorCounts) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    });

    for (const flavor in flavorCounts) {
        const newRow = flavorTBody.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);

        cell1.innerHTML = flavor;
        cell2.innerHTML = flavorCounts[flavor];
    }
}