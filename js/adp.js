document.addEventListener('DOMContentLoaded', async () => {
    const table = document.getElementById('adp-table');
    try {
        const response = await fetch('adp-data.json');
        const data = await response.json();

        let html = '<table><thead><tr><th>Name</th><th>Team</th><th>Pos</th><th>Bye</th><th>ADP</th></tr></thead><tbody>';
        data.forEach(player => {
            html += `<tr>
                        <td>${player.name}</td>
                        <td>${player.team}</td>
                        <td>${player.position}</td>
                        <td>${player.bye_week}</td>
                        <td>${player.adp}</td>
                     </tr>`;
        });
        html += '</tbody></table>';
        table.innerHTML = html;
    } catch (err) {
        table.innerText = 'Error loading ADP data.';
    }
});
        table.innerText = 'Error loading ADP data.';
    }
});
