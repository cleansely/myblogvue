<template>
  <div id="posts" class="posts-expand">
    <header class="post-header">
      <h1 class="post-title">
        分类
      </h1>
    </header>
    <div class="tag-cloud">
      <div class="tag-could-title">
        <p>目前共计{{ ' '+tags.count+' ' }}个分类</p>
      </div>
      <div class="tag-cloud-tags">
        <a :style="{color:'rgba(15,15,15,'+(0.25+tag.count/countMax)+')','font-size': 12+20*(tag.count/countMax)+'px'}" :href="'/category/'+tag.id" v-for="tag in tags.results" :key="tag.id">{{tag.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import {getCategory} from "@/network/category";

export default {
  name: "Category",
  data() {
    return {
      params: {
        format: 'json',
      },
      tags: ''
    }
  },
  computed: {
    countMax() {
      let arrs = this.tags.results.map((value) => {
        console.log(value);
        return value.count;
      });
      return Math.max(...arrs);
    }
  },
  created() {
    getCategory(this.params).then(res => {
      this.tags = res;
      console.log(res);
    })
  }
}
</script>

<style scoped>
.post-title {
  margin: 0;
}

.posts-expand {
  padding-top: 25px;
}

.posts-expand .post-title {
  font-size: 26px;
  text-align: center;
  word-break: break-word;
  font-weight: 400;
}

.tag-cloud {
  text-align: center;
}

.tag-cloud {
  text-align: center;
}
.tag-cloud a {
  display: inline-block;
  margin: 10px;
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
</style>