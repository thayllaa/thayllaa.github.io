<template>
  <div class="projects-page">
    <h1>Meus Projetos</h1>
    <p>
      Aqui você encontrará alguns dos meus trabalhos mais recentes, destacando minhas habilidades
      Fullstack.
    </p>

    <div class="project-card">
      <h2>Books</h2>
      <p class="description">
        Este projeto é um CRUD completo para gerenciamento de livros. Permite aos usuários criar,
        ler, atualizar e deletar informações de livros, com autenticação JWT para proteger as rotas
        de acesso.
      </p>
      <div class="tech-stack">
        <h3>Tecnologias:</h3>
        <p><strong>Frontend:</strong> Vue.js, HTML, CSS, JavaScript</p>
        <p><strong>Backend:</strong> Node.js, Express, PostgreSQL, JWT</p>
      </div>
      <div class="project-links">
        <a href="LINK_DA_DEMO_DO_BOOKS" target="_blank" rel="noopener noreferrer" class="btn-demo">Ver Demo</a>
        <a href="https://github.com/thayllaa/books_frontend" target="_blank" rel="noopener noreferrer"
          class="btn-github">GitHub Frontend</a>
        <a href="https://github.com/thayllaa/books_backend" target="_blank" rel="noopener noreferrer"
          class="btn-github">GitHub Backend</a>
      </div>
    </div>

    <div class="project-card">
      <h2>Jogo da Forca</h2>
      <p class="description">
        Uma implementação clássica do popular jogo da forca, desenvolvido com foco em interatividade
        e responsividade. O objetivo é adivinhar a palavra secreta antes que todas as chances se esgotem.
        O jogo oferece uma experiência dinâmica para desktop e mobile.
      </p>
      <div class="tech-stack">
        <h3>Tecnologias:</h3>
        <p><strong>Frontend:</strong> Vue.js, HTML, CSS, JavaScript</p>
        <p><strong>Hospedagem:</strong> Netlify</p>
      </div>
      <div class="project-links">
        <a href="https://thehangmangameweb.netlify.app" target="_blank" rel="noopener noreferrer" class="btn-demo">Ver
          Demo</a>
        <a href="https://github.com/thayllaa/HangmanGame" target="_blank" rel="noopener noreferrer"
          class="btn-github">GitHub</a>
      </div>
    </div>

    <div class="project-card">
      <h2>ToDo List</h2>
      <p class="description">
        Um simples aplicativo de lista de tarefas (ToDo List) que permite aos usuários: adicionar novas tarefas com título, 
        categorizar as tarefas, adicionando uma dimensão de organização (Personal/Business), editar o título de tarefas existentes, 
        listar as tarefas numeradas, permitir arrastar e soltar as tarefas para reorganizar a ordem, exclusão das tarefas já concluídas.
      </p>
      <div class="tech-stack">
        <h3>Tecnologias:</h3>
        <p><strong>Frontend:</strong> Vite, Vue.js</p>
        <p><strong>Hospedagem:</strong> Netlify</p>
      </div>
      <div class="project-links">
        <a href="https://my-todolist-vue.netlify.app/" target="_blank" rel="noopener noreferrer" class="btn-demo">Ver
          Demo</a>
        <a href="https://github.com/thayllaa/ToDo-List" target="_blank" rel="noopener noreferrer"
          class="btn-github">GitHub</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProjetosView',
}
</script>

<style lang="scss" scoped>
.projects-page {
  padding: 40px 20px;

  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
  }

  p {
    font-size: 1.1em;
    max-width: 800px;
    margin: 0 auto 40px auto;
    line-height: 1.6;
    color: #444;
  }

  .project-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 30px;
    margin-bottom: 30px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    text-align: left;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;

    h2 {
      font-size: 2em;
      color: #333;
      margin-bottom: 15px;
    }

    .description {
      font-size: 1em;
      color: #555;
      margin-bottom: 20px;
    }

    .tech-stack {
      margin-bottom: 20px;

      h3 {
        font-size: 1.2em;
        color: #333;
        margin-bottom: 10px;
      }

      p {
        font-size: 0.95em;
        color: #666;
        margin: 5px 0;
      }
    }

    .project-links {
      margin-top: 25px;

      a {
        display: inline-block;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        margin-right: 15px;
        font-weight: bold;
        transition: background-color 0.3s ease, transform 0.2s ease;

        &:last-child {
          margin-right: 0;
        }
      }

      .btn-demo {
        /*
        pointer-events: none; - REMOVA ESTA LINHA SE VOCÊ TIVER UMA DEMO AO VIVO!
        Ela desabilita o clique no botão.
        */
        background-color: #42b983;
        color: white;

        &:hover {
          background-color: #369b6b;
          transform: translateY(-2px);
        }
      }

      .btn-github {
        background-color: #333;
        color: white;

        &:hover {
          background-color: #555;
          transform: translateY(-2px);
        }
      }
    }
  }
}
</style>