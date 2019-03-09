<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header';

  export default {
    name: 'app',
    components: {
      Header
    }
  }

</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

html {
  font-size: 62.5%;
}

</style>
