const http = require('http');
const fs = require('fs');
const path = require('path');
const { createWallet } = require('./wallet');

// Função para servir arquivos estáticos
function serveStaticFile(res, filePath, contentType, responseCode = 200) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode, { 'Content-Type': contentType });
            res.end(content);
        }
    });
}

const server = http.createServer((req, res) => {
    // Servir a página HTML
    if (req.url === '/' && req.method === 'GET') {
        serveStaticFile(res, path.join(__dirname, '../public', 'index.html'), 'text/html');
    }
    // Servir o script.js
    else if (req.url === '/script.js' && req.method === 'GET') {
        serveStaticFile(res, path.join(__dirname, '../public', 'script.js'), 'application/javascript');
    }
    // Servir o style.css
    else if (req.url === '/style.css' && req.method === 'GET') {
        serveStaticFile(res, path.join(__dirname, '../public', 'style.css'), 'text/css');
    }
    // Endpoint para criar a carteira
    else if (req.url === '/create-wallet' && req.method === 'GET') {
        const wallet = createWallet();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(wallet));
    }
    // Qualquer outra rota retorna 404
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Not Found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
