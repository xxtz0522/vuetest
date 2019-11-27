<template>
  <el-container class="full-height">
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
  </el-container>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken: 'pk.eyJ1IjoieHh0ejA1MjIiLCJhIjoiY2szOXRkMXRtMDVtZzNicWhnaTZ0eGRxOSJ9.aicpzD-bVEauk8tJISZOgw', // your access token. Needed if you using Mapbox maps
      mapStyle: MAP_STYLE // your map style
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }
};
</script>