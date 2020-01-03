<template>
  <el-container class="full-height">
    <el-aside width="200px" style="background-color:#545c64;">
      <Cmenu :menu="artmenu" />
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height="25px">Maylusinc@2019</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Cmenu from "@/components/Cmenu.vue";

export default {
  name: "artworks",
  components: {
    Cmenu
  },
  data() {
    return {
      artmenu: [
        { name: "line", url: "/artworks/color", icon: "el-icon-location", children:[
          { name: "subtest", url: "/artworks/line"},
        ] },
        { name: "color", url: "/artworks/color", icon: "el-icon-menu" },
        { name: "test", url: "/about", icon: "el-icon-document" }
      ]
    };
  }
};
</script>

