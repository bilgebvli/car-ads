<template>
  <div :class="componentName">
    <hooper group="group1" class="hooper">
      <slide v-for="(item, index) of photos" :key="index">
        <div @click="clickSlider(item)">
          <car-ad-image
            :src="$mediaManager.getThumb({ media: item })"
            width="100%"
          ></car-ad-image>
        </div>
      </slide>
    </hooper>
    <hooper
      group="group1"
      :itemsToShow="2"
      class="hooper-pagination-thumb mt-3"
    >
      <slide v-for="(item, index) of photos" :key="index">
        <div class="mx-1">
          <car-ad-image
            :src="$mediaManager.getThumb({ media: item })"
            width="100%"
          ></car-ad-image>
        </div>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
    <car-ad-modal v-if="toogleModal" @close="closeModal">
      <car-ad-image
        :src="$mediaManager.getThumb({ media })"
        width="100%"
      ></car-ad-image>
    </car-ad-modal>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'CarAdSlider',
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
  },
  props: {
    photos: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      media: null,
      toogleModal: false,
    };
  },
  methods: {
    closeModal() {
      this.toogleModal = false;
    },
    clickSlider(item) {
      this.toogleModal = true;
      this.media = item;
    },
  },
};
</script>
