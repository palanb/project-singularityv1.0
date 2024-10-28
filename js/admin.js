// Display active users
document.getElementById('userCount').textContent = localStorage.getItem('activeUsers') || '0';

// Disable login function
function disableLogin() {
    localStorage.setItem('loginDisabled', 'true');
    alert('Login has been disabled');
}

// Shutdown website function
function shutdownWebsite() {
    document.body.innerHTML = '<h1>Website is currently shut down by the admin.</h1>';
    localStorage.setItem('websiteShutdown', 'true');
}

// Re-enable website on reload if not shut down
window.addEventListener('load', () => {
    if (localStorage.getItem('websiteShutdown') === 'true') {
        document.body.innerHTML = '<h1>Website is currently shut down by the admin.</h1>';
    }
});

// Display active users count
document.getElementById('userCount').textContent = localStorage.getItem('activeUsers') || '0';

function disableLogin() {
    localStorage.setItem('loginDisabled', 'true');
    alert('Login has been disabled');
}

function shutdownWebsite() {
    localStorage.setItem('websiteShutdown', 'true');
    alert('Website is now shut down');
    window.location.href = 'shutdown.html';
}

function unshutdownWebsite() {
    localStorage.removeItem('websiteShutdown');
    alert('Website is now back online');
}

// Check for website shutdown on load and redirect if necessary
window.addEventListener('load', () => {
    if (localStorage.getItem('websiteShutdown') === 'true') {
        window.location.href = 'shutdown.html';
    }
});
