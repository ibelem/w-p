<template>
  <div class="monacoeditor">
    <EditorTabs :items="items" v-model="currentTab" />
    <CodeEditor :activeTab="currentTab" />
    <!-- <CodeEditor :activeTab="currentTab" @change="onChange" /> -->
    <!-- <iframe ref="iframe" class="" sandbox="allow-scripts" frameBorder="0"></iframe> -->
  </div>
</template>

<script setup lang="ts">
// import { onMounted, ref, watch } from 'vue';
// import Split from 'split.js';
// import { generateHTML, StorageName, useDarkGlobal } from '../utils';

import { ref } from 'vue';
import { useStorage } from '@vueuse/core';
import { StorageName } from '../utils';
import CodeEditor from '@/components/CodeEditor.vue';
import EditorTabs from '@/components/EditorTabs.vue';

// const iframe = ref<HTMLIFrameElement>();

const items = ref([
  { text: 'TypeScript', value: 'typescript' },
  { text: 'HTML', value: 'html' },
  { text: 'JSON', value: 'json' },
]);

const currentTab = useStorage(StorageName.ACTIVE_TAB, items.value[0].value);

// watch(isDark, (value) => {
//   iframe.value?.contentWindow?.postMessage(
//     `theme-${value ? 'dark' : 'light'}`,
//     '*',
//   );
// });

// const onChange = (payload: Record<string, any>) => {
//   iframe.value!.srcdoc = generateHTML(payload, isDark.value);
// };

// onMounted(() => {
//   Split(['#split-0', 'iframe']);
// });
</script>

<style scoped lang="stylus"></style>
