<template>
  <div
    class="col-12 col-lg-4"
    @mouseover="shadowType = 'shadow'"
    @mouseleave="shadowType = 'shadow-sm'"
    @click="goToDetail"
  >
    <car-ad-card :class="`mb-3 p-4 ${shadowType} border-0 cursor-pointer`">
      <advert-item-card :advert-item="advertItem"></advert-item-card>
    </car-ad-card>
  </div>
</template>

<script>
import AdvertItemCard from './AdvertItemCard';

export default {
  name: 'AdvertList',
  components: {
    AdvertItemCard,
  },
  props: {
    advertItem: {
      type: Object,
    },
  },
  data() {
    return {
      shadowType: 'shadow-sm',
    };
  },
  methods: {
    goToDetail() {
      this.$router.push({
        name: 'advert-detail',
        params: {
          id: this.advertItem.id,
        },
      });
    },
  },
};
</script>
