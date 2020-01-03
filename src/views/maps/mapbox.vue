<template>
  <div class="full-height full-width position-relative">
    <div class="mapdiv full-height full-width position-absolute">
      <MglMap @moveend="getOSMDataCurrentMap" ref='map' :accessToken="accessToken" :mapStyle="mapStyle" @load="onMapLoad">
        <MglNavigationControl position="top-left" />
        <MglGeolocateControl position="top-left" />
        
        <!-- <MglMarker ref='marker' :coordinates="coordinates" color="red" /> -->
        <MglMarker :coordinates="coordinates1">
          <!-- <div slot="marker">mdi-map-marker</div> -->
          <MglPopup ref='pop' anchor="top" :offset="[5,5]" :showed="true">
            <div>Hello world!</div>
          </MglPopup>
        </MglMarker>
      </MglMap>
    </div>

    <div class="position-absolute panel">
      <v-chart class="full-height full-width" :options="directionOptions"></v-chart>
    </div>

    <!-- <div class="func full-height full-width position-absolute">
      <div class="ball"></div>
    </div> -->
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglNavigationControl, MglGeolocateControl, MglMarker, MglPopup, } from "vue-mapbox";
import _cloneDeep from "lodash/cloneDeep";
import { directionOptions } from "../chartsOptions";
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/polar'
import lineclip from "lineclip";
import cheap_ruler from "cheap-ruler";

export default {
  components: {
    MglMap,
    MglNavigationControl, 
    MglGeolocateControl,
    MglPopup,
    MglMarker,
    'v-chart': ECharts
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoieHh0ejA1MjIiLCJhIjoiY2szOXRkMXRtMDVtZzNicWhnaTZ0eGRxOSJ9.aicpzD-bVEauk8tJISZOgw", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/streets-v10", // your map style
      popupCoordinates: [120, 30],
      coordinates: [120, 30],
      coordinates1: [120, 30.1],
      directionOptions:_cloneDeep(directionOptions),
      angleData:[],
      directionData:[],
      sector:72,
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
  methods:{
    async onMapLoad(event) {
      // Here we cathing 'load' map event
      const asyncActions = event.component.actions

      const newParams = await asyncActions.flyTo({
        center: [120, 30],
        zoom: 9,
        speed: 1
      })
      console.log('newParams',newParams)
      // console.log(event)
      // console.log('map',this.$refs.map.map.queryRenderedFeatures)
      console.log('pop',this.$refs.pop)//放在这里才能获取到，地图加载完成后执行
      // this.getOSMDataCurrentMap();
    },

    reduceEachLine(numerical, ruler, line, isTwoWay, sectors) {
      for (var i = 0; i < line.length - 1; i++) {
          var bearing = ruler.bearing(line[i], line[i + 1]);
          var distance = ruler.distance(line[i], line[i + 1]);
          var k0 = Math.round((bearing + 360) * sectors / 360) % sectors;
          var k1 = Math.round((bearing + 180) * sectors / 360) % sectors;
          numerical[k0] += distance;
          numerical[k1] += distance;
      }
    },

    //获取道路数据,计算道路方向，并统计
    getOSMDataCurrentMap(){
      let features = this.$refs.map.map.queryRenderedFeatures();
      features = features.filter((it) => { return it.layer.id.toString().startsWith("road"); });
      // console.log('道路数据：',features);

      var ruler = cheap_ruler.default(this.$refs.map.map.getCenter().lat);
      console.log('ruler',ruler);
      let bounds = this.$refs.map.map.getBounds();
      let bbox = [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()];
      // console.log('bbox',bbox);
      let numerical = new Float64Array(this.sector);
      features.forEach((feature) =>{
        var geom = feature.geometry;
        var lines = geom.type === 'LineString' ? [geom.coordinates] : geom.coordinates;
        var clippedLines = lines.filter((it) => { return it.length > 0; }).flatMap((it) => { return lineclip(it, bbox); });
        clippedLines.forEach((it) => {
              this.reduceEachLine(numerical, ruler, it, feature.properties.oneway == 'F', this.sector);
          });
      });
      // console.log('numerical',numerical);
      this.updateEchartsData(numerical,this.sector);
    },

    //方向统计图坐标
    getAngleData(){
      // this.angleData=[];
      // for(let i=0;i<12;i++){
      //   this.angleData.push(i*30);
      // }
    },

    //更新方向统计图数据
    updateEchartsData(numerical,sectors) {
        let res = [];
        for (let i = 0; i < sectors; i++) {
            res.push([Math.sqrt(numerical[(i + sectors / 4 + sectors) % sectors]), i]);
        }
        this.directionData = res;
        this.directionOptions.series[0].data=this.directionData;
      }
    },
  mounted(){
    // console.log('map',this.$refs.map.map.queryRenderedFeatures)
    // console.log('pop',this.$refs.pop) //放在这里获取不到，因为没加载完成
  },
  updated(){
  }
};
</script>
<style lang="scss">
.mapdiv {
  /deep/ .mapboxgl-canvas {
    position: relative !important;
  }
}
.echarts {
  width: 100%;
  height: 100%;
}
.panel{
  top:10px;
  right: 10px;
  width: 350px;
  height: 350px;
  background: white;
  opacity: 0.8;
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
