// server.mjs
import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8',
    'Content-Language': 'pt-BR'
   });
   let conteudo = '';
  try {
  conteudo = readFileSync('./views/index.html', 'utf-8');
  } catch (erro) {
    
    conteudo = '<h1>Erro ao ler o arquivo</h1>';
    codigo = 404;
  }
  res.end(conteudo);
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`