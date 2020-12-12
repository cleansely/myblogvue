<template>
  <div class="home-page">
    <nav class="pagination">
      <a href="/" class="extend prev">
        <i class="fa fa-angle-left"></i>
      </a>
      <a href="/" class="page-number">1</a>
      <a href="/" class="page-number current">1</a>
      <a href="/" class="page-number">1</a>
      <a href="/" class="extend prev">
        <i class="fa fa-angle-right"></i>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
name: "HomePage"
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