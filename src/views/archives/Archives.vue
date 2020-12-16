<template>
  <div id="content" class="content">
    <div id="posts" class="posts-collapse">
      <span class="archive-move-on"></span>
      <span class="archive-page-counter">
        OK!
        目前共计 {{count}} 篇日志.
      </span>
      <article class="post post-type-normal" v-for="post in posts" :key="post.id">
        <header class="post-header">
          <h2 class="post-title">
            <a :href="'/article/'+post.id" class="post-title-link">
              <span>{{ post.title }}</span>
            </a>
          </h2>
          <div class="post-meta">
            <time class="post-time" datetime="" content="">{{ rendeTime(post.created_time) }}</time>
          </div>
        </header>
      </article>
    </div>
  </div>
</template>

<script>
import {getArchivesList} from "@/network/archives";

export default {
  name: "Archives",
  data() {
    return {
      count: 0,
      posts: {
        category: {
          id: '',
          name: ''
        },
        tags: []
      }
    }
  },
  methods: {
    rendeTime(date) {
      var dateee = new Date(date).toJSON();
      return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    }
  },
  created() {
    getArchivesList().then(res => {
      this.posts = res.results;
      this.count = res.count
    })
  }
}
</script>

<style scoped>
.archive-move-on {
  position: absolute;
  top: 11px;
  left: 0;
  margin-left: -6px;
  width: 10px;
  height: 10px;
  opacity: 0.5;
  background: #555;
  border: 1px solid white;
  border-radius: 50%;
}
.archive-page-counter {
  position: relative;
  top: 3px;
  left: 20px;
}
.posts-collapse {
  position: relative;
  z-index: 1010;
  margin-left: 55px;
}

.posts-collapse .collection-title {
  position: relative;
  margin: 60px 0;
}

.posts-collapse .collection-title::before {
  content: " ";
  position: absolute;
  left: 0;
  top: 50%;
  margin-left: -4px;
  margin-top: -4px;
  width: 8px;
  height: 8px;
  background: #bbb;
  border-radius: 50%;
}

.posts-collapse .collection-title h1, .posts-collapse .collection-title h2 {
  margin-left: 20px;
}

title small {
  color: #bbb;
  margin-left: 5px;
}

small {
  font-size: 80%;
}

.posts-collapse .post {
  margin: 30px 0;
}

.posts-collapse .post-header {
  position: relative;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  transition-property: border;
  border-bottom: 1px dashed #ccc;
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
  display: block;
}

.posts-collapse .post-header::before {
  content: " ";
  position: absolute;
  left: 0;
  top: 12px;
  width: 6px;
  height: 6px;
  margin-left: -4px;
  background: #bbb;
  border-radius: 50%;
  border: 1px solid white;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  transition-property: background;
}

.posts-collapse .post-title {
  margin-left: 30px;
  font-size: 16px;
  font-weight: normal;
  line-height: inherit;
}

h2, h3, h4, h5, h6 {
  margin: 20px 0 15px;
}

.posts-collapse .post-title a {
  color: #666;
  border-bottom: none;
}

a {
  color: #555;
  text-decoration: none;
  border-bottom: 1px solid #999;
  word-wrap: break-word;
}

a {
  background-color: transparent;
}

.posts-collapse .post-meta {
  position: absolute;
  font-size: 12px;
  right: 20px;
  top: 5px;
}

.posts-collapse::after {
  content: " ";
  position: absolute;
  top: 20px;
  left: 0;
  margin-left: -2px;
  width: 4px;
  height: 100%;
  background: #f5f5f5;
  z-index: -1;
}
</style>