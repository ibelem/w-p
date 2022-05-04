<template>
  <div id="wrap" :class="{ 'onScroll': !isTopOfPage }">
    <header>
      <a class="logo" href="#/">Webnizer</a>
      <Nav />
    </header>
    <HomeHero />
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
import {
  defineComponent, toRefs, reactive, onBeforeMount
} from 'vue';
import Nav from './Nav.vue';
import HomeHero from './HomeHero.vue';

export default defineComponent({
  name: 'HeaderComp',
  components: {
    Nav,
    HomeHero,
  },
  setup() {
    const reactiveData = reactive({
      isTopOfPage: true,
    });

    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        if (reactiveData.isTopOfPage) reactiveData.isTopOfPage = false;
      } else if (!reactiveData.isTopOfPage) reactiveData.isTopOfPage = true;
    };

    onBeforeMount(() => {
      window.addEventListener('scroll', handleScroll);
    });

    return {
      ...toRefs(reactiveData),
    };
  },

});
</script>

<style scoped lang="stylus">
header {
  height: 60px;
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-column-gap: 0px
  grid-row-gap: 0px
  justify-items: stretch
  align-items: center

  .logo {
    cursor: pointer;
    display: inline-block;
    justify-self: flex-start;
  }
}
</style>
