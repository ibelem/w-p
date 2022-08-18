<template>
  <div>
    <div id="mask"></div>
    <video playsinline autoplay muted loop poster="/src/assets/video/bg.jpg" id="bgvideo">
      <source src="/src/assets/video/bg.mp4" type="video/mp4">
    </video>
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
    // const randomInt = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1) + min);

    // const rInt = randomInt(50, 100);

    // const items = [
    //   '#f00056', '#c93756', '#ff0097', '#00a3ff',
    //   '#0eb83a', '#03ebc3', '#424c50', '#ff3b59',
    //   '#8d4bbb', '#003371', '#177cb0', 'rgba(35, 100, 210, 1)', '#4b5cc4', '#3b2e7e', '#ffffff'
    // ];

    // const degrees = [
    //   15, 30, 45, 60, 75, 105, 120, 135, 150, 165,
    //   195, 210, 225, 240, 255, 285, 300, 315, 330, 345,
    // ];

    // const getColor = () => items[Math.floor(Math.random() * items.length)];
    // const getDegree = () => degrees[Math.floor(Math.random() * degrees.length)];
    // const getDegree2 = () => degrees[Math.floor(Math.random() * degrees.length)];
    // const getDegree3 = () => degrees[Math.floor(Math.random() * degrees.length)];
    // const getDegree4 = () => degrees[Math.floor(Math.random() * degrees.length)];

    // const bgcolor = () => {
    //   if (window.screen.availWidth <= 420) {
    //     document.querySelector('.header')?.setAttribute('style',
    //       `background-image: linear-gradient(${getDegree()}deg, ${getColor()} 108%, #ffffff 100%), 
    //       linear-gradient(${getDegree2()}deg, rgba(35, 100, 210, 1) 86%, #ff3b59 10%), 
    //       linear-gradient(${getDegree3()}deg, #ff3b59 100%, ${getColor()} 100%), 
    //       linear-gradient(${getDegree4()}deg, ${getColor()} ${rInt}%, rgba(35, 100, 210, 1) 43%)
    //       `,
    //     );
    //   } else {
    //     document.querySelector('.header')?.setAttribute('style', 'background-image: none');
    //   }
    // };

    // onMounted(() => {
    //   bgcolor();
    //   window.addEventListener('orientationchange', bgcolor, false);
    // });

    // onUnmounted(() => {
    //   document.querySelector('.header')?.setAttribute('style', 'background-image: none');
    // });
  },
});
</script>

<style scoped lang="stylus">
#bgvideo {
  object-fit: cover;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
}
#mask {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
