// 2026 Season Game results
const seasonResults = [
    {
        gameDate: "2026-01-10",
        gameLocation: "Rogers Arena",
        canucksScore: 4,
        opponentTeam: "Oilers",
        opponentScore: 3,
        canucksWin: null,
    },
    {
        gameDate: "2026-01-17",
        gameLocation: "Scotiabank Arena",
        canucksScore: 2,
        opponentTeam: "Maple Leafs",
        opponentScore: 5,
        canucksWin: null,
    },
    {
        gameDate: "2026-02-02",
        gameLocation: "Rogers Arena",
        canucksScore: 3,
        opponentTeam: "Flames",
        opponentScore: 2,
        canucksWin: null,
    },
    {
        gameDate: "2026-02-10",
        gameLocation: "Bell Centre",
        canucksScore: 0,
        opponentTeam: "Canadiens",
        opponentScore: 2,
        canucksWin: null,
    },
    {
        gameDate: "2026-02-18",
        gameLocation: "Rogers Arena",
        canucksScore: 5,
        opponentTeam: "Bruins",
        opponentScore: 4,
        canucksWin: null,
    },
    {
        gameDate: "2026-02-25",
        gameLocation: "Scotiabank Arena",
        canucksScore: 1,
        opponentTeam: "Rangers",
        opponentScore: 2,
        canucksWin: null,
    },
    {
        gameDate: "2026-03-03",
        gameLocation: "Rogers Arena",
        canucksScore: 4,
        opponentTeam: "Hurricanes",
        opponentScore: 1,
        canucksWin: null,
    },
    {
        gameDate: "2026-03-12",
        gameLocation: "Canadian Tire Centre",
        canucksScore: 2,
        opponentTeam: "Senators",
        opponentScore: 6,
        canucksWin: null,
    },
    {
        gameDate: "2026-03-20",
        gameLocation: "American Airlines Center",
        canucksScore: 3,
        opponentTeam: "Stars",
        opponentScore: 2,
        canucksWin: null
    }
];

const resultsTable = document.querySelector('#season-results-table');

function calcWinner(gameData) {
    if (gameData.canucksScore > gameData.opponentScore) {
        return gameData.canucksWin = true;
    } else {
        return gameData.canucksWin = false;
    }
}

function createResultsRow(gameData) {
    const winOrLose = gameData.canucksWin ? "canucks-ftw" : "canucks-lose";
    const resultRow = `
    <tr class="${winOrLose}">
        <td>${gameData.gameDate}</td>
        <td>${gameData.gameLocation}</td>
        <td>${gameData.canucksScore}</td>
        <td>${gameData.opponentTeam}</td>
        <td>${gameData.opponentScore}</td>
        <td>${gameData.canucksWin}</td>
    </tr>`
    return resultRow;
}

function showAllResults(resultList) {
    for (result of resultList) {
        const currentRow = createResultsRow(result)
        console.log(currentRow)
        resultsTable.innerHTML += currentRow
    }
}

seasonResults.forEach(calcWinner);
//loop through each game result and calculate the winner
for (result of seasonResults) {//loop through each game result and calculate the winner
    result.calcWinner = calcWinner(result);
}
showAllResults(seasonResults);

