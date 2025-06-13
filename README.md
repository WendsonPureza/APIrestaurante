# API para Reserva de Restaurante

Este projeto consiste em uma API para reserva de restaurante, desenvolvida como parte da unidade curricular de Sistemas Distribuídos e Mobile da **UNIVERSIDADE SALVADOR - UNIFACS**.

## Integrantes da Equipe

- **Rayan Farias Amaral** - RA: 12724143938
- **Pedro Macedo Viana** - RA: 12724116617
- **Mateus da Silva Kalil** - RA: 12724124046
- **Vitor Hugo De Sousa Pires** - RA: 12724125869
- **João Pedro Gomes Correia** - RA: 12724133577
- **Wendson Santos Pureza** - RA: 12725185956

## Tecnologias Utilizadas

### Código Fonte
- **JavaScript**: `clean_reservas.js`, `database_setup.js`, `garcons.js`, `mesas.js`, `relatorios.js`, `reservas.js`, `server.js`, `atendente.js`, `garcom.js`, `gerente.js`, `main.js`
- **HTML**: `atendente.html`, `garcom.html`, `gerente.html`, `index.html`
- **CSS**: `style.css`

### Framework
- **Express** - Framework web para Node.js

### Ambiente de Execução
- **Node.js** - Runtime JavaScript

### Banco de Dados
- **SQLite3** - Sistema de gerenciamento de banco de dados

### Ferramentas de Desenvolvimento
- **Laragon** - Ambiente de desenvolvimento web local
- **Visual Studio Code** - Editor de código

## Justificativa para a Abordagem de Comunicação

A arquitetura e as tecnologias selecionadas foram baseadas em **interoperabilidade**, **escalabilidade**, **eficiência**, **facilidade de desenvolvimento** e **manutenção**.

### 1. Protocolo de Comunicação: HTTP e REST

**HTTP (Hypertext Transfer Protocol)**: Protocolo web essencial para comunicação cliente-servidor com características stateless, simplificando o design e impulsionando escalabilidade e resiliência.

**REST (Representational State Transfer)**: Estilo arquitetural que utiliza HTTP de forma padronizada:
- **Recursos**: Cada funcionalidade identificada por URL única
- **Verbos HTTP**: GET, POST, PUT, DELETE para operações padronizadas
- **Statelessness**: Servidor não mantém histórico entre requisições
- **Armazenabilidade em Cache**: Respostas podem ser guardadas no cache
- **Arquitetura em Camadas**: Sistema pode ser montado em vários níveis

A obediência ao REST torna nossa API intuitiva, fácil de usar, com interoperabilidade que permite uso por diversos clientes e escalabilidade.

### 2. Ambiente de Operação e Framework Backend: Node.js e Express

**Node.js**: Ambiente para executar JavaScript baseado no motor V8 do Chrome, com modelo de eventos não-bloqueante. Ideal para aplicações com alta demanda de entrada e saída, como APIs web que interagem com bancos de dados.

**Express.js**: Framework web minimalista e flexível para Node.js, oferecendo funcionalidades como roteamento, middlewares e manipulação de requisições HTTP. Sua simplicidade torna o desenvolvimento mais ágil e o código mais organizado.

### 3. Banco de Dados: SQLite3

**SQLite3**: Sistema de gerenciamento de banco de dados relacional embutido, leve e sem necessidade de servidor. Vantagens:
- **Configuração Zero**: Sem instalações ou configurações complexas
- **Portabilidade**: Arquivo do banco facilmente transferível
- **Leveza**: Baixo consumo de recursos, adequado para aplicações menores

### 4. Frontend e Interação: HTML e JavaScript

**HTML**: Linguagem de marcação padrão para estruturar conteúdo das páginas web, definindo organização de elementos visuais e textuais.

**JavaScript**: Linguagem de programação que oferece dinamismo e interatividade, manipulando DOM, fazendo requisições HTTP para a API e processando dados recebidos.

### 5. Ferramentas de Desenvolvimento

**Laragon**: Ambiente local leve para desenvolvimento web que isola, pré-configura e gerencia pacotes como Node.js e SQLite.

**Visual Studio Code**: Editor de código com suporte nativo a JavaScript, extensões, terminal integrado e integração com Git.

## Como Executar a API

1. Acesse o PowerShell como administrador
2. Digite o comando `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` e pressione y ou s para aceitar
3. Execute o arquivo executável do Node.js como administrador e aguarde o download
4. Confira se o Node.js está instalado digitando `node -v` no terminal
5. Baixe e instale o Visual Studio Code e o Laragon
6. Vá até o disco local, abra a pasta do Laragon e cole o arquivo da API na pasta www
7. Ligue o Laragon
8. Entre no VSCode e utilize os seguintes comandos no terminal:

```bash
npm install sqlite3
npm run setup-db
npm run start
```

9. Após esses comandos, abra o navegador e acesse: `http://localhost/APIrestaurante-main/SITE/`

## Links para Download

Você pode baixar o VSCode, Laragon e o arquivo executável do Node.js no seguinte link:
[https://1drv.ms/f/c/abad46c23c661f42/EgJ_m_rCjWhGuQD_4VT1K-EBKD9wpYXiSjdjfFezo6zHEw](https://1drv.ms/f/c/abad46c23c661f42/EgJ_m_rCjWhGuQD_4VT1K-EBKD9wpYXiSjdjfFezo6zHEw)

## Repositório GitHub

Código fonte da API disponível em:
[https://github.com/WendsonPureza/APIrestaurante](https://github.com/WendsonPureza/APIrestaurante)

## Vídeo Demonstrativo

[https://www.youtube.com/watch?v=AoX8SUx3qK8](https://www.youtube.com/watch?v=AoX8SUx3qK8)

## Conclusão

A integração das tecnologias HTTP/REST, Node.js/Express, SQLite3 e HTML/JavaScript resulta em uma arquitetura modular, eficiente e de fácil manutenção. Essa pilha tecnológica é adequada ao desenvolvimento ágil de aplicações web modernas, que exigem rapidez na resposta e capacidade de lidar com múltiplas interações simultâneas.