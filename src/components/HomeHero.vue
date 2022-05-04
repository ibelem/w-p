<template>
  <div id="hero">
    <div class="description">
      <h3>Webnizer</h3>
      <h2>
        Migrating your
        <div class="mask">
          <span data-show>C</span>
          <span>C++</span>
          <span>Rust</span>
        </div>
        applications to the Web
      </h2>
      <a href="#">Get Started</a>
    </div>
    <div>
      banner here
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'HeroView',
  components: {},
  setup() {
    onMounted(() => {
      // setInterval(() => {
      //   const show = document.querySelector('#hero span[data-show]');
      //   const up = document.querySelector('#hero span[data-up]');
      //   const next = show.nextElementSibling || document.querySelector('#hero span:first-child');
      //   if (next) {
      //     if (up) {
      //       up.removeAttribute('data-up');
      //     }
      //     show.removeAttribute('data-show');
      //     show.setAttribute('data-up', '');
      //     next.setAttribute('data-show', '');
      //   }
      // }, 2000);
    });
  },
});
</script>
<style scoped lang="stylus">
#hero {
  margin 1rem
  display grid;
  grid-template-columns 2fr 3fr
  grid-column-gap 0px
  grid-row-gap 0px
  justify-items center
  align-items center

  .description {
    padding 1rem 2rem
  }

  h4 {
    margin-bottom 0px
  }

  h2 {
    font-size 46px
    line-height 1.06
    margin 0 0 10px 0
  }

  .mask {
    height 44px;
    position relative;
    overflow hidden;
    width 108px;
    display inline-block
  }

  .mask span {
    display inline-block;
    box-sizing border-box;
    position absolute;
    top 102px;
    background-size 100% 100%;
    -webkit-background-clip text;
    background-clip text;
    -webkit-text-fill-color transparent;
    background-repeat no-repeat;
  }

  .mask span[data-show] {
    transform translateY(-100%);
    transition .5s transform ease-in-out;
  }

  .mask span[data-up] {
    transform translateY(-200%);
    transition .5s transform ease-in-out;
  }

  .mask span:nth-child(1) {
    background-image linear-gradient(45deg, #0ecffe 50%, #07a6f1);
  }

  .mask span:nth-child(2) {
    background-image linear-gradient(45deg, #18e198 50%, #0ec15d);
  }

  .mask span:nth-child(3) {
    background-image linear-gradient(45deg, #8a7cfb 50%, #633e9c);
  }

  span {
    display inline-block
    background linear-gradient(135deg, #3984f4 10%, #0cd3ff 20%, #0e65e8 50%, #e406f9 100%)
    -webkit-background-clip text
    -webkit-text-fill-color transparent
  }

  a {
    display: inline-block;
    font-size: 1em;
    background: #fff;
    padding: 10px 30px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;
    margin-top: 10px;
    color: #111;
    letter-spacing: 2px;
    transition: 0.2s;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  a:hover
  {
    color: #fff;
    letter-spacing: 6px;
    background linear-gradient(135deg, #0cd3ff 25%, #3984f4 25%, #0e65e8 25%, #e406f9 25%)
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
}
</style>
