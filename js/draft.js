document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('draft-container');
    container.innerHTML = `
        <h2>Start Mock Draft</h2>
        <label>Team Size:</label>
        <select id="teamSize"><option>10</option><option>12</option></select>
        <label>Draft Position:</label>
        <input type="number" id="draftPosition" min="1" max="12" value="1">
        <button onclick="startDraft()">Start</button>
        <div id="draftBoard"></div>
    `;
});

async function startDraft() {
    const teamSize = parseInt(document.getElementById('teamSize').value);
    const draftPosition = parseInt(document.getElementById('draftPosition').value);
    const board = document.getElementById('draftBoard');

    const res = await fetch('adp-data.json');
    const players = await res.json();
    const picks = [];

    for (let round = 1; round <= 5; round++) {
        for (let team = 1; team <= teamSize; team++) {
            const pickIndex = picks.length;
            const isUser = team === draftPosition;
            const player = players[pickIndex % players.length];

            picks.push({ team, round, player, isUser });
        }
    }

    let html = '<h3>Draft Board</h3><table><tr><th>Round</th><th>Team</th><th>Player</th></tr>';
    picks.forEach(pick => {
        html += `<tr>
                    <td>${pick.round}</td>
                    <td>${pick.isUser ? 'You' : 'Team ' + pick.team}</td>
                    <td>${pick.player.name} (${pick.player.position})</td>
                 </tr>`;
    });
    html += '</table>';
    board.innerHTML = html;
}