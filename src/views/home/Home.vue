<template>
  <div>
    <section id="posts" class="posts-expand">
      <home-article></home-article>
      <home-article></home-article>
    </section>
  </div>
</template>

<script>
import HomeArticle from "@/views/home/HomeArticle";
export default {
  name: "Home",
  components: {
    HomeArticle
  }
}
</script>

<style scoped>
.posts-expand {
  padding-top: 40px;
}


</style>