<template>
  <li class="menu-item menu-item-home menu-item-active">
    <a :href="path">
      <slot name="itemIcon">
<!--        <i class="menu-item-icon fa fa-fw fa-home"></i>-->
      </slot>
      <br>
      <slot name="itemName">首页</slot>
    </a>
  </li>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    path: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped>

.menu-item {
  display: inline-block;
  margin: 0 10px;
  list-style: none;
}
.menu .menu-item a {
  display: block;
  font-size: 13px;
  line-height: inherit;
  border-bottom: 1px solid transparent;
  transition-property: border-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fa-fw {
  width: 1.28571429em;
  text-align: center;
}
.fa-home::before {
  content: '\f015';
}

.fa-archive::before {
  content: '\f187';
}
.fa-tags::before {
  content: "\f02c";
}
.fa-search::before {
  content: "\f002";
}
.fa-category::before {
  content:"\f02d";
}
</style>