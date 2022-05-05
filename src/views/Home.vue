<template>
  <div>
    <Feature />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import Feature from '@/components/HomeFeature.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Feature,
  },
  setup() {
    const randomInt = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1) + min);

    const rInt = randomInt(60, 100);

    const items = [
      '#f00056', '#c93756',
      '#ff0097', '#be002f', '#00a3ff',
      '#9b4400', '#0eb83a', '#1bd1a5', '#30F197',
      '#00e09e', '#424c50', '#2edfa3', '#e406f9',
      '#8d4bbb', '#003371',
      '#177cb0', '#44cef6', '#4b5cc4', '#3b2e7e',
    ];

    const getColor = () => items[Math.floor(Math.random() * items.length)];

    onMounted(() => {
      document.querySelector('.home .header')?.setAttribute('style', `
        background-image: linear-gradient(21deg, ${getColor()} 68%, #ffffff 100%), linear-gradient(163deg, #30F197 86%, #e406f9 40%), linear-gradient(0deg, #e406f9 122%, ${getColor()} 169%), linear-gradient(45deg, ${getColor()} ${rInt}%, #30F197 43%);
      `);
    });

    onUnmounted(() => {
      document.querySelector('.header')?.setAttribute('style', 'background-image: none');
    });
  },
});
</script>

<style scoped lang="stylus">
</style>
