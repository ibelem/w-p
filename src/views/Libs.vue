<template>
  <div id="lib" class="">
    <section class="rh">
      <h2>Find public Webnized Web Assembly (Wasm)
        and JavaScript libraries for your Web applications.</h2>
    </section>
    <div class="fsw">
      <section class="fs">
        <h3>Filters</h3>
        <div class="filters">
          <h5 class="ft">Category</h5>
          <div class="fi">
            <div class="checkbox">
              <input id="checkbox-1" type="checkbox" checked="checked" />
              <label for="checkbox-1">Game<span class="box"></span>
              </label>
            </div><span class="badge sp">10</span>
          </div>
          <div class="fi">
            <div class="checkbox">
              <input id="checkbox-2" type="checkbox" checked="checked" />
              <label for="checkbox-2">Productivity<span class="box"></span></label>
            </div><span class="badge sp">5</span>
          </div>
        </div>
        <div class="filters">
          <h5 class="ft">File Size</h5>
          <div class="fi">
            <div class="checkbox">
              <input id="checkbox-5" type="checkbox" checked="checked" />
              <label for="checkbox-5">&lt; 1MB<span class="box"></span></label>
            </div><span class="badge sp">9</span>
          </div>
          <div class="fi">
            <div class="checkbox">
              <input id="checkbox-6" type="checkbox" checked="checked" />
              <label for="checkbox-6">&gt;= 1MB<span class="box"></span></label>
            </div><span class="badge sp">12</span>
          </div>
        </div>
      </section>
    </div>

    <section class="rs rg">
      <div class="profile" v-for="(lib, index) in LibsList" :key="index">
        <div class="pi">
          <div class="pti">
            <h3>{{ lib.title }}</h3>
            <div v-if="lib.img.length > 0"><img v-bind:src="lib.img" /></div>
          </div>
          <p class="desc">{{ lib.desc }}</p>
        </div>
        <div class="psg">
          <div class="ps">
            <p class="pst">Size</p>
            <p class="psi">{{ lib.size }} <span class="sizeunit">{{ lib.sizeunit }}</span></p>
          </div>
          <div class="ps">
            <p class="pst">Cate</p>
            <p class="psi">{{ lib.category }}</p>
          </div>
          <div class="ps">
            <p class="pst">Update</p>
            <p class="psi">{{ lib.lastupdate }}</p>
          </div>
        </div>
        <div class="pc">
          <a class="button" v-if="lib.iswebnizer" v-bind:href="lib.url">Download Now</a>
          <a class="button external" v-if="!lib.iswebnizer" v-bind:href="lib.url">View More</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRefs, onMounted, watch,
} from 'vue';
import { LibsItem } from '../common/types';

export default defineComponent({
  name: 'LibsView',

  setup() {
    const reactiveData = reactive({
      LibsList: [
        {
          iswebnizer: true,
          title: 'oneDNN',
          desc: 'An open-source cross-platform performance library of basic building blocks for deep learning applications.',
          size: 20,
          sizeunit: 'MB',
          img: 'https://camo.githubusercontent.com/71fa9fb2bca172083b4cd121b8d0b330fe74e34c36a29dbb71802b2070e9873a/68747470733a2f2f737065632e6f6e656170692e696f2f6f6e656170692d6c6f676f2d77686974652d7363616c65642e6a7067',
          url: 'https://www.intel.com/content/www/us/en/developer/tools/oneapi/onednn.html',
          category: 'Algorithm',
          lastupdate: '22-05-09',
        },
        {
          iswebnizer: false,
          title: 'FFMPEG',
          desc: 'A pure WebAssembly / JavaScript port of FFmpeg. It enables video & audio record, convert and stream right inside browsers.',
          size: 2,
          sizeunit: 'MB',
          img: 'https://ffmpegwasm.netlify.app/static/media/logo.cb80e6cfbae8f515fd4b95933b7f5a83.svg',
          url: 'https://ffmpegwasm.netlify.app/',
          category: 'Media',
          lastupdate: '22-05-09',
        },
        {
          iswebnizer: false,
          title: 'PyScript',
          desc: 'Run Python code in HTML, call Javascript libraries in PyScript, and do all your web development in Python.',
          size: 12,
          sizeunit: 'MB',
          img: 'https://pyscript.net/assets/images/pyscript-sticker-black.svg',
          url: 'http://pyscript.net/',
          category: 'Productivity',
          lastupdate: '22-05-09',
        },
        {
          iswebnizer: false,
          title: 'OpenCV.js',
          desc: 'An open-source BSD-licensed library that includes several hundreds of computer vision algorithms.',
          size: 2,
          sizeunit: 'MB',
          img: 'https://docs.opencv.org/4.5.5/opencv-logo-small.png',
          url: 'https://docs.opencv.org/4.5.5/d1/dfb/intro.html',
          category: 'Algorithm',
          lastupdate: '22-05-09',
        },
      ],

      // navClick(e: LibsItem) {
      //   router.push(e.path);
      // },
    });

    // const changeNavActive = (currentPath: string) => {
    //   reactiveData.navList.forEach((v: LibsItem) => {
    //     const temp = v;
    //     temp.isActive = temp.path === currentPath;
    //     return temp;
    //   });
    // };

    // watch(
    //   () => router.currentRoute.value,
    //   (_n) => {
    //     changeNavActive(_n.path);
    //   },
    // );

    onMounted(() => {
      // router.isReady().then(() => {
      //   changeNavActive(router.currentRoute.value.path);
      // });
    });

    return {
      ...toRefs(reactiveData),
    };
  },
});
</script>

