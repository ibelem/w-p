<template>
  <div class="test-container page-container">
    <div>Editor Page</div>
    <CodeEditor />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CodeEditor from '../components/CodeEditor.vue';

export default defineComponent({
  name: 'EditorPage',
  components: {
    CodeEditor,
  },
});
</script>

<style scoped lang="stylus">
</style>
