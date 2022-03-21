<template>
  <div id="modal" :class="componentName" @click="clickHandler">
    <div :class="contentOptions">
      <div class="text-right">
        <span :class="`${componentName}__close`" @click="close">&times;</span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarAdModal',
  computed: {
    contentOptions() {
      return {
        [`${this.componentName}__model-content`]: true,
        'rounded-lg': true,
      };
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
    clickHandler(event) {
      if (event.target == document.getElementById('modal')) this.close();
    },
  },
};
</script>
