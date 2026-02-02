// Import the built-in HTTP module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
    try {
        // Set the response HTTP header with status and content type
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        // Simple routing
        if (req.url === '/') {
            res.end('<h1>Welcome to My Node.js Server</h1><p>This is the home page.</p>');
        } else if (req.url === '/about') {
            res.end('<h1>About Page</h1><p>This is a simple Node.js server example.</p>');
        } else {
            res.statusCode = 404;
            res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        }
    } catch (error) {
        // Handle unexpected errors
        res.statusCode = 500;
        res.end('<h1>500 Internal Server Error</h1>');
        console.error('Server error:', error);
    }
});

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
