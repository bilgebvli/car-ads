const globalMixin = {
  data() {
    return {
      loader: false,
    };
  },
  computed: {
    componentName() {
      return this.$helpers.kebabCase(this.$options.name || '');
    },
  },
  methods: {
    errorHandler(e) {
      let errorMessages = this.$t('general.anErrorOccurred');

      if (e.response && e.response.data && e.response.data.message) {
        if (this.$helpers.isJson(e.response.data.message)) {
          errorMessages = JSON.parse(e.response.data.message)
            .map(
              ({ propertyName, errorMessage }) =>
                `${propertyName} - ${errorMessage}`
            )
            .join('<br/>');
        } else {
          errorMessages = e.response.data.message;
        }
      } else if (e.response && e.response.status === 404) {
        errorMessages = 'Resource Not Found';
      } else if (e.message) {
        errorMessages = e.message;
      }

      return errorMessages;
    },
  },
};
export default globalMixin;
