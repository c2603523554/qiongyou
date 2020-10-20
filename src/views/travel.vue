/* Q穷游 */

<template>
  <div class="home">
    <carousel/>
    <recommend/>
    <v-recommend/>
    <v-tips-mall/>
    <topic/>
    <exploration/>
    <biu/>
    <baselast/>
    <a href="javascript:scroll(0,0)" :class="iop?'dis':''">顶部</a>
  </div>
</template>
<script>
// @ is an alias to /src
import carousel from '@/components/carousel.vue'
import recommend from '@/components/recommend.vue'
import vRecommend from '@/components/recommendt.vue'
import vTipsMall from '@/components/tips_mall.vue'
import topic from '@/components/topic.vue'
import exploration from '@/components/exploration.vue'
import biu from '@/components/biu.vue'
import baselast from '@/components/baselast.vue'
export default {
  name: 'Home',
  data(){
    return{
      iop:false,
    }
  },
  components: {
    
    biu,
    exploration,
    topic,
    vTipsMall,
    carousel,
    recommend,
    vRecommend,
    baselast,
  }
}
</script>
<style  scoped>
*{
  margin: 0;
}
.dis{
  display: none;
}
.home>a{
  position:fixed;
  text-align: center;
  line-height: 50px;
  width: 50px;
  color: black;
  right: 30px;
  bottom: 100px;
  background-color: #aaaaaa;
}
</style>