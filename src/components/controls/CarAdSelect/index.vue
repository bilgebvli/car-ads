<template>
  <select class="form-control w-25" v-model="selectValue" @change="change">
    <option v-for="(item, index) of items" :key="index" :value="item.value">
      {{ item.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'CarAdSelect',
  props: {
    value: {
      type: [String, Number],
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      selectValue: null,
    };
  },
  methods: {
    change() {
      this.$emit('input', this.selectValue);
      this.$emit('change', this.selectValue);
    },
  },
  created() {
    this.selectValue = this.value;
  },
};
</script>
