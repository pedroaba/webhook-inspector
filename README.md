# 🚀 Node-React Monorepo

Bem-vindo ao monorepo **Node-React**!
Este projeto reúne uma poderosa API backend em Node.js (Fastify) e um frontend moderno em React.

---

## 🛠️ Tecnologias Utilizadas

**Backend (API):**

- Node.js
- Fastify
- Drizzle ORM
- PostgreSQL
- TypeScript
- Zod

**Frontend (Web):**

- React
- Vite
- TypeScript

**Gerenciamento de pacotes:** pnpm

---

## 📦 Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd node-react

# Instale as dependências
pnpm install
```

---

## ▶️ Uso

### 🧩 Backend (API)

```bash
# Iniciar em modo desenvolvimento
pnpm --filter api dev

# Executar migrações do banco de dados
pnpm --filter api db:migrate

# Abrir o Drizzle Studio
pnpm --filter api db:studio
```

### 🎨 Frontend (Web)

```bash
# Iniciar em modo desenvolvimento
pnpm --filter web dev

# Gerar build de produção
pnpm --filter web build

# Visualizar build
pnpm --filter web preview
```

---

## 📁 Estrutura do Projeto

```text
node-react/
  ├── api/    # Backend Fastify + Drizzle ORM
  └── web/    # Frontend React + Vite
```

---

## ⚡ Observações Importantes

- 💾 Certifique-se de ter o PostgreSQL rodando para utilizar a API.
- 🟢 Recomenda-se o uso do Node.js 18+ e pnpm 8+.
- ✨ Sinta-se livre para contribuir e sugerir melhorias!

---
