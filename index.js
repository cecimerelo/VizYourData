
const server = require('./api/routes.js');

server.listen(8080, function() {
    console.log('Server listening at %s', 8080);
});