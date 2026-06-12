async function loadLogs() {
    const stream = document.getElementById('logStream');
    try {
        const response = await fetch('logs.json');
        const data = await response.json();
        
        stream.innerHTML = '';
        data.forEach(log => {
            const div = document.createElement('div');
            div.className = 'log-entry';
            div.innerHTML = `
                <span class="log-timestamp">[${new Date(log.timestamp).toLocaleTimeString()}]</span>
                <span class="log-agent">${log.agent}</span>: 
                <span class="log-detail">${log.detail}</span>
            `;
            stream.appendChild(div);
        });
    } catch (e) {
        console.error("Log error:", e);
    }
}

function updateClock() {
    const clock = document.getElementById('clock');
    clock.innerText = new Date().toLocaleTimeString('en-US', { hour12: false });
}

setInterval(updateClock, 1000);
setInterval(loadLogs, 5000);
loadLogs();
updateClock();
