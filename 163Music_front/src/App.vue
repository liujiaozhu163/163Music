<template>
  <div id="app">
    <v-nav></v-nav>
    <router-view/>
  </div>
</template>

<script>

import Nav from '@/components/nav/Nav.vue' // 导入 nav 组件
export default {
  name: 'App',
  components:{
    'v-nav':Nav
  }
}
</script>

<style>

</style>
