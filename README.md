
API para Reserva de Restaurante
[cite_start]Este projeto consiste em uma API para reserva de restaurante, desenvolvida como parte da unidade curricular de Sistemas Distribuídos e Mobile da UNIVERSIDADE SALVADOR - UNIFACS.
Integrantes da Equipe
 * [cite_start]Rayan Farias Amaral - RA: 12724143938
 * [cite_start]Pedro Macedo Viana - RA: 12724116617
 * [cite_start]Mateus da Silva Kalil - RA: 12724124046
 * [cite_start]Vitor Hugo De Sousa Pires - RA: 12724125869
 * [cite_start]João Pedro Gomes Correia - RA: 12724133577
 * [cite_start]Wendson Santos Pureza - RA: 12725185956
Tecnologias Utilizadas
Código Fonte
 * [cite_start]JavaScript: clean_reservas.js, dattabase_setup.js, garcons.js, mesas.js, relatorios.js, reservas.js, server.js, atendente.js, garcom.js, gerente.js, main.js
 * [cite_start]HTML: atendente.html, garcom.html, gerente.html, index.html
 * [cite_start]CSS: style.css
Framework
 * [cite_start]Express
Ambiente de Execução
 * [cite_start]Node.js
Banco de Dados
 * [cite_start]Sqlite3
Ambiente de Desenvolvimento Web Local
 * [cite_start]Laragon
Editor de Código
 * [cite_start]Visual Studio Code
Justificativa para a Abordagem de Comunicação Escolhida
[cite_start]A arquitetura e as tecnologias selecionadas para a comunicação da API foram baseadas em interoperabilidade, escalabilidade, eficiência, facilidade de desenvolvimento e manutenção. [cite_start]Cada componente desempenha uma função crucial para garantir um sistema robusto e com bom desempenho.
1. Protocolo de Comunicação: HTTP e Estilo Arquitetural REST
 * [cite_start]HTTP (Hypertext Transfer Protocol): Este é o protocolo web essencial para a comunicação entre cliente e servidor. [cite_start]Seu caráter stateless, ou seja, sem estado, significa que cada solicitação do cliente ao servidor contém todas as informações necessárias para que o servidor possa entender e processar, sem depender de informações prévias. [cite_start]Essa estratégia simplifica o design do servidor, impulsiona a escalabilidade e a resiliência.
 * [cite_start]REST (Representational State Transfer): É um estilo arquitetural que utiliza o HTTP de forma padronizada, definindo princípios para a criação de serviços web:
   * [cite_start]Recursos: Cada dado ou funcionalidade é considerado um recurso, identificado por uma URL única.
   * [cite_start]Verbos HTTP: As ações nos recursos acontecem usando os métodos HTTP existentes, tipo GET para buscar dados, POST para criar algo novo, PUT para atualizar e DELETE para apagar, garantindo assim uma interface padrão.
   * [cite_start]Statelessness: Tal como o HTTP, o servidor não guarda a história da conversa com o cliente entre as solicitações.
   * [cite_start]Armazenabilidade em Cache: As respostas podem ser guardadas no cache, melhorando o desempenho e aliviando a carga do servidor.
   * [cite_start]Níveis: O sistema pode ser montado em vários níveis, como balanceadores e caches, sem que o cliente precise saber.
     [cite_start]A obediência ao REST torna a nossa API intuitiva, fácil de usar em diversas situações, com uma interoperabilidade que facilita as coisas, permitindo que uma variedade de clientes a utilizem sem problemas e, claro, que seja escalável.
2. Ambiente de Operação e Framework Backend: Node.js e Express
 * [cite_start]Node.js: É um ambiente para rodar JavaScript que usa eventos e é não bloqueante, baseado no motor V8 do Chrome. [cite_start]Sua principal valia reside na capacidade de lidar com muitas conexões simultaneamente de forma eficiente, empregando um modelo I/O assíncrono. [cite_start]Isso é ideal para aplicações com alta demanda de entrada e saída, como APIs web que interagem com bancos de dados.
 * [cite_start]Express.js: É um framework web minimalista e flexível para Node.js. [cite_start]Ele oferece uma camada de abstração que facilita a criação de APIs e aplicações web. [cite_start]Express fornece funcionalidades como roteamento, uso de middlewares para pré-processamento de requisições, e manipulação de solicitações/respostas HTTP. [cite_start]Sua simplicidade e capacidade de escalabilidade tornam o desenvolvimento mais ágil e o código mais organizado.
3. Banco de Dados: SQLite3
 * [cite_start]SQLite3: É um sistema de gerenciamento de banco de dados relacional embutido, leve e sem necessidade de servidor. [cite_start]Ele dispensa um processo de servidor separado, armazenando os dados em um único arquivo. Entre suas vantagens destacam-se:
   * [cite_start]Configuração Zero: Sem necessidade de instalações ou configurações complexas.
   * [cite_start]Portabilidade: O arquivo do banco pode ser facilmente transferido.
   * [cite_start]Leveza: Baixo consumo de recursos, adequado para aplicações menores e protótipos.
     [cite_start]Em nosso caso, essa leveza proporciona uma solução eficaz e intuitiva para persistência de dados.
