<template>
  <hr v-bind="dividerOptions" />
</template>

<script>
export default {
  name: 'CarAdDivider',
  props: {
    color: {
      type: String,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dividerOptions() {
      return {
        class: {
          [this.componentName]: true,
          [`${this.componentName}--${this.color}`]: true,
          [`${this.componentName}--vertical`]: this.vertical,
        },
      };
    },
  },
};
</script>
