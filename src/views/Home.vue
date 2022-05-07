<template>
  <div>
    <div id ="degree"></div>
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

    const rInt = randomInt(50, 100);

    const items = [
      '#f00056', '#c93756', '#f20c00', '#c93756', '#ff0097', '#be002f', '#00a3ff', '#9d2933',
      '#9b4400', '#0eb83a', '#1bd1a5', '#30F197', '#00e09e', '#424c50', '#2edfa3', '#e406f9',
      '#8d4bbb', '#003371', '#177cb0', 'rgba(12, 211, 255, 1.0)', '#4b5cc4', '#3b2e7e', '#ffffff'
    ];

    const degrees = [
      15, 30, 45, 60, 75, 105, 120, 135, 150, 165,
      195, 210, 225, 240, 255, 285, 300, 315, 330, 345,
    ];

    const getColor = () => items[Math.floor(Math.random() * items.length)];
    const getDegree = () => degrees[Math.floor(Math.random() * degrees.length)];
    const getDegree2 = () => degrees[Math.floor(Math.random() * degrees.length)];
    const getDegree3 = () => degrees[Math.floor(Math.random() * degrees.length)];
    const getDegree4 = () => degrees[Math.floor(Math.random() * degrees.length)];

    onMounted(() => {
      document.querySelector('.home .header')?.setAttribute('style', `
        background-image: linear-gradient(${getDegree()}deg, ${getColor()} 108%, #ffffff 100%), linear-gradient(${getDegree2()}deg, #30F197 86%, #e406f9 10%), linear-gradient(${getDegree3()}deg, #e406f9 100%, ${getColor()} 100%), linear-gradient(${getDegree4()}deg, ${getColor()} ${rInt}%, #30F197 43%);
      `);
    });

    onUnmounted(() => {
      document.querySelector('.header')?.setAttribute('style', 'background-image: none');
    });
  },
});
</script>

<style scoped lang="stylus"></style>
