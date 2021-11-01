<template>
<nav class="blue">
  <div id="nav-wrapper">
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><router-link to="/">Home</router-link></li>
    </ul>
  </div>
  <router-view/>
</nav>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
