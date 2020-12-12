<template>
  <div>
    <section id="posts" class="posts-expand">
      <home-article :posts="posts"></home-article>
    </section>
  </div>
</template>

<script>
import HomeArticle from "@/views/home/HomeArticle";
import {getPostList} from "@/network/home";

export default {
  name: "Home",
  components: {
    HomeArticle
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    getPostList().then(res => {
      console.log(res);
      this.posts = res
    })
  }
}
</script>

<style scoped>
.posts-expand {
  padding-top: 40px;
}


</style>