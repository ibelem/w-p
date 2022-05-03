<template>
  <div>
    <Hero />
    <Feature />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hero from '@/components/HomeHero.vue';
import Feature from '@/components/HomeFeature.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Hero,
    Feature,
  },
});
</script>

<style scoped lang="stylus"></style>
