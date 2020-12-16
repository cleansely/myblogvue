<template>
  <div id="app" class="container">
    <div class="headband"></div>
    <header>
      <main-header :site-title="siteTitle" :site-subtitle="siteSubtitle"></main-header>
    </header>
    <main>
      <main-content>
        <router-view></router-view>
      </main-content>
    </main>
    <footer>
      <main-footer :year="year" :author="author"></main-footer>
    </footer>
  </div>
</template>

<script>
import MainHeader from "@/components/header/MainHeader";
import Main from "@/components/main/Main";
import Footer from "@/components/footer/Footer";
export default {
  name: 'App',
  components: {
    MainHeader,
    MainContent: Main,
    MainFooter: Footer
  },
  data() {
    return {
      siteTitle: 'Ly\'s Blog',
      siteSubtitle: "emmm, 健身环两个月玩了13次",
      year: 2020,
      author: 'ly'
    }
  }
}
</script>

<style>
@import url("./assets/css/base.css");
.container {
  position: relative;
  min-height: 100%;
}
.headband {
  height: 3px;
  background: #222;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  padding-bottom: 40px;
}
</style>
