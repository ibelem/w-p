<template>
  <footer>
    <div class="footer">
      <!-- <div>&copy;2022 Webnizer</div> -->
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
        {
          name: '©2022 Webnizer',
          isActive: false,
          path: '/',
        },
        {
          name: 'Docs',
          isActive: false,
          path: '/docs',
        },
        {
          name: 'About',
          isActive: false,
          path: '/about',
        },
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
  color: #333;
  padding: 3rem 1rem 3rem 1rem;
  margin: 3rem 0 0 0;
  background: #f1f1f1;

  .footer {
    max-width: 1280px;
    margin: 0px auto;
    text-align: left;
  }

  @media only screen and (max-width: 640px) {
    .footer {
      max-width: 640px;
    }
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    .footer {
      max-width: 1024px;
    }
  }

  .footer div {
    display: inline-block;
  }

  ul {
    margin-left: 1rem;
  }

  ul, ul li {
    display: inline-block;
  }

  ul li {
    margin: 0 2rem 0 0;
  }

  ul li:hover {
    cursor: pointer;
  }
}

@media only screen and (max-width: 640px) {
  footer {
    padding: 3rem 1rem 3rem 0rem;
  }
}

@media screen and (min-width: 641px) and (max-width: 1024px) {
  footer {
    padding: 3rem 1rem 3rem 0rem;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1280px) {
  footer {
    padding: 3rem 1rem 3rem 0rem;
  }
}
</style>
