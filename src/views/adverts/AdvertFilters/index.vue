<template>
  <car-ad-card class="p-4 border-0 shadow-sm mb-3 text-right">
    <car-ad-select
      v-model="sortValue"
      :items="sortItems"
      class="p-1"
      @change="change"
    ></car-ad-select>
  </car-ad-card>
</template>

<script>
export default {
  name: 'AdvertFilters',
  data() {
    return {
      sortItems: [
        {
          name: this.$t('adverts.sortItems.price'),
          value: 0,
        },
        {
          name: this.$t('adverts.sortItems.date'),
          value: 1,
        },
        {
          name: this.$t('adverts.sortItems.year'),
          value: 2,
        },
      ],
      sortValue: 1,
    };
  },
  methods: {
    change(sortValue) {
      this.$emit('change-sorting', { sortValue });
    },
  },
  created() {
    if (this.$route.query.sort) this.sortValue = this.$route.query.sort;
  },
};
</script>
