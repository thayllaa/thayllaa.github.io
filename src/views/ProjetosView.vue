<template>
  <div class="projects-page">
    <h1>Meus Projetos</h1>
    <p>
      Aqui você encontrará alguns dos meus trabalhos mais recentes, destacando minhas habilidades
      Fullstack.
    </p>

    <div class="project-card">
      <h2>Nome do Projeto 1</h2>
      <p class="description">
        Uma breve descrição do projeto, o problema que ele resolveu e o que você aprendeu.
      </p>
      <div class="tech-stack">
        <h3>Tecnologias:</h3>
        <p><strong>Frontend:</strong> Vue.js, Vue Router, Axios, Sass</p>
        <p><strong>Backend:</strong> Node.js, Express, MongoDB, Mongoose, JWT</p>
      </div>
      <div class="project-links">
        <a href="LINK_PARA_DEMO_AO_VIVO" target="_blank" rel="noopener noreferrer" class="btn-demo"
          >Ver Demo</a
        >
        <a
          href="LINK_PARA_REPOSITORIO_FRONTEND"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-github"
          >GitHub Frontend</a
        >
        <a
          href="LINK_PARA_REPOSITORIO_BACKEND"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-github"
          >GitHub Backend</a
        >
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
    text-align: left; /* Alinhar texto à esquerda dentro do card */
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
