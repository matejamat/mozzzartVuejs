<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
#app {
  @font-face {
    font-family: "mojfont";
    src: url("assets/ProximaNovaRegular.ttf") format("truetype");
  }
  font-family: "mojfont";
  background-color: #41444d;
}
</style>

<script>
// @ is an alias to /src
import Header from "@/components/header/Header.vue";
// import HeaderSection from '@/components/Header/HeaderSection.vue'
import Footer from "@/components/footer/Footer.vue";

export default {
  // name: 'HomeView',
  components: {
    Header,
    Footer,
  },
};
</script>
