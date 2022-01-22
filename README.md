# Instalar Pacotes

No terminal da pasta Tools, digite o seguinte comando:

```javascript
npm install
```

Com este comando irá instalar todos os pacotes que foi utilizado no desenvolvimento.

# Configuração da API

Alterar o usuario e senha do banco de dados no arquivo app.js
(MongoDB)

```javascript
mongoose.connect('mongodb+srv://USUARIO:SENHA@tool.ibww1.mongodb.net/tool?retryWrites=true&w=majority');
```

# Uso da API

Para executar a api, digite no seguinte comando no terminal da pasta Tools:
```javascript
nodemon bin/server.js
```

Exemplo de retorno:

```javascript
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node bin/server.js`     
Servidor rodando na porta 3000
```

## Endpoints

Cadastrar uma ferramenta

> POST
>
> /tools

Exemplo de requisição:

```json
{
    "title": "Chave 18",
    "link": "https://www.mercadolivre.com.br/chave18",
    "description": "Uma chave do tamanho 18.",
    "tags": [
        "chave",
        "ferramenta"
    ]
}
```

Exemplo de retorno:

```json
{
    "message": "Created!",
    "Tool": {
        "title": "Chave 18",
        "link": "https://www.mercadolivre.com.br/chave18",
        "description": "Uma chave do tamanho 18.",
        "tags": [
            "chave",
            "ferramenta"
        ]
    }
}
```

Listar todas as ferramentas cadastradas

> GET
>
> /tools

Exemplo de retorno:

```json
[
    {
        "_id": "61eaff04fb9e84cc66f9116e",
        "title": "Chave 18",
        "link": "https://www.mercadolivre.com.br/chave18",
        "description": "Uma chave do tamanho 18.",
        "tags": [
            "chave",
            "ferramenta"
        ]
    },
    {
        "_id": "61eb20b2b7f314b46f2e146e",
        "title": "Martelo",
        "link": "https://www.mercadolivre.com.br/martelo",
        "description": "Uma martelo de aço.",
        "tags": [
            "martelo",
            "ferramenta"
        ]
    }
]
```

Listar ferramentas conforme uma tag inserida

> GET
>
> /tools/{chave} <- Exemplo

Exemplo de retorno:

```json
[
    {
        "_id": "61eaff04fb9e84cc66f9116e",
        "title": "Chave 18",
        "link": "https://www.mercadolivre.com.br/chave18",
        "description": "Uma chave do tamanho 18.",
        "tags": [
            "chave",
            "ferramenta"
        ]
    },
    {
        "_id": "61eb20b2b7f314b46f2e146e",
        "title": "Chave 20",
        "link": "https://www.mercadolivre.com.br/chave20",
        "description": "Uma chave do tamanho 20.",
        "tags": [
            "chave",
            "ferramenta"
        ]
    }
]
```

Alterar alguma informação de uma ferramenta cadastrada

> PUT
>
> /tools/{id} <- Id da ferramenta que deseja fazer alguma alteração

Exemplo de requisição:

```json
{
    "title": "Chave 15",
    "link": "https://www.mercadolivre.com.br/chave15",
    "description": "Uma chave do tamanho 15.",
    "tags": [
        "chave",
        "ferramenta"
    ]
}
```

Exemplo de retorno:

```json
{
    "message": "Successfully updated!",
    "Tool": {
        "title": "Chave 15",
        "link": "https://www.mercadolivre.com.br/chave15",
        "description": "Uma chave do tamanho 15.",
        "tags": [
            "chave",
            "ferramenta"
        ]
    }
}
```

Deletar uma ferramenta pelo id

> DELETE
>
> /tools/{id} <- Id da ferramenta que deseja deletar

Exemplo de retorno:

```json
{}
```