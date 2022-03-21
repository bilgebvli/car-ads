<template>
  <div>
    <div class="text-center">
      <car-ad-button
        v-bind="buttonOptions"
        @click="prevPage"
        :disabled="pageCount <= 0"
        >{{ $t('general.prev') }}</car-ad-button
      >
      <div
        class="font-weight-bolder rounded d-inline-block mx-2 bg-grey py-2 px-3"
      >
        {{ pageCount }}
      </div>
      <car-ad-button v-bind="buttonOptions" @click="nextPage">{{
        $t('general.next')
      }}</car-ad-button>
    </div>
    <div class="text-center mt-4">
      {{ $t('general.onEveryPage') }}
      <car-ad-button
        v-for="item of pageNumbers"
        :key="item"
        :bg-color="pageNumber == item ? 'candy-red' : 'grey'"
        :text-color="pageNumber == item ? 'white' : 'black'"
        :class="[pageNumber == item ? 'p-2' : 'p-1', 'mr-2 rounded']"
        @click="changePageCount(item)"
        >{{ item }}</car-ad-button
      >
      {{ $t('general.showResults') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarAdPagination',
  props: {
    perPage: {
      type: [String, Number],
      default: 10,
    },
  },
  data() {
    return {
      pageNumbers: [20, 50],
      pageNumber: 20,
      pageCount: 0,
    };
  },
  computed: {
    buttonOptions() {
      return {
        'bg-color': 'candy-red rounded',
        'text-color': 'white',
        class: 'p-2',
      };
    },
  },
  methods: {
    changePageCount(item) {
      this.pageNumber = item;
      this.changePagination();
    },
    prevPage() {
      this.pageCount--;
      this.changePagination();
    },
    nextPage() {
      this.pageCount++;
      this.changePagination();
    },
    changePagination() {
      this.$emit('change-pagination', {
        pageCount: this.pageCount,
        pageNumber: this.pageNumber,
      });
    },
  },
  created() {
    if (this.$route.query.skip) this.pageCount = this.$route.query.skip;
    if (this.$route.query.take) this.pageNumber = this.$route.query.take;
  },
};
</script>
