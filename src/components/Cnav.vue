<template>
  <el-menu
  :default-active="$route.matched[0]?$route.matched[0].name:'home'"
  class="el-menu-demo"
  mode="horizontal"
  background-color="#2d2d2d"
  text-color="#fff"
  active-text-color="#ff90a5">
    <el-menu-item index="home"><router-link to="/">Home</router-link></el-menu-item>
    <el-submenu index="Favorite">
      <template slot="title">Favorite</template>
        <el-menu-item index="artworks"><router-link to="/artworks">artworks</router-link></el-menu-item>
    </el-submenu>
    <el-menu-item index="maps"><router-link to="/maps">Maps</router-link></el-menu-item>
    <el-menu-item index="a"><a href="" target="_blank">More</a></el-menu-item>
    <el-menu-item index="about"><router-link to="/about">About</router-link></el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'Cnav',
    data() {
      return {
        activeIndex: null,
      };
    },
    methods: {
      openlink(str){
        // const router = this.$router;
        // router.push({path:str});
        // console.log('route',this.$route);
      }
    },
    mounted(){
      //这里获取不到完整路径(可能因为没加载完)，需要在template里动态识别this.$route.matched，或者在watch里监听$route来识别this.$route.matched
      // console.log('route:::',this.$route.matched[0].name);
    },
  }
</script>

<style>

</style>
