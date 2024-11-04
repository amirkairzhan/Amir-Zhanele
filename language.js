async function loadLanguage(kz) {
    const response = await fetch(`${kz}.json`);
    const messages = await response.json();
    return messages;
}

function updateTextContent(messages) {
    document.getElementById('wedding-invitation').textContent = messages["wedding-invitation"];
    document.getElementById('saturday').textContent = messages["saturday"];
    document.getElementById('february').textContent = messages["february"];
    document.getElementById('countdown-title').textContent = messages["countdown-title"];
    document.getElementById('week-text').textContent = messages["week-text"];
    document.getElementById('day-text').textContent = messages["day-text"];
    document.getElementById('hour-text').textContent = messages["hour-text"];
    document.getElementById('min-text').textContent = messages["min-text"];
    document.getElementById('sec-text').textContent = messages["sec-text"];
    document.getElementById('invitation-title').textContent = messages["invitation-title"];
    document.getElementById('invitation-text-1').textContent = messages["invitation-text-1"];
    document.getElementById('invitation-text-2').textContent = messages["invitation-text-2"];
    document.getElementById('location-title').textContent = messages["location-title"];
    document.getElementById('location-text-1').textContent = messages["location-text-1"];
    document.getElementById('location-text-2').textContent = messages["location-text-2"];
}

document.getElementById('languageSelector').addEventListener('change', async (event) => {
    const selectedLanguage = event.target.value;
    const messages = await loadLanguage(selectedLanguage);
    updateTextContent(messages);
});
