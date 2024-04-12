# To Do List
## Stefanini NewM

### Tecnologias Utilizadas: 
- React JS
- Spring Boot
- Docker



## Como executar  

### Dependências

#### Primeiramente, será necessário instalar os seguintes componentes:
- [Node.js e NPM](https://nodejs.org/en/download)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Execução 

Após baixar esse repositório, abra o terminal dentro da pasta raiz dele e execute:
> docker compose up

Feito isso, espere a aplicação ser inicializada. Após isso entre na pasta app usando:
> cd app

Dentro da pasta app, agora execute:
> npm start

Nesse momento, caso a aplicação apresente erro, execute o comando abaixo:

> npm install react-scripts --save

Pronto! A aplicação já deve estar executando corretamente.

## Endpoints

#### Para visualizar a documentação dos endpoints com mais detalhes, por favor, visite a url "http://localhost:8080/tasks/swagger-ui/index.html


- GET tasks/: Consiste em retornar todas as Tarefas que o usuário criou, porém de forma paginada através do objeto Pageable. Em caso de sucesso, retornará Status 200 OK.

- GET tasks/id: Consiste em retornar uma tarefa específica, desde que contenha o id informado na URL. Em caso de sucesso, retornará Status 200 OK.

- GET tasks/find: Consiste em retornar um ou um grupo de tarefas, buscados pelo título da tarefa, desde que o parâmetro (String) informado na URL esteja presente no(s) itens. De qualquer forma, retornará Status 200 OK

- POST tasks/create: Consiste na criação de uma nova tarefa, não há necessidade de informar o ID no momento da criação. Em caso de sucesso, retornará Status 200 OK.

- PUT tasks/update: Consiste na atualização de uma nova tarefa desde que o ID informado exista no banco de dados, caso não exista, será criado uma nova tarefa. Em caso de sucesso, retornará Status 204 NO CONTENT.

- DELETE tasks/id: Consiste na remoção de uma tarefa específica, desde que seu ID exista no banco de dados. Em caso de sucesso, retornará Status 200 OK.

