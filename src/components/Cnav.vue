<template>
  <el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#2d2d2d"
  text-color="#fff"
  active-text-color="#ff90a5">
  <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title">Favorite</template>
      <el-menu-item index="2-1" @click="openlink('/artworks')">artworks</el-menu-item>
  </el-submenu>
  <el-menu-item index="3" @click="openlink('/maps')">Maps</el-menu-item>
  <el-menu-item index="4" disabled><a href="" target="_blank">More</a></el-menu-item>
  <el-menu-item index="5"><router-link to="/about">About</router-link></el-menu-item>
</el-menu>
</template>

<script>
  export default {
    name: 'Cnav',
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      openlink(str){
        const router = this.$router;
        router.push({path:str});
      }
    }
  }
</script>

<style>

</style>
