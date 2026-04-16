function openTab(tabId) {
    // Hide all contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    // Remove active class from buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(tabId).classList.add('active');
}

function launchProxy() {
    const input = document.getElementById('url-input').value;
    const frame = document.getElementById('proxy-frame');
    
    // Replace this with your Northflank or public proxy link
    const proxyBase = "https://education.secon.info/uv/static/#";
    
    frame.src = proxyBase + btoa(input); // btoa is a simple way to encode the URL
}