import api from '@/api';

export default {
  async fetchAdvert({ commit }, { id }) {
    const item = await api
      .get(`/detail`, { params: { id } })
      .then((res) => res.data);
    commit('setAdvert', { advert: item });
  },
};
