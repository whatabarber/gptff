function syncLeague() {
    const url = document.getElementById('espn-url').value;
    document.getElementById('league-info').innerText = 'Attempting to sync: ' + url;
}
