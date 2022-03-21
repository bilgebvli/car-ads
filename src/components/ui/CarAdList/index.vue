<template>
  <ul class="list-style-none p-0">
    <li v-for="(item, index) of listItems" :key="index">
      <car-ad-divider></car-ad-divider>
      <span class="font-weight-bolder w-50 d-inline-block"
        >{{ item.name }}:</span
      >
      <span>{{ item.value }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CarAdList',
  props: {
    listItems: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
