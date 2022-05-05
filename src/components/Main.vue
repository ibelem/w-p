<template>
  <main :class="{ 'home': ishome }">
    <div class="header">
      <Header />
    </div>
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </main>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, reactive, toRefs, watch,
} from 'vue';
import { useRouter } from 'vue-router';
import Header from './Header.vue';
import Footer from './Footer.vue';

export default defineComponent({
  name: 'MainComp',
  components: {
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();
    const reactiveData = reactive({
      ishome: false,
    });

    const getCurrentPath = (currentPath: string) => {
      if (currentPath === '/') {
        reactiveData.ishome = true;
      } else {
        reactiveData.ishome = false;
      }
    };

    watch(
      () => router.currentRoute.value,
      (_n) => {
        getCurrentPath(_n.path);
      },
    );

    onMounted(() => {
      router.isReady().then(() => {
        getCurrentPath(router.currentRoute.value.path);
      });
    });

    return {
      ...toRefs(reactiveData),
    };
  },

});
</script>

<style scoped lang="stylus">
  @import '../style/basic.styl';
  .header, .home .content {
    margin: 0 auto;
    text-align: center;
  }
</style>
