const cors_proxy = require('cors-anywhere');

const host = '0.0.0.0';
const port = 8080;

cors_proxy.createServer({
    originWhitelist: [], // Permitir que todos os domínios acessem a API
    requireHeader: ['origin', 'x-requested-with'], // Requerer o cabeçalho "origin" para todas as solicitações
}).listen(port, host, () => {
    console.log(`CORS proxy ouvindo em ${host}:${port}`);
});
