<template>
  <div class="home-page">
    <h1>Olá, sou thayllaa</h1>
    <p class="subtitle">Desenvolvedor Fullstack focado em [sua principal habilidade/tecnologia, ex: JavaScript e
      Node.js]</p>
    <img src="/thayllaa_avatar-perfil.png" alt="thayllaa avatar" class="avatar">
    <p>Bem-vindo ao meu portfólio. Aqui você encontrará meus projetos mais recentes e minhas habilidades.</p>
    <router-link to="/projetos" class="btn-primary">Ver Meus Projetos</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style lang="scss" scoped>
.home-page {
  padding: 40px 20px;

  h1 {
    font-size: 2.8em;
    margin-bottom: 10px;
    color: #333;
  }

  .subtitle {
    font-size: 1.5em;
    color: #666;
    margin-bottom: 30px;
  }

  .avatar {
    width: 180px;
    /* Ajuste o tamanho conforme necessário */
    height: 180px;
    border-radius: 50%;
    /* Para deixá-lo redondo */
    object-fit: cover;
    /* Garante que a imagem preencha o espaço sem distorção */
    margin: 30px auto;
    border: 4px solid #42b983;
    /* Borda para destaque */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 1.1em;
    max-width: 800px;
    margin: 20px auto;
    line-height: 1.6;
    color: #444;
  }

  .btn-primary {
    display: inline-block;
    background-color: #42b983;
    color: white;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 20px;
    font-size: 1.1em;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #369b6b;
    }
  }
}
</style>