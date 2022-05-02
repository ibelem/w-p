<template>
  <nav>
    <ul>
      <li
        v-for="(nav, index) in navList"
        :key="index"
        :class="{ active: nav.isActive }"
        @click="navClick(nav)"
      >
        {{ nav.name }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRefs, onMounted, watch,
} from 'vue';
import { useRouter } from 'vue-router';
import { NavItem } from '../common/types';

export default defineComponent({
  name: 'NavComp',

  setup() {
    const router = useRouter();

    const reactiveData = reactive({
      navList: [
        {
          name: 'Home',
          isActive: false,
          path: '/',
        },
        {
          name: 'Vuex',
          isActive: false,
          path: '/vuex',
        },
        {
          name: 'Axios',
          isActive: false,
          path: '/axios',
        },
        {
          name: 'Test',
          isActive: false,
          path: '/test',
        },
        {
          name: 'Editor',
          isActive: false,
          path: '/editor',
        },
      ],

      navClick(e: NavItem) {
        router.push(e.path);
      },
    });

    const changeNavActive = (currentPath: string) => {
      reactiveData.navList.forEach((v: NavItem) => {
        const temp = v;
        temp.isActive = temp.path === currentPath;
        return temp;
      });
    };

    watch(
      () => router.currentRoute.value,
      (_n) => {
        changeNavActive(_n.path);
      },
    );

    onMounted(() => {
      router.isReady().then(() => {
        changeNavActive(router.currentRoute.value.path);
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

nav {
  justify-self: end;
  ul li {
    display inline-block
    padding 10px 20px
    cursor pointer
    &.active {
        background: $second-background-color;
      }
  }
}
</style>
