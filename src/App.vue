<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
}
</style>
