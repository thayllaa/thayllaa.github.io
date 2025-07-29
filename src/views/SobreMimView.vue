<template>
  <div class="about-page">
    <h1>Sobre Mim</h1>
    <p>
      Sou um desenvolvedor Fullstack apaixonado por criar soluções inovadoras e eficientes. Com
      experiência em [liste algumas tecnologias ou áreas, ex: desenvolvimento web, APIs, bancos de
      dados], busco constantemente aprender e aplicar as melhores práticas do mercado.
    </p>
    <p>
      Minha jornada na programação começou com [conte uma breve história, ex: a curiosidade em como
      os sites funcionavam], e desde então venho me dedicando a transformar ideias em realidade
      através do código.
    </p>
    <p>
      Além de codificar, gosto de [liste hobbies ou interesses não relacionados ao trabalho, ex: ler
      livros de ficção científica, praticar esportes, jogar].
    </p>

    <h2>Minhas Habilidades</h2>
    <div class="skills-grid">
      <div class="skill-category">
        <h3>Frontend</h3>
        <ul>
          <li>Vue.js</li>
          <li>React (se souber)</li>
          <li>HTML5, CSS3, Sass/SCSS</li>
          <li>JavaScript (ES6+)</li>
          <li>Consumo de APIs RESTful</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>Backend</h3>
        <ul>
          <li>Node.js (Express.js)</li>
          <li>APIs RESTful</li>
          <li>Bancos de Dados SQL (PostgreSQL, MySQL)</li>
          <li>Bancos de Dados NoSQL (MongoDB)</li>
          <li>Autenticação (JWT)</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>Ferramentas e Outros</h3>
        <ul>
          <li>Git & GitHub</li>
          <li>Docker (se souber)</li>
          <li>Cloud (AWS/GCP/Azure - se souber)</li>
          <li>Metodologias Ágeis</li>
          <li>Linux</li>
        </ul>
      </div>
    </div>

    <p class="call-to-action">
      Interessado em trabalhar comigo?
      <router-link to="/contato" class="btn-contact">Entre em Contato</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SobreMimView',
}
</script>

<style lang="scss" scoped>
.about-page {
  padding: 40px 20px;
  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
  }
  p {
    font-size: 1.1em;
    max-width: 800px;
    margin: 0 auto 20px auto;
    line-height: 1.6;
    color: #444;
  }

  h2 {
    font-size: 2em;
    margin-top: 40px;
    margin-bottom: 25px;
    color: #333;
  }

  .skills-grid {
    display: flex;
    flex-wrap: wrap; /* Permite quebrar linha em telas menores */
    justify-content: center;
    gap: 25px;
    max-width: 1000px;
    margin: 0 auto 40px auto;

    .skill-category {
      background-color: #f9f9f9;
      border: 1px solid #eee;
      border-radius: 8px;
      padding: 25px;
      flex: 1; /* Ocupa espaço igual */
      min-width: 280px; /* Largura mínima para cada coluna */
      max-width: 32%; /* Ajusta para 3 colunas em tela grande */
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

      h3 {
        font-size: 1.5em;
        color: #42b983;
        margin-bottom: 15px;
        border-bottom: 2px solid #eee;
        padding-bottom: 10px;
      }
      ul {
        list-style: none; /* Remove bolinhas */
        padding: 0;
        li {
          font-size: 1em;
          color: #555;
          margin-bottom: 8px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .call-to-action {
    font-size: 1.2em;
    margin-top: 50px;
    .btn-contact {
      display: inline-block;
      background-color: #007bff; /* Cor azul para contato */
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      text-decoration: none;
      margin-left: 10px;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: #0056b3;
      }
    }
  }
}

@media (max-width: 768px) {
  .skills-grid {
    flex-direction: column; /* Colunas empilhadas em telas pequenas */
    .skill-category {
      max-width: 90%; /* Ocupa mais largura em telas pequenas */
    }
  }
}
</style>