<style scoped lang="stylus">
  .lib {
    margin: 1rem auto
  }

#lib {
  --neutralShade0: #f8f8f8;
  --neutralShade1: #f2f2f2;
  --neutralShade2: #e8e9e9;
  --neutralShade3: #d1d3d4;
  --neutralShade4: #babdbf;
  --neutralShade5: #808488;
  --neutralShade6: #666a6d;
  --neutralShade7: #4d5052;
  --neutralShade8: #212122;
  --grayColor: #999;
  --lightGrayColor: #ddd;
  --borderRadius: 6px;
  --boxShadow: 0 2px 5px rgba(#333, 0.2);
  --backgroundColor: #fff;
  --foregroundColor: #111;
  --primaryColor: rgba(12, 211, 255, 1);
  --primaryShade1: #e1f5fe;
  --primaryShade2: #b3e5fc;
  --primaryShade3: #4fc3f7;
  --primaryShade4: #03a9f4;
  --primaryShade5: #0277bd;
  --secondaryColor: #673ab7;
}

/*overall layout*/
#lib {
  margin: 0 auto;
  padding: 0 3rem;
  max-width: 1280px;
  color: var(--foregroundColor);
  text-align: left;
}

#lib section {
  position: relative;
}

.rh h2 {
  font-size: 16px;
  margin-bottom: 3rem;
  color: #333;
}

.pi h3 {
  font-size: 26px;
  color: #333;
  font-weight: 600;
  margin: 5px 0;
}

.pti {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 0px
  justify-items: center;
}

.pti h3 {
  justify-self: flex-start;
  align-self: center;
}

.pti div {
  justify-self: flex-end;
  align-self: center;
}

.pti div img {
  max-height: 26px;
  height: 26px;
}

/*checkboxes*/
input:disabled ~ * {
  opacity: 0.3;
  user-select: none;
  pointer-events: none;
}

.checkbox {
  position: relative;
  user-select: none;
  margin-bottom: 10px;
}
.checkbox input {
  display: none;
}
.checkbox label {
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  font-weight: 500;
  padding-left: 35px;
}

.checkbox input:checked + label span.box {
  background: var(--primaryColor);
  border-color: var(--primaryColor);
}

.checkbox span.box {
  display: inline-block;
  width: 20px;
  border-radius: 3px;
  border: 1px solid var(--grayColor);
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-right: 3px;
  transition: 0.3s ease;
  position: absolute;
  left: 0;
}
.checkbox span.box:before, .checkbox span.box:after {
  content: "";
  position: absolute;
  width: 4px;
  height: 16px;
  border-radius: 40px;
  background: var(--backgroundColor);
  transition: all 0.3s ease;
}
.checkbox span.box:before {
  transform: rotate(45deg) translateY(-5px) translateX(10px) scale(0);
}
.checkbox span.box:after {
  height: 8px;
  transform: rotate(-45deg) translateY(10px) translateX(-4px) scale(0);
}

.checkbox input:checked + label span.box:before {
  transform: rotate(45deg) translateY(-5px) translateX(10px) scale(1);
}
.checkbox input:checked + label span.box:after {
  height: 8px;
  transform: rotate(-45deg) translateY(10px) translateX(-4px) scale(1);
}
.checkbox input:disabled:checked + span.box {
  background: var(--grayColor);
  border: var(--grayColor);
}
.checkbox input:disabled:checked ~ label:before, .checkbox input:disabled:checked ~ label:after {
  background: black;
}

