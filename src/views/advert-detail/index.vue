<template>
  <car-ad-page-loader class="container-lg py-4" :value="loader" type="detail">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <car-ad-card class="mb-3 p-4 shadow-sm border-0">
            <h4>{{ advertItem.title }}</h4>
            <car-ad-divider></car-ad-divider>
            <car-ad-slider :photos="advertItem.photos"></car-ad-slider>
            <car-ad-card class="shadow-sm border-0 my-3 p-4">
              <template slot="header">
                <h3 class="text-candy-red font-weight-bolder">
                  {{ $t('adverts.detail.description') }}
                  <car-ad-divider></car-ad-divider>
                </h3>
              </template>
              <div v-html="advertItem.text"></div
            ></car-ad-card>
          </car-ad-card>
        </div>
        <div class="col-md-4">
          <car-ad-card class="p-4 border-0 shadow">
            <h2 class="text-candy-red font-weight-bolder">
              {{ $n(advertItem.price, 'currency') }}
            </h2>
            <div class="d-flex align-items-center my-4">
              <i class="bi bi-geo-alt mr-2" style="font-size: 20px"></i>
              <span>{{ location.townName }} / {{ location.cityName }}</span>
            </div>
            <car-ad-list :list-items="properties"></car-ad-list>
          </car-ad-card>
          <car-ad-card class="shadow-sm border-0 p-4 mt-3">
            <template slot="header">
              <h3 class="text-candy-red font-weight-bolder">
                {{ $t('adverts.detail.sellerContactInformation') }}
              </h3>
            </template>
            <car-ad-list :list-items="userInfos"></car-ad-list>
          </car-ad-card>
        </div>
      </div>
    </div>
  </car-ad-page-loader>
</template>

<script>
export default {
  name: 'AdvertDetail',
  computed: {
    location() {
      const { location = {} } = this.advertItem;
      return location;
    },
    properties() {
      const { properties = [] } = this.advertItem;
      return properties.map((item) => ({
        ...item,
        name: this.$t(`adverts.detail.properties.${item.name}`),
      }));
    },
    userInfos() {
      const userInfos = [];
      const objectUserInfo = this.advertItem.userInfo;
      for (const property in objectUserInfo) {
        if (property === 'nameSurname' || property === 'phone')
          userInfos.push({
            name: this.$t(`adverts.detail.userInfo.${property}`),
            value: objectUserInfo[property],
          });
      }
      return userInfos;
    },
    advertItem() {
      return this.$store.getters['advert-detail/getAdvert'];
    },
  },
  methods: {
    async init() {
      try {
        this.loader = true;
        await this.$store.dispatch('advert-detail/fetchAdvert', {
          id: this.$route.params.id,
        });
      } finally {
        this.loader = false;
      }
    },
  },
  async created() {
    await this.init();
  },
};
</script>
