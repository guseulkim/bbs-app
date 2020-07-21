<template>
  <div id="app">
    <Header />
    <Visual />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Visual from "@/components/Visual";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Visual,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
