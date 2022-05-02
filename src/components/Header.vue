<template>
  <header>
    <a class="logo" href="#/">Webnizer</a>
    <Nav />
  </header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
</script>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from './Nav.vue';

// eslint-disable-next-line no-unused-vars
const router = useRouter();

export default defineComponent({
  name: 'HeaderComp',
  components: {
    Nav,
    //   Calendar,
  },
});
</script>

<style scoped lang="stylus">
header {
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-column-gap: 0px
  grid-row-gap: 0px
  justify-items: stretch
  align-items: center

  .logo {
    cursor: pointer;
    display: inline-block;
  }
}
</style>
