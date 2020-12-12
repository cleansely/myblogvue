<template>
  <div id="app">
    <div class="headband"></div>
    <main-header site-title="siteTitle" site-subtitle="siteSubtitle"></main-header>
    <main-content>
      <router-view></router-view>
    </main-content>
  </div>
</template>

<script>
import MainHeader from "@/components/header/MainHeader";
import Main from "@/components/main/Main";
export default {
  name: 'App',
  components: {
    MainHeader,
    MainContent: Main
  },
  data() {
    return {
      siteTitle: 'Next step',
      siteSubtitle: "Ly's Blog"
    }
  }
}
</script>

<style>
@import url("./assets/css/base.css");
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
</style>
