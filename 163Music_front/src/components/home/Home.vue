<template>
  <div>
    Home
    <v-banner></v-banner>
    <v-personalized></v-personalized>
  </div>
</template>

<script>

  import Banner from '@/components/banner/Banner.vue'
  import Personalized from '@/components/personalized/Personalized.vue'
  export default{
    name:'home',
    components:{
      'v-banner':Banner,
      'v-personalized':Personalized
    }
  }
</script>

<style>
</style>
