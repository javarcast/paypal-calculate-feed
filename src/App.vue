<template>
  <div class="app">
    <AppNav />
    <AppMain />
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue'
import AppMain from './components/AppMain.vue'

export default {
  name: 'App',
  components: {
    AppNav,
    AppMain
  }
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }
</style>
