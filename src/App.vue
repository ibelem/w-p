<template>
  <Main />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Main from '@/components/Main.vue';

export default defineComponent({
  name: 'App',
  components: {
    Main,
  },
});
</script>

<style lang="stylus">
html {
  scroll-behavior smooth
}
#app {
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  box-sizing border-box
  margin: 0;
  padding: 0;
}
</style>
