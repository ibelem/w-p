<template>
  <div id="editortabs">
    <a v-for="item in items" :key="item.value" :class="props.modelValue === item.value ? 'tab-item-active' : 'tab-item'"
      href="#" @click.prevent="emit('update:modelValue', item.value)">
      {{ item.text }}
    </a>
  </div>
</template>

<script setup lang="ts">
interface Item {
  text: string;
  value: string;
}

const props = defineProps<{
  modelValue: string;
  items: Item[];
}>();
const emit = defineEmits<(e: 'update:modelValue', tab: string) => void>();
</script>

<style scoped lang="stylus">
#editortabs {
  margin-bottom: -1px;
}

.tab-item {
    display: inline-block;
    padding: 4px 2rem;
    color: #333;
}

.tab-item-active  {
    display: inline-block;
    padding: 4px 2rem;
    border-bottom: 1px solid rgba(12, 211, 255, 1.0);
    color: #000;
}

#editortabs a {
  text-decoration: none;
}
</style>
