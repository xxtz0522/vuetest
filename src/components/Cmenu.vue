<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ff90a5">
    <template v-for="(item, index) in menu">
      
      <el-submenu v-if="item.children" :key="index" :index="index+''">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <template v-if="item.children">
          <el-menu-item v-for="(subitem, subindex) in item.children" :key="subindex" :index="subindex+''" @click="openlink(subitem.url)">{{subitem.name}}</el-menu-item>
        </template>
      </el-submenu>

      <el-menu-item v-else :key="index" :index="index+''" @click="openlink(item.url)">
        <i class="el-icon-menu"></i>
        <span>{{item.name}}</span>
      </el-menu-item>

    </template>
  </el-menu>
</template>

<script>
  export default {
    name:'Cmenu',
    props:{
      menu:{
        type:Array,
        required:true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
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
.el-menu{
  border: none;
}
</style>

