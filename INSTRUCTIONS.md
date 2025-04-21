# Como executar e construir o aplicativo de Handebol

## Pré-requisitos
- Node.js instalado (versão 16 ou superior)
- NPM ou Yarn

## Passos para execução

1. Instale as dependências:
```bash
npm install
```

2. Execute o aplicativo em modo de desenvolvimento:
```bash
npm start
```

3. Para construir o executável:
```bash
npm run build
```

## Estrutura de arquivos
- `main.js` - Configuração principal do Electron
- `index.html` - Página principal do aplicativo
- `package.json` - Configurações do projeto e dependências
- `assets/` - Diretório para ícones e imagens

## Personalização
- Altere o ícone: coloque um arquivo .ico em assets/icon.ico
- Modifique as dimensões da janela em main.js
