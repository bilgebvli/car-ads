<template>
  <div>
    <div v-if="value" :class="{ 'container-lg': !noContainer }">
      <template>
        <content-loader height="650" width="900" v-if="type === 'list'">
          <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="910" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="910" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="910" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="1130" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="1130" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="1130" y="595" rx="0" ry="0" width="120" height="20" />
        </content-loader>
        <content-loader height="650" width="900" v-if="type === 'detail'">
          <rect x="20" y="15" rx="20" ry="20" width="300" height="320" />
          <rect x="92" y="347" rx="5" ry="5" width="45" height="45" />
          <rect x="148" y="347" rx="5" ry="5" width="45" height="45" />
          <rect x="205" y="347" rx="5" ry="5" width="45" height="45" />
          <rect x="361" y="17" rx="10" ry="10" width="420" height="33" />
          <rect x="361" y="71" rx="10" ry="10" width="315" height="33" />
          <rect x="361" y="125" rx="10" ry="10" width="233" height="20" />
          <rect x="361" y="216" rx="5" ry="5" width="195" height="13" />
          <rect x="361" y="251" rx="5" ry="5" width="195" height="13" />
          <rect x="367" y="311" rx="8" ry="8" width="130" height="38" />
          <rect x="515" y="311" rx="8" ry="8" width="130" height="38" />
        </content-loader>
      </template>
    </div>
    <transition name="fade">
      <div v-if="showContent">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';

export default {
  name: 'CarAdPageLoader',
  components: {
    ContentLoader,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    noContainer: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
    },
  },
  computed: {
    showContent() {
      return !this.value;
    },
  },
};
</script>
