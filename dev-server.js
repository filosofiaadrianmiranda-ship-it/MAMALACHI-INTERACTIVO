const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
let clients = [];

const server = http.createServer((req, res) => {
    // Server-Sent Events endpoint
    if (req.url === '/sse') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });
        res.write('\n');
        clients.push(res);
        req.on('close', () => {
            clients = clients.filter(c => c !== res);
        });
        return;
    }

    // Determine target file path
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    // Prevent directory traversal attacks
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    // Check if file exists
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        res.writeHead(404);
        res.end('File not found');
        return;
    }

    const ext = path.extname(filePath);
    let contentType = 'text/plain';
    if (ext === '.html') contentType = 'text/html';
    else if (ext === '.css') contentType = 'text/css';
    else if (ext === '.js') contentType = 'application/javascript';
    else if (ext === '.png') contentType = 'image/png';
    else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
    else if (ext === '.svg') contentType = 'image/svg+xml';
    else if (ext === '.ico') contentType = 'image/x-icon';
    else if (ext === '.json') contentType = 'application/json';

    if (ext === '.html') {
        // Inject SSE script for hot-reloading
        let content = fs.readFileSync(filePath, 'utf8');
        const injectScript = `
            <!-- Live Reload Script -->
            <script>
                const eventSource = new EventSource('/sse');
                eventSource.onmessage = (event) => {
                    if (event.data === 'reload') {
                        console.log('File changed, reloading...');
                        window.location.reload();
                    }
                };
                eventSource.onerror = () => {
                    console.log('Lost connection to dev server. Reconnecting...');
                };
            </script>
        `;
        // Insert right before </body>
        if (content.includes('</body>')) {
            content = content.replace('</body>', `${injectScript}</body>`);
        } else {
            content += injectScript;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
    } else {
        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(filePath).pipe(res);
    }
});

// Watch directory for changes
let watchTimeout;
fs.watch(__dirname, { recursive: true }, (eventType, filename) => {
    // Ignore server file itself and hidden files
    if (filename && filename !== 'dev-server.js' && !filename.startsWith('.')) {
        if (filename.endsWith('.html') || filename.endsWith('.css') || filename.endsWith('.js')) {
            // Debounce to prevent multiple quick reloads
            clearTimeout(watchTimeout);
            watchTimeout = setTimeout(() => {
                console.log(`[DevServer] File changed: ${filename}. Reloading browser...`);
                clients.forEach(client => {
                    try {
                        client.write('data: reload\n\n');
                    } catch (e) {
                        // Handle dead clients
                    }
                });
            }, 100);
        }
    }
});

server.listen(PORT, () => {
    console.log(`[DevServer] Running at http://localhost:${PORT}`);
    console.log(`[DevServer] Watching files in ${__dirname}`);
});