<template>
  <main id="main">
    <div class="main-inner">
      <div class="content-wrap">
        <div id="content">
          <slot></slot>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>

#main {
  margin-bottom: 150px;
}
.main-inner {
  margin: 0 auto;
  width: 700px;
}
</style>