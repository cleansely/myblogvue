<template>
  <div>
    <section id="posts" class="posts-expand">
      <home-article :posts="posts"></home-article>
    </section>
    <home-page :count="count"></home-page>
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
      posts: [],
      count: 0,
      params: {
        format: 'json',
        page: this.$route.params.id
      }
    }
  },
  created() {
    getPostList(this.params).then(res => {
      console.log(this.params);
      this.posts = res.results;
      this.count = res.count;
    })
  }
}
</script>

<style scoped>
.posts-expand {
  padding-top: 40px;
}


</style>