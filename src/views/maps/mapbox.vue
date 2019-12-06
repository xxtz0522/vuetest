<template>
  <div class="full-height full-width position-absolute">
    <div class="mapdiv full-height">
      <!-- <MglMap :accessToken="accessToken" :mapStyle="mapStyle" /> -->
    </div>

    <div class="func full-height full-width position-absolute">
      <div class="ball"></div>
    </div>
  </div>
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
      accessToken:
        "pk.eyJ1IjoieHh0ejA1MjIiLCJhIjoiY2szOXRkMXRtMDVtZzNicWhnaTZ0eGRxOSJ9.aicpzD-bVEauk8tJISZOgw", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/streets-v10" // your map style
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }
};
</script>
<style lang="scss">
.mapdiv {
  /deep/ .mapboxgl-canvas {
    position: relative !important;
  }
}

.func {
  .ball {
    position: absolute;
    top: 0;
    left: calc(100% - 100px);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: rgb(223, 98, 136);
    z-index: 10;
  }
}
</style>
