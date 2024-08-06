document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const targetUrl = urlParams.get('link');
    const targetLinkElement = document.getElementById('target-link');
    const warningElement = document.getElementById('warning');

    if (targetUrl) {
        targetLinkElement.href = targetUrl;
        targetLinkElement.textContent = targetUrl;

        if (targetUrl.startsWith('http:')) {
            warningElement.style.display = 'block';
        }
    } else {
        targetLinkElement.textContent = '无效的链接';
    }
});

function goBack() {
    window.history.back();
}
