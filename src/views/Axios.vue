<template>
  <div class="pageview">
    <button type="button" @click="getUserInfo">ibelem</button>
    <div class="info-list-box" v-if="userInfo">
      <div class="text item">{{ userInfo }}</div>
      <!-- <div class="text item">name: {{ userInfo?.name }}</div>
      <div class="text item">bio: {{ userInfo?.bio }}</div>
      <div class="text item">blog: {{ userInfo?.blog }}</div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import axios from '../utils/axios';

export default defineComponent({
  name: 'AxiosView',
  setup() {
    const userInfo: Ref = ref(null);

    const getUserInfo = () => {
      axios
        // .get('/users/ibelem')
        .post('/graphql', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          query: '{ hello }',
        })
        .then((response) => {
          console.log('response: ', response.data);
          const res = response.data;
          console.log(res.data.hello);
          userInfo.value = res.data.hello;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return {
      userInfo,
      getUserInfo,
    };
  },
});
</script>

<style scoped lang="stylus"></style>
