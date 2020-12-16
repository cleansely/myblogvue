<template>
  <main id="main" class="main">
    <div class="main-inner">
      <div class="content-wrap">
        <div id="content" class="content">
          <div id="posts" class="posts-expand">
            <article class="post post-type-">
              <header class="post-header">
                <h1 class="post-title">
                  {{ post.title }}
                </h1>
                <div class="post-meta">
                  <span class="post-time">
                  <span class="post-meta-item-icon">
                    <i class="fa fa-calendar-o"></i>
                  </span>
                  <time :datetime="post.modified_time">{{ rendeTime(post.modified_time) }}</time>
                </span>
                  <span class="post-category">
                  <span class="post-meta-divider">|</span>
                  <span class="post-meta-item-icon">
                    <i class="fa fa fa-category-o"></i>
                  </span>
                  <a href="/">{{ post.category.name }}</a>
                </span>
                  <span class="post-tag">
                  <span class="post-meta-divider">|</span>
                  <span class="post-meta-item-icon">
                    <i class="fa fa fa-tag-o"></i>
                  </span>
                  <span v-for="tag in post.tags" :key="tag.id">
                    <a href="/" style="margin-right: 5px !important;">{{ tag.name }}</a>
                  </span>
                </span>
                </div>
              </header>
              <div class="post-body">
                <div class="markdown-body">
                  <VueMarkdown :source="post.body" v-highlight></VueMarkdown>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import VueMarkdown from "vue-markdown/src/VueMarkdown";
import {getPostDetail} from "@/network/article";
export default {
  name: "Article",
  data() {
    return {
      post: {
        category: {
          id: '',
          name: ''
        },
        tags: []
      }
    }
  },
  components: {
    VueMarkdown
  },
  methods: {
    rendeTime(date) {
      var dateee = new Date(date).toJSON();
      return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    }
  },
  created() {
    getPostDetail(this.$route.params).then(res => {
      console.log(res);
      this.post = res
    })
  }
}
</script>

<style scoped>
.main {
  padding-bottom: 150px;
}

.main-inner {
  margin: 0 auto;
  width: 700px;
}

.posts-expand {
  padding-top: 40px;
}

.posts-expand .post-title {
  font-size: 26px;
  text-align: center;
  word-break: break-word;
  font-weight: 400;
  margin-bottom: 16px;
}

.posts-expand .post-meta {
  margin: 3px 0 15px 0;
  color: #999;
  font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
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
  font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
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
</style>