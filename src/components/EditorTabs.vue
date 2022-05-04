<template>
  <div>
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
.tab-item {
    display: inline-block;
    padding: 1rem 1rem;
    color: #333;
}

.tab-item-active {
    display: inline-block;
    border: rgb(99 102 241) 0px solid;
    border-top-width: 2px;
    padding: 1rem 1rem;
    color: rgb(99 102 241);
}
</style>
