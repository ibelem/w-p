<template>
  <footer>
    <div>
      <div>&copy;2022 Webnizer</div>
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
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<script lang="ts">
import {
  defineComponent, reactive, toRefs, onMounted, watch,
} from 'vue';
import { useRouter } from 'vue-router';
import { NavItem } from '../common/types';

export default defineComponent({
  name: 'FooterComp',

  setup() {
    const router = useRouter();

    const reactiveData = reactive({
      navList: [
        // {
        //   name: 'Home',
        //   isActive: false,
        //   path: '/',
        // },
        // {
        //   name: 'Vuex',
        //   isActive: false,
        //   path: '/vuex',
        // },
        // {
        //   name: 'Axios',
        //   isActive: false,
        //   path: '/axios',
        // },
        // {
        //   name: 'Test',
        //   isActive: false,
        //   path: '/test',
        // },
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
footer {
  max-width: 1280px;
  color: #333;
  padding: 0 1rem 1rem 1rem;
  margin: 1rem auto;
  text-align: center;

  div, ul, ul li {
    display inline-block
  }
}
</style>
