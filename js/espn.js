async function syncLeague() {
    const url = document.getElementById('espn-url').value;
    const leagueId = url.match(/leagueId=(\d+)/)?.[1];
    const output = document.getElementById('league-info');

    if (!leagueId) {
        output.innerText = 'Invalid ESPN League URL. Must contain leagueId=xxxx';
        return;
    }

    const endpoint = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2024/segments/0/leagues/${leagueId}`;
    try {
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error('Invalid response');
        const data = await res.json();

        output.innerText = `League Name: ${data.settings.name}\nTotal Teams: ${data.settings.size}`;
    } catch (err) {
        output.innerText = 'Failed to fetch ESPN league data. You may need to be logged into ESPN.';
    }
}