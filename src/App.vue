<template>
  <div id="app">
    <car-ad-preloader v-if="isAppLoading"></car-ad-preloader>
    <router-view />
  </div>
</template>

<script>
import CarAdPreloader from '@/components/ui/CarAdPreLoader';

export default {
  name: 'App',
  components: {
    CarAdPreloader,
  },
  computed: {
    isAppLoading() {
      return this.$store.getters.getIsAppLoading;
    },
  },
};
</script>
