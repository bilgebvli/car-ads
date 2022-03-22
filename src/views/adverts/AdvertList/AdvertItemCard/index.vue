<template>
  <div>
    <car-ad-image
      :src="$mediaManager.getThumb({ media: advertItem.photo })"
      :alt="advertItem.title"
      class="card-img mb-4"
    ></car-ad-image>
    <h5 class="card-title text-clipping">{{ advertItem.title }}</h5>
    <p v-text="properties"></p>
    <p class="d-inline mr-2 text-danger font-weight-bolder">
      {{ $n(advertItem.price, 'currency') }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AdvertItemCard',
  props: {
    advertItem: {
      type: Object,
    },
  },
  computed: {
    properties() {
      return this.advertItem.properties.map((item) => item.value).join(' | ');
    },
  },
};
</script>
