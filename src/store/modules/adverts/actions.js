import api from '@/api';

export default {
  async fetchAdverts({ commit }, { query }) {
    const item = await api.get(`listing${query}`).then((res) => res.data);
    commit('setAdverts', { adverts: item });
  },
};
