// 2026 Season Game results
const seasonResults = [
    {
        gameDate: "2026-01-10",
        gameLocation: "Rogers Arena",
        canucksScore: 4,
        opponentTeam: "Oilers",
        opponentScore: 3,
        canucksWin: true,
    },
    {
        gameDate: "2026-01-17",
        gameLocation: "Scotiabank Arena",
        canucksScore: 2,
        opponentTeam: "Maple Leafs",
        opponentScore: 5,
        canucksWin: false,
    },
    {
        gameDate: "2026-02-02",
        gameLocation: "Rogers Arena",
        canucksScore: 3,
        opponentTeam: "Flames",
        opponentScore: 2,
        canucksWin: true,
    },
    {
        gameDate: "2026-02-10",
        gameLocation: "Bell Centre",
        canucksScore: 0,
        opponentTeam: "Canadiens",
        opponentScore: 2,
        canucksWin: false,
    },
];

const resultsTable = document.querySelector('#season-results-table');

function createResultsRow(gameData) {
    const resultRow = `
    <tr>
        <td>${gameData.gameDate}</td>
        <td>${gameData.gameLocation}</td>
        <td>${gameData.canucksScore}</td>
        <td></td>
        <td></td>
    </tr>`
    return resultRow;
}

function showAllResults(resultList){
    for (result of resultList){
        const currentRow = createResultsRow(result)
        console.log(currentRow)
        resultsTable.innerHTML += currentRow
    }
}

showAllResults(seasonResults)