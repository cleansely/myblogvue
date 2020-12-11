<template>
  <div id="header">
    <div class="header-inner">
      <div class="site-brand-wrapper">
        <div class="site-meta">
          <div class="custom-logo-site-title">
            <a href="/" class="brand" rel="start" style="opacity: 1;">
              <span class="site-title" style="opacity: 1;top: 0;">{{siteTitle}}</span>
            </a>
            <p class="site-subtitle" style="opacity: 1;top: 0">{{ siteSubtitle }}</p>
          </div>
          <nav-menu>
            <menu-item path="/home">
              <i slot="itemIcon" class="menu-item-icon fa fa-fw fa-home"></i>
              <span slot="itemName">首页</span>
            </menu-item>
            <menu-item path="/home">
              <i slot="itemIcon" class="menu-item-icon fa fa-fw fa-category"></i>
              <span slot="itemName">分类</span>
            </menu-item>
            <menu-item path="/home">
              <i slot="itemIcon" class="menu-item-icon fa fa-fw fa-tags"></i>
              <span slot="itemName">标签</span>
            </menu-item>
            <menu-item path="/home">
              <i slot="itemIcon" class="menu-item-icon fa fa-fw fa-archive"></i>
              <span slot="itemName">归档</span>
            </menu-item>
            <menu-item>
              <i slot="itemIcon" class="menu-item-icon fa fa-fw fa-search"></i>
              <span slot="itemName">搜索</span>
            </menu-item>
          </nav-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from "@/components/header/NavMenu";
import MenuItem from "@/components/header/MenuItem";
export default {
  name: "MainHeader",
  components: {
    NavMenu,
    MenuItem
  },
  props: {
    siteTitle: {
      type: String,
      default: 'NEXT'
    },
    siteSubtitle: {
      type: String,
      default: 'next'
    }
  }
}
</script>

<style scoped>
#header {
  height: 334px;
  /*background-color: red;*/
}

.header-inner {
  position: relative;
  margin: 0 auto;
  width: 700px;
  padding: 100px 0 70px;
  /*background-color: green;*/
}

.site-meta {
  margin: 0;
  text-align: center;
}

.brand {
  display: inline-block;
  padding: 0 40px;
  color: #fff;
  background-color: #222;
  border-bottom: none;
}
.site-title {
  display: inline-block;
  vertical-align: top;
  line-height: 36px;
  font-size: 20px;
  font-weight: normal;
  font-family: "Lato","PingFang SC","Microsoft YaHei",sans-serif;
}
.site-subtitle {
  margin-top: 10px;
  font-size: 13px;
  color: #999;
}

p {
  margin: 0 0 25px;
}
</style>