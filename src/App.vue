<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
      }
      next();
    });
    this.$router.afterEach((to, from) => {      
    });
  },
  data() {
    return {
      navbar: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Roboto;
}
</style>
