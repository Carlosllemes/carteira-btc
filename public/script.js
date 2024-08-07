document.addEventListener('DOMContentLoaded', () => {
    const generateWalletBtn = document.getElementById('generateWalletBtn');
    const walletInfoDiv = document.getElementById('walletInfo');
    const btcAddressSpan = document.getElementById('btcAddress');
    const privateKeySpan = document.getElementById('privateKey');
    const seedSpan = document.getElementById('seed');

    generateWalletBtn.addEventListener('click', () => {
        fetch('/create-wallet')
            .then(response => response.json())
            .then(data => {
                btcAddressSpan.textContent = data.address;
                privateKeySpan.textContent = data.privateKey;
                seedSpan.textContent = data.seed;
                walletInfoDiv.style.display = 'block';
            })
            .catch(error => console.error('Error:', error));
    });
});