/*buttons & links*/
.buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.buttons > * {
  flex: 1 1 calc(50% - 20px);
  margin-top: 20px;
}
.buttons > *:nth-child(odd) {
  margin-right: 20px;
}

.sizeunit {
  font-size: 0.8rem;
}

.desc {
  height: 82px;
  overflow: hidden;
}

a.button,
input.button,
button {
  outline: none;
  text-align: center;
  font-size: 1em;
  background: #fff;
  padding: 10px 30px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 3px;
  background: var(--primaryColor);
  color: var(--backgroundColor);
  position: relative;
  top: 0;
  transition: 0.2s ease;
  text-decoration: none;
}
a.button:hover, a.button.hover,
input.button:hover,
input.button.hover,
button:hover,
button.hover {
  color: #fff;
  letter-spacing: 2px;
  background: linear-gradient(135deg, #0cd3ff 25%, #30F197 25%, #e406f9 25%);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 1s;
}
a.button:active, a.button.active,
input.button:active,
input.button.active,
button:active,
button.active {
  background: linear-gradient(135deg, #0cd3ff 25%, #30F197 25%, #e406f9 25%);
  outline: none;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  top: 0;
}

a.external {
  background: #e406f9;
}

a.external:hover {
  background: linear-gradient(135deg, #0cd3ff 25%, #30F197 25%, #e406f9 25%);
}

a.button.disabled,
input.button.disabled,
button.disabled {
  opacity: 0.4;
  user-select: none;
  pointer-events: none;
}
a.button.medium,
input.button.medium,
button.medium {
  padding: 15px 18px;
  width: auto;
}
a.button.small,
input.button.small,
button.small {
  padding: 10px 12px;
  width: auto;
  font-size: 14px;
  font-weight: 500;
}

/*badges*/
.badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 50px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
}

.sp {
  background: var(--primaryShade1);
  color: var(--primaryShade5);
}
.sp:before, .sp:after {
  background: var(--primaryShade5);
}

.rh {
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr max-content;
}

.rs {
  display: grid;
  grid-gap: 1rem;
}

.rg {
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}

.profile {
  position: relative;
  background: var(--backgroundColor);
  color: var(--foregroundColor);
  border-radius: 5px;
  overflow: hidden;
  transition: 0.2s ease;
  display: grid;
  box-shadow: -1px 5px 10px -5px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.profile:hover {
  box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
}

.pimg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom: 7px solid var(--secondaryColor);
}
.pi {
  padding: 20px 25px 0;
}

.psg {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 0px
  justify-items: center;
}

.pst {
  color: var(--grayColor);
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: -1rem;
}

.ps {
  text-align: center;
}

.psi {
  height: 1rem;
  font-size: 1.1rem;
  margin: 1rem 0 2rem 0;
}

.pc {
  padding: 15px 25px 35px 25px;
  justify-self: center;
}

.fs {
  margin: 0;
}

.fs h3 {
  color: var(--grayColor);
}

.ft {
  font-size: 18px;
  margin: 25px 0;
}
.fi {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 10px;
}
.fi .checkbox {
  position: relative;
  margin: 0;
}

.filters:not(:first-of-type) {
  border-top: 0.5px solid var(--lightGrayColor);
  margin-top: 25px;
}

@media (min-width: 500px) and (max-width: 992px) {
  .fs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .fs h3 {
    grid-column: span 2;
  }

  .filters:nth-child(2) {
    margin-right: 25px;
  }

  .filters:nth-child(3) {
    border-top: none;
    border-left: 0.5px solid var(--lightGrayColor);
    margin-top: 0;
    padding-left: 25px;
  }
}
@media (min-width: 500px) {
  .rs.rg .profile {
    margin: auto;
    overflow: hidden;
  }
  .rh h2 {
    margin-bottom: 1rem;
  }
  .fs {
    margin: 0 0 2rem 0;
  }
}

@media (min-width: 992px) {
  #lib {
    display: grid;
    grid: min-content auto 1fr;
  }

  .fsw {
    position: relative;
  }

  .fs {
    position: sticky;
  }

  .rs {
    margin-left: 2em;
  }
}

@media only screen and (max-width: 640px) {
  #lib {
    padding: 0 1rem;
  }
  .rh h2 {
    margin-bottom: 1rem;
  }
  .fs {
    margin: 0 0 2rem 0;
  }
}
</style>
