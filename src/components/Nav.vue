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
          name: 'Get Started',
          isActive: false,
          path: '/',
        },
        {
          name: 'Libs',
          isActive: false,
          path: '/libs',
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
        background: ;
      }
  }

  li:before {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  background-color: #61a3ff;
  position: absolute;
  left: 0;
  bottom: 3px; /* this is to match where the border is */
  transform-origin: left;
  transform: scale(0);
  transition: 0.25s linear;
  /*   will-change: transform; */
  }

  li:hover:before {
    transform: scale(1);
  }

}
</style>
