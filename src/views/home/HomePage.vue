<template>
  <nav class="pagination">
    <a href="/" class="extend prev">
      <i class="fa fa-angle-left"></i>
    </a>
    <a :href="'/home/page/'+sub(page)" class="page-number" v-if="page>1">{{ page-1 }}</a>
    <a :href="'/home/page/'+page" class="page-number current">{{ page }}</a>
    <a :href="'/home/page/'+add(page)" class="page-number" v-if="page<totalPage()">{{ page+1 }}</a>
    <a :href="'/home/page/'+totalPage()" class="extend prev">
      <i class="fa fa-angle-right"></i>
    </a>
  </nav>
</template>

<script>
export default {
name: "HomePage",
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  computed: {
  page() {
    if (this.$route.params.id) {
      return Number(this.$route.params.id)
    }
    else return 1
  }
  },
  methods: {
  add: function (d) {
    return Number(d)+ 1
  },
    sub: function (d) {
      return d-1
    },
    totalPage: function () {
      return Math.ceil(this.count/10)
    }
}
}
</script>

<style scoped>
.pagination {
  margin: 120px 0 40px;
  text-align: center;
  border-top: 1px solid #eee;
}

.pagination .prev {
  margin-left: 0;
}
.pagination .prev, .pagination .next, .pagination .page-number {
  border-bottom: 0;
  border-top: 1px solid #eee;
  transition-property: border-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}
.page-number-basic, .pagination .prev, .pagination .next, .pagination .page-number, .pagination .space {
  display: inline-block;
  position: relative;
  top: -1px;
  margin: 0 10px;
  padding: 0 10px;
  line-height: 30px;
}
a {
  color: #555;
  text-decoration: none;
  border-bottom: 1px solid #999;
  word-wrap: break-word;
}
.fa-angle-left:before {
  content: "\f104";
}
.fa-angle-right:before {
  content: "\f105";
}
.pagination .page-number.current {
  color: #fff;
  background: #ccc;
  border-top-color: #ccc;
}
</style>