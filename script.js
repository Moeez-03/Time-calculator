
const timeZones = {
    pak: 'Asia/Karachi',
    uk: 'Europe/London',
    uae: 'Asia/Dubai',
    us: 'America/New_York',
    germany: 'Europe/Berlin',
    japan: 'Asia/Tokyo'
};

const hourOffsets = {
    pak: 5,
    uk: 0,
    uae: 4,
    us: -5,
    germany: 1,
    japan: 9
};

const customTimes = {};

function updateCurrentTimes() {
    const currentTime = new Date();
    const currentTimesDiv = document.getElementById('current-times');
    currentTimesDiv.innerHTML = Object.entries(timeZones)
        .map(([key, zone]) => `
            <div class="time-display">
                <div class="time-label">${key.toUpperCase()}</div>
                <div class="fw-bold">${currentTime.toLocaleTimeString('en-US', { 
                    timeZone: zone,
                    hour12: true,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                })}</div>
            </div>
        `).join('');
}

function createCustomTimeInputs() {
    const customTimeInputsDiv = document.getElementById('custom-time-inputs');
    customTimeInputsDiv.innerHTML = Object.keys(timeZones)
        .map(country => `
            <div class="mb-3">
                <label for="${country}" class="time-label">${country.toUpperCase()}</label>
                <input type="time" id="${country}" class="form-control" 
                       onchange="handleCustomTimeChange(event, '${country}')">
            </div>
        `).join('');
}

function handleCustomTimeChange(e, sourceCountry) {
    const value = e.target.value;
    const [hours, minutes] = value.split(':').map(Number);

    Object.keys(timeZones).forEach(country => {
        if (country !== sourceCountry) {
            let hourDiff = hourOffsets[country] - hourOffsets[sourceCountry];
            let newHours = hours + hourDiff;
            if (newHours >= 24) newHours -= 24;
            if (newHours < 0) newHours += 24;
            customTimes[country] = `${newHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

            const inputElement = document.getElementById(country);
            if (inputElement) inputElement.value = customTimes[country];
        }
    });
}

// Initialize and update
updateCurrentTimes();
createCustomTimeInputs();
setInterval(updateCurrentTimes, 1000);