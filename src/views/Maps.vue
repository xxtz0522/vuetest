<template>
  <el-container class="full-height">
    <el-aside width="200px" style="background-color:#545c64;">
      <Cmenu :menu="artmenu" />
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height="20px">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Cmenu from "@/components/Cmenu.vue";

export default {
  name: "maps",
  components: {
    Cmenu
  },
  data() {
    return {
      artmenu: [
        { name: "leaflet", url: "/maps/leaflet", icon: "el-icon-menu" },
        { name: "mapboxs", url: "/maps/mapboxs", icon: "el-icon-document" }
      ]
    };
  }
};
</script>