4. Frontend e Interação com o Usuário: HTML e JavaScript
 * [cite_start]HTML (HyperText Markup Language): Linguagem de marcação padrão para estruturar o conteúdo das páginas web. [cite_start]Define a organização de elementos visuais e textuais com os quais o usuário interage.
 * [cite_start]JavaScript: Linguagem de programação de alto nível que oferece dinamismo e interatividade à interface do usuário no navegador. [cite_start]Ele manipula o DOM, faz requisições HTTP para a API (usando fetch ou XMLHttpRequest) e processa os dados recebidos. [cite_start]Essa combinação permite o desenvolvimento de SPAs (Single Page Applications) interativos, onde a interface consome a API e opera a lógica de exibição.
5. Ferramentas de Desenvolvimento: Laragon e Visual Studio Code
 * [cite_start]Laragon: Ambiente local leve e veloz para desenvolvimento web. [cite_start]Ele isola, pré-configura e gerencia pacotes como Node.js, SQLite, Apache/Nginx. [cite_start]Facilita a configuração do ambiente, permitindo que o desenvolvedor foque na codificação.
 * [cite_start]Visual Studio Code (VSCode): Editor de código leve e poderoso, com suporte nativo a JavaScript, extensões, terminal integrado, depuração e integração com Git. [cite_start]Ele eleva a produtividade ao facilitar escrita, teste e manutenção do código.
Como Executar a API
 * Acesse o PowerShell como administrador.
 * [cite_start]Digite o comando Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned (não pode copiar e colar) e pressione y ou s para aceitar.
 * [cite_start]Execute o arquivo executável do Node.js como administrador e aguarde o download (ele fechará sozinho).
 * [cite_start]Confira se o Node.js está instalado digitando node -v no terminal.
 * [cite_start]Baixe e instale o Visual Studio Code e o Laragon.
 * [cite_start]Vá até o disco local, abra a pasta do Laragon e cole o arquivo da API na pasta www.
 * [cite_start]Ligue o Laragon.
 * [cite_start]Entre no VSCode e utilize os seguintes comandos no terminal:
   npm install sqlite3
npm run setup-db
npm run start

[cite_start]Após esses comandos, abra o navegador e acesse o link: http://localhost/APIrestaurante-main/SITE/. Link para Download Você pode baixar o VSCode, Laragon e o arquivo executável do Node.js no seguinte link: [cite_start]https://drive.google.com/drive/folders/1leAHc6G4Y7FSnhitO_gN08h9esm-WswV Conclusão [cite_start]A integração das tecnologias HTTP/REST, Node.js/Express, SQLite3 e HTML/JavaScript resulta em uma arquitetura modular, eficiente e de fácil manutenção. [cite_start]Essa pilha tecnológica é adequada ao desenvolvimento ágil de aplicações web modernas, que exigem rapidez na resposta e capacidade de lidar com múltiplas interações simultâneas. GitHub da API Você pode encontrar o código fonte da API no GitHub: [cite_start]https://github.com/WendsonPureza/APIrestaurante Links do vídeo: Https://www.youtube.com/watch?v=AoX8SUx3qK8
Crie um arquivo readme com isso aqui

Editar
Vou criar um arquivo README.md bem estruturado baseado nas informações fornecidas sobre a API para Reserva de Restaurante.


README - API para Reserva de Restaurante
Documento 



Eu não quero emoji

Editar

README - API para Reserva de Restaurante
Documento ∙ Versão 2 

README - API para Reserva de Restaurante
Documento ∙ Versão 3 

README - API para Reserva de Restaurante
Documento ∙ Versão 4 
Pronto! Criei um README.md completo e bem estruturado para o projeto da API de Reserva de Restaurante, sem emojis como solicitado. O arquivo inclui todas as informações fornecidas, organizadas de forma clara e profissional, incluindo:

Informações do projeto e da equipe
Tecnologias utilizadas
Justificativa técnica detalhada
Instruções de instalação e execução
Links importantes
Conclusão
O arquivo está formatado em Markdown padrão e pode ser usado diretamente no GitHub ou qualquer outro repositório.




Troque o link do drive por esse https://1drv.ms/f/c/abad46c23c661f42/EgJ_m_rCjWhGuQD_4VT1K-EBKD9wpYXiSjdjfFezo6zHEw

Editar

README - API para Reserva de Restaurante
Documento ∙ Versão 5 
Pronto! O link foi atualizado para o OneDrive conforme solicitado.







API para Reserva de Restaurante
Este projeto consiste em uma API para reserva de restaurante, desenvolvida como parte da unidade curricular de Sistemas Distribuídos e Mobile da UNIVERSIDADE SALVADOR - UNIFACS.

