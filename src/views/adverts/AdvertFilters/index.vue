<template>
  <div>
    <car-ad-select
      v-model="sortValue"
      :items="sortItems"
      class="p-1"
      @change="change"
    ></car-ad-select>
  </div>
</template>

<script>
export default {
  name: 'AdvertFilters',
  data() {
    return {
      sortItems: [
        {
          name: this.$t('adverts.sortItems.price'),
          value: 'price',
        },
        {
          name: this.$t('adverts.sortItems.date'),
          value: 'date',
        },
        {
          name: this.$t('adverts.sortItems.year'),
          value: 'year',
        },
      ],
      sortValue: 'year',
    };
  },
  methods: {
    change(sortValue) {
      this.$emit('change-sorting', { sortValue });
    },
  },
};
</script>
