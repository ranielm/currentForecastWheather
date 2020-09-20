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
    this._getLocale();
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        this.$Progress.parseMeta(meta);
      }
      this.$Progress.start();
      next();
    });
    this.$router.afterEach((to, from) => {
      this.$Progress.finish();
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
