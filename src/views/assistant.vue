/* 行程助手 */
<template>
  <div class="about">
    <assisnav/>
    <otherxc/>
    <assispx/>
    <assisbast/>
    <bastmp/>
  </div>
</template>

<script>
import assisnav from '@/components/assisnav.vue'
import otherxc from '@/components/otherxc.vue'
import assispx from '@/components/assispx.vue'
import assisbast from '@/components/assisbast.vue'
import bastmp from '@/components/bastmp.vue'
export default {
  name:'about',
  components:{
    bastmp,
    assisbast,
    assispx,
    otherxc,
    assisnav,
  }
}
</script>