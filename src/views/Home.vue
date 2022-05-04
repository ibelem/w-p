<template>
  <div>
    <Feature />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Feature from '@/components/HomeFeature.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Feature,
  },
});
</script>

<style scoped lang="stylus">
</style>
