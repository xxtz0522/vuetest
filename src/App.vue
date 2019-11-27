<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="full-width full-height position-absolute">
      <el-container class="full-height">
        <el-header class="p-0">
          <Cnav />
        </el-header>
        <router-view></router-view>
      </el-container>
    </div>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import Cnav from '@/components/Cnav.vue'

export default {
  components: {
    Cnav,
  },
}
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
