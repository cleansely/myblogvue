<template>
  <article style="opacity: 1;display: block;transform: translateY(0px);">
    <div v-for="post in posts" :key="post">
      <header class="post-header">
        <h1 class="post-title">
          <a href="/" class="post-title-link">{{post.title}}</a>
        </h1>
        <div class="post-meta">
        <span class="post-time">
          <span class="post-meta-item-icon">
            <i class="fa fa-calendar-o"></i>
          </span>
          <time :datetime="post.created_time">{{ post.created_time }}</time>
        </span>
          <span class="post-category">
          <span class="post-meta-divider">|</span>
          <span class="post-meta-item-icon">
            <i class="fa fa fa-category-o"></i>
          </span>
          <a href="/">{{ post.category }}</a>
        </span>
          <span class="post-tag">
          <span class="post-meta-divider">|</span>
          <span class="post-meta-item-icon">
            <i class="fa fa fa-tag-o"></i>
          </span>
          <a href="/">{{ post.tags }}</a>
        </span>
        </div>
      </header>
      <div class="post-body">
        <p>{{ post.excerpt }}</p>
      </div>
      <footer class="post-footer">
        <div class="post-eof"></div>
      </footer>
    </div>
  </article>
</template>

<script>
export default {
  name: "HomeArticle",
  props: {
    posts: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.posts-expand .post-title {
  font-size: 26px;
  text-align: center;
  word-break: break-word;
  font-weight: 400;
}
.posts-expand .post-title-link {
  display: inline-block;
  position: relative;
  color: #555;
  border-bottom: none;
  line-height: 1.2;
  vertical-align: top;
}
.posts-expand .post-meta {
  margin: 3px 0 15px 0;
  color: #999;
  font-family: "Lato","PingFang SC","Microsoft YaHei",sans-serif;
  font-size: 12px;
  text-align: center;
}
.post-meta-item-icon {
  display: inline-block;
  margin-right: 3px;
}
.fa {
  font-family: FontAwesome !important;
}
.fa-calendar-o:before {
  content: "\f133";
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  font-weight: bold;
  line-height: 1.5;
  font-family: "Lato","PingFang SC","Microsoft YaHei",sans-serif;
}
.post-meta-divider {
  margin: 0 .5em;
}
.fa-category-o:before {
  content: "\f02d";
}
.fa-tag-o:before {
  content: "\f02c";
}
.post-body {
  font-family: "Lato","PingFang SC","Microsoft YaHei",sans-serif;
}
.posts-expand .post-eof {
  display: block;
  margin: 35px auto 60px;
  width: 8%;
  height: 1px;
  background: #ccc;
  text-align: center;
}
</style>