Integrantes da Equipe
Rayan Farias Amaral - RA: 12724143938
Pedro Macedo Viana - RA: 12724116617
Mateus da Silva Kalil - RA: 12724124046
Vitor Hugo De Sousa Pires - RA: 12724125869
João Pedro Gomes Correia - RA: 12724133577
Wendson Santos Pureza - RA: 12725185956
Tecnologias Utilizadas
Código Fonte
JavaScript: clean_reservas.js, database_setup.js, garcons.js, mesas.js, relatorios.js, reservas.js, server.js, atendente.js, garcom.js, gerente.js, main.js
HTML: atendente.html, garcom.html, gerente.html, index.html
CSS: style.css
Framework
Express - Framework web para Node.js
Ambiente de Execução
Node.js - Runtime JavaScript
Banco de Dados
SQLite3 - Sistema de gerenciamento de banco de dados
Ferramentas de Desenvolvimento
Laragon - Ambiente de desenvolvimento web local
Visual Studio Code - Editor de código
Justificativa para a Abordagem de Comunicação
A arquitetura e as tecnologias selecionadas foram baseadas em interoperabilidade, escalabilidade, eficiência, facilidade de desenvolvimento e manutenção.

1. Protocolo de Comunicação: HTTP e REST
HTTP (Hypertext Transfer Protocol): Protocolo web essencial para comunicação cliente-servidor com características stateless, simplificando o design e impulsionando escalabilidade e resiliência.

REST (Representational State Transfer): Estilo arquitetural que utiliza HTTP de forma padronizada:

Recursos: Cada funcionalidade identificada por URL única
Verbos HTTP: GET, POST, PUT, DELETE para operações padronizadas
Statelessness: Servidor não mantém histórico entre requisições
Armazenabilidade em Cache: Respostas podem ser guardadas no cache
Arquitetura em Camadas: Sistema pode ser montado em vários níveis
A obediência ao REST torna nossa API intuitiva, fácil de usar, com interoperabilidade que permite uso por diversos clientes e escalabilidade.

2. Ambiente de Operação e Framework Backend: Node.js e Express
Node.js: Ambiente para executar JavaScript baseado no motor V8 do Chrome, com modelo de eventos não-bloqueante. Ideal para aplicações com alta demanda de entrada e saída, como APIs web que interagem com bancos de dados.

Express.js: Framework web minimalista e flexível para Node.js, oferecendo funcionalidades como roteamento, middlewares e manipulação de requisições HTTP. Sua simplicidade torna o desenvolvimento mais ágil e o código mais organizado.

3. Banco de Dados: SQLite3
SQLite3: Sistema de gerenciamento de banco de dados relacional embutido, leve e sem necessidade de servidor. Vantagens:

Configuração Zero: Sem instalações ou configurações complexas
Portabilidade: Arquivo do banco facilmente transferível
Leveza: Baixo consumo de recursos, adequado para aplicações menores
4. Frontend e Interação: HTML e JavaScript
HTML: Linguagem de marcação padrão para estruturar conteúdo das páginas web, definindo organização de elementos visuais e textuais.

JavaScript: Linguagem de programação que oferece dinamismo e interatividade, manipulando DOM, fazendo requisições HTTP para a API e processando dados recebidos.

5. Ferramentas de Desenvolvimento
Laragon: Ambiente local leve para desenvolvimento web que isola, pré-configura e gerencia pacotes como Node.js e SQLite.

Visual Studio Code: Editor de código com suporte nativo a JavaScript, extensões, terminal integrado e integração com Git.

Como Executar a API
Acesse o PowerShell como administrador
Digite o comando Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned e pressione y ou s para aceitar
Execute o arquivo executável do Node.js como administrador e aguarde o download
Confira se o Node.js está instalado digitando node -v no terminal
Baixe e instale o Visual Studio Code e o Laragon
Vá até o disco local, abra a pasta do Laragon e cole o arquivo da API na pasta www
Ligue o Laragon
Entre no VSCode e utilize os seguintes comandos no terminal:
bash
npm install sqlite3
npm run setup-db
npm run start
Após esses comandos, abra o navegador e acesse: http://localhost/APIrestaurante-main/SITE/
Links para Download
Você pode baixar o VSCode, Laragon e o arquivo executável do Node.js no seguinte link: https://1drv.ms/f/c/abad46c23c661f42/EgJ_m_rCjWhGuQD_4VT1K-EBKD9wpYXiSjdjfFezo6zHEw

Repositório GitHub
Código fonte da API disponível em: https://github.com/WendsonPureza/APIrestaurante

Vídeo Demonstrativo
https://www.youtube.com/watch?v=AoX8SUx3qK8

Conclusão
A integração das tecnologias HTTP/REST, Node.js/Express, SQLite3 e HTML/JavaScript resulta em uma arquitetura modular, eficiente e de fácil manutenção. Essa pilha tecnológica é adequada ao desenvolvimento ágil de aplicações web modernas, que exigem rapidez na resposta e capacidade de lidar com múltiplas interações simultâneas.

