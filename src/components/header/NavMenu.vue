<template>
  <nav class="site-nav">
    <ul id="menu" class="menu">
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavMenu"
}
</script>

<style scoped>

.menu {
  margin-top: 20px;
  padding-left: 0;
  text-align: center;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
</style>