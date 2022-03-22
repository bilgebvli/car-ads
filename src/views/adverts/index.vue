<template>
  <div class="container">
    <car-ad-page-loader class="container-lg py-4" :value="loader" type="list">
      <advert-filters @change-sorting="changeSorting"></advert-filters>
      <div class="row">
        <advert-list
          v-for="(advertItem, index) in adverts"
          :key="index"
          :advert-item="advertItem"
        ></advert-list>
      </div>
      <car-ad-card class="p-4"
        ><car-ad-pagination
          @change-pagination="changePagination"
        ></car-ad-pagination
      ></car-ad-card>
    </car-ad-page-loader>
  </div>
</template>

<script>
import AdvertList from './AdvertList';
import AdvertFilters from './AdvertFilters';

export default {
  name: 'AdvertListing',
  components: {
    AdvertList,
    AdvertFilters,
  },
  data() {
    return {
      take: 20,
      skip: 0,
    };
  },
  computed: {
    hasRouteQuery() {
      return Object.keys(this.$route.query).length;
    },
    adverts() {
      return this.$store.getters['adverts/getAdverts'];
    },
  },
  methods: {
    changeSorting({ sortValue }) {
      this.changeQuery({
        sort: sortValue,
        sortDirection: 0,
        take: this.take,
        skip: this.skip,
      });
    },
    getParams(value) {
      const queryList = [];
      for (const item in value) {
        queryList.push(`${item}=${value[item]}`);
      }
      return `?${queryList.join('&')}`;
    },
    async fechAdverts() {
      await this.$store.dispatch('adverts/fetchAdverts', {
        query: this.hasRouteQuery
          ? this.getParams(this.$route.query)
          : this.getParams({ take: this.take, skip: this.skip }),
      });
    },
    async init() {
      try {
        this.loader = true;
        await this.fechAdverts();
      } finally {
        this.loader = false;
      }
    },
    changePagination({ pageCount, pageNumber }) {
      this.take = pageNumber;
      this.skip = pageCount;
      this.changeQuery({ skip: this.skip, take: this.take });
    },
    setRouteQuery(value) {
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, ...value },
      });
    },
    async changeQuery(value) {
      try {
        this.showAppLoading();
        await this.setRouteQuery(value);
        await this.fechAdverts();
      } finally {
        this.hideAppLoading();
      }
    },
  },
  async created() {
    await this.init();
  },
};
</script>
