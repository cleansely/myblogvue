<template>
 <footer id="footer" class="footer">
   <div class="footer-inner">
     <div class="copyright">
       @2020-{{ year }}
       <span class="with-love">
        <i class="fa fa-heart"></i>
      </span>
       <span class="author">{{ author }}</span>
     </div>
   </div>
 </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    year: {
      type: Number,
      default: 2020
    },
    author: {
      type: String,
      default: 'ly'
    }
  }
}
</script>

<style scoped>
.footer {
  font-size: 14px;
  color: #999;
}
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 50px;
}
.footer-inner {
  text-align: center;
}

.footer-inner {
  box-sizing: border-box;
  margin: 20px auto;
  width: 700px;
}

.with-love {
  display: inline-block;
  margin: 0 5px;
}

.fa {
  font-family: FontAwesome !important;
}

.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fa-heart:before {
  content: "\f004";
}
</style>