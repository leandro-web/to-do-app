# To-Do List App

Este é um projeto de **To-Do List** que utiliza **React** no frontend e **Laravel 11** no backend com **MySQL** como banco de dados. A autenticação de usuário é feita via **JWT (JSON Web Token)**. O projeto é dividido em duas partes: o frontend está localizado na pasta `front` e o backend na pasta `back`.

## Estrutura do Projeto

- `front/`: Contém o código do frontend desenvolvido com **React** usando **TypeScript**.
- `back/`: Contém o código do backend desenvolvido com **Laravel 11**.

---

## Configuração e Execução do Backend (Laravel 11)

### Requisitos

- PHP 8.x
- Composer
- MySQL
- Laravel 11

### Passos para Configurar o Backend

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Navegue até o diretório do backend:
    ```bash
    cd back
    ```

3. Instale as dependências do PHP usando o Composer:
    ```bash
    composer install
    ```

4. Crie um arquivo `.env` com base no `.env.example`:
    ```bash
    cp .env.example .env
    ```

5. Configure as variáveis de ambiente no arquivo `.env`, especialmente as configurações do banco de dados:
    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=todo_db
    DB_USERNAME=root
    DB_PASSWORD=sua-senha
    ```

6. Gere uma chave de aplicação do Laravel:
    ```bash
    php artisan key:generate
    ```

7. Execute as migrações para criar as tabelas no banco de dados:
    ```bash
    php artisan migrate
    ```

8. Inicie o servidor de desenvolvimento:
    ```bash
    php artisan serve
    ```

O backend estará disponível em `http://localhost:8000`.

### Endpoints da API

- **POST** `/api/register`: Registro de usuário (campos: `name`, `email`, `password`)
- **POST** `/api/login`: Login do usuário (campos: `email`, `password`)
- **GET** `/api/tasks`: Lista todas as tarefas do usuário autenticado
- **POST** `/api/tasks`: Cria uma nova tarefa (campos: `title`, `status`)
- **PUT** `/api/tasks/{id}`: Atualiza uma tarefa existente (campos: `title`, `status`)
- **DELETE** `/api/tasks/{id}`: Deleta uma tarefa

---

## Configuração e Execução do Frontend (React)

### Requisitos

- Node.js
- NPM ou Yarn

### Passos para Configurar o Frontend

1. Navegue até o diretório do frontend:
    ```bash
    cd front
    ```

2. Instale as dependências do Node.js:
    ```bash
    npm install
    ```

3. Crie um arquivo `.env` na pasta `front` e defina a URL do backend (ponto de API):
    ```bash
    REACT_APP_API_URL=http://localhost:8000/api
    ```

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

O frontend estará disponível em `http://localhost:3000`.

### Funcionalidades do Frontend

- **Página de Login**: Usuário pode entrar com email e senha.
- **Página de Registro**: Usuário pode criar uma nova conta.
- **Lista de Tarefas**: Exibe as tarefas do usuário autenticado.
- **Criar, Editar e Deletar Tarefas**: O usuário pode adicionar, editar e excluir suas tarefas.
- **Logout**: Usuário pode sair da aplicação.

### Estrutura de Componentes

- **Login**: Página de login do usuário.
- **Register**: Página de registro de novo usuário.
- **TaskList**: Página que lista todas as tarefas.
- **CreateTask**: Página para criar novas tarefas.
- **EditTask**: Página para editar tarefas existentes.
- **Header, Menu, Footer**: Componentes de layout.

---

## Tecnologias Utilizadas

- **Backend**: Laravel 11, MySQL, JWT para autenticação.
- **Frontend**: React, TypeScript, Axios para chamadas à API, React Router para navegação.

---

## Autor

Feito por Leandro Rafael de Oliveira.

Se tiver algum problema ou sugestão, fique à vontade para abrir uma _issue_ ou fazer um _pull request_.
