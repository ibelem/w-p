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
  margin-bottom: 0px;
}

.tab-item {
    display: inline-block;
    padding: 4px 2rem;
    color: #333;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 0px;
}

.tab-item-active  {
    display: inline-block;
    padding: 4px 2rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: #3fa9f5;
    border-bottom: 0px;
    color: #fff;
    box-shadow: rgba(63, 169, 245, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.2) 0px 18px 36px -18px inset;
}

#editortabs a {
  text-decoration: none;
}
</style>
