<template>
  <div id="app">
    <header class="navbar">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/projetos">Projetos</router-link>
        <router-link to="/sobre">Sobre Mim</router-link>
        </nav>
    </header>
    <main class="content">
      <router-view />
    </main>
    <footer class="footer">
      <p>&copy; {{ currentYear }} thayllaa. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss">
/* Estilos globais básicos para o layout */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ocupa a altura total da viewport */
}

.navbar {
  padding: 30px;
  background-color: #f8f8f8; /* Cor de fundo para a barra de navegação */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Sombra suave */

  nav {
    display: flex; /* Para alinhar os links horizontalmente */
    justify-content: center; /* Centraliza os links */
    gap: 20px; /* Espaçamento entre os links */
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none; /* REMOVE O SUBLINHADO */
    padding: 10px 15px; /* Preenchimento para parecer um botão */
    border-radius: 5px; /* Cantos arredondados */
    transition: background-color 0.3s ease, color 0.3s ease; /* Transição suave para hover */
    
    // Efeito de Hover
    &:hover {
      background-color: #42b983; /* Cor de fundo ao passar o mouse */
      color: white; /* Cor do texto ao passar o mouse */
    }

    // Estilo para o link ativo (página atual)
    &.router-link-exact-active {
      background-color: #369b6b; /* Uma cor um pouco mais escura para o ativo */
      color: white; /* Cor do texto para o ativo */
    }
  }
}

.content {
  flex-grow: 1;
  padding: 20px;
}

.footer {
  padding: 20px;
  background-color: #f0f0f0;
  color: #555;
}
</style>