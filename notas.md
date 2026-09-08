## Rotas

Imagine que você tenha uma API responsável pelos usuários de um sistema.

### Rotas de usuário

Você poderia ter:

```bash
GET    /usuarios
GET    /usuarios/10
POST   /usuarios
PUT    /usuarios/10
DELETE /usuarios/10
```

Pense nas rotas como portas da sua aplicação.

**Por exemplo**:

```bash
GET /usuarios
```

significa: "Quero consultar os usuários."

**Enquanto**:

```bash
GET /usuarios/10
```

significa: "Quero consultar especificamente o usuário de ID 10."

### E o /10?

Aqui entra uma ideia muito importante: parâmetros de rota.

```bash
app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id

    res.send(`Usuário: ${id}`)
})
```

O :id é uma variável.

Se alguém acessar: /usuarios/10 teremos:

```bash
req.params.id
```

com o valor: 10

Se acessar:

```bash
/usuarios/25
```

teremos: 25

Ou seja:

```bash
/usuarios/:id
            ↑
        variável
```
