<template>
  <el-menu
    :default-active="$route.matched[1]?$route.matched[1].name:null"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ff90a5">
    <template v-for="(item, index) in menu">
      
      <el-submenu v-if="item.children" :key="index" :index="item.name">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <template v-if="item.children">
          <el-menu-item v-for="(subitem, index) in item.children" :key="index" :index="subitem.name" @click="openlink(index,subitem.name)">{{subitem.name}}</el-menu-item>
        </template>
      </el-submenu>

      <el-menu-item v-else :key="index" :index="item.name" @click="openlink(index,item.name)">
        <i class="el-icon-menu"></i>
        <span>{{item.name}}</span>
      </el-menu-item>

    </template>
    <!-- <el-menu-item :key="123">{{$route.matched[1]?$route.matched[1].name:null}}</el-menu-item> -->
  </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: null,
      };
    },
    name:'Cmenu',
    props:{
      menu:{
        type:Array,
        required:true
      }
    },
    methods: {
      openlink(index,str){
        console.log('openlink',index,str);
        const router = this.$router;
        // router.push({path:str});
        router.push({name:str});
      }
    },
    mounted(){
      console.log(this.$route);
      // this.activeIndex = this.menu.length>0? (this.menu[0].children? this.menu[0].children[0].url :this.menu[0].url):null;
    },
    watch: {
      $route(to, from) {
      console.log('跳转',this.$route);
      // this.activeIndex = this.$route.matched[0]?this.$route.matched[0].name : 'home'
      }
    },
  }
</script>
<style>
.el-menu{
  border: none;
}
</style>

