<template>
  <main>
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './Header.vue';
import Footer from './Footer.vue';

export default defineComponent({
  name: 'MainComp',
  components: {
    Header,
    Footer,
  },
});
</script>

<style scoped lang="stylus">
@import '../style/basic.styl';
</style>
