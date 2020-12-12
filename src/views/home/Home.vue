<template>
  <div>
    <section id="posts" class="posts-expand">
      <home-article :posts="posts"></home-article>
    </section>
    <home-page></home-page>
  </div>
</template>

<script>
import HomeArticle from "@/views/home/HomeArticle";
import HomePage from "@/views/home/HomePage";
import {getPostList} from "@/network/home";

export default {
  name: "Home",
  components: {
    HomeArticle,
    HomePage
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    getPostList().then(res => {
      console.log(res);
      this.posts = res.results
    })
  }
}
</script>

<style scoped>
.posts-expand {
  padding-top: 40px;
}


</style>