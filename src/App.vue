<template>
  <div id="app">
    <header class="navbar">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/projetos">Projetos</router-link> |
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
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983; /* Cor do link ativo */
    }
  }
}

.content {
  flex-grow: 1; /* Faz o conteúdo ocupar o espaço restante */
  padding: 20px;
}

.footer {
  padding: 20px;
  background-color: #f0f0f0;
  color: #555;
}
</style